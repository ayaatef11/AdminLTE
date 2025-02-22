import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-enhanced',
  standalone: true,
  imports: [],
  templateUrl: './enhanced.component.html',
  styleUrl: './enhanced.component.css'
})
export class EnhancedComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadStylesheets();
  }

  loadStylesheets() {
    this.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
    this.addStylesheet('/plugins/select2/css/select2.min.css');
    this.addStylesheet('/dist/css/adminlte.min.css');
  }

  addStylesheet(href: string) {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', href);
    this.renderer.appendChild(document.head, link);
  }
}
