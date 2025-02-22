import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery
declare var jsGrid: any; // Declare jsGrid
@Component({
  selector: 'app-isgrid',
  standalone: true,
  imports: [],
  templateUrl: './isgrid.component.html',
  styleUrl: './isgrid.component.css'
})
export class IsgridComponent  implements OnInit, AfterViewInit {

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {
      this.loadStylesheets();
    }

    ngAfterViewInit(): void {
      this.initializeJsGrid();
    }

    loadStylesheets() {
      this.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
      this.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
      this.addStylesheet('/plugins/jsgrid/jsgrid.min.css');
      this.addStylesheet('/plugins/jsgrid/jsgrid-theme.min.css');
      this.addStylesheet('/dist/css/adminlte.min.css');
    }

    addStylesheet(href: string) {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'href', href);
      this.renderer.appendChild(document.head, link);
    }

    initializeJsGrid() {
      $('#jsGrid').jsGrid({
        width: "100%",
        height: "400px",
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        data: [
          { Name: "John Doe", Age: 28, Country: "USA" },
          { Name: "Jane Smith", Age: 34, Country: "UK" }
        ],
        fields: [
          { name: "Name", type: "text", width: 100, validate: "required" },
          { name: "Age", type: "number", width: 50 },
          { name: "Country", type: "text", width: 100 },
          { type: "control" }
        ]
      });
    }
}
