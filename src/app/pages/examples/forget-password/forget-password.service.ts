import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateTitle(title: string) {
    this.renderer.setProperty(document.head.querySelector('title'), 'textContent', title);
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
}
