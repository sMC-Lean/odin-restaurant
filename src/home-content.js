"use strict";
import beef from "./images/beef.jpg";
import steak from "./images/steak.jpg";

export function getHomeContent(contentContainer) {
  // clear the previous selected content from the display area;
  contentContainer.innerHTML = "";

  // create first display element including children;
  const firstDiv = document.createElement("div");
  firstDiv.classList.add("content-div");
  firstDiv.classList.add("center-div");
  const firstHeading = document.createElement("h1");
  firstHeading.classList.add("content-heading");
  firstHeading.textContent = "Your new Home...";
  firstHeading.style.alignSelf = "flex-start";

  const firstParagraph = document.createElement("p");
  firstParagraph.classList.add("content-p");
  firstParagraph.textContent = "...of fullbodied, flame grilled flavour.";
  firstParagraph.style.alignSelf = "center";

  const firstDisplayDiv = document.createElement("div");
  firstDisplayDiv.style.display = "flex";
  firstDisplayDiv.style.gap = "30px";
  const firstImageDiv = document.createElement("div");
  const firstImage = document.createElement("img");
  firstImage.src = beef;
  firstImage.alt = "a vivid image of a steak cut ready for grilling";
  firstImage.style.borderRadius = "1rem";
  firstImage.style.width = "600px";

  firstImageDiv.appendChild(firstImage);
  firstDisplayDiv.appendChild(firstImageDiv);
  firstDisplayDiv.appendChild(firstParagraph);
  // append children to first display element;
  firstDiv.appendChild(firstHeading);
  firstDiv.appendChild(firstDisplayDiv);

  // create second display element;
  const secondDiv = document.createElement("div");
  secondDiv.classList.add("content-div");
  secondDiv.classList.add("center-div");
  const secondHeading = document.createElement("h1");
  secondHeading.classList.add("content-heading");
  secondHeading.textContent = "Settle in...";
  secondHeading.style.alignSelf = "flex-end";

  const secondParagraph = document.createElement("p");
  secondParagraph.classList.add("content-p");
  secondParagraph.textContent =
    "...and enjoy the experience. Premium cuts, prepared to exceptional standards. The gold standard in dining experience.";

  // append children to second display element;
  secondDiv.appendChild(secondHeading);
  secondDiv.appendChild(secondParagraph);

  // create third display element;
  const thirdDiv = document.createElement("div");
  thirdDiv.classList.add("content-div");
  thirdDiv.classList.add("center-div");
  const thirdHeading = document.createElement("h1");
  thirdHeading.classList.add("content-heading");
  thirdHeading.textContent = "carve out some time...";
  thirdHeading.style.alignSelf = "flex-start";

  const thirdParagraph = document.createElement("p");
  thirdParagraph.classList.add("content-p");
  thirdParagraph.textContent = "...to treat yourself.";
  thirdParagraph.style.alignSelf = "center";

  const thirdDisplayDiv = document.createElement("div");
  thirdDisplayDiv.style.display = "flex";
  thirdDisplayDiv.style.gap = "30px";
  const thirdImageDiv = document.createElement("div");
  const thirdImage = document.createElement("img");
  thirdImage.src = steak;
  thirdImage.alt = "a vivid image of a steak cut ready for grilling";
  thirdImage.style.borderRadius = "1rem";
  thirdImage.style.width = "600px";

  thirdImageDiv.appendChild(thirdImage);
  thirdDisplayDiv.appendChild(thirdParagraph);
  thirdDisplayDiv.appendChild(thirdImageDiv);

  // append children to third display element;
  thirdDiv.appendChild(thirdHeading);
  thirdDiv.appendChild(thirdDisplayDiv);

  // append display elements to content area;
  contentContainer.appendChild(firstDiv);
  contentContainer.appendChild(secondDiv);
  contentContainer.appendChild(thirdDiv);
}
