import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFromInputComponent } from './components/dynamic-from-input/dynamic-from-input.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSelectComponent } from './components/input-select/input-select.component';

@NgModule({
  declarations: [DynamicFromInputComponent, DynamicFormComponent, InputTextComponent, InputSelectComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFromInputComponent,
    DynamicFormComponent,
  ],
})
export class SharedModule {}
