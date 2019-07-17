export class Reservation {
   

    constructor(private _id: number, private _start: Date,
        private _end: Date, private _cost: number, private _clientId: number,
        private _courtId: number, private _paid: boolean) {
    }

    public togglePayment() {
        this.paid= !this.paid;
    }

    public get courtId(): number {
        return this._courtId;
    }
    public set courtId(value: number) {
        this._courtId = value;
    }
    public get clientId(): number {
        return this._clientId;
    }
    public set clientId(value: number) {
        this._clientId = value;
    }
    public get cost(): number {
        return this._cost;
    }
    public set cost(value: number) {
        this._cost = value;
    }
    public get end(): Date {
        return this._end;
    }
    public set end(value: Date) {
        this._end = value;
    }
    public get start(): Date {
        return this._start;
    }
    public set start(value: Date) {
        this._start = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get paid(): boolean {
        return this._paid;
    }
    public set paid(value: boolean) {
        this._paid = value;
    }
}
