const response = fetch("https://www.world-wonders-api.org/v0/wonders");

response
  .then((resolved) => resolved.json())
  .then((data) => {
    console.log(data);

    data.forEach((wonder) => {
      // CREATING A NEW BUTTON FOR EACH WONDER
      const button = document.createElement("button");
      button.className = "button"; // Add a class for styling

      // ADDING NAME OF WONDER
      button.innerHTML = `
            <p>${wonder.name}</p>
        `;
      // ADDING AN EVENT LISTENER
      button.addEventListener("click", () => {
        //console.log("clicked!");
        
      });

      // APPENDING CARD TO THE CONTAINER
      cardContainer.appendChild(button);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
