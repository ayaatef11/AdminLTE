import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';

declare var $: any; // Declare jQuery
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadStylesheets();
  }

  ngAfterViewInit(): void {
    this.initializeDataTable();
  }

  loadStylesheets() {
    this.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
    this.addStylesheet('/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css');
    this.addStylesheet('/plugins/datatables-responsive/css/responsive.bootstrap4.min.css');
    this.addStylesheet('/plugins/datatables-buttons/css/buttons.bootstrap4.min.css');
    this.addStylesheet('/dist/css/adminlte.min.css');
  }

  addStylesheet(href: string) {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', href);
    this.renderer.appendChild(document.head, link);
  }

  initializeDataTable() {
    $(document).ready(function () {
      $('#example').DataTable({
        responsive: true,
        autoWidth: false,
      });
    });
  }
}
