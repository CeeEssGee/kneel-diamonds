import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

// There is a function named renderAllHTML() that is defined in the main.js module, then immediately invoked. This function is needed later in the growth of the application, because for Kneel Diamonds, you are going to react to the user choosing options.
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

/*
    Luckily, reacting to a custom event is just like reacting to a browser generated event like click and change. You use an event listener.

    When state changes for your application, you need to regenerate the HTML to display the new state to the user.
    
    Which module currently is responsible for starting the process of generating HTML? That's right, it's main.js.
    
    That means that the main module should listen for the stateChanged event. When it is dispatched by the database module, the main module will generate all the HTML again and display it.
*/
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})