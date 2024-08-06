import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vp-card-soluctions',
  standalone: true,
  imports: [
    TagComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './card-soluctions.component.html',
  styleUrl: './card-soluctions.component.scss'
})
export class CardSoluctionsComponent {
  @Input() item!: any;
}
