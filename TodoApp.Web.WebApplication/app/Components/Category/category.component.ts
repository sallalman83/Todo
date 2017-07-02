import { Component, OnInit } from "@angular/core";
import { CategoryService} from '../../Services/Category/category.service'
import { TaskCategoryViewModel } from "../../Model/TaskCategory";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
declare var $: any;

@Component({
    selector: "categories",
    templateUrl: '../app/Components/Category/category.component.html',
    styleUrls: ['../app/Components/Category/category.component.css']
})

export class CategoryComponent implements OnInit {
    isProcessing: boolean;
    taskCategory: TaskCategoryViewModel = new TaskCategoryViewModel();
    userCategories: TaskCategoryViewModel[];
    ngCategoryForm: FormGroup;
    initialized: boolean = false;

    constructor(private categoryService: CategoryService, fb: FormBuilder) {
        this.ngCategoryForm = fb.group({
            Name: ["", Validators.required],
            Color: [""],
            IsArchived: [""]
        });
    }

    ngOnInit(): void {
        this.isProcessing = true;
        this.taskCategory = new TaskCategoryViewModel();
        this.loadUserCategories();
        this.activateColorPicker(this);
    }

    loadUserCategories(): void {
        this.categoryService.getUserCategories().subscribe(x => {
            this.isProcessing = false;
            this.userCategories = JSON.parse(x.Result);
        });
    }

    submit(): void {
        this.initialized = true;
        if (this.ngCategoryForm.valid) {
            this.isProcessing = true;
            this.categoryService.addNewUserCategory(this.taskCategory).subscribe(x => {
                this.taskCategory = new TaskCategoryViewModel();
                this.isProcessing = false;
                this.loadUserCategories();
                this.initialized = false;
                $('#quickAddProject').modal('hide');
            }, e => {
            });
        }
    }


    activateColorPicker(obj: any): void {
        $('#color').ColorPicker(
            {
                onChange: function (hsb: any, hex: any, rgb: any) {
                    obj.taskCategory.Color = '#' + hex;
                }
            });
    }
}