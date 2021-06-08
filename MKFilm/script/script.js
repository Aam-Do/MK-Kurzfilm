var buttonDiv;
var allButtons = [
    { id: 0, content: "option0" },
    { id: 1, content: "option1" }
];
var buttons;
window.addEventListener("load", function () { load(); });
function load() {
    buttonDiv = document.querySelector("#buttonDiv");
    drawButtons();
    console.log("hi");
}
function drawButtons() {
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
            console.log("option " + id + " was clicked");
            allButtons.length = 0;
            if (id == 0 || id == 1) {
                allButtons.push({ id: 2, content: "option2" }, { id: 3, content: "option3" });
            }
            else if (id == 2) {
                allButtons.push({ id: 4, content: "option4" }, { id: 5, content: "option5" });
            }
        }
    }
    drawButtons();
}
//# sourceMappingURL=script.js.map