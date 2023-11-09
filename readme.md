# Interview Questions:

### 1. What are some benefits of using TypeScript over JavaScript in a project?

- Typescript is superset of javascript. It means typescript is a super power. Typescript save us from type error. By using Typescript we can see error before runtime. By using TypeScript, developers code can be high-quality, scalable, and maintainable that is easier to debug and test. It makes developer life very easy. In large scale project Typescript improve our development experience and increase our productivity.

### 2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

- By using optional chaining (?.) we can handle undefined value without error. And by using nullish coalescing (??) operator we can conditionally set a value.

here is an example of optional chaining and nullish coalescing operator:

```
person?.address?.city ?? "No Address Found";
```

If address value is undefined we get a error, but when we are using optional chaining we are safe from error.If here first value is null or undefined then we can see "No Address Found" by nullish operator.

### 3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

- By using async/await we can handle asynchronous operations in TypeScript. If we use async await, when we get a promise then code will be execute line by line and we can handle asynchronous operations.

### 4. How can you use TypeScript's enums, and what are their advantages?.

- TypeScript's enums are a way to define a set of named constants. Enums make the code more readable and understandable.Enums in TypeScript are type-safe.

### 5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.

- By using type guard we can check code type and narrow down the type of a variable based on its value.
  Here is an example of type guard:

```
if (typeof item === "number") {
      total += item as number;
    }
```

### 6. Can you give an example of how to use "readonly" properties in TypeScript?

- By using readonly we can only read but we can not modify. Here is an example:

```
class BankAccount {
    public readonly id: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
    }
  }
```

### 7. Explain what a union type is in TypeScript and provide an example of its usage.

- In TypeScript, a union type allows us to declare a type that can represent values of different types. It is denoted using the pipe (|) symbol between the types. This means that a variable with a union type can hold values of any of the specified types.
  Here is an example:

```
type Alphanumeric = string | number;
```
