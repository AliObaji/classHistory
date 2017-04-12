import { Directive,ElementRef,Renderer,OnInit,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDraggable]',
  host: {
    '(click)': 'onClick($event)'
  }
})
export class DraggableDirective implements OnInit,AfterViewInit{

  constructor(private el: ElementRef,private renderer: Renderer) {

  }

  ngOnInit(){
    this.renderer.setElementStyle(this.el.nativeElement,"background-color","blue");
  }

  ngAfterViewInit(){
    console.log(this.el.nativeElement.getAttribute('width'));

  }

  onClick(event: MouseEvent){
    console.log(event.x);
    console.log(event.y);
  }

}
