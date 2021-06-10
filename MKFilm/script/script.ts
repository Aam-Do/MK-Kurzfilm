var buttonDiv: HTMLElement;
interface OptionButtons { id: number; content: string; }
let allButtons: OptionButtons[] = [
    {id: 0, content: "Tee"},
    {id: 1, content: "Apfelsaft"}
];
var buttons: HTMLElement;
window.addEventListener("load", function(): void { load(); });

function load(): void {
    buttonDiv = document.querySelector("#buttonDiv");
    drawButtons();
    console.log("hi");
}
function drawButtons(): void {
    buttonDiv.innerHTML = "";

    for (let i: number = 0; i < allButtons.length; i++) {
        let button: OptionButtons = allButtons[i];

        let newButton: HTMLButtonElement = document.createElement("button");
        let node: Node = document.createTextNode(button.content);
        let buttonId: Attr = document.createAttribute("id");

        buttonId.value = (button.id).toString();

        newButton.appendChild(node);
        newButton.setAttributeNode(buttonId);

        buttonDiv.appendChild(newButton);

        newButton.addEventListener("click", function (): void {buttonClick(button.id); });
    }
}
function buttonClick (id: number): void {
    for (let i: number = 0; i < allButtons.length; i++) {
        let button: OptionButtons = allButtons[i];
        
        if (button.id == id) {
            console.log("option " + id + " was clicked");
            allButtons.length = 0;
            if (id == 0 || id == 1) {
                allButtons.push({id: 2, content: "Spazieren gehen"}, {id: 3, content: "Zuhause bleiben"});
            }
            else if (id == 2 || id == 9) {
                allButtons.push({id: 4, content: "Auf dem Weg bleiben"}, {id: 5, content: "Rascheln nachgehen"});
            }
            else if (id == 3) {
                allButtons.push({id: 6, content: "Herbitten"}, {id: 7, content: "Nicht herbitten"});
            }
            else if (id == 7) {
                allButtons.push({id: 8, content: "Zuhause bleiben"}, {id: 9, content: "Nachsehen"});
            }
            else if (id == 8) {
                allButtons.push({id: 10, content: "Netflix Serie"}, {id: 11, content: "Disney+ Film"});
            }
            else if (id == 12) {
                allButtons.push({id: 0, content: "Tee"}, {id: 1, content: "Apfelsaft"});
            }
            else {
                allButtons.push({id: 12, content: "Restart"});
            }
        }
    }
    drawButtons();
}

