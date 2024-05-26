export default class Project {
    projectTaskList = [];

    constructor(name, label = 'default') {
        this.name = name;
        this.label = label;
    }

    get taskList() {
        return this.projectTaskList;
    }

    addTask(task) {
        this.projectTaskList.push(task);
    }

    removeTask(targetTask) {
        this.projectTaskList = this.projectTaskList.filter((task) => task != targetTask);
    }
};
