/**
 * Created by Lenovo on 16-Apr-17.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})

export class MainFormComponent{
  private chairs: number;

  constructor(private Router: Router){}

  onSubmit(){
    this.Router.navigate(['/classroom',this.chairs]);
  }
}
