import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
  ],
})
export class MaterialModule {}
