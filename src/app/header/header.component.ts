import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<String>()

  onLinkClicked(link: String) {
    this.linkClicked.emit(link)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
