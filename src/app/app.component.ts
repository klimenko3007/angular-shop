import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-recipe-app';
  activeLink: String = "Recipes"

  onLinkClicked(link: String) {
    console.log(link)
    this.activeLink = link
  }


}
