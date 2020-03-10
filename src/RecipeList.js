import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce",
                ingredients: ["1 jar spaghetti sauce", "8 cups water", "1 lb spaghetti"],
                img: "spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk. Blend until creamy",
                ingredients: ["2 scoops ice cream", "8 ounces milk"],
                img: "milkshake.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "avocado_toast.jpg"
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));

        return (
            <div className="recipe-list">
                {recipes}
                </div>
        )
    }
}

export default RecipeList;