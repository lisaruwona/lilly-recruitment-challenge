async function fetchMedicines() {
    try{
        const response = await fetch("http://127.0.0.1:8000/medicines");
        console.log("Response status: ", response.status)
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data: ", data);
        displayMedicines(data.medicines);
    } catch(error){
        console.error("Error fetching medicines: ", error);
    }
}

function displayMedicines(medicines) {
    const main = document.querySelector("#med-container");
    main.innerHTML = "";

    medicines.forEach((med) => {
        const name = med.name || "Medicine name is temporarily unavailable."; //handle missing medicine name
        const price = med.price !== null? `$${med.price.toFixed(2)}` : "Price is temporarily unavailable."; //handle missing price

        //Create a label for each medicine
        const medicineCard = document.createElement("div");
        medicineCard.className = "medicine-card";
        medicineCard.innerHTML = `
            <h2>${name}</h2>
            <p>Price: ${price}</p>
        
        `;

        //create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", async () => {
            await deleteMedicine(name);
            fetchMedicines();
        });

        medicineCard.appendChild(deleteButton); //append the delete button to medicine card


        main.appendChild(medicineCard);
    });

}

async function deleteMedicine(name) {
    try {
        const response = await fetch("http://127.0.0.1:8000/delete", {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                name: name,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result.message);
            alert(result.message);
        } else {
            throw new Error (`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error deleting medicine: ", error);
    }
} 



document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();

    const form = document.getElementById("med-form");
    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const name = document.getElementById("med-name").value;
        const price = parseFloat(document.getElementById("med-price").value);

        try {
            const response = await fetch("http://127.0.0.1:8000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams ({
                    name: name,
                    price: price,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.message);
                alert(result.message);
                fetchMedicines();
            } else {
                throw new Error (`HTTP error!`);
            }
        } catch (error) {
            console.error ("Error adding medicine: ", error);
        }

    });

});