import { Component, Input } from '@angular/core';
import { Enfant } from 'src/app/models/enfant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-card-enfant',
  templateUrl: './card-enfant.component.html',
  styleUrls: ['./card-enfant.component.css'],
})
export class CardEnfantComponent {
  @Input() enfant!: Enfant;
  @Input() utilisateur!: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) {}
  ngOnInit() {
    console.log('les enfants', this.enfant.prenom);
    console.log(this.utilisateur);
  }
}
