import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  <no-side-bar-no-header-layout>  
      <router-outlet></router-outlet>
    </no-side-bar-no-header-layout>  

  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
