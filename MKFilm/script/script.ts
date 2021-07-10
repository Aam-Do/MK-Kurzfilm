var buttonDiv: HTMLElement;
let video: HTMLIFrameElement;
let p: HTMLParagraphElement;
let path: string = "https://www.youtube.com/embed/";
let autoplay: string = "?&autoplay=1";
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
                    video.src = path + "cBN70U5HecY" + autoplay;
                    allButtons.push({id: 2, content: "Spazieren gehen"}, {id: 3, content: "Zuhause bleiben"});
                    break;
                case 1:
                    video.src = path + "hmi7RDRW_40" + autoplay;
                    allButtons.push({id: 2, content: "Spazieren gehen"}, {id: 3, content: "Zuhause bleiben"});
                    break;
                case 2:
                    video.src = path + "wxsPKXPkFzE" + autoplay;
                    allButtons.push({id: 13, content: "Wasser kaufen"}, {id: 14, content: "Ohne Wasser spazieren gehen"});
                    break;
                case 3:
                    video.src = path + "6t_sFWP_tu8" + autoplay;
                    allButtons.push({id: 6, content: "Herbitten"}, {id: 7, content: "Nicht herbitten"});
                    break;
                case 4:
                    video.src = path + "1GLa1hkuy1Y" + autoplay;
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 5:
                    video.src = path + "zT0VxAO6ML8" + autoplay;
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 6:
                    video.src = path + "fL3Oc4qhTe0" + autoplay;
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 7:
                    video.src = path + "KjA6bfcS-YA" + autoplay;
                    allButtons.push({id: 8, content: "Zuhause bleiben"}, {id: 9, content: "Nachsehen"});
                    break;
                case 8:
                    video.src = path + "ixaohY7pZFI" + autoplay;
                    allButtons.push({id: 10, content: "Netflix gucken"}, {id: 11, content: "Amazon Prime gucken"});
                    break;
                case 9:
                    video.src = path + "V_5eNrXBgt0" + autoplay;
                    allButtons.push({id: 4, content: "Auf dem Weg bleiben"}, {id: 5, content: "Rascheln nachgehen"});
                    break;
                case 10:
                    video.src = path + "dJY4ah47_yg" + autoplay;
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 11:
                    video.src = path + "itoTZnfjYAY" + autoplay;
                    allButtons.push({id: 12, content: "Restart"});
                    break;
                case 12:
                    video.src = path + "I4KVu5zdZiI" + autoplay;
                    allButtons.push({id: 0, content: "Tee"}, {id: 1, content: "Apfelsaft"});
                    break;
                case 13:
                    video.src = path + "cQI5iwt-0M8" + autoplay;
                    allButtons.push({id: 4, content: "Auf dem Weg bleiben"}, {id: 5, content: "Rascheln nachgehen"});
                    break;
                case 14:
                    video.src = path + "V_5eNrXBgt0" + autoplay;
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

function egg(): void {
    video.src = "";
    allButtons.length = 0;
    video.src = "https://www.youtube.com/embed/O91DT1pR1ew?&autoplay=1";
    allButtons.push({id: 12, content: "Restart"});
    drawButtons();
}