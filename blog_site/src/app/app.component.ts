import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blog_site';
  // receivedData:any;
  // receiveData(data:any){
  //   this.receivedData=data;
  blogs: [] = [];
  ngOnInit() {
    // this.form.value
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
}
