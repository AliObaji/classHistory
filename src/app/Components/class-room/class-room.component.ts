/**
 * Created by Lenovo on 16-Apr-17.
 */
import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})

export class ClassRoomComponent implements OnInit{
  private chairsNumber: number;
  constructor(private Route: ActivatedRoute){}

  ngOnInit(){
    this.Route.params.subscribe((params) => {
      this.chairsNumber = params['num'];
    });
  }

}
