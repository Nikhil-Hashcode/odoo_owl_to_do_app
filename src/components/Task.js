import { Component, useState,useEnv } from "@odoo/owl";
import { useStore } from "./store";

export class Task extends Component {
    static template = "Task";
    setup() {
      this.store = useStore();
    }
    static props = ["task"];
    deleteTask() {
        this.props.onDelete(this.props.task);
    }
    toggleTask() {
        this.props.task.isCompleted = !this.props.task.isCompleted;
    }
}
