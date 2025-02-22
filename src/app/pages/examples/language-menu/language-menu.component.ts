import { Component } from '@angular/core';

@Component({
  selector: 'app-language-menu',
  standalone: true,
  imports: [],
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.css'
})
export class LanguageMenuComponent {
  constructor(private forgetPassword:ForgetPasswordService){}
  ngOnInit(){
  this.forgetPassword.updateTitle("AdminLTE 3 | Language Menu")
  this.forgetPassword.updateMeta('viewport', 'width=device-width, initial-scale=1');
      this.forgetPassword.updateMeta('charset', 'utf-8');

      // Add Stylesheets
      this.forgetPassword.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
      this.forgetPassword.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
      this.forgetPassword.addStylesheet('/plugins/flag-icon-css/css/flag-icon.min.css');
      this.forgetPassword.addStylesheet('/dist/css/adminlte.min.css');
  }
}
