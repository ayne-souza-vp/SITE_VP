import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vp-banner',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // constructor(private router: Router) {}

  contactForm = this.fb.group({
    email: ['', Validators.required],
  });

  onSubmit() {
    let form = this.contactForm.value;
    this.router.navigate(['/contact'], { state: { email: form.email } })
  }
}
