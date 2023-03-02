import { getMetals, setMetal } from "./database.js" // import setMetal

const metals = getMetals()

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
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

