import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserRowComponent } from '../components/user-row/user-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [UserListComponent, UserRowComponent],
  declarations: [HomePage, UserListComponent, UserRowComponent]
})
export class HomePageModule {}
