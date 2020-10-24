import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AuthencationService } from "src/app/core/services/authencation.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  @ViewChild("signupForm") signupForm: NgForm;
  constructor(private authencationService: AuthencationService) {}

  ngOnInit(): void {}

  checkDirtyForm() {
    return this.signupForm.dirty;
  }

  xuLyDangKy(signupForm: NgForm): void {
    // kiểm tra form có hợp lệ hay không
    if (signupForm.invalid) return;
    // call API đăng kí
    console.log(signupForm.value);
    this.authencationService.dangKy(signupForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err.err);
      },
      complete: () => {
        console.log("Đăng kí đã thành công");
      },
    });
  }
}
