import { Component, OnInit } from "@angular/core";
import { AuthencationService } from "src/app/core/services/authencation.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private authencationService: AuthencationService) {}
  ngOnInit(): void {
    this.authencationService.initcurrentUser();
  }
}
