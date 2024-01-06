import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AccountService} from "../../auth/services/account.service";
import {AsyncPipe, NgIf, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgIf,
    TitleCasePipe
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(public accountService: AccountService) {
  }

  logout(): void {
    this.accountService.logout();
  }
}
