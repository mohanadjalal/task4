import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDyFormComponent } from './components/task7/post-dy-form/post-dy-form.component';
import { UserDyFormComponent } from './components/task7/user-dy-form/user-dy-form.component';
import { UserDetailesComponent } from './components/user-detailes/user-detailes.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  {
    path: 'user-form/:id',
    component: UserDyFormComponent,
    title: 'Update User',
  },
  {
    path: 'user-form',
    component: UserDyFormComponent,
    title: 'Create User',
  },
  {
    path: 'post-form/:uId/:pId',
    component: PostDyFormComponent,
    title: 'Update Post',
  },
  {
    path: 'post-form/:uId',
    component: PostDyFormComponent,
    title: 'Create Post',
  },

  { path: 'users', component: UserListComponent, title: 'User List' },
  {
    path: 'user-details/:id',

    component: UserDetailesComponent,
    children: [
      {
        path: 'posts/:id',
        component: PostsComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
    ],
    title: 'Details',
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent, title: '404' },
];
//shared
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
