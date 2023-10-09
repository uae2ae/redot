import { Directive,ElementRef,HostBinding,HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostBinding('class.show') isShow = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //find the dropdown-menu class in the event target and toggle the isShow property
    this.isShow = this.elRef.nativeElement.querySelector('.dropdown-menu').contains(event.target) ? !this.isShow : false;
  }
  constructor(private elRef: ElementRef) {}
}
