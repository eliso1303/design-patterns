function bonusVisitor(employee: { salary: number; bonus: number; }) {
    if (employee instanceof Manager)
        employee.bonus = employee.salary * 2;
    if (employee instanceof Developer)
        employee.bonus = employee.salary;
}

class Employee {
    constructor(public salary: number = salary, public bonus = 0 ) { }

    accept(visitor: (arg0: this) => void) {
        visitor(this);
    }
}

class Manager extends Employee {
    constructor(salary: number) {
        super(salary);
    }
}

class Developer extends Employee {
    constructor(salary: number) {
        super(salary);
    }
}

export {
    Developer,
    Manager,
    bonusVisitor
};