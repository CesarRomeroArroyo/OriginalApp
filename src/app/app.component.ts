import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OriginalApp';
  showMenu = false;
  page: any;
  constructor(private router: Router) {
    this.router.events.subscribe((data: any)=> {
      if(data.url){
        this.page = data.url;
      }
    });
  }
}
