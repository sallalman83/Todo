
export class TaskCategoryViewModel {
    public Id: number;
    public Name: string;
    public Color: string;
    public IsArchived: boolean;
    public OrderId: number;
    constructor() {
        this.OrderId = 0;
        this.Name = "";
        this.Color = "#000";
        this.IsArchived = false;
    }
}
