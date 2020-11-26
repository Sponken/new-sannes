import foods from "../data/foods.json"

export const testFood = {
    title: "pizza",
    price: 10,
    ingredients: ["Skinka", "lök", "jalapeño", "kyckling", "köttfärs", "bacon", "oxfilé", "mozzarellaost", "stark vitlökssås"]
}

export const pref = ["veg", "stark", "inbakad"]

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


const getAllIngredients = () =>{
    let ingredients = new Set()

    nonPizzaGroups.map(group => group.foods.map(food => {
        food.ingredients.forEach(ingredient => {
            ingredients.add(ingredient)
        });
    }))

    pizzaGroups.map(group => group.foods.map(food => {
        food.ingredients.forEach(ingredient => {
            console.log(ingredients)
            ingredients.add(ingredient)
        });
    }))

    return [...ingredients].sort()
}

export const ingredients = getAllIngredients()
