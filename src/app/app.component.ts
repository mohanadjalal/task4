import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task4';
  active = [true, false, false];
 

  activate(no: number): void {
    this.active = this.active.map((ac, index) => index === no);
  }
}
