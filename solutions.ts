// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}

// Problem 2
function reverseString(txt: string): string {
    return txt.split("").reverse().join("");
}

// Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
    if (typeof input === "string") {
        return "String";
    }

    return "Number";
}

// Problem 4
function getProperty<ObjectType>(object: ObjectType, key: keyof ObjectType) {
    return object[key];
}

// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true,
    };
}

// Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
    return firstArray.filter((number) => secondArray.includes(number));
}