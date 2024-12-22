import { reverse } from "dns";

function capitalize(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export { capitalize, reverseString };
