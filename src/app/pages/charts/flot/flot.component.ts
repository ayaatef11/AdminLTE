import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flot',
  standalone: true,
  imports: [],
  templateUrl: './flot.component.html',
  styleUrl: './flot.component.css'
})
export class FlotComponent {
 constructor(private titleService:Title,private metaService:Meta){
  this.metaService.updateTag({charset:"utf-8",name:"viewport",content:"width=device-width, initial-scale=1 "});
  this.titleService.setTitle('AdminLTE | Flot Charts')
//              font awsome
const fontLink=document.createElement('link');
fontLink.rel='stylesheet';
fontLink.href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback";
document.head.appendChild(fontLink);
const faLink=document.createElement('link');
    faLink.href="../../plugins/fontawesome-free/css/all.min.css";
    document.head.appendChild(faLink);
    const themeLink=document.createElement('link');
    themeLink.href="../../dist/css/adminlte.min.css";
    document.head.appendChild(themeLink);
 }
}
