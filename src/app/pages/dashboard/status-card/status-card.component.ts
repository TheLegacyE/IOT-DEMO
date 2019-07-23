import { Component, Input } from '@angular/core';
import {FirebaseService} from '../service/firebase.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="selectedItem()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
        <div class="status paragraph-2">{{ message }}</div>
        <div class="status paragraph-2">{{degree}}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = false;

  private items: Array<any>;
  private message = "";
  private degree = 0;

  constructor(private fb:FirebaseService){

  }

  ngOnInit(){
    this.fb.getData().valueChanges().subscribe((data) => {
      console.log("data", data);
      data.forEach(car => {
        this.message = car['message'];
        this.on = (car['moving'] == "yes")? true:false;
        this.degree = (car['degree'])?car['degree']:0;
      })
    })
  }
}
