/**
 * Created by Lenovo on 16-Apr-17.
 */
import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';


import { ChairModel } from '../../models/chair.model';

@Component({
  selector: 'class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})

export class ClassRoomComponent implements OnInit{
  private chairsNumber: number;
  private chairs: Array<ChairModel>;

  constructor(private Route: ActivatedRoute){
    this.chairs = [];
  }

  ngOnInit(){
      this.retrieveParams();
      this.createChairs(this.chairsNumber);
  }


  private retrieveParams(){
    this.Route.params.subscribe((params) => {
      if(params['num'] > 20){
        this.chairsNumber = 20;
      }
      else if(params['num'] < 5){
        this.chairsNumber = 5;
      }
      else{
        this.chairsNumber = params['num'];
      }
    });
  }

  private createChairs(chairsNumber: number){
    for(var i = 1; i <= chairsNumber; i++){
      let chair = new ChairModel();
      this.chairs.push(chair);
    }
  }

}
