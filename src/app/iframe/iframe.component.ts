import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [],
  templateUrl: './iframe.component.html',
  styleUrl: './iframe.component.css'
})
export class IframeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
    this.addStylesheet('/dist/css/adminlte.min.css');
    this.addStylesheet('/plugins/overlayScrollbars/css/OverlayScrollbars.min.css');
  }

  private addStylesheet(href: string): void {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', href);
    this.renderer.appendChild(document.head, link);
  }

}
