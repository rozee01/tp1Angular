import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: 'input[appArcEnCiel]',
})
export class ArcEnCielDirective implements OnInit{
  private colors: string[] = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F3FF33', '#33FFF5', '#FF9133'];

  constructor(private element: ElementRef) { }

  @HostBinding('style.color') textColor!: string;
  @HostBinding('style.borderColor') borderColor!: string;
  @HostListener('keyup') onKeyup() {
    const randomColor = this.getRandomColor();
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
  ngOnInit() {
    const randomColor = this.getRandomColor();
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }

}
