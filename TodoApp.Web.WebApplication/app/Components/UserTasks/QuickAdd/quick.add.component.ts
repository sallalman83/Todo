import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {IMyDpOptions} from 'mydatepicker';
import { UserTaskViewModel } from "../../../Model/UserTask";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TasksService} from '../../../Services/UserTask/user.task.service';
declare var $: any;


@Component({
    selector: "todo-quick-add",
    templateUrl: '../app/Components/UserTasks/QuickAdd/quick.add.component.html',
    styleUrls: ['../app/Components/UserTasks/QuickAdd/quick.add.component.css']
})

export class UserTaskQuickAddComponent implements OnInit {
    isProcessing: boolean;
    private userTaskDate: Object = { date: { year: 2017, month: 10, day: 9 } };
    userTaskViewModel: UserTaskViewModel = new UserTaskViewModel();
    ngQuickUserTaskForm: FormGroup;
    initialized: boolean = false;
    registrationError: boolean = false;
    errors: any[];

    constructor(private router: Router, fb: FormBuilder, private tasksService: TasksService) {
        this.ngQuickUserTaskForm = fb.group({
            Title: ["", Validators.required],
            StartDateObj: ["", Validators.required],
            StartDateTime: ["", Validators.required],
            AssignedTo: [""]
        });
    }

    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy'
    };

    ngOnInit(): void {
        this.isProcessing = false;
        this.setTime(this);
    }

    setTime(obj: any): void {
        $("#taskTime").timepicker();
        $("#taskTime").on('changeTime', function () {
            obj.userTaskViewModel.StartDateTime = $("#taskTime").val();
        });
    }

    submit(): void {
        this.registrationError = false;
        this.initialized = true;
        if (this.ngQuickUserTaskForm.valid) {
            this.isProcessing = true;
            this.userTaskViewModel.StartDateString = $("#taskDate").find("input").val();
            this.tasksService.addNewQuickUserTask(this.userTaskViewModel).subscribe(x => {
                var _result = x.Result;
                if (_result.Result == 1) {
                    $('#quickAddTask').modal('hide');
                    this.userTaskViewModel = new UserTaskViewModel();
                    this.initialized = false;
                    $("#taskDate").find("input").val("");
                }
                else {
                    this.registrationError = true;
                    this.errors = _result.Validations;
                }
            });
        }
    }
}