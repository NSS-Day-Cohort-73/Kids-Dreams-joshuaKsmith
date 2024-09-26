import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const theClickedOnAdult = theClickEvent.target
        if (theClickedOnAdult.dataset.type === "celebrity") {
            const adultName = theClickedOnAdult.dataset.name
            const adultSport = theClickedOnAdult.dataset.sport
            window.alert(`${adultName} is a ${adultSport} star`)
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
