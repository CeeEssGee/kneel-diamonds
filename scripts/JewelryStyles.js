import { getStyles, setStyle } from "./database.js" // import setStyle

const styles = getStyles()

// Instead of showing an alert when a metal/size/style is chosen, you now need to set the corresponding property of the order builder object in application state.

/*
Use your debugging skills to see how this code works.

Put a breakpoint on the line of code with the if statement
Click on one of the metals
Inspect the value of event.target
Inspect the value of event.target.name
Inspect the value of event.target.value
Then, step into the setMetal() function and inspect that value of the parameter
Inspect the value of database.orderBuilder after its state is updated
*/
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

