import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { SignupComponent } from "../../authentication/signup/signup.component";
@Injectable({
  providedIn: "root",
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // ngăn chặn ng dùng rời khỏi
    // return true => cho phép đi ra khỏi
    if (component.checkDirtyForm()) {
      return confirm("bạn chắc muốn rời khỏi!");
    }
    return true;
  }
}
