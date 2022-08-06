import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,

  ],
  providers: [
    DashboardService    // add service to providers array, here
                        // if you want to use it only in this module
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ]
})
export class AdminModule { }
