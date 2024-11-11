"use strict";
import beef from "./images/beef.jpg";
import steak from "./images/steak.jpg";

export function getMenuContent(contentContainer) {
  const newHeading = document.createElement("h1");
  newHeading.textContent = "Our Menu";
  const firstSubHeading = document.createElement("h2");
  firstSubHeading.textContent = "Starters";
  const firstParagraph = document.createElement("div");
  firstParagraph.classList.add("menu-div");
  firstParagraph.innerHTML = `
  <p class='menu-item'><em>garlic bread</em>        <span>$9</span></p>
  <p class='menu-item'><em>mozzarella Sticks</em>        <span>$11</span></p>
  <p class='menu-item'><em>bacon croquettes</em>        <span>$10</span></p>
  <p class='menu-item'><em>cheese pizza</em>        <span>$8</span></p>
  `;
  const firstImage = document.createElement("img");
  firstImage.src = steak;
  firstImage.style.width = "15%";
  firstImage.style.borderRadius = "50%";
  firstImage.style.alignSelf = "center";

  const secondSubHeading = document.createElement("h2");
  secondSubHeading.textContent = "Main Meals";
  const secondParagraph = document.createElement("div");
  secondParagraph.classList.add("menu-div");
  secondParagraph.innerHTML = `
  <p class='menu-item'><em>Braised Chicken Fillet</em>        <span>$22</span></p>
  <p class='menu-item'><em>Fried Chicken (12Pc)</em>        <span>$26</span></p>
  <p class='menu-item'><em>Brisket</em>        <span>$21</span></p>
  <p class='menu-item'><em>Cheese Kransky (3pc)</em>        <span>$19</span></p>
  <p class='menu-item'><em>Pork Medallions</em>        <span>$28</span></p>
  <p class='menu-item'><em>Lamb Cutlets</em>        <span>$29</span></p>
  <p class='menu-item'><em>Eye Fillet 250gm</em>        <span>$34</span></p>
  <p class='menu-item'><em>Scotch Fillet 300gm</em>        <span>$40</span></p>
  `;
  const secondImage = document.createElement("img");
  secondImage.src = beef;
  secondImage.style.width = "15%";
  secondImage.style.borderRadius = "50%";
  secondImage.style.alignSelf = "center";

  const thirdSubHeading = document.createElement("h2");
  thirdSubHeading.textContent = "Sides";
  const thirdParagraph = document.createElement("div");
  thirdParagraph.classList.add("menu-div");
  thirdParagraph.innerHTML = `
  <p class='menu-item'><em>Chargrilled Corn</em>        <span>$12</span></p>
  <p class='menu-item'><em>Cheese Bread</em>        <span>$9</span></p>
  <p class='menu-item'><em>Curly Fries</em>        <span>$7</span></p>
  <p class='menu-item'><em>Onion Rings</em>        <span>$10</span></p>
  <p class='menu-item'><em>Sauce (chipotle, tomato, aoli)</em>        <span>$3</span></p>
  `;
  const thirdImage = document.createElement("img");
  thirdImage.src = beef;
  thirdImage.style.width = "15%";
  thirdImage.style.borderRadius = "50%";
  thirdImage.style.alignSelf = "center";

  contentContainer.appendChild(newHeading);
  contentContainer.appendChild(firstSubHeading);
  contentContainer.appendChild(firstParagraph);
  contentContainer.appendChild(firstImage);
  contentContainer.appendChild(secondSubHeading);
  contentContainer.appendChild(secondParagraph);
  contentContainer.appendChild(secondImage);
  contentContainer.appendChild(thirdSubHeading);
  contentContainer.appendChild(thirdParagraph);
}
