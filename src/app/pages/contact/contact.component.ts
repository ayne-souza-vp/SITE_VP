import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { FormService } from '../../services/form.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FullLoadingComponent } from '../../shared/full-loading/full-loading.component';


@Component({
  selector: 'vp-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ToastrModule,
    FullLoadingComponent
  ]
})
export class ContactComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  public email: string = '';
  public contactForm!: FormGroup;
  public arrayNumberCollaborators = [
    { value: 'UP_TO_TEN', name: 'Até 10' },
    { value: 'ELEVEN_TO_FIFTY', name: '11 - 50' },
    { value: 'FIFTY_ONE_TO_ONE_HUNDRED', name: '51 - 100' },
    { value: 'ONE_HUNDRED_ONE_TO_THREE_HUNDRED', name: '101 - 300' },
    { value: 'THREE_HUNDRED_ONE_TO_FIVE_HUNDRED', name: '301 - 500' },
    { value: 'FIVE_HUNDRED_ONE_TO_A_THOUSAND', name: '501 - 1000' },
    { value: 'OVER_A_THOUSAND', name: 'Mais de 1000' },
  ];
  public loading: boolean = false;

  public fullNameCtrl: any = '';
  public optionsProducts = [
    {name: 'Vale Presente', value: 'VP'},
    {name: 'Vale Benefício', value: 'VB'},
    {name: 'Vale Presente e Vale Benefício', value: 'All'}
  ];

  public cnpjError: string = '';

  constructor(
    private formService: FormService,
    private toastr: ToastrService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras?.state) this.email = navigation?.extras?.state?.['email'];
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: [this.email || '', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      product: ['', Validators.required],
      companyFederalId: ['', [Validators.required]],
      companyName: ['', Validators.required],
      companySite: ['', Validators.required],
      companyArea: ['', Validators.required],
      office: ['', Validators.required],
      collaboratorsNumber: ['', Validators.required],
      message: [''],
    });

    this.fullNameCtrl = this.contactForm.controls['fullName'];
  }

  onSubmit(): void {

    let addressSite = this.contactForm.controls['companySite'].value;
    if (!addressSite.startsWith('http://') && !addressSite.startsWith('https://')) {
      addressSite = 'http://' + addressSite;
    }

      const data = {
        userEmail: "naiara.goncalves@valepresente.com.br",
        email: this.contactForm.controls['email'].value,
        name: this.contactForm.controls['fullName'].value,
        phone: this.contactForm.controls['phone'].value,
        notes: this.contactForm.controls['message'].value,
        customFields: {
          "66211735f20d275d55bb5196": this.contactForm.controls['product'].value,
          "65e8739a66cb3977646eb335": "Formulário Site",
          "66ad411952064ae76c230ae2": this.contactForm.controls['collaboratorsNumber'].value,
          "66ad41379b379ad29ebb311e": this.contactForm.controls['companyArea'].value,
          "66ad41419b379ad29ebb312f": this.contactForm.controls['office'].value
        },
        company: {
          name: this.contactForm.controls['companyName'].value,
          cnpj: this.contactForm.controls['companyFederalId'].value,
          homepage: addressSite
        },
        createOpportunity: "always",
        pipelineId: "65f08cfacf116915f4bf3d72"
      }

      this.loading = true;

      this.formService.sendDataForm(data).subscribe({
        next: (result) => {
          this.toastr.success('Seu contato foi enviado com sucesso!', 'Sucesso');
        }, error: (err) => {
          this.toastr.error('Não foi possível enviar o seu contato, tente novamente mais tarde.', 'Erro');
        }, complete: () => {
          this.loading = false;
          this.contactForm.reset();
        }
      });
  }

  public getErrorFullName () {
    if(this.fullNameCtrl.hasError('required')) {
      return 'Nome completo é obrigatório';
    }
    return this.fullNameCtrl.hasError('minLength') ? 'Informe um nome e sobrenome' : '';
  }


  validarCNPJ(cnpj: string): boolean {
    const multiplicadoresPrimeiroDigito = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicadoresSegundoDigito = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) {
      return false;
    }

    if (/^(\d)\1+$/.test(cnpj)) {
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 12; i++) {
      soma += parseInt(cnpj[i]) * multiplicadoresPrimeiroDigito[i];
    }
    const primeiroDigitoVerificador = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(cnpj[i]) * multiplicadoresSegundoDigito[i];
    }
    const segundoDigitoVerificador = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    return cnpj.endsWith(
      primeiroDigitoVerificador.toString() +
      segundoDigitoVerificador.toString()
    );
  }

  onCnpjInput() {
    const cnpj = this.contactForm.get('companyFederalId')?.value.replace(/[^\d]+/g, '');
    const cnpjIsValid = this.validarCNPJ(cnpj);

    if (!cnpjIsValid) {
      this.cnpjError = 'CNPJ inválido';
      this.contactForm.get('companyFederalId')?.setErrors({ invalidCNPJ: true });
    } else {
      this.cnpjError = '';
      this.contactForm.get('companyFederalId')?.setErrors(null);
    }
  }
}

export enum EmployeeNumber {
	UP_TO_TEN = 'Até 10',
	ELEVEN_TO_FIFTY = '11 - 50',
	FIFTY_ONE_TO_ONE_HUNDRED = '51 - 100',
	ONE_HUNDRED_ONE_TO_THREE_HUNDRED = '101 - 300',
	THREE_HUNDRED_ONE_TO_FIVE_HUNDRED = '301 - 500',
	FIVE_HUNDRED_ONE_TO_A_THOUSAND = '501 - 1000',
	OVER_A_THOUSAND = 'Mais de 1000',
}
