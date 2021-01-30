import foods from "../data/foods.json"

let getNonPizzaGroups = () => {
    let output = []

    Object.entries(foods).map(([key, value]) => {
        if (!["alias", "Pizza"].includes(key)) {
            output.push({groupTitle: key, foods: value})
        }
    })
    return output
}

const pizzaGroups = Object.entries(foods.Pizza).map(([key, value]) => {
    return {groupTitle: "Pizzagrupp " + key, foods: value}
})

const getAllIngredients = () =>{
    let ingredients = new Set()

    getNonPizzaGroups().map(group => group.foods.map(food => {
        food.ingredients.forEach(ingredient => {
            ingredients.add(ingredient)
        });
    }))

    pizzaGroups.map(group => group.foods.map(food => {
        food.ingredients.forEach(ingredient => {
            ingredients.add(ingredient)
        });
    }))

    return [...ingredients].sort()
}

export const pref = ["veg", "stark", "inbakad"]

export const foodGroups = [...pizzaGroups, ...getNonPizzaGroups()]

export const groupTitles = ["Pizza",...getNonPizzaGroups().map(g => g.groupTitle)]

export const ingredients = getAllIngredients()
