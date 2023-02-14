import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
  providers: [ContentfulService],
})
export class CreateBlogComponent implements OnInit {
  form: FormGroup;
  isEditMode: boolean = false;
  isViewMode: boolean = false;
  viewdisable = false;
  editID: any;
  

  ngOnInit() {
    this.route.url.subscribe((url) => {
      if (url[0].path == 'edit') {
        this.isEditMode = true;
        this.route.params.subscribe((params) => {
          this.editID = params['id'];
        });
      }
      if (url[0].path == 'view') {
        this.isViewMode = true;
        this.route.params.subscribe((params) => {
          this.editID = params['id'];
        });
      }
    });

    if (!this.editID) {
      this.form = this.formBuilder.group({
        title: ['', [Validators.required]],
        description: [''],
      });
    } else {
      const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
      this.form = this.formBuilder.group(blogs[this.editID]);
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({});
  }

  onSubmit(): void {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    if (this.isEditMode) {
      blogs[this.editID] = this.form.value;
    } else {
      blogs.push(this.form.value);
    }
    debugger;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    this.router.navigate(['/homepage']);
    
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/homepage']);
  }
  // onView() {
  //   if (!this.is) {
  //     this.viewdisable = true;
  //   }
  }

