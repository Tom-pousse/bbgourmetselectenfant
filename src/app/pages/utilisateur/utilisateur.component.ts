import { Component } from '@angular/core';
import { Enfant } from 'src/app/models/enfant';

import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent {
  utilisateur!: Utilisateur;
  enfants?: Enfant[];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.utilisateurService.getProfilUtilisateur().subscribe({
      next: (response) => {
        console.log('retour get user:', response);
        console.log('retour get enfants', response.enfants);
        (this.utilisateur = response), (this.enfants = response.enfants);
      },
      error: (error) => {
        console.log('Echec get user', error);
      },
    });
  }
}
