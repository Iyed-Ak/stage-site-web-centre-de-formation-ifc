import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importer CommonModule
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule], // Ajouter les modules ici
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  export class ContactComponent implements OnInit {
    contactForm!: FormGroup;
    formSubmitted = false;
    isSubmitting = false;
  
    constructor(private fb: FormBuilder) {}
  
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
        console.log('Form Submitted', this.contactForm.value);
        // Simulate an API call or delay
        setTimeout(() => {
          this.formSubmitted = true;
          this.isSubmitting = false;
          this.contactForm.reset();
        }, 2000); // Simulating an API call delay
      }
    }
  }