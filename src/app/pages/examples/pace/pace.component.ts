import { Component } from '@angular/core';

@Component({
  selector: 'app-pace',
  standalone: true,
  imports: [],
  templateUrl: './pace.component.html',
  styleUrl: './pace.component.css'
})
export class PaceComponent {
constructor(private forgetPassword:ForgetPasswordService){}
ngOnInit(){
this.forgetPassword.updateTitle("AdminLTE 3 | Forgot Password (v2)")
this.forgetPassword.updateMeta('viewport', 'width=device-width, initial-scale=1');
    this.forgetPassword.updateMeta('charset', 'utf-8');

    // Add Stylesheets
    this.forgetPassword.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.forgetPassword.addStylesheet('/plugins/fontawesome-free/css/all.min.css');
    this.forgetPassword.addStylesheet('/plugins/icheck-bootstrap/icheck-bootstrap.min.css');
    this.forgetPassword.addStylesheet('/dist/css/adminlte.min.css');
    this.forgetPassword.addStylesheet('/plugins/pace-progress/themes/black/pace-theme-flat-top.css');

}}

}
