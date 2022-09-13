const images = [
  {
    id: "business",
    links: [
      "https://i.postimg.cc/0Qwg3YWz/austin-unsplash.webp",
      "https://i.postimg.cc/LshFkKjB/brooke-unsplash.webp",
      "https://i.postimg.cc/MZBxrSN9/bruce-unsplash.webp",
      "https://i.postimg.cc/k5Z3f1cr/charle-unsplash.webp",
      "https://i.postimg.cc/vHLybvQ9/green-unsplash.webp",
      "https://i.postimg.cc/L6MScWM2/hunter-unsplash.webp",
      "https://i.postimg.cc/wjqpvsvr/john-s-unsplash.webp",
      "https://i.postimg.cc/6pMNG54p/kenny-unsplash.webp",
      "https://i.postimg.cc/7hrvy5dm/kraken-unsplash.webp",
      "https://i.postimg.cc/zvCsDJ15/medien-unsplash.webp",
      "https://i.postimg.cc/ZY6txLvg/mia-ba-unsplash.webp",
      "https://i.postimg.cc/bN8XC2Qv/muhamm-unsplash.webp",
      "https://i.postimg.cc/qMGP9MLx/scott-unsplash.webp",
      "https://i.postimg.cc/6p5kwJbJ/toa-he-unsplash.webp",
      "https://i.postimg.cc/LsJGYkMx/tyler-unsplash.webp",
      "https://i.postimg.cc/d3bZWHtx/ronan-unsplash.jpg",
      "https://i.postimg.cc/NFFfrRq1/adam-unsplash.webp",
      "https://i.postimg.cc/zXM3K2f3/ali-mo-unsplash.webp",
      "https://i.postimg.cc/VshzVrPV/bagus-unsplash.webp",
      "https://i.postimg.cc/jS72X6Wc/benyam-unsplash.webp",
      "https://i.postimg.cc/br48DMRh/jonas-unsplash.webp",
      "https://i.postimg.cc/V6Gz15r5/jose-unsplash.webp",
      "https://i.postimg.cc/4yYs3ZVP/master-unsplash.webp",
      "https://i.postimg.cc/R0mSLkxC/oliver-unsplash.webp",
      "https://i.postimg.cc/65GBJW95/sergey-unsplash.webp",
    ],
  },
  {
    id: "travel",
    links: [
      "https://i.postimg.cc/50Pz9rgM/2h-unsplash.jpg",
      "https://i.postimg.cc/yY2FSwH1/ale-unsplash.jpg",
      "https://i.postimg.cc/GpCGXGt6/alexandros-unsplash.jpg",
      "https://i.postimg.cc/2jKWPP3Q/dan-unsplash.jpg",
      "https://i.postimg.cc/PJ98Y803/daniel-unsplash.jpg",
      "https://i.postimg.cc/k5v8zGtG/daniil-unsplash.jpg",
      "https://i.postimg.cc/bJYbhPQT/dmi-unsplash.jpg",
      "https://i.postimg.cc/Wzhkd7Yq/hen-unsplash.jpg",
      "https://i.postimg.cc/sDGWywZt/iew-unsplash.jpg",
      "https://i.postimg.cc/nhvQ9r22/igo-unsplash.jpg",
      "https://i.postimg.cc/T38DPgVh/jac-unsplash.jpg",
      "https://i.postimg.cc/q7whQF9C/jim-unsplash.jpg",
      "https://i.postimg.cc/9fCwd2Nh/jun-unsplash.jpg",
      "https://i.postimg.cc/TwPys96N/kam-unsplash.jpg",
      "https://i.postimg.cc/PxNbBZsy/kamil-unsplash.jpg",
      "https://i.postimg.cc/9XK4xZN1/kev-unsplash.jpg",
      "https://i.postimg.cc/8CpsFHjk/lau-unsplash.jpg",
      "https://i.postimg.cc/zDVpMmqN/mic-unsplash.jpg",
      "https://i.postimg.cc/t4tYCfRm/michelangelo-unsplash.jpg",
      "https://i.postimg.cc/x1SRccMj/nat-unsplash.jpg",
      "https://i.postimg.cc/L6PD9zq0/nic-unsplash.jpg",
      "https://i.postimg.cc/T2FQvkPD/pra-unsplash.jpg",
      "https://i.postimg.cc/13cK6srG/sea-unsplash.jpg",
      "https://i.postimg.cc/bvmHCgMd/til-unsplash.jpg",
      "https://i.postimg.cc/XJhK3Jnb/tom-unsplash.jpg",
      "https://i.postimg.cc/bYDHgQRN/vit-unsplash.jpg",
      "https://i.postimg.cc/1XqGzQzN/yoa-unsplash.jpg",
    ],
  },
];
window.onload = function () {
  images.forEach((item) => {
    genereateGallery(item);
  });
};

function genereateGallery(item) {
  const gallery = document.querySelector(".gallery");
  const heading = document.createElement("h1");
  heading.innerHTML = `${item.id} <span style="font-size:1rem; color: #777;">${item.links.length}</span>`;
  let galleryImages = document.createElement("div");
  galleryImages.classList.add("images");
  galleryImages.id = item.id;
  item.links.forEach((img) => {
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
