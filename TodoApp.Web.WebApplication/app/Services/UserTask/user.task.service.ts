import 'rxjs/Rx';
import { settings } from "../../Shared/settings";
import { Injectable, EventEmitter, Output } from '@angular/core';
import { UserTaskViewModel } from "../../Model/UserTask";
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { JsonRequestOptions, LoginRequestOptions } from "../../Shared/jsonRequestOptions";



@Injectable()
export class TasksService {

    constructor(private _http: Http) { }

    addNewQuickUserTask(userTaskViewModel: UserTaskViewModel): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/UserTask/CreateNewQuickUserTask';
        return this._http.post(url, JSON.stringify(userTaskViewModel), jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }

    getAllUserTasks(): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/UserTask/getAllUserTasks';
        return this._http.post(url, {}, jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }

    deleteUserTask(id: number): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/UserTask/DeleteUserTask?userTaskId=' + id;
        return this._http.delete(url, jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }

    private handleServerError(error: Response) {
        return Observable.throw(error.json().error);
    }
    //GetArchivedProjects(); 
    //AddUserTask();
    //UpdateUserTask();
    //DeleteUserTask();
    //ViewUserTask(int taskId);
    //SearchUserTask(searchTerm);
    //UpdateUserTaskCategory(int taskId, int categoryId);
    //SyncUserTasks();
    //UpdateUserTaskStatus();
}
