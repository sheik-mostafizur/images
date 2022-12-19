window.onload = function () {
  main();
};

function main() {
  const root = document.getElementById("root");
  root.innerHTML = `<div class="container">
  <div class="row" id="img_items"></div>
  </div>`;
  const img_items = document.querySelector("#img_items");
  for (let i = 0; i <= 10; i++) {
    img_items.appendChild(createImgItem(i));
  }
}

function createImgItem(id) {
  const div = document.createElement("div");
  div.classList = "col-md-3 my-2";
  const img = document.createElement("img");
  img.classList = "img-fluid shadow border border-2";
  img.src = `https://picsum.photos/id/${id}/200/200`;
  img.role = "button";
  img.addEventListener("click", function () {
    navigator.clipboard.writeText(img.src).then(
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
  div.appendChild(img);
  return div;
}
