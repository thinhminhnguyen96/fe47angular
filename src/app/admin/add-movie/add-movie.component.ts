import { MoviesService } from "src/app/core/services/movies.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"],
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  imageReview: string | ArrayBuffer = "";
  constructor(private movieService: MoviesService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(""),
      biDanh: new FormControl(""),
      trailer: new FormControl(""),
      hinhAnh: new FormControl(""),
      moTa: new FormControl(""),
      ngayKhoiChieu: new FormControl(""),
    });
  }

  ngOnInit(): void {}
  handleAddMovie(): void {
    this.movieService.addMovie(this.form.value).subscribe();
    console.log(this.form.value);
  }
  handleChangeFile(event): void {
    console.log(event.target.value);
    console.log(event.target.files);
    this.form.patchValue({ hinhAnh: event.target.files[0] });

    // biến đối tượng file thành chuỗi string base64 có thể gắng vào tag img
    const fileReader = new FileReader();
    const file = event.target.files[0];
    if (!file) return;
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onloadend = (e) => {
      console.log(e.target.result);
      this.imageReview = e.target.result;
    };
  }
}
