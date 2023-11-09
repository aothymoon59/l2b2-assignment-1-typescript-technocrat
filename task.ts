// problem 1

type Alphanumeric = string | number;

const makeSquareOrLength = (param: Alphanumeric): number => {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * param;
  }
};
