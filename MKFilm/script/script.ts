var buttonDiv: HTMLElement;
interface OptionButtons { id: number; content: string; }
let allButtons: OptionButtons[] = [
    {id: 0, content: "option0"},
    {id: 1, content: "option1"}
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
                allButtons.push({id: 2, content: "option2"}, {id: 3, content: "option3"});
            }
            else if (id == 2) {
                allButtons.push({id: 4, content: "option4"}, {id: 5, content: "option5"});
            }
        }
    }
    drawButtons();
}

