import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
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
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
      }
    });
  }
}
