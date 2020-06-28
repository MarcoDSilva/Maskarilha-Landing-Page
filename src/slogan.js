const slogan = () => {
  const root = document.querySelector("#home");
  const section = document.createElement("section");
  section.classList.add("slogan");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const slogan = document.createElement("div");
  slogan.classList.add("sloganContainer");

  section.appendChild(overlay);
  overlay.appendChild(slogan);

  const h3 = document.createElement("h3");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h3.innerText = "Recommended by OMS";
  h2.innerText = "Always wear your mask!";
  p.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
	Officiis provident nesciunt asperiores dignissimos id.`;

  slogan.appendChild(h3);
  slogan.appendChild(h2);
  slogan.appendChild(p);

  root.appendChild(section);
};

export { slogan };
