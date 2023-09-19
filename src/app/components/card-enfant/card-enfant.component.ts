import { Component, Input } from '@angular/core';
import { Enfant } from 'src/app/models/enfant';

@Component({
  selector: 'app-card-enfant',
  templateUrl: './card-enfant.component.html',
  styleUrls: ['./card-enfant.component.css'],
})
export class CardEnfantComponent {
  @Input() enfants!: Enfant;
  ngOnInit() {
    console.log('les enfants', this.enfants.prenom);
  }
}
