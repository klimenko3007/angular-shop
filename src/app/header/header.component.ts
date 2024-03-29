import { Component} from '@angular/core';
import { DataStorage } from '@shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  constructor(private dataStorage: DataStorage) {}
  public onSaveClicked() {
    this.dataStorage.storeRecipes();
  }
  public onFetchClicked() {
    this.dataStorage.getRecipes().subscribe();
  }

}
