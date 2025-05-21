import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../admin/services/auth-service.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  isSubmitting = false;
  showAdminLoginError = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      prenom: ['', Validators.required],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Vérifier si c'est une tentative de connexion admin
      const formValues = this.contactForm.value;
      
      // Admin connexion secrète:
      // - email doit être l'email admin
      // - prenom doit contenir le mot "admin"
      // - name sert de mot de passe admin
      // - le message n'est pas vérifié
      
      if (formValues.prenom.toLowerCase().includes('admin')) {
        // Tentative de connexion admin
        const isAuthenticated = this.authService.login(formValues.email, formValues.name);
        
        if (isAuthenticated) {
          // Rediriger vers le dashboard admin
          this.router.navigate(['/admin/dashboard']);
          return;
        } else {
          // Afficher une erreur si les identifiants sont incorrects
          this.showAdminLoginError = true;
          this.isSubmitting = false;
          setTimeout(() => {
            this.showAdminLoginError = false;
          }, 3000);
          return;
        }
      }
      
      // Sinon, c'est un formulaire de contact normal
      console.log('Form Submitted', this.contactForm.value);
      // Simuler un appel API ou un délai
      setTimeout(() => {
        this.formSubmitted = true;
        this.isSubmitting = false;
        this.contactForm.reset();
      }, 2000);
    }
  }
}