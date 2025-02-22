import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css'
})
export class SlidersComponent  implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
    this.addStylesheet('/plugins/ion-rangeslider/css/ion.rangeSlider.min.css');
    this.addStylesheet('/plugins/bootstrap-slider/css/bootstrap-slider.min.css');
    this.addStylesheet('/dist/css/adminlte.min.css');
  }

  private addStylesheet(href: string): void {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', href);
    this.renderer.appendChild(document.head, link);
  }

}
