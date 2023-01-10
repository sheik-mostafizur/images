window.onload = function () {
  main();
};

function main() {
  const prev_next_control = document.querySelector("#prev_next_control");
  const prevBtn = prev_next_control.querySelector("#prev");
  const nextBtn = prev_next_control.querySelector("#next");
  const h2_title = prev_next_control.querySelector("h2");

  const root = document.getElementById("root");

  root.innerHTML = `<div class="container">
  <div class="row" id="img_items"></div>
  </div>`;
  let showItemStart = 1;
  let showItemEnd = 50;
  let howItems = 50;

  imgItems(showItemStart, showItemEnd);
  h2_title.innerText = `${showItemStart} to ${showItemEnd}`;
  prevBtn.addEventListener("click", function () {
    if (showItemStart === 1 || showItemEnd === howItems) return;
    const img_items = document.querySelector("#img_items");
    img_items.innerHTML = "";
    showItemStart = showItemStart - howItems;
    showItemEnd = showItemEnd - howItems;
    imgItems(showItemStart, showItemEnd);
    h2_title.innerText = `${showItemStart} to ${showItemEnd}`;
    console.log(showItemStart, showItemEnd);
  });
  nextBtn.addEventListener("click", function () {
    const img_items = document.querySelector("#img_items");
    img_items.innerHTML = "";
    showItemStart = showItemEnd + 1;
    showItemEnd = showItemEnd + howItems;
    imgItems(showItemStart, showItemEnd);
    h2_title.innerText = `${showItemStart} to ${showItemEnd}`;
  });
}
function imgItems(start, end) {
  const img_items = document.querySelector("#img_items");
  for (let i = start; i <= end; i++) {
    img_items.appendChild(createImgItem(i));
  }
}

function createImgItem(id) {
  const div = document.createElement("div");
  div.classList = "col-md-3 my-2";
  const img = document.createElement("img");
  img.classList = "img-fluid shadow border border-2 img-fluid";
  img.src = `https://picsum.photos/id/${id}/306/180`;
  img.alt = "Image Not Showing...";
  img.loading = "lazy";
  // https://picsum.photos/id/${id}/306/180
  // https://picsum.photos/id/${id}/1920/1080
  img.role = "button";
  img.addEventListener("click", function () {
    const cdn = img.src.replace("/306/180", "/1920/1080");
    navigator.clipboard.writeText(cdn).then(
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
