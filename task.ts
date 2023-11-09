// problem 1

type Alphanumeric = string | number;

const makeSquareOrLength = (param: Alphanumeric): number => {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * param;
  }
};

// problem 2

interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}

const getAddressCity = (person: Person): string | undefined => {
  return person?.address?.city;
};

// problem 3

class Cat {}

const cat = new Cat();

const isCat = (cat: Cat): string => {
  if (cat instanceof Cat) {
    return "yes, it's a cat.";
  } else {
    return "no, it's not a cat.";
  }
};

// problem 4

type MixedData = number | string;

const mixedData: MixedData[] = [1, "two", 3, "four", 5];

const calculateNum = (array: MixedData[]): number => {
  let total: number = 0;
  array.forEach((item) => {
    if (typeof item === "number") {
      total += item as number;
    }
  });
  return total;
};

// problem 5

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

type CombinedType = Car & Driver;

const combinedObjects = (car: Car, driver: Driver): CombinedType => {
  const newArr = {
    ...car,
    ...driver,
  };
  return newArr;
};

// problem 6

const checkArrOfNumbers = (arr: unknown): void => {
  if (Array.isArray(arr) && arr.every((item) => typeof item === "number")) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    console.log("Sub of the numbers: ", sum);
  } else {
    console.log("Invalid input: Parameter is not an array of numbers");
  }
};

// problem 7

const findFirstOccurrence = <T>(arr: T[], target: T): number => {
  if (
    Array.isArray(arr) &&
    (arr.every((item) => typeof item === "number") ||
      arr.every((item) => typeof item === "string"))
  ) {
    return arr.indexOf(target);
  } else {
    return -1;
  }
};
