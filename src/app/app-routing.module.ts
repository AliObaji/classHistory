/**
 * Created by Lenovo on 16-Apr-17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { MainFormComponent } from './Components/main-form/main-form.component';
import { ClassRoomComponent } from './components/class-room/class-room.component';

const routes : Routes = [
  {path: '', redirectTo:'mainform', pathMatch: 'full'},
  {path: 'mainform', component: MainFormComponent},
  {path: 'classroom', component: ClassRoomComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule{}
