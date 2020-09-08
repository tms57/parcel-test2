export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`User name: ${user.name}`);
}

export function printAge(user) {
  console.log(`User age: ${user.age}`);
}

export function hello() {
  console.log('Hello!');
}
