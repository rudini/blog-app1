import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialComponent } from './core/material/material.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog-app1';
}
