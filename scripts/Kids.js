import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const theClickedOnChild = theClickEvent.target
        if (theClickedOnChild.dataset.type === "child") {
            const childName = theClickedOnChild.dataset.name
            const childWish = theClickedOnChild.dataset.wish
            window.alert(`${childName}'s wish is ${childWish}`)
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-name="${child.name}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

