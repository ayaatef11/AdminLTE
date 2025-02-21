import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  templateUrl: './inline.component.html',
  styleUrl: './inline.component.css'
})
export class InlineComponent {
  constructor(private titleService:Title,private metaService:Meta){
this.titleService.setTitle('AdminLTE | Inline Charts');
this.metaService.updateTag({name:"viewport",content:'width=devicee-width , initial-scale=1' , charset="utf-8"})
   const fontLink=document.createElement('link');
   fontLink.rel="stylesheet";
   fontLink.href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback";
    const faLink=document.createElement('link');
    faLink.rel="stylesheet";
    faLink.href="../../plugins/fontawesome-free/css/all.min.css"
const adLink=document.createElement('link');
adLink.rel="stylesheet";
adLink.href="../../dist/css/adminlte.min.css";
}
}
