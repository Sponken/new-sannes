const id = 0
export const testFood = {
    title: "pizza",
    price: 10,
    ingredients: ["Skinka", "lök", "jalapeño", "kyckling", "köttfärs", "bacon", "oxfilé", "mozzarellaost", "stark vitlökssås"]
}
const testGroup1 = {
    groupTitle: "Testgroup",
    foods: Array(3).fill(testFood)
}
const testGroup2 = {
    groupTitle: "Testgroup2",
    foods: Array(7).fill(testFood)
}
export const testMenu = [testGroup1, testGroup2]

export const pref = ["Veg", "Stark", "Inbakad"]

export const groupTitles = testMenu.map(g => g.groupTitle)

export const options = [{
    text: "lök",
    value: "lök"
}, {
    text: "Princess Mononoke",
    value: "princess"
}, {
    text: "Aliens",
    value: "aliens"
}, {
    text: "Oldboy",
    value: "oldboy"
}, {
    text: "Once Upon a Time in America",
    value: "once"
}, {
    text: "Witness for the Prosecution",
    value: "Witness"
}, {
    text: "Das Boot",
    value: "das",
    disabled: true
}];