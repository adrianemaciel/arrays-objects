const people = [
  { name: "Enzo", age: 5, category: "child" },
  { name: "Valentina", age: 10, category: "child" },
  { name: "Pedro", age: 13, category: "adolescent" },
  { name: "Yasmin", age: 15, category: "adolescent" },
  { name: "Maria", age: 17, category: "adolescent" },
  { name: "Fernanda", age: 20, category: "adult" },
  { name: "Victor", age: 21, category: "adult" },
  { name: "Luiz", age: 25, category: "adult" },
  { name: "Alice", age: 30, category: "adult" },
  { name: "Vinicios", age: 33, category: "adult" },
];

console.log("people", people);

const categoryChild = people.filter((people) => people.age <= 12);
console.log("categoryChild", categoryChild);

const categoryAdolescent = people.filter(
  (people) => people.age >= 12 && people.age <= 18
);
console.log("categoryAdolescent", categoryAdolescent);

const categoryAdult = people.filter((people) => people.age >= 18);
console.log("categoryAdult", categoryAdult);
