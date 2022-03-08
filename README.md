# 🍸 Drinkify
## 📖  About the project
This project has been created by Davide Lo Cascio and Mirco Schmid. It is a simple web application that allows users to browse different drinks and get information about them.

This project was created for the purpose of learning how to use Angular and working with APIs.

## 👨‍💻 Tech Stack
- Angular
- Bulma
- Netlify

### 🗣️ Languages
- JavaScript
- TypeScript
- Sass
- HTML

### ⚠️ Dependencies
- Angular
- TypeScript
- Bulma
- CocktailDB
- NgxPaginationModule
- FontAwesomeModule

## ⚡ Development
1. Clone the project from github.com
```
https://github.com/lcdave/drinkify.git
```
2. Install dependencies
```
npm install
```
3. Run the application

```
ng serve --open
```

## 🚀 Deployment
The application is hosted on [Netlify](https://www.netlify.com/).
We have configured the application to automatically deploy to Netlify. The automated deployment is triggered by pushing to the main branch.

You can find the application on this link: [Drinkify](https://drinkify-teko.netlify.com/)

## 🤓 Application Views
The application has three navigation entries:

1. Home
2. Categories
3. Random drink

### 🏠 Home
The home view contains a search field. The user can search for a drink by name. The search will be triggered on user input. It will display a search result container, containing the matching drinks.

If the user selects a drink, the application will navigate to the drink view.

#### 🍹 Drink View
The drink view contains a image of the drink, the ingredients and if provided by the api, the instructions.

### 🍹 Categories
The categories view contains a list of all available categories. The user can select a category and navigate to the drinks view.

He also can filter the category list by a pre selection of subcategories or by a search field.

#### 🍹 Categories details
This view is displayed when the user selects a category from the categories view. It shows all drinks of the selected category.

If the user clicks on a drink, he will be redirected to the drink view.

### 🎲 Random drink
The random drink view displays a random drink. The user can click on a button to get a new random drink.

## 🔌 API
The application uses the [CocktailDB](https://www.thecocktaildb.com/) API.

All information about the API is available in the [API documentation](https://www.thecocktaildb.com/api.php).

