// import { Directive } from '@angular/core';
//
// @Directive({
//   selector: '[appStrikethrough]'
// })
// export class StrikethroughDirective {
//
//   constructor() { }
//
// }

// Custom Directive
// import { Directive,ElementRef } from '@angular/core';
//
// @Directive({
//   selector: '[appStrikethrough]'
// })
// export class StrikethroughDirective {
//   constructor(private elem:ElementRef){
//     this.elem.nativeElement.style.textDecoration='line-through';
//   }
//
// }
// Custom Directive (create a function textDeco that targets the element reference and takes in a CSS style attribute as an argument. We target the style.textDecoration style and it can only have two states none for when the goal is not completed and line-through when the goal is complete)
import { Directive,ElementRef,Input ,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {


  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
