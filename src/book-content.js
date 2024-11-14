"use strict";

const currentDateFormatted = function () {
  return new Date().toISOString().slice(0, 16);
};

const minInputDate = currentDateFormatted();

const formElements = [
  {
    type: "label",
    textContent: "First Name:",
    attributes: [{ name: "for", val: "firstName" }],
  },
  {
    type: "input",
    attributes: [
      { name: "type", val: "text" },
      { name: "id", val: "firstName" },
      { name: "name", val: "firstName" },
      { name: "required", val: "true" },
    ],
  },
  {
    type: "label",
    textContent: "Last Name:",
    attributes: [{ name: "for", val: "lastName" }],
  },
  {
    type: "input",
    attributes: [
      { name: "type", val: "text" },
      { name: "id", val: "lastName" },
      { name: "name", val: "lastName" },
      { name: "required", val: "true" },
    ],
  },
  {
    type: "label",
    textContent: "Email:",
    attributes: [{ name: "for", val: "email" }],
  },
  {
    type: "input",
    attributes: [
      { name: "type", val: "email" },
      { name: "id", val: "email" },
      { name: "name", val: "email" },
      { name: "required", val: "true" },
    ],
  },
  {
    type: "label",
    textContent: "Number of Guests:",
    attributes: [{ name: "for", val: "numGuests" }],
  },
  {
    type: "select",
    children: [
      {
        type: "option",
        textContent: "0",
        attributes: [{ name: "value", val: "" }],
      },
      {
        type: "option",
        textContent: "One",
        attributes: [{ name: "value", val: 1 }],
      },
      {
        type: "option",
        textContent: "Two",
        attributes: [{ name: "value", val: 2 }],
      },
      {
        type: "option",
        textContent: "Three",
        attributes: [{ name: "value", val: 3 }],
      },
      {
        type: "option",
        textContent: "Four",
        attributes: [{ name: "value", val: 4 }],
      },
      {
        type: "option",
        textContent: "Five",
        attributes: [{ name: "value", val: 5 }],
      },
      {
        type: "option",
        textContent: "Six",
        attributes: [{ name: "value", val: 6 }],
      },
      {
        type: "option",
        textContent: "Seven",
        attributes: [{ name: "value", val: 7 }],
      },
      {
        type: "option",
        textContent: "Eight",
        attributes: [{ name: "value", val: 8 }],
      },
    ],
    textContent: "Number of Guests:",
    attributes: [
      { name: "id", val: "numGuests" },
      { name: "name", val: "numGuests" },
      { name: "required", val: "true" },
    ],
  },
  {
    type: "label",
    textContent: "Date:",
    attributes: [{ name: "for", val: "date" }],
  },
  {
    type: "input",
    attributes: [
      { name: "type", val: "datetime-local" },
      { name: "id", val: "date" },
      { name: "name", val: "date" },
      { name: "required", val: "true" },
      { name: "min", val: minInputDate },
    ],
  },
  {
    type: "label",
    textContent: "Comments:",
    attributes: [{ name: "for", val: "comments" }],
  },
  {
    type: "textarea",
    attributes: [
      { name: "id", val: "comments" },
      { name: "name", val: "comments" },
      { name: "rows", val: "5" },
    ],
  },
  {
    type: "input",
    textContent: "Submit",
    attributes: [
      { name: "type", val: "submit" },
      { name: "id", val: "submit-button" },
    ],
  },
];

const handleForm = function (event) {
  event.preventDefault();
  const dateOptions = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const bookingDetails = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    email: document.querySelector("#email").value,
    numGuests: document.querySelector("#numGuests").value,
    bookingDate: Intl.DateTimeFormat("en-AU", dateOptions).format(
      new Date(document.querySelector("#date").value)
    ),
    comments: document.querySelector("#comments").value,
  };

  const contentContainer = document.querySelector("#content");
  contentContainer.innerHTML = "";
  const newHeading = document.createElement("h1");
  newHeading.textContent = "Request Received!";
  const messageDiv = document.createElement("div");
  messageDiv.style.alignSelf = "center";
  messageDiv.style.width = "90%";
  messageDiv.style.display = "flex";
  messageDiv.style.flexDirection = "column";
  messageDiv.style.gap = "3ch";
  const firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "Thank you for your booking! our team will check your request for any special reqirements and contact you with confirmation shortly. We look forward to seeing you.";
  const subHeading = document.createElement("h2");
  subHeading.textContent = "Your Details:";
  const contactDetails = document.createElement("div");
  contactDetails.style.display = "flex";
  contactDetails.style.flexDirection = "column";
  contactDetails.style.gap = "1ch";
  contactDetails.innerHTML = `
  <p>Name: ${bookingDetails.firstName} ${bookingDetails.lastName}</p>
  <p>For: ${bookingDetails.numGuests} guests</p>
  <p>On: ${bookingDetails.bookingDate}</p>
  <p>Comments: ${bookingDetails.comments}</p>
  <p><fine>Our team will contact you at ${bookingDetails.email} for any issues. Alternatively, you can contact us if anything here is incorrect or needs amending.</fine></p>
  `;
  messageDiv.appendChild(firstParagraph);
  messageDiv.appendChild(subHeading);
  messageDiv.appendChild(contactDetails);
  contentContainer.appendChild(newHeading);
  contentContainer.appendChild(messageDiv);
};

export function getBookContent(contentContainer) {
  const newHeading = document.createElement("h1");
  newHeading.textContent = "Book a Table";
  const newBookingForm = document.createElement("form");
  newBookingForm.setAttribute("id", "booking-form");
  newBookingForm.addEventListener("submit", handleForm);
  formElements.forEach((element) => {
    const newElement = document.createElement(element.type);
    if (element.textContent) newElement.textContent = element.textContent;
    if (element.children) {
      element.children.forEach((childEl) => {
        const newChildEl = document.createElement(childEl.type);
        if (childEl.textContent) newChildEl.textContent = childEl.textContent;
        childEl.attributes.forEach((attribute) =>
          newChildEl.setAttribute(attribute.name, attribute.val)
        );
        newElement.appendChild(newChildEl);
      });
    }
    element.attributes.forEach((attribute) => {
      newElement.setAttribute(attribute.name, attribute.val);
    });
    newBookingForm.appendChild(newElement);
  });

  contentContainer.appendChild(newHeading);
  contentContainer.appendChild(newBookingForm);
}
