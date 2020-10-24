import { Component, OnInit } from "@angular/core";
import { AuthencationService } from "src/app/core/services/authencation.service";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  currentUser: any = null;
  constructor(private authencationService: AuthencationService) {}

  ngOnInit(): void {
    this.authencationService.currentUser.subscribe({
      next: (res: any) => {
        this.currentUser = res;
      },
    });
  }
}
