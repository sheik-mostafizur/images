const images = [
  {
    id: "itemOne",
    link: ["./two.jpg", "./three.jpg", "./three.jpg", "./three.jpg"],
  },
  {
    id: "itemTwo",
    link: ["./three.jpg", "./three.jpg", "./three.jpg", "./three.jpg"],
  },
];

images.forEach((item) => {
  genereateGallery(item);
});

function genereateGallery(item) {
  const gallery = document.querySelector(".gallery");
  const heading = document.createElement("h1");
  heading.innerText = item.id;
  let galleryImages = document.createElement("div");
  galleryImages.classList.add("images");
  galleryImages.id = item.id;
  item.link.forEach((img) => {
    let div = document.createElement("div");
    div.innerHTML = `<img src="${img}" alt="" />`;
    div.addEventListener("click", function () {
      navigator.clipboard.writeText(img).then(
        () => {
          const copy = document.getElementById("copysuccess");
          copy.classList.add("copied");
          setTimeout(() => copy.classList.remove("copied"), 1000);
        },
        () => {
          console.log("not copied");
        }
      );
    });
    galleryImages.appendChild(div);
  });
  gallery.insertBefore(heading, gallery[0]);
  gallery.appendChild(galleryImages);
}
