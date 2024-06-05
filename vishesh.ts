class Person {
    public name: string;
    protected _worth: number;
    constructor(name: string, _worth: number) {
        this.name = name;
        this._worth = _worth;
    }
    set worth(_worth: number) {
        this._worth = _worth;
    }
    get worth() {
        return this._worth;
    }
}

class Employee extends Person {
    private _salary: number;
    constructor(name: string, _worth: number, _salary: number) {
        super(name, _worth);
        this._worth += _salary;
        this._salary = _salary;
    }
    get salary() {
        return this._salary;
    }
    set salary(_salary: number) {
        this._worth += _salary;
        this._salary = _salary;
    }
}