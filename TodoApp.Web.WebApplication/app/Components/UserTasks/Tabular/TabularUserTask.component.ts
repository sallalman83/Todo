import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../../services/UserTask/user.task.service";
import { UserTaskViewModel } from "../../../Model/UserTask";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
    selector: 'tabular-tasks',
    templateUrl: '../app/Components/UserTasks/Tabular/TabularUserTask.component.html',
    providers: [TasksService]
})

export class TabularUserTaskComponent implements OnInit {
    userTasks: UserTaskViewModel[];
    isProcessing: boolean = true;

    constructor(private tasksService: TasksService) {
    }

    ngOnInit(): void {
        this.loadUserTasks();
    }

    loadUserTasks(): void {
        this.tasksService.getAllUserTasks().subscribe(x => {
            this.isProcessing = false;
            this.userTasks = x.Result;
        }, e => { });
    }

    deleteUserTask(userTaskViewModel: UserTaskViewModel, index: number): void {
        if (confirm("Are you sure you want to delete this task?")) {
            this.tasksService.deleteUserTask(userTaskViewModel.Id).subscribe(x => { }, e => { });;
            this.userTasks.splice(index, 1);
        }
    }

    editUserTask(userTaskViewModel: UserTaskViewModel): void {
        alert(userTaskViewModel.Id);
    }
}
