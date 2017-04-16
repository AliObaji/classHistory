/**
 * Created by Lenovo on 16-Apr-17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassRoomComponent } from './Components/class-room/class-room.component';

const routes : Routes = [
  {path: 'classroom', component: ClassRoomComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule{}
