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
  (people) => people.age >= 12 && people.age < 18
);
console.log("categoryAdolescent", categoryAdolescent);

const categoryAdult = people.filter((people) => people.age >= 18);
console.log("categoryAdult", categoryAdult);

// -------------------------------------------------------------

const shirts = [
  { theAmount: 1, size: "P", color: "black" },
  { theAmount: 2, size: "P", color: "black" },
  { theAmount: 3, size: "P", color: "yellow" },
  { theAmount: 4, size: "P", color: "yellow" },
  { theAmount: 5, size: "P", color: "yellow" },
  { theAmount: 6, size: "M", color: "black" },
  { theAmount: 7, size: "M", color: "yellow" },
  { theAmount: 8, size: "M", color: "yellow" },
  { theAmount: 9, size: "G", color: "black" },
  { theAmount: 10, size: "G", color: "yellow" },
];
console.log("shirts", shirts);

const yellowShirts = shirts.filter((shirts) => shirts.color == "yellow");
console.log("yellowShirts", yellowShirts);

const blackShirts = shirts.filter((shirts) => shirts.color == "black");
console.log("blackShirts", blackShirts);

const quantityShirtsP = shirts.filter((shirts) => shirts.size == "P");
console.log("quantityShirtsP", quantityShirtsP);

const quantityShirtsM = shirts.filter((shirts) => shirts.size == "M");
console.log("quantityShirtsM", quantityShirtsM);

const quantityShirtsG = shirts.filter((shirts) => shirts.size == "G");
console.log("quantityShirtsG", quantityShirtsG);
