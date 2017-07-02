import 'rxjs/Rx';
import { settings } from "../../Shared/settings";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { TaskCategoryViewModel } from "../../Model/TaskCategory";
import { JsonRequestOptions, LoginRequestOptions } from "../../Shared/jsonRequestOptions";



@Injectable()
export class CategoryService {

    constructor(private _http: Http) { }

    getUserCategories(): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/Category/GetUserCategories?isArchived=false';
        return this._http.get(url, jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }

    addNewUserCategory(taskCategory: TaskCategoryViewModel): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/Category/CreateNewTaskCategory';
        return this._http.post(url, JSON.stringify(taskCategory), jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }

    private handleServerError(error: Response) {
        return Observable.throw(error.json().error);
    }
}
