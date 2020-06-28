const gallery = () => {
  const root = document.querySelector("#home");
  const section = document.createElement("section");
  section.classList.add("imgGallery");

  const container = document.createElement("div");
  container.classList.add("galleryContainer");
  section.appendChild(container);
  container.appendChild(
    imgLink("gallery1.jpg", "woman wearing a mask while using the cellphone")
  );

  container.appendChild(
    imgLink("gallery2.jpg", "old woman wearing a mask and checking her phone")
  );

  container.appendChild(
    imgLink("gallery4.jpg", "boy looking outside the window wearing a mask")
  );

  container.appendChild(
    imgLink("gallery6.jpg", "statue of a sanitary doctor in brazil with a mask")
  );

  container.appendChild(
    imgLink("gallery5.jpg", "people carrying boxes with masks")
  );

  container.appendChild(
    imgLink("gallery3.jpg", "couple posing for a photo wearing masks")
	);
	
	root.appendChild(section)
};

const imgLink = (link, alt) => {
  const a = document.createElement("a");
	const img = document.createElement("img");
	const sourceImg = "./img/" + link
  a.setAttribute("href", sourceImg);
  a.setAttribute("class", "big");
  a.setAttribute("data-lightbox", "mask");

  img.setAttribute("src", sourceImg);
  img.setAttribute("alt", alt);

  a.appendChild(img);
  return a;
};

export { gallery };

//Thanks to Luiza Braun, Marco Testi, Jeremy Alford
//Bruno Oliveira, Joel Muniz, Long Truong for sharing their work on Unsplash