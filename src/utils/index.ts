import axios from "axios";

export const addFunction = (num1: number, num2: number) => {
  return num1 + num2;
};

export const isNull = () => null;

export const checkFalsy = (para: unknown) => para;

export const checkForObject = (firstName: string, lastName: string) => {
  return { firstName, lastName };
};

export const fetchData = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.data)
    .catch((err) => err);
