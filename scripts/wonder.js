const wonder = JSON.parse(localStorage.getItem("selectedWonder"));

// DISPLAYING NAME(UPPERCASE) IN THE NAV
wonderName.innerHTML = `${wonder.name}`;
wonderName.style.textTransform = "uppercase";

// GETTING IMAGES
const imgs = [];
for (let x = 0; x < wonder.links.images.length; x++)
  imgs.push(wonder.links.images[x]);

let index = 0;

// BACK IMG BUTTON FUNCTIONALITY
backImg.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateIMG();
  } else {
    index = imgs.length - 1;
    updateIMG();
  }
});

// NEXT IMG BUTTON FUNCTIONALITY
nextImg.addEventListener("click", () => {
  if (index < imgs.length - 1) {
    index++;
    updateIMG();
  } else {
    index = 0;
    updateIMG();
  }
});

// UPDATING IMG BASED ON INDEX
function updateIMG() {
  images.innerHTML = `
<img src="${wonder.links.images[index]}" alt="${wonder.name}" class="info-item" />
`;
}

// DISPLAYING INFO
summary.innerHTML = `
    <p>${wonder.summary} <a href="${wonder.links.wiki}" target="_blank">Wikipedia</a></p>
`;

images.innerHTML = `
<img src="${wonder.links.images[0]}" alt="${wonder.name}" class="info-item" />
`;

info.innerHTML = `
 <p class="info-item"><span class="primary-color"> <strong>Location:</strong></span>  ${
   wonder.location
 } </p>

    <p class="info-item"> <span class="primary-color"> <strong>Build Year:</strong></span>  ${
      wonder.build_year
    } </p>

    <p class="info-item"> <span class="primary-color"> <strong>Time Period:</strong></span> ${
      wonder.time_period
    }</p>
    
    <p class="info-item"> <span class="primary-color"> <strong>Categories    :</strong></span> ${wonder.categories.join(
      ", "
    )}</p>

`;
