var buttonDiv;
var video;
var p;
var path = "https://www.youtube.com/embed/";
var allButtons = [
    { id: 0, content: "Tee" },
    { id: 1, content: "Apfelsaft" }
];
var buttons;
window.addEventListener("load", function () { load(); });
function load() {
    p = document.querySelector("p");
    buttonDiv = document.querySelector("#buttonDiv");
    video = document.querySelector("iframe");
    drawButtons();
}
function drawButtons() {
    p.classList.remove("hidden");
    buttonDiv.innerHTML = "";
    var _loop_1 = function (i) {
        var button = allButtons[i];
        var newButton = document.createElement("button");
        var node = document.createTextNode(button.content);
        var buttonId = document.createAttribute("id");
        buttonId.value = (button.id).toString();
        newButton.appendChild(node);
        newButton.setAttributeNode(buttonId);
        buttonDiv.appendChild(newButton);
        newButton.addEventListener("click", function () { buttonClick(button.id); });
    };
    for (var i = 0; i < allButtons.length; i++) {
        _loop_1(i);
    }
}
function buttonClick(id) {
    for (var i = 0; i < allButtons.length; i++) {
        var button = allButtons[i];
        if (button.id == id) {
            allButtons.length = 0;
            video.src = "";
            switch (id) {
                case 0:
                    video.src = path + "cBN70U5HecY";
                    allButtons.push({ id: 2, content: "Spazieren gehen" }, { id: 3, content: "Zuhause bleiben" });
                    break;
                case 1:
                    video.src = path + "hmi7RDRW_40";
                    allButtons.push({ id: 2, content: "Spazieren gehen" }, { id: 3, content: "Zuhause bleiben" });
                    break;
                case 2:
                    video.src = path + "wxsPKXPkFzE";
                    allButtons.push({ id: 13, content: "Wasser kaufen" }, { id: 14, content: "Ohne Wasser spazieren gehen" });
                    break;
                case 3:
                    video.src = path + "6t_sFWP_tu8";
                    allButtons.push({ id: 6, content: "Herbitten" }, { id: 7, content: "Nicht herbitten" });
                    break;
                case 4:
                    video.src = path + "1GLa1hkuy1Y";
                    allButtons.push({ id: 12, content: "Restart" });
                    break;
                case 5:
                    video.src = path + "zT0VxAO6ML8";
                    allButtons.push({ id: 12, content: "Restart" });
                    break;
                case 6:
                    video.src = path + "fL3Oc4qhTe0";
                    allButtons.push({ id: 12, content: "Restart" });
                    break;
                case 7:
                    video.src = path + "KjA6bfcS-YA";
                    allButtons.push({ id: 8, content: "Zuhause bleiben" }, { id: 9, content: "Nachsehen" });
                    break;
                case 8:
                    video.src = path + "ixaohY7pZFI";
                    allButtons.push({ id: 10, content: "Netflix gucken" }, { id: 11, content: "Amazon Prime gucken" });
                    break;
                case 9:
                    video.src = path + "V_5eNrXBgt0";
                    allButtons.push({ id: 4, content: "Auf dem Weg bleiben" }, { id: 5, content: "Rascheln nachgehen" });
                    break;
                case 10:
                    video.src = path + "dJY4ah47_yg";
                    allButtons.push({ id: 12, content: "Restart" });
                    break;
                case 11:
                    video.src = path + "itoTZnfjYAY";
                    allButtons.push({ id: 12, content: "Restart" });
                    break;
                case 12:
                    video.src = path + "I4KVu5zdZiI";
                    allButtons.push({ id: 0, content: "Tee" }, { id: 1, content: "Apfelsaft" });
                    break;
                case 13:
                    video.src = path + "cQI5iwt-0M8";
                    allButtons.push({ id: 4, content: "Auf dem Weg bleiben" }, { id: 5, content: "Rascheln nachgehen" });
                    break;
                case 14:
                    video.src = path + "V_5eNrXBgt0";
                    allButtons.push({ id: 4, content: "Auf dem Weg bleiben" }, { id: 5, content: "Rascheln nachgehen" });
                    break;
            }
        }
    }
    drawButtons();
}
function hide() {
    p.classList.add("hidden");
}
//# sourceMappingURL=script.js.map