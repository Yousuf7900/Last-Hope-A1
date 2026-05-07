# How the Four Pillars of OOP help in TypeScript Projects

## Introduction

Object Oriented Programming (OOP) is a programming style that helps the developers to organize their code in a cleaner and more professional way. In large TypeScript projects, OOP helps reduce complexity and makes the application easier to maintain & scale.

The four main pillars of OOP are Inheritance, Polymorphism, Abstraction, and Encapsulation.

---

## Inheritance

Inheritance allows one class to use properties and methods of another class.

```ts
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, grade: string) {
        super(name);
        this.grade = grade;
    }
}
```

Here, the `Student` class inherits from the `Person` class.

This helps reduce duplicate code and keeps the project organized.

---

## Polymorphism

Polymorphism means the same method can behave differently depending on the object.

```ts
class Animal {
    makeSound(): string {
        return "Some sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Geu Geu";
    }
}
```

Both classes use the same method name, but the output is different.

This makes the code more flexible.

---

## Abstraction

Abstraction hides unnecessary details and only shows the important parts.

```ts
abstract class Vehicle {
    abstract start(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log("Car started");
    }
}
```

The user only knows that the vehicle can start, without worrying about internal implementation details.

This keeps large projects simpler.

---

## Encapsulation

Encapsulation means protecting data inside a class and controlling access to it.

```ts
class BankAccount {
    private balance: number = 1000;

    getBalance(): number {
        return this.balance;
    }
}
```

Here, the `balance` cannot be changed directly from outside the class.

This helps protect important data and prevents accidental mistakes.

---

## Benefits in Large Projects

The four pillars of OOP help developers:

- Reduce duplicate logic
- Organize code properly
- Protect sensitive data
- Improve maintainability
- Make applications easier to scale

---

## Conclusion

OOP makes TypeScript projects cleaner and easier to manage. Inheritance, Polymorphism, Abstraction, and Encapsulation help developers structure code in a better way and reduce complexity in large applications.

Because of these benefits, OOP is widely used in modern software development.