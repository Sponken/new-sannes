import foods from "../data/foods.json"

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


export const pastaMenu = [{groupTitle: "pasta", foods: foods.pastas}]

let getNonPizzaGroups = () => {
    let output = []

    Object.entries(foods).map(([key, value]) => {
        if (!["alias", "pizzas"].includes(key)) {
            output.push({groupTitle: key, foods: value})
        }
    })
    return output
}

export const nonPizzaGroups = getNonPizzaGroups()

export const pizzaGroups = Object.entries(foods.pizzas).map(([key, value]) => {
    return {groupTitle: "Pizzagrupp " + key, foods: value}
})

export const groupTitles = ["Pizza",...getNonPizzaGroups().map(g => g.groupTitle)]