import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailesComponent } from './components/user-detailes/user-detailes.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { SharedModule } from './shared/shared.module';
import { UserDyFormComponent } from './components/task7/user-dy-form/user-dy-form.component';
import { PostDyFormComponent } from './components/task7/post-dy-form/post-dy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserListComponent,
    UserDetailesComponent,
    AboutComponent,
    PostsComponent,
    DetailsComponent,
    NotFoundComponent,
    UserFormComponent,
    UserReactiveFormComponent,
    PostFormComponent,
    UserDyFormComponent,
    PostDyFormComponent,
  ],
  imports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
