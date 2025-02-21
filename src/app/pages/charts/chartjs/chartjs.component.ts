import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [],
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.css'
})
export class ChartjsComponent {
  //load fonts and styles dynamically
  ngOnInit() {
    // Load Google Font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback';
    document.head.appendChild(fontLink);

    // Load Font Awesome
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = '../../plugins/fontawesome-free/css/all.min.css';
    document.head.appendChild(faLink);

    // Load AdminLTE Theme
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = '../../dist/css/adminlte.min.css';
    document.head.appendChild(themeLink);
  }

  constructor(private titleService: Title, private metaService: Meta) {
    // Set Page Title
    this.titleService.setTitle('AdminLTE 3 | ChartJS');

    // Set Meta Tags
    this.metaService.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.metaService.updateTag({ charset: 'utf-8' });
}
}
