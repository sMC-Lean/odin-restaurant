"use strict";
import beef from "./images/beef.jpg";

export function getHomeContent(contentContainer) {
  contentContainer.innerHTML = "";
  const firstDiv = document.createElement("div");
  firstDiv.classList.add("content-div");
  firstDiv.classList.add("left-div");
  const firstHeading = document.createElement("h1");
  firstHeading.classList.add("content-heading");
  firstHeading.textContent = "Your new Home...";

  const firstParagraph = document.createElement("p");
  firstParagraph.classList.add("content-p");
  firstParagraph.textContent = "...of fullbodied, flame grilled flavour.";

  const firstImageDiv = document.createElement("div");
  firstImageDiv.width = "30%";

  const image = document.createElement("img");
  image.src = beef;
  image.alt = "a vivid image of a steak cut ready for grilling";
  image.style.borderRadius = "50%";
  firstImageDiv.appendChild(image);

  firstDiv.appendChild(firstHeading);
  firstDiv.appendChild(firstParagraph);
  firstDiv.appendChild(firstImageDiv);
  contentContainer.appendChild(firstDiv);
}
