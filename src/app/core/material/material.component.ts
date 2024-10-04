import {Component} from '@angular/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { style } from '@angular/animations';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressBarModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  // host: { style: 'display: block; margin: 0 auto; width: 600px' }
})
export class MaterialComponent {
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
