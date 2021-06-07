window.addEventListener("load", function (): void {
    let allOptions: number[] = [1, 2];
    let buttons: HTMLElement;
    buttonEventListeners();
    console.log("hi");

    function buttonEventListeners (): void {
        for (let i: number = 1; i <= allOptions.length; i++)
        //  buttons = document.querySelector("")
        console.log("i " + allOptions);
    }

});