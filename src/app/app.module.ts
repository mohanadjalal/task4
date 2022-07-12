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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
