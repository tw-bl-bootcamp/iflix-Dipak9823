import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RootServiceService } from 'src/app/Service/root-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private rootservice: RootServiceService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log("Email ID" + this.loginForm.value.email)
    localStorage.setItem('email', this.loginForm.value.email);
    this.rootservice.login(this.loginForm.value).subscribe((response: any) => {

      console.log(response);
      localStorage.setItem('token', response.token);
      console.log("Token stored" + localStorage.getItem("token"));

      this.router.navigate(['/dashboard']);
    },
      error => {
        console.log("Response From post data is", error);
      }
    )

  }
}
