const response = fetch("https://www.world-wonders-api.org/v0/wonders");

response
  .then((resolved) => resolved.json())
  .then((data) => {
    console.log(data);

    data.forEach((wonder) => {
      // CREATING A NEW BUTTON FOR EACH WONDER
      const div = document.createElement("div");

      div.className = "card";

      div.innerHTML = `
        <img src="${wonder.links.images[0]}" alt="${wonder.name}" class="card-img" />
        <div class="flex column gap">
          <p class="card-txt primary-color">${wonder.name}</p>
          <button class="button"> MORE INFO </button>
        </div>
        `;

      // ADD EVENT LISTENER TO BUTTON
      const button = div.querySelector("button");
      button.addEventListener("click", () => {
        // Storing data of wonder in local storage for future manipulation
        localStorage.setItem("selectedWonder", JSON.stringify(wonder));
        window.location.href = "/pages/wonder.html";
      });

      // APPENDING CARD TO THE CONTAINER
      wondersContainer.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
