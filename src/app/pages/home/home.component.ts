import { Component } from '@angular/core';
import { BannerComponent } from "./component/banner/banner.component";
import { SolutionsComponent } from './component/solutions/solutions.component';
import { ProductsAdvantageComponent } from './component/products-advantage/products-advantage.component';
import { CustomerNumbersComponent } from './component/customer-numbers/customer-numbers.component';

@Component({
  selector: 'vp-home',
  standalone: true,
  imports: [BannerComponent, SolutionsComponent, ProductsAdvantageComponent, CustomerNumbersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
