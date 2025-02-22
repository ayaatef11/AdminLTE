import { Component, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css'
})
export class AdvancedComponent {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateMeta(name: string, content: string) {
    let meta = document.head.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = this.renderer.createElement('meta');
      this.renderer.setAttribute(meta, 'name', name);
      this.renderer.appendChild(document.head, meta);
    }
    this.renderer.setAttribute(meta, 'content', content);
  }

  addStylesheet(href: string) {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', href);
    this.renderer.appendChild(document.head, link);
  }

  loadStylesheets() {
    const stylesheets = [
      'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback',
      '/plugins/fontawesome-free/css/all.min.css',
      '/plugins/daterangepicker/daterangepicker.css',
      '/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
      '/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
      '/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
      '/plugins/select2/css/select2.min.css',
      '/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css',
      '/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css',
      '/plugins/bs-stepper/css/bs-stepper.min.css',
      '/plugins/dropzone/min/dropzone.min.css',
      '/dist/css/adminlte.min.css',
    ];

    stylesheets.forEach(href => this.addStylesheet(href));
  }
}


