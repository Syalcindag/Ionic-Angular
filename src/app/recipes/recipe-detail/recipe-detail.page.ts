import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes-model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute:ActivatedRoute,
    private recipesService: RecipesService,
    private router:Router,
    private alertCtrl:AlertController
    ) { }

  ngOnInit() {
    console.log('ngOnInit');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.get('recipeId')){
        //redirect
        this.router.navigate(["/recipes"]);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    })
  }


  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDİdEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');

  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  deleteRecipe(){
    this.alertCtrl.create({
      header:"Are you sure delete the recipe?", 
    message:"Do you realy want to delete recipe?", 
    buttons:[{
        text:"Cancel",
        role:"cancel"
    },{
      text:"Delete",
      handler:() =>{
        this.recipesService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(["/recipes"]);
      }
    }]}).then(alertEl => {
      alertEl.present();
    })
    
  }

}
