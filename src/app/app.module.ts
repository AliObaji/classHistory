import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routers
import { RoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { MainFormComponent } from './Components/main-form/main-form.component';
import { ClassRoomComponent } from './components/class-room/class-room.component';

//directives
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ClassRoomComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
