import {Directive, ElementRef, Renderer, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {

  private deltaX: number = 0;
  private deltaY: number = 0;

  private dragX: number = 0;
  private dragY: number = 0;

  private dragOverFunction: any; //function to detach dragover listener.

  constructor(private _elementRef: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    //TODO: make the element draggable only when this attribute it set.
    this.renderer.setElementAttribute(this._elementRef.nativeElement, 'draggable', 'true');
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(e) {
    if (e.dataTransfer != null) {
      e.dataTransfer.setData('text/plain', null);
    }
    //event listener to retrieve dragover coordinates. attached only when needed to improve performance.
    console.log(this._elementRef.nativeElement.parentNode);
    this.dragOverFunction = this.renderer.listen(this._elementRef.nativeElement.parentNode,'dragover', (ev:DragEvent)=>{
      this.dragX = ev.x;
      this.dragY = ev.y;
    });

    console.log("started dragging");

    this.deltaX = e.x - this._elementRef.nativeElement.offsetLeft;
    this.deltaY = e.y - this._elementRef.nativeElement.offsetTop;
  }

  @HostListener('drag', ['$event'])
  onDrag(e) {
    this.setChanges(this._elementRef.nativeElement, this.renderer, this.dragX, this.dragY, this.deltaX, this.deltaY);
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e) {
    //reset all coordinates.
    this.deltaX = 0;
    this.deltaY = 0;
    this.dragX = 0;
    this.dragY = 0;
    console.log('stopped dragging!');

    //remove the doc event handler when not needed.
    this.dragOverFunction();
  }


  //pure function. Update the element to its new coordinates.
  private setChanges(el: any, rend: Renderer, tempX: number, tempY: number, delX: number, delY: number) {
    if (!tempX || !tempY) return;

    rend.setElementStyle(el, 'top', (tempY - delY) + 'px');
    rend.setElementStyle(el, 'left', (tempX - delX) + 'px');

  }
}
