import { Component, Input } from '@angular/core';

@Component({
  selector: 'vp-item-products-advantage',
  standalone: true,
  imports: [],
  templateUrl: './item-products-advantage.component.html',
  styleUrl: './item-products-advantage.component.scss'
})
export class ItemProductsAdvantageComponent {
  @Input() item!: Items;
}

interface Items {
  icon: string;
  title: string;
  description: string;
}
