import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailesComponent } from './components/user-detailes/user-detailes.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
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
