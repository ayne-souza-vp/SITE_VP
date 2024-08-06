import { Component } from '@angular/core';
import { ItemProductsAdvantageComponent } from '../../../../shared/components/item-products-advantage/item-products-advantage.component';

@Component({
  selector: 'vp-products-advantage',
  standalone: true,
  imports: [ItemProductsAdvantageComponent],
  templateUrl: './products-advantage.component.html',
  styleUrl: './products-advantage.component.scss'
})
export class ProductsAdvantageComponent {
  public itemCompany!: Items[];
  public itemCollaborator!: Items[];

  ngOnInit() {
    this.itemCompany = [
      {
        icon: 'vp-like',
        title: 'Segurança',
        description: 'Segurança jurídica, benefícios no PAT, e suporte técnico para sua empresa;'
      },
      {
        icon: 'vp-notebook',
        title: 'Autonomia',
        description: 'Plataforma exclusiva para pedidos, gestão de campanhas e benefícios, com histórico de movimentações e atendimento online.'
      },
      {
        icon: 'vp-give-star',
        title: 'Flexibilidade',
        description: 'Solicite a partir de 1 cartão e envie ao colaborador ou empresa, com condições que cabem no seu bolso e se adaptam às necessidades do seu negócio.'
      }
    ];


    this.itemCollaborator = [
      {
        icon: 'vp-chat',
        title: 'Suporte',
        description: 'Conte com uma central de ajuda exclusiva e atendimento por chat online no app ou site.'
      },
      {
        icon: 'vp-smartphone',
        title: 'Autonomia',
        description: 'Utilize o app Vale Presente para desbloquear os cartões, consultar gastos, saldo e muito mais de forma prática e rápida!'
      },
      {
        icon: 'vp-store',
        title: 'Liberdade',
        description: 'Presentes e benefícios aceitos em todos os estabelecimentos e lojas online credenciadas à Mastercard no mundo todo.'
      }
    ];
  }
}

interface Items {
  icon: string;
  title: string;
  description: string;
}
