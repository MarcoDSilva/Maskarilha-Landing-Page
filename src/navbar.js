const navbar = () => {
  const home = document.querySelector("#home");

  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const div = document.createElement("div");
  div.classList.add("container");
  nav.appendChild(div);

  //logo element
  const h1 = document.createElement("h1");
  h1.classList.add("logo");
  h1.innerText = "Mask-a-rilha";
  div.appendChild(h1);

  const ul = document.createElement("ul");
  ul.classList.add("nav");
  ul.appendChild(newLi("#home", "Home"));
  ul.appendChild(newLi("#about", "About"));
  div.appendChild(ul);

  home.appendChild(nav);
};

const newLi = (link, text) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link;
  a.text = text;
  li.appendChild(a);

  return li;
};

export { navbar };
