import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailesComponent } from './components/user-detailes/user-detailes.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-form/:id', component: UserReactiveFormComponent },
  { path: 'user-form', component: UserReactiveFormComponent },
  { path: 'post-form/:uId/:pId', component: PostFormComponent },
  { path: 'post-form/:uId', component: PostFormComponent },

  { path: 'users', component: UserListComponent },
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
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
