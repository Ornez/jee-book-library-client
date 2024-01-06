import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AccountService} from "../services/account.service";

export const userRoleGuard: CanActivateFn = (route, state) => {
  return inject(AccountService).isUserRole();
};
