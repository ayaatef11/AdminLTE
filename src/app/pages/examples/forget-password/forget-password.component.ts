import { Component } from '@angular/core';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private forgetPassword: ForgetPasswordService) {}

  ngOnInit() {
    // Set Page Title
    this.forgetPassword.updateTitle('AdminLTE 3 | Forgot Password');

    // Set Meta Tags
    this.forgetPassword.updateMeta('viewport', 'width=device-width, initial-scale=1');
    this.forgetPassword.updateMeta('charset', 'utf-8');

    // Add Stylesheets
    this.forgetPassword.addStylesheet('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback');
    this.forgetPassword.addStylesheet('../../plugins/fontawesome-free/css/all.min.css');
    this.forgetPassword.addStylesheet('../../plugins/icheck-bootstrap/icheck-bootstrap.min.css');
    this.forgetPassword.addStylesheet('../../dist/css/adminlte.min.css');
  }
}
