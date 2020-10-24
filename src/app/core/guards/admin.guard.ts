import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userinfo = localStorage.getItem("userInfo");
    if (userinfo) {
      const { maLoaiNguoiDung } = JSON.parse(userinfo);
      if (maLoaiNguoiDung === "QuanTri") {
        //là admin
        return true;
      }
      // đã đăng nhập, nhưng maLoaiNguoiDung !==quanTri
      this.router.navigate(["/"]);
      return false;
    }
    this.router.navigate(["/signin"]);

    return true;
  }
}
