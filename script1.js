function createDom(data){
    var parentElement = document.getElementById("main area");

    var currentChild = Array.from(parentElement.children);

    let updated = 0;
    let deleted = 0;
    let added = 0;

    data.forEach(function(item){
        var existingChild = currentChild.find(function(child){
            return child.dataset.id === String(item.id);
        });

        if(existingChild){
            updated++;

            existingChild.children[0].innerHTML = item.title;
            existingChild.children[1].innerHTML = item.description;

            var currentChild = currentChild.filter(function(child){
                return child != existingChild;
            })
        }else{
            added++;

            var childElement = document.createElement("div");
            childElement.dataset.id = item.id;

            var grandChildElement1 = document.createElement("span");
            grandChildElement1.innerHTML = item.title;

            var grandChildElement2  = document.createElement("span");
            grandChildElement2.innerHTML = item.description;

            var grandChildElement3 = document.createElement("button");
            grandChildElement3.innerHTML = "delete";
            grandChildElement3.setAttribute("onclick", "deleteitem ("+item.id+")");

            childElement.appendChild(grandChildElement1);
            childElement.appendChild(grandChildElement2);
            childElement.appendChild(grandChildElement3);
            parentElement.appendChild(childElement);
        }

        childElement = childElement.forEach(function(item){
            deleted++;
            parentElement.removeChild(childElement);
        })
    })
}

window.setInterval( () => {
    var todos = [];
    for(let i=0; i<Math.floor(Math.random()*100);i++){
        todos.push({
            title: "go to class",
            description: "go to classes till FAT",
            id: i+1
        });
    }

    createDom(todos);
},5000);