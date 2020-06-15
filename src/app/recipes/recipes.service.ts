import { Injectable } from '@angular/core';
import { Recipe } from './recipes-model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.yemektekeyifvar.com/img/tarif/mgt/tavuk-ve-et-sinitzel.jpg',
      ingredients: ['french fries', 'salad']

    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://cdn.yemek.com/mncrop/600/315/uploads/2019/04/domates-soslu-spagetti.jpg',
      ingredients: ['Spaghetti', 'meat']

    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId:string){
   this.recipes = this.recipes.filter( recipe => {
      return recipe.id !== recipeId;
   })
  }
}
