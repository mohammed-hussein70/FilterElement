// buttons
let All = document.querySelector(".all");
let Car = document.querySelector(".cars");
let Animal = document.querySelector(".animals");
let Color = document.querySelector(".colors");

// container
let container = document.querySelector(".container");
let allFilter = container.querySelectorAll(".filter");
let cars = container.querySelectorAll(".cars");
let animals = container.querySelectorAll(".animal");
let colors = container.querySelectorAll(".color");
function showAll(filter) {
  allFilter.forEach((item) => {
    item.style.display = "none";
  });
  filter.forEach((item) => {
    item.style.display = "block";
  });
}

All.addEventListener("click", () => {
  showAll(allFilter);
});
Car.addEventListener("click", () => {
  showAll(cars);
});
Animal.addEventListener("click", () => {
  showAll(animals);
});
Color.addEventListener("click", () => {
  showAll(colors);
});
