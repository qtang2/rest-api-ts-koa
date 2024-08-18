function closestToZero(temperature: number[]) {
  if (temperature.length == 0) return 0;
  return temperature.reduce((closest: number | null, temp: number) => {
    if (closest == null || Math.abs(closest) >= Math.abs(temp)) {
      return temp;
    }
    return closest;
  }, null);
}
// console.log(closestToZero([-5, -2, -1, 1, 2, 5]));

function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstEle = getFirstElement(numbers);
console.log(firstEle);
const strings = ["a", "b", "c"];
const firstStr = getFirstElement<string>(strings);
console.log(firstStr);

numbers.map(() => {
  return "aa";
});

const map = new Map([["a", 1]]);

map.set("b", 3);

console.log(" mapppp ", map);

// The Data has to be an object and has a default type of status with value of number
type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

type UserData = {
  name: string;
  age: number;
};
interface BlogData {
  title: string;
}

// overwrite the ApiResponse type
type UserResponse = ApiResponse<UserData>;
type BlogResponse = ApiResponse<BlogData>;

const response: UserResponse = {
  data: {
    name: "a",
    age: 3,
  },
  isError: false,
};
const blogResponse: BlogResponse = {
  data: {
    title: "a",
  },
  isError: false,
};
const generalResponse: ApiResponse = {
  data: {
    status: 3,
  },
  isError: false,
};
