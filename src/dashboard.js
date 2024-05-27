import { Manager } from "./projectManager.js";
import Project from "./projects.js";
import Task from "./tasks.js";

class Dashboard {
    projectManager = Manager;

    getProjects = () => this.projectManager.allProjects;

    getDefaultProject = () => this.projectManager.allProjects[0];

    addDefaultProject = () => {
        this.projectManager.addProject(new Project('Todo List', 'default'));
    };

    newProject = (name, label) => {
        this.projectManager.addProject(new Project(name, label));
    };

    newTask = (title, description, dueDate, priority) => {
        this.getProjects()[0].addTask(new Task(title, description, dueDate, priority));
    };

    assignProject = (targetTask, targetProject) => {
        let task1 = this.getDefaultProject().taskList.find(task => task.title === targetTask);
        let targetP = this.getProjects().find(project => project.name === targetProject);
        targetP.addTask(task1);
        //rename certain variables aka projectTlist -> taskList
        this.getDefaultProject().taskList = this.getDefaultProject().taskList.filter(task => task.title != targetTask);
    };

            
}; 

const dash = new Dashboard();
dash.addDefaultProject()
dash.newTask('jogg', 'running', 'run', 'asap');
console.log(dash.getProjects()[0])

dash.newProject('BEAMER BOY', "Hobbys");
dash.assignProject('jogg', 'BEAMER BOY');
console.log(dash.getProjects())