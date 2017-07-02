import { UserTaskStatus } from "../Shared/enum";

export class UserTaskViewModel {
    constructor() {
        this.StatusId = 1;
        this.statusesVM = UserTaskStatus.create;
    }
    public Id: number;
    public Title: string;
    public StatusId: number;
    public AssignedTo: string;
    public statusesVM: UserTaskStatus;
    public StartDateString: string;
    public StartDateTime: string;
    public Owner: string;
    public CategoryName: string;
}
