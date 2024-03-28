const blogArticles = [
  {
    title: "The Top 10 ES6 Features Every Web Developer Must Know",
    url: "https://webapplog.com/es6",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "The Top 11 ES6 Features Every Web Developer Must Know",
    url: "https://webapplog.com/es6",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "The Top 12 ES6 Features Every Web Developer Must Know",
    url: "https://webapplog.com/es6",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
];

const bodyElement = document.querySelector("body");

const renderElement = (tagName, text, attributs) => {
  const element = document.createElement(tagName);

  element.textContent = text;

  for (const key in attributs) {
    if (attributs.hasOwnProperty(key)) {
      element.setAttribute(key, attributs[key]);
    }
  }

  bodyElement.appendChild(element);
};

blogArticles.map((article) => {
  renderElement("p", article.title, {});
  renderElement("img", "", {
    src: article.image,
  });
  renderElement("a", "Cliquez ici", {
    href: article.url,
  });
});
