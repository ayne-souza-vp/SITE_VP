import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BannerPagesComponent } from '../../shared/components/banner-pages/banner-pages.component';

@Component({
  selector: 'vp-politics-terms',
  standalone: true,
  imports: [
    BannerPagesComponent,
    MatTabsModule
  ],
  templateUrl: './politics-terms.component.html',
  styleUrl: './politics-terms.component.scss'
})
export class PoliticsTermsComponent {

}
