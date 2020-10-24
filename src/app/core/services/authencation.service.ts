import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthencationService {
  // currentUserSubject : cập nhật và lưu trữ data
  private currentUserSubject = new BehaviorSubject(null);
  //currentUser :để component có thể subscribe dc sự thay đổi của nó
  currentUser = this.currentUserSubject.asObservable();
  constructor(private http: HttpClient) {}
  initcurrentUser(): void {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.currentUserSubject.next(JSON.parse(userInfo));
    }
  }
  dangKy(values: any) {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    return this.http.post(url, { ...values, maNhom: "GP01" });
  }
  dangNhap(value: any) {
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post(url, value).pipe(
      tap((res) => {
        this.currentUserSubject.next(res);
      })
    );
  }
}
