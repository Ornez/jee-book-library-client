import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private accountService: AccountService, private router: Router) {}

  register() {
    const values = {...this.registerForm.value}

    this.accountService.register(values).subscribe({
      next: () => {
        this.router.navigateByUrl('/')
      },
      // error: error => {
      //   this.validationErrors = error;
      // }
    })
  }
}
