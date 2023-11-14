import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    const button = event.target as HTMLElement;
    const menu = button.nextElementSibling as HTMLElement;
    menu?.classList.toggle('show');
  }
  constructor(private elRef: ElementRef) {}
}
