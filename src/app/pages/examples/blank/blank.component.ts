import { Component } from '@angular/core';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {
  constructor() {}

  ngOnInit(): void {
    this.loadStylesheets([
      "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback", // Google Font
      "../../plugins/fontawesome-free/css/all.min.css", // Font Awesome
      "../../dist/css/adminlte.min.css", // AdminLTE Theme
    ]);
  }

  private loadStylesheets(urls: string[]): void {
    urls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    });
  }

}
