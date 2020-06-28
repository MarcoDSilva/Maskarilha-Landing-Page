const imageSection = () => {
  const root = document.querySelector("#home");
  const section = document.createElement("section");
  section.classList.add("imgSection");

  const div = document.createElement("div");
  div.classList.add("container");
  section.appendChild(div);

  const leftColumn = document.createElement("div");
  div.appendChild(leftColumn);

  const h1 = document.createElement("h1");
  h1.innerText = "Masks with style";
  leftColumn.appendChild(h1);

  const p = document.createElement("p");
  p.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, ducimus! Aut, nostrum distinctio,
    omnis non explicabo voluptatum dolorum eligendi, tempore inventore ex delectus ab.`;
  leftColumn.appendChild(p);

  const a = document.createElement("a");
  a.href = "#";
  a.classList.add("btn");
  a.innerText = "More info";
  leftColumn.appendChild(a);

  const img = document.createElement("img");
  img.src = "./img/mainMask.png";
  // Photo by visuals on Unsplash
  img.alt = "mask";

  div.appendChild(img);
  root.appendChild(section)
};

export { imageSection };
