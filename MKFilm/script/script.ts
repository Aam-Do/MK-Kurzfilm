var buttonDiv: HTMLElement;
let video: HTMLIFrameElement;
let p: HTMLParagraphElement;
let path: string = "https://www.youtube.com/embed/";
interface OptionButtons { id: number; content: string; }
let allButtons: OptionButtons[] = [
    {id: 0, content: "Tee"},
    {id: 1, content: "Apfelsaft"}
];
var buttons: HTMLElement;
window.addEventListener("load", function(): void { load(); });

function load(): void {
    p = document.querySelector("p");
    buttonDiv = document.querySelector("#buttonDiv");
    video = document.querySelector("iframe");
    drawButtons();
}
function drawButtons(): void {
    p.classList.remove("hidden");
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
            allButtons.length = 0;
            video.src = "";
            switch (id) {
                case 0:
                    video.src = path + "cBN70U5HecY";
                    allButtons.push({id: 2, content: "Spazieren gehen"}, {id: 3, content: "Zuhause bleiben"});
                    break;
                case 1:
                    video.src = path + "hmi7RDRW_40";
                    allButtons.push({id: 2, content: "Spazieren gehen"}, {id: 3, content: "Zuhause bleiben"});
                    break;
                case 2:
                    video.src = path + "wxsPKXPkFzE";
                    allButtons.push({id: 13, content: "Wasser kaufen"}, {id: 14, content: "Ohne Wasser spazieren gehen"});
                    break;
                case 3:
                    video.src = path + "";
                    allButtons.push({id: 6, content: "Herbitten"}, {id: 7, content: "Nicht herbitten"});
                    break;
                case 4:
                    video.src = path + "";
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 5:
                    video.src = path + "";
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 6:
                    video.src = path + "fL3Oc4qhTe0";
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 7:
                    video.src = path + "KjA6bfcS-YA";
                    allButtons.push({id: 8, content: "Zuhause bleiben"}, {id: 9, content: "Nachsehen"});
                    break;
                case 8:
                    video.src = path + "ixaohY7pZFI";
                    allButtons.push({id: 10, content: "Netflix gucken"}, {id: 11, content: "Amazon prime gucken"});
                    break;
                case 9:
                    video.src = path + "";
                    allButtons.push({id: 4, content: "Auf dem Weg bleiben"}, {id: 5, content: "Rascheln nachgehen"});
                    break;
                case 10:
                    video.src = path + "";
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 11:
                    video.src = path + "";
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 12:
                    video.src = path + "I4KVu5zdZiI";
                    allButtons.push({id: 0, content: "Tee"}, {id: 1, content: "Apfelsaft"});
                    break;
                case 13:
                    video.src = path + "";
                    allButtons.push({id: 4, content: "Auf dem Weg bleiben"}, {id: 5, content: "Rascheln nachgehen"});
                    break;
                case 14:
                    video.src = path + "";
                    allButtons.push({id: 4, content: "Auf dem Weg bleiben"}, {id: 5, content: "Rascheln nachgehen"});
                    break;
            }
        }
    }
    drawButtons();
}
function hide(): void {
    p.classList.add("hidden");
}