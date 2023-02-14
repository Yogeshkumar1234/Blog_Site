import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css'],
})
export class ManageBlogComponent implements OnInit {
  blogs:any;
  
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
  }
  editBlog(id: number) {
    this.route.params.subscribe((params) => {
      this.router.navigate(['/edit', id]);
    });
  }
  viewBlog(id:number){
    this.route.params.subscribe((params) => {
      this.router.navigate(['/view',id]);
    });

  }
  deletePost(index:number) {
    let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    this.blogs = blogs;
  }
}
