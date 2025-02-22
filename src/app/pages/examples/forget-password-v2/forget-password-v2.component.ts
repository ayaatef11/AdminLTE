import { Component } from '@angular/core';
import { ForgetPasswordService } from '../forget-password/forget-password.service';

@Component({
  selector: 'app-forget-password-v2',
  standalone: true,
  imports: [],
  templateUrl: './forget-password-v2.component.html',
  styleUrl: './forget-password-v2.component.css'
})
export class ForgetPasswordV2Component {
constructor(private forgetPassword:ForgetPasswordService){}
ngOnInit(){
this.forgetPassword.updateTitle("AdminLTE 3 | Forgot Password (v2)")
this.forgetPassword.updateMeta('viewport', 'width=device-width, initial-scale=1');
    this.forgetPassword.updateMeta('charset', 'utf-8');

    // Add Stylesheets
    this.forgetPassword.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.forgetPassword.addStylesheet('../../plugins/fontawesome-free/css/all.min.css');
    this.forgetPassword.addStylesheet('../../plugins/icheck-bootstrap/icheck-bootstrap.min.css');
    this.forgetPassword.addStylesheet('../../dist/css/adminlte.min.css');

}}
