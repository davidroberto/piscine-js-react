const bodyElement = document.querySelector("body");

const renderElement = (tagName, text) => {
  const element = document.createElement(tagName);

  element.textContent = text;

  bodyElement.appendChild(element);
};

renderElement("div", "hello");
renderElement("h1", "Je suis un h1");
