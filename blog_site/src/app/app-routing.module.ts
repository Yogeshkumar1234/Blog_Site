import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'create', component: CreateBlogComponent },
  { path: 'edit/:id', component: CreateBlogComponent },
  { path: 'view/:id', component: CreateBlogComponent },
  { path: 'manage', component: ManageBlogComponent },
  { path: 'homepage', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
