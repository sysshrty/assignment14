/*
const showCrafts = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/crafts");
      if (!response.ok) {
        throw new Error(`Failed to fetch crafts: ${response.statusText}`);
      }
      let craftsJSON = await response.json();
      let craftsDiv = document.getElementById("crafts-list");
  
      craftsJSON.forEach((craft) => {
        let section = document.createElement("section");
        section.className = "craft-card"; // Add class for styling
        craftsDiv.append(section);
  
        let imageContainer = document.createElement("div");
        imageContainer.className = "craft-image"; // Add class for styling
        section.append(imageContainer);
  
        let image = document.createElement("img");
        image.src = "http://localhost:3000/" + craft.img;
        imageContainer.append(image);
  
        let title = document.createElement("h2");
        title.textContent = craft.name;
        section.append(title);
  
        let description = document.createElement("p");
        description.textContent = craft.description;
        section.append(description);
  
        let suppliesTitle = document.createElement("h3");
        suppliesTitle.textContent = "Supplies:";
        section.append(suppliesTitle);
  
        let suppliesList = document.createElement("ul");
        craft.supplies.forEach((supply) => {
          let listItem = document.createElement("li");
          listItem.textContent = supply;
          suppliesList.append(listItem);
        });
        section.append(suppliesList);
  
        // Add event listener to open modal on image click
        image.addEventListener("click", () => {
          openModal(craft);
        });
      });
    } catch (error) {
      console.error("Error fetching crafts:", error.message);
    }
  };
  
  const openModal = (craft) => {
    let modal = document.getElementById("myModal");
    let modalTitle = document.getElementById("modal-title");
    let modalDescription = document.getElementById("modal-description");
    let modalSupplies = document.getElementById("modal-supplies");
  
    modalTitle.textContent = craft.name;
    modalDescription.textContent = craft.description;
  
    // Clear previous supplies list
    modalSupplies.innerHTML = "";
  
    // Populate supplies list
    craft.supplies.forEach((supply) => {
      let listItem = document.createElement("li");
      listItem.textContent = supply;
      modalSupplies.append(listItem);
    });
  
    modal.style.display = "block";
  };
  
  window.onload = () => {
    showCrafts();
  };
  
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
*/

document.addEventListener("DOMContentLoaded", () => {
    const craftsList = document.getElementById("crafts-list");

    // Fetch crafts data from the server
    fetch("http://localhost:3000/api/crafts")
        .then(response => response.json())
        .then(crafts => {
            // Iterate over crafts array and create HTML elements to display them
            crafts.forEach(craft => {
                const craftCard = document.createElement("div");
                craftCard.classList.add("craft-card");

                const img = document.createElement("img");
                img.src = `http://localhost:3000/${craft.image}`; // Corrected image source path
                img.alt = craft.name;

                const name = document.createElement("h2");
                name.textContent = craft.name;

                const description = document.createElement("p");
                description.textContent = craft.description;

                const supplies = document.createElement("ul");
                craft.supplies.forEach(supply => {
                    const listItem = document.createElement("li");
                    listItem.textContent = supply;
                    supplies.appendChild(listItem);
                });

                craftCard.appendChild(img);
                craftCard.appendChild(name);
                craftCard.appendChild(description);
                craftCard.appendChild(supplies);

                craftsList.appendChild(craftCard);
            });
        })
        .catch(error => console.error("Error fetching crafts data:", error));
});

