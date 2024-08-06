import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CardSoluctionsComponent } from '../../../../shared/components/card-soluctions/card-soluctions.component';
import { isPlatformBrowser } from '@angular/common';
import { TagComponent } from '../../../../shared/components/tag/tag.component';

@Component({
  selector: 'vp-solutions',
  standalone: true,
  imports: [CardSoluctionsComponent, TagComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  public soluctions!: Soluction[];
  public currentIndex: number = 0;
  public arrayQtdPerView = [1, 2, 3, 4];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

  ngOnInit() {
    this.soluctions = [
      {
        icon: 'vp-gift-card',
        title: 'Vale Essencial',
        description: 'O presente ideal para todas as ocasiões! Use o Vale Presente Essencial para premiar, motivar e encantar seus colaboradores com a liberdade de escolha em milhares de estabelecimentos.',
        link: '',
        tags: ['vp']
      },
      {
        icon: 'vp-gift-digital',
        title: 'Vale Digital',
        description: 'Prático e moderno! O Vale Presente Digital é perfeito para quem quer rapidez e conveniência. Envie por e-mail e permita que seus colaboradores aproveitem em qualquer lugar, a qualquer hora.',
        link: '',
        tags: ['vp']
      },
      {
        icon: 'vp-exclusive-card',
        title: 'Vale Exclusivo',
        description: 'Personalização total! O Vale Presente Exclusivo permite que você adicione um toque especial com a identidade visual da sua empresa, tornando cada premiação única e inesquecível.',
        link: '',
        tags: ['vp']
      },
      {
        icon: 'vp-chef',
        title: 'Vale Alimentação / Refeição',
        description: 'Alimente a satisfação! Com o Vale Alimentação/Refeição, seus colaboradores têm acesso a uma variedade de opções em supermercados e restaurantes, garantindo refeições de qualidade todos os dias.',
        link: '',
        tags: ['vb', 'pat']
      },
      {
        icon: 'vp-gas-station',
        title: 'Vale Combustível',
        description: 'Sempre em movimento! O Vale Combustível é ideal para quem precisa estar na estrada, oferecendo conveniência e economia em postos de gasolina por todo o país.',
        link: '',
        tags: ['vb']
      },
      {
        icon: 'vp-investing-banking',
        title: 'Vale Flexível',
        description: 'Liberdade total! O Vale Flexível é a solução versátil que se adapta às diversas necessidades dos seus colaboradores, permitindo o uso em múltiplas categorias conforme a preferência de cada um.',
        link: '',
        tags: ['vb']
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
        return 1;
      } else if (window.innerWidth <= 992) {
        return 2;
      } else if (window.innerWidth <= 1200) {
        return 3;
      } else {
        return 4;
      }
    }
    return 4;
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
    return this.soluctions.length - cardsPerView;
  }
}

interface Soluction {
  icon: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}
