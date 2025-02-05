import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormationService } from '../../frms.service';

@Component({
  selector: 'app-populaire',
  imports: [CommonModule,RouterModule],
  templateUrl: './populaire.component.html',
  styleUrl: './populaire.component.css'
})
export class PopulaireComponent implements OnInit {
  featuredFormations: any[] = []; // Liste des formations populaires
  
  // Indices des formations que tu veux afficher
  selectedIndices: number[] = [0, 4, 8];  // Indices pour afficher les formations 1, 6 et 4

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.getFeaturedFormations();
  }

  getFeaturedFormations(): void {
    const allFormations = this.formationService.getFormations(); // Récupérer toutes les formations
    
    // Sélectionner les formations par les indices spécifiés
    this.featuredFormations = this.selectedIndices.map(index => allFormations[index]);
  }
}