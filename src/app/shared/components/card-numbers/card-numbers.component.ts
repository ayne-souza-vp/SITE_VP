import { Component, Input } from '@angular/core';

@Component({
  selector: 'vp-card-numbers',
  standalone: true,
  imports: [],
  templateUrl: './card-numbers.component.html',
  styleUrl: './card-numbers.component.scss'
})
export class CardNumbersComponent {
  @Input() number!: Numbers;
}

interface Numbers {
  icon: string,
  number: string,
  description: string
}
