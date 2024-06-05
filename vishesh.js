var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, _worth) {
        this.name = name;
        this._worth = _worth;
    }
    Object.defineProperty(Person.prototype, "worth", {
        get: function () {
            return this._worth;
        },
        set: function (_worth) {
            this._worth = _worth;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, _worth, _salary) {
        var _this = _super.call(this, name, _worth) || this;
        _this._worth += _salary;
        _this._salary = _salary;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (_salary) {
            this._worth += _salary;
            this._salary = _salary;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}(Person));
