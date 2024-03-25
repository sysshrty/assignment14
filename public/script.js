/*
document.addEventListener("DOMContentLoaded", () => {
    const craftsList = document.getElementById("crafts-list");

    // Fetch 
    fetch("https://assignment14-fsck.onrender.com")
        .then(response => response.json())
        .then(crafts => {
            crafts.forEach(craft => {
                const craftCard = document.createElement("div");
                craftCard.classList.add("craft-card");

                const img = document.createElement("img");
                img.src = `http://localhost:3000/${craft.image}`;
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

                    modalImage.src = "./images/" + craft.image;

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
*/
const getCrafts = async() => {
    try {
        return (await fetch("./api/crafts")).json();
    } catch(error){
        console.log("error retrieving data");
        return "";
    }
};

const showCrafts = async() => {
    const craftsJSON = await getCrafts();
    const craftsDiv = document.getElementById("crafts-div");

    if(craftsJSON == ""){
        craftsDiv.innerHTML = "Sorry, crafts";
        return;
    }

    //now loop through the json
    craftsJSON.forEach((crafts)=>{
        const section = document.createElement("section");
        craftsDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = crafts.name;
        section.append(h3);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + crafts.img;
        section.append(img);
    });
};

showCrafts();