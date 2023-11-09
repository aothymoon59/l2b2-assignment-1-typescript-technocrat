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
