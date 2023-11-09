# Interview Questions:

### 1. What are some benefits of using TypeScript over JavaScript in a project?

- Typescript is superset of javascript. It means typescript is a super power. Typescript save us from type error. By using Typescript we can see error before runtime. By using TypeScript, developers code can be high-quality, scalable, and maintainable that is easier to debug and test. It makes developer life very easy. In large scale project Typescript improve our development experience and increase our productivity.

### 2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

- By using optional chaining (?.) we can handle undefined value without error. And by using nullish coalescing (??) operator we can conditionally set a value.

here is example of optional chaining and nullish coalescing operator:

```
person?.address?.city ?? "No Address Found";
```

If address value is undefined we get a error, but when we are using optional chaining we are safe from error.If here first value is null or undefined then we can see "No Address Found" by nullish operator.
