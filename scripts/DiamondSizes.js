import { getSizes, setSize } from "./database.js" // import setSize

const sizes = getSizes()

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
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

/* Use .map() for converting objects to <li> elements
    The .map() method also iterates the array, just like for..of does. Unlike a for..of loop, it invokes the function that you define. That function is the first, and only, argument that the .map() method will accept. As it iterates the array, it will take the object at the current location and pass it as an argument to your function. Your function defines the size parameter. So an object comes into your function, and a string gets returned. That string goes into a new array.
ORIGINAL ARRAY
    [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ]
ARRAY THAT MAP() GENERATES
    [
        "<li> <input type="radio" name="size" value="1" /> 0.5 </li>",
        "<li> <input type="radio" name="size" value="2" /> 0.75 </li>",
        "<li> <input type="radio" name="size" value="3" /> 1 </li>",
        "<li> <input type="radio" name="size" value="4" /> 1.5 </li>",
        "<li> <input type="radio" name="size" value="5" /> 2 </li>"
    ]  
*/
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carats}
        </li>`
    })

    // The .join() array method, luckily, does exactly what its name infers - it joins things together. More specifically, it join all of the individual items in the array into a single string... all squished together. In this case, there is a no space between the quotations, so there will be no space between the individual items. You can put anything between the quotation marks
    html += listItems.join("")
    html += "</ul>"

    return html
}

