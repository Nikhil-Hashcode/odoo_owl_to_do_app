import { mount } from "@odoo/owl";
import { Root } from "./components/Root";
import { Component,onMounted,useRef,useState,useEnv,reactive } from "@odoo/owl";
import { TaskList } from './TaskList.js';
const TEMPLATES = await (await fetch('root.xml')).text();
function createTaskStore() {
    const saveTasks = () => localStorage.setItem("todoapp", JSON.stringify(taskStore.tasks));
    const initialTasks = JSON.parse(localStorage.getItem("todoapp") || "[]");
//reactive  - this will auto-save on change
//The reactive function is the basic reactivity primitive.
//It takes an object or an array as first argument, and optionally, a function as the second argument.
// The function is called whenever any tracked value is updated.
    const taskStore = reactive(new TaskList(initialTasks), saveTasks);
    saveTasks();
    return taskStore;
}
const env = { store: createTaskStore() };
mount(Root, document.body, { templates: TEMPLATES, dev: true,env });


