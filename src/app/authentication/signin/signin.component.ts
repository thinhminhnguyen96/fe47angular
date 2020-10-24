import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthencationService } from "src/app/core/services/authencation.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(
    private authencationService: AuthencationService,
    private router: Router
  ) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      matKhau: new FormControl("", [
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,}/),
      ]),
    });
  }

  ngOnInit(): void {}
  xyLyDangNhap(): void {
    // kiểm tra form có hợp lệ hay không
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) return;
    console.log(this.signinForm.value);
    this.authencationService.dangNhap(this.signinForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem("userInfo", JSON.stringify(res));
        if (res.maLoaiNguoiDung === "khachHang") {
          this.router.navigate(["/"]);
        } else {
          this.router.navigate(["/admin"]);
        }
      },
      error: (err) => {
        console.log(err.error);
      },
      complete: () => {
        console.log("đăng nhập thành công");
      },
    });
  }
}
