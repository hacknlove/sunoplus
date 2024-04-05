const createLink = document.querySelector('.chakra-link[href="/create/"]');
const navBar = createLink.parentElement;
const exploreLink = navBar.querySelector('.chakra-link[href="/"]');
const libraryLink = navBar.querySelector('.chakra-link[href="/me/"]');

function addCreatePlusLink() {
  const newLink = createLink.cloneNode(true);

  // change the href
  newLink.href = "#create-plus";
  newLink.childNodes[0].textContent = "Create Plus";

  createLink.after(newLink);

  return newLink;
}

const createPlusLink =
  navBar.querySelector('.chakra-link[href="#create-plus"]') ||
  addCreatePlusLink();

function getLinkStyles() {
  let activated;
  let notActivated;
  switch (location.pathname) {
    case "/":
      activated = exploreLink;
      notActivated = createLink;
      break;
    case "/me/":
      activated = libraryLink;
      notActivated = createLink;
      break;
    case "/create/":
      activated = createLink;
      notActivated = exploreLink;
      break;
  }

  return [
    activated.firstElementChild.className,
    notActivated.firstElementChild.className,
  ];
}
const [activatedLinkStyle, notActivatedLinkStyle] = getLinkStyles();

const allLinks = [
  exploreLink.firstChild,
  libraryLink.firstChild,
  createLink.firstChild,
  createPlusLink.firstChild,
];
function toggleActiveLink(activeLink) {
  const child = activeLink.firstElementChild;
  for (const link of allLinks) {
    link.className =
      child === link ? activatedLinkStyle : notActivatedLinkStyle;
  }
}
function toggleClassSection(className) {
  document.body.classList.remove("explore", "create", "create-plus", "library");
  document.body.classList.add(className);
}
exploreLink.addEventListener("click", () => {
  toggleClassSection("explore");
  toggleActiveLink(exploreLink);
});
libraryLink.addEventListener("click", () => {
  toggleClassSection("library");
  toggleActiveLink(libraryLink);
});
createLink.addEventListener("click", () => {
  toggleClassSection("create");
  toggleActiveLink(createLink);
});
createPlusLink.addEventListener("click", () => {
  toggleClassSection("create-plus");
  toggleActiveLink(createPlusLink);
});

function updateStyles() {
  if (location.hash === "#create-plus") {
    toggleActiveLink(createPlusLink);
    toggleClassSection("create-plus");
    return;
  }

  switch (location.pathname) {
    case "/":
      toggleActiveLink(exploreLink);
      toggleClassSection("explore");
      break;
    case "/me/":
      toggleActiveLink(libraryLink);
      toggleClassSection("library");
      break;
    case "/create/":
      toggleActiveLink(createLink);
      toggleClassSection("create");
      break;
  }
}
updateStyles();
