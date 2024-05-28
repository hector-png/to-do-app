export const Manager = {
    allProjects: [],
    addProject: function(project) {
        this.allProjects.push(project);
    },
    removeProject: function(targetProject) {
        this.allProjects = this.allProjects.filter((project) => project != targetProject);
    }
};