import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';

  pageShow='shoppingList';

  onNavigate(feature: string){
    if(feature==='recipe'){
      this.pageShow= 'recipe';
    }else{
      this.pageShow= 'shoppingList'
    }

  }
}
