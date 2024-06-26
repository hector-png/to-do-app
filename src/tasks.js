export default class Task {
    isCompleted = false;

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get notes() {
        return this.description;
    }

    set notes(value) {
        this.description = value;
    }

    get dueBy() {
        return this.dueDate;
    }

    set dueBy(value) {
        this.dueDate = value;
    }

    get priorityStatus() {
        return this.priority;
    }

    set priorityStatus(value) {
        this.priority = value;
    }

    get completedStatus() {
        return this.isCompleted;
    }

    set completedStatus(value) {
        let valueType = typeof value;
    
        valueType === 'boolean'? this.isCompleted = value: console.log('error');
    }
};