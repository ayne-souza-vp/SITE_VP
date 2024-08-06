import { Component, HostListener, inject, Inject, PLATFORM_ID } from '@angular/core';
import { CardNumbersComponent } from '../../../../shared/components/card-numbers/card-numbers.component';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vp-customer-numbers',
  standalone: true,
  imports: [
    CardNumbersComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './customer-numbers.component.html',
  styleUrl: './customer-numbers.component.scss'
})
export class CustomerNumbersComponent {
  public numbers!: Numbers[];
  public customers!: Customers[];
  public arrayQtdPerView = [1, 2, 3, 6];
  public currentIndex: number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.numbers = [
      {
        icon: 'vp-building',
        number: '+8 mil',
        description: 'empresas'
      },
      {
        icon: 'vp-credit-card',
        number: '+2 milhões',
        description: 'cartões emitidos'
      },
      {
        icon: 'vp-money-cash',
        number: '+2 bilhões',
        description: 'transacionados'
      }
    ];

    this.customers = [
      {
        image: 'multiplan',
        name: 'Multiplan'
      },
      {
        image: 'advanta',
        name: 'Advanta'
      },
      {
        image: 'capemisa',
        name: 'Capemisa'
      },
      {
        image: 'brasfertil',
        name: 'Brasfertil'
      },
      {
        image: 'comercial_hello',
        name: 'Comercial Hello'
      },
      {
        image: 'maqnelson',
        name: 'Maqnelson'
      }
    ]
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustCurrentIndex();
  }

  get transform(): string {
    return `translateX(-${this.currentIndex * (100 / this.getCardsPerView())}%)`;
  }

  private getCardsPerView(): number {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 768) {
        return this.arrayQtdPerView[0];
      } else if (window.innerWidth <= 992) {
        return this.arrayQtdPerView[1];
      } else if (window.innerWidth <= 1200) {
        return this.arrayQtdPerView[2];
      } else {
        return this.arrayQtdPerView[3];
      }
    }
    return this.arrayQtdPerView[3];
  }

  next(): void {
    if (this.canGoNext()) {
      this.currentIndex++;
    }
  }

  previous(): void {
    if (this.canGoPrevious()) {
      this.currentIndex--;
    }
  }

  canGoNext(): boolean {
    return this.currentIndex < this.maxIndex();
  }

  canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  private adjustCurrentIndex(): void {
    const maxIndex = this.maxIndex();
    if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }
  }
  private maxIndex(): number {
    const cardsPerView = this.getCardsPerView();
    return this.customers.length - cardsPerView;
  }
}

interface Numbers {
  icon: string,
  number: string,
  description: string
}

interface Customers {
  image: string,
  name: string
}
