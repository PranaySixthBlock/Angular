import { Directive , ElementRef , OnInit } from "@angular/core";

@Directive({
    selector: '[dragDrop]'
})

export class DragDropDirective implements OnInit { 
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'black' ;
    }
}