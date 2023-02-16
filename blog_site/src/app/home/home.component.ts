import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: any;

  constructor() {
    // this.loadPosts();
  }
  ngOnInit(): void {
    this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
  }

  toggleContent(post: any) {
    post.showContent = !post.showContent;
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
}
