import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [CommonModule,FormsModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  @Input() formation: any;
  @Output() closeForm = new EventEmitter<void>();

  gouvernorats = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Nabeul', 'Zaghouan', 'Béja', 'Jendouba',
    'Kasserine', 'Kairouan', 'Sidi Bouzid', 'Siliana', 'Monastir', 'Mahdia', 'Sousse', 'Kebili',
    'Gabès', 'Medenine', 'Tozeur', 'Gafsa', 'Tataouine', 'Sfax', 'Bizerte', 'Médnine', 'Tunis'
  ];

  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  isSubmitted: boolean = false;
  formSubmitted: boolean = false;

  user = {
    name: '',
    prenom: '',
    email: '',
    telephone: '',
    gouvernorat: '',
    ville: '',
    codePostal: '',
  };

  selectedFile: string | ArrayBuffer | null = null;

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => this.selectedFile = reader.result;
      reader.readAsDataURL(file);
    }
  }

  closeFormPopup() {
    this.closeForm.emit();  // Ferme le formulaire en émettant un événement
  }

  onSubmit(): void {
    const inscriptionData = {
      formation: {
        name: this.formation.name,
        description: this.formation.shortDescription,
        duration: this.formation.duration,
      },
      user: {
        name: this.user.name,
        prenom: this.user.prenom,
        email: this.user.email,
        telephone: this.user.telephone,
      },
      photo: this.selectedFile
    };

    console.log(inscriptionData);

    // Ferme le formulaire et affiche le modal
    this.isSubmitted = true;
    this.formSubmitted = true;
    
  }

  closePopup() {
    this.isSubmitted = false; // Ferme le pop-up
    this.closeForm.emit();  // Ferme le formulaire en émettant un événement
  }
}
