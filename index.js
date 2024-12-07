// Exercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

const multiBytwo = nums.map((num) => {
  return num * 2
})
console.log('Exercise 1')
console.log(multiBytwo)

// Exercise 2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

const [firstPizza, secondPizza] = pizzaToppings
console.log('Exercise 2')
console.log(firstPizza)
console.log(secondPizza)

console.log(pizzaToppings[0])
console.log(pizzaToppings[1])

// Exercise 3

const car = {
  make: 'Audi',
  model: 'q5'
}

const { make, model } = car
console.log('Exercise 3')

console.log(make)
console.log(model)
console.log(car.make)
console.log(car.model)

// Exercise 4

const controversialPizzaToppings = [...pizzaToppings]
console.log('Exercise 4')
console.log(controversialPizzaToppings)

//Exercise 5

const myCar = { ...car, model: 'q7' }
console.log('Exercise 5')
console.log(car)
console.log(myCar)

// Exercise 6

const propertyName = 'username'
const userProfile = {
  [propertyName]: 'nawraaman'
}
console.log('Exercise 6')
console.log(userProfile)

// Exercise 8
const describeSmth = (noun, adjective) => {
  console.log(`The ${noun} is ${adjective}.`)
}
console.log('Exercise 8')

describeSmth('dog', 'white')

// Exercise 9

let pizza = 'tasty'
console.log('Exercise 9')
pizza === 'tasty' ? console.log('yum') : console.log('yuck')

// Exercise 10

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en'

// Log the result
console.log('Exercise 10')
console.log('Language setting:', LANG)

// 2. SET WEBSITE THEME

const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME)

// Exercise 11

const adventurer = {
  name: 'Alice'
}

let cat = adventurer.cat?.age
console.log('Exercise 11')
console.log(cat)
