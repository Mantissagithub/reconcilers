function createDom(data) {
    var parentElement = document.getElementById("mainArea");

    // Clear the existing content
    parentElement.innerHTML = "";

    data.forEach(function (item) {
        var childElement = document.createElement("div");
        childElement.dataset.id = item.id;

        var grandChildElement1 = document.createElement("span");
        grandChildElement1.innerHTML = item.title;

        var grandChildElement2 = document.createElement("span");
        grandChildElement2.innerHTML = item.description;

        var grandChildElement3 = document.createElement("button");
        grandChildElement3.innerHTML = "Delete";

        // Use an event listener to handle the delete action
        grandChildElement3.addEventListener("click", function () {
            deleteItem(item.id);
        });

        childElement.appendChild(grandChildElement1);
        childElement.appendChild(grandChildElement2);
        childElement.appendChild(grandChildElement3);
        parentElement.appendChild(childElement);
    });
}

function deleteItem(id) {
    console.log("Deleting item with ID: " + id);
}

window.setInterval(() => {
    let todos = [];
    for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
        todos.push({
            title: "Learn about reconcilers",
            description: "Know the motive of creating React JS",
            id: i + 1
        });
    }
    createDom(todos);
}, 5000);
