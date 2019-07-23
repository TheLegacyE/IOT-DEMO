import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { StatusCardComponent } from './status-card/status-card.component';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {FirebaseService} from './service/firebase.service';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent
  ],
  providers:[FirebaseService]
})
export class DashboardModule { }
