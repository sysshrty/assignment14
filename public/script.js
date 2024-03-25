
document.addEventListener("DOMContentLoaded", () => {
    const craftsList = document.getElementById("crafts-list");

    // Fetch 
    fetch("./api/crafts")
        .then(response => response.json())
        .then(crafts => {
            crafts.forEach(craft => {
                const craftCard = document.createElement("div");
                craftCard.classList.add("craft-card");

                const img = document.createElement("img");
                img.src = "https://assignment14-fsck.onrender.com" + craft.image;
                img.alt = craft.name;

                img.addEventListener("click", () => {
                    const modal = document.getElementById("myModal");
                    const modalContent = document.querySelector(".modal-content");
                    const modalTitle = document.getElementById("modal-title");
                    const modalDescription = document.getElementById("modal-description");
                    const modalSupplies = document.getElementById("modal-supplies");
                    const modalImage = document.getElementById("modal-image");

                    modalTitle.textContent = craft.name;
                    modalDescription.textContent = craft.description;

                    modalSupplies.innerHTML = "";

                    craft.supplies.forEach(supply => {
                        const listItem = document.createElement("li");
                        listItem.textContent = supply;
                        modalSupplies.appendChild(listItem);
                    });

                    modalImage.src = `https://assignment14-fsck.onrender.com${craft.image}`;

                    modal.style.display = "block";
                });

                craftCard.appendChild(img);

                craftsList.appendChild(craftCard);
            });
        })
        .catch(error => console.error("Error fetching crafts data:", error));

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});