import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'vp-full-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './full-loading.component.html',
  styleUrl: './full-loading.component.scss'
})
export class FullLoadingComponent {
  @Input() loading: boolean = false;
}
