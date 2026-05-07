# Why `unknown` is Safer than `any` in TypeScript

## Introduction

When people start learning TypeScript, many of them use `any` because it feels simple and easy. You can store anything inside it and TypeScript usually does not give errors.

But there is a problem. Using `any` removes type safety, which means TypeScript can no longer help you properly.

Because of this, TypeScript also has another type called `unknown`. It is safer and better for handling random or unpredictable data.

---

## The Problem with `any`

The `any` type basically turns off checking.

Example:

```ts
let value: any = "Hello";

console.log(value.toFixed(2));
```

TypeScript will allow this code, but the program will crash later because strings do not have `toFixed()`.

This is why many developers call `any` a “type safety”.

It can easily create bugs without warning.

---

## Why `unknown` is Better

`unknown` can also hold any kind of value, but it does not allow unsafe operations directly.

```ts
let value: unknown = "Hello";

console.log(value.toFixed(2));
```

Now TypeScript shows an error because it does not know the real type of `value`.

Before using the value, we first need to check what type it is.

---

## Type Narrowing

Type narrowing means checking a value before using it.

Example:

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

Inside the `if` block, TypeScript now understands that `value` is a string.

So now it is safe to use string methods.

This helps reduce many runtime problems.

---

## Real Life Example

`unknown` is very useful when working with API data or user input because we usually do not know what kind of data will come.

```ts
function printData(data: unknown) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }

    return "Invalid Data";
}
```

Here we check the type first before using it.

---

## Conclusion

`any` may look easier for beginners, but it can create hidden bugs because TypeScript stops checking properly.

`unknown` is safer because it forces us to check the type before using the value.

So in most cases, `unknown` is the better choice in TypeScript.