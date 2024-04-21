"use strict";

/**
 * time countdown
 */

const elementsTime = {
  seconds: document.querySelector(".time .unit .seconds"),
  minutes: document.querySelector(".time .unit .minutes"),
  hours: document.querySelector(".time .unit .hours"),
  days: document.querySelector(".time .unit .days"),
};

let values = {
  seconds: 11,
  minutes: 2,
  hours: 2,
  days: 9,
};

function updateValue(key, value) {
  elementsTime[key].textContent = String(value).padStart(2, "0");
}

const timeFunction = setInterval(() => {
  values.seconds--;

  if (values.seconds === 0) {
    values.minutes--;
    values.seconds = 59;
  }
  if (values.minutes === 0) {
    values.hours--;
    values.minutes = 59;
  }
  if (values.hours === 0) {
    values.days--;
    values.hours = 23;
  }

  if (values.days === 0) clearInterval(timeFunction);

  updateValue("seconds", values.seconds);
  updateValue("minutes", values.minutes);
  updateValue("hours", values.hours);
  updateValue("days", values.days);
}, 1000);

/**
 * progress bar animation on scroll
 */

const skillSection = document.querySelector(".our-skills");
const skillsSpans = document.querySelectorAll(".the-progress span");

function setSkillsProgress() {
  if (!isElementInViewport(skillSection, 50)) return;

  skillsSpans.forEach((span) => (span.style.width = span.dataset.progress));

  window.removeEventListener("scroll", setSkillsProgress);
}

function isElementInViewport(element, offset) {
  return window.scrollY >= element.offsetTop - offset;
}

window.addEventListener("scroll", setSkillsProgress);
