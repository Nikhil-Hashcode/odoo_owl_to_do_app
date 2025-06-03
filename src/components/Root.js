import { Component,onMounted,useRef,useState,useEnv,reactive } from "@odoo/owl";
import { Task } from "./Task";
import { useStore } from "./store";


export class Root extends Component {
    setup() {
      const inputRef = useRef("add-input");
      onMounted(() => inputRef.el.focus());
      this.store = useStore();
      this.filter = useState({ value: "all" });
    }
    static template = "TasksList";
    static components = { Task };
    deleteTask(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        this.tasks.splice(index, 1);
    }
    addTask(ev) {
      // 13 is keycode for ENTER
      if (ev.keyCode === 13) {
        this.store.addTask(ev.target.value);
        ev.target.value = "";
      }
    }
    get displayedTasks() {
      const tasks = this.store.tasks;
      switch (this.filter.value) {
        case "active":
          return tasks.filter((t) => !t.isCompleted);
        case "completed":
          return tasks.filter((t) => t.isCompleted);
        case "all":
          return tasks;
      }
    }

    setFilter(filter) {
      this.filter.value = filter;
    }
}
