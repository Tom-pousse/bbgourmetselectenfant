import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Enfant } from 'src/app/models/enfant';
import { Restriction } from 'src/app/models/restriction';
import { UpdateEnfant } from 'src/app/models/updateEnfant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RestrictionService } from 'src/app/services/restriction.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-modif-enfant',
  templateUrl: './modif-enfant.component.html',
  styleUrls: ['./modif-enfant.component.css'],
})
export class ModifEnfantComponent {
  @Input() utilisateur!: Utilisateur;
  restriction: Restriction[] = [];
  monEnfant!: Enfant[];
  enfant!: Enfant;

  enfantRestriction: UpdateEnfant = {
    restrictions: [],
  };

  // testRestrictions = [
  //   { id: 1, libelle: 'ouou' },
  //   { id: 2, libelle: 'ouou' },
  //   { id: 3, libelle: 'ouou' },
  // ];

  checkedRestrictions: Restriction[] = [];

  constructor(
    private enfantService: UtilisateurService,
    private restrictionService: RestrictionService // private enfantService: EnfantService
  ) {}

  ngOnInit(): void {
    this.enfantService.getProfilUtilisateur().subscribe((a) => {
      this.monEnfant = a.enfants!;
      console.log(this.monEnfant);
    });

    this.restrictionService.getRestriction().subscribe((data) => {
      this.restriction = data;
    });

    // console.log(this.utilisateur.enfants);
  }

  onChangeRestric(e: Event) {
    const target = e.target as HTMLInputElement;
    // console.log('je log mon target de la box', e.target);
    const infoChecked = JSON.parse(target.value);
    // console.log('value en json', infoChecked);
    if (target.checked) {
      // console.log('if dans 1 er', infoChecked);

      if (this.checkedRestrictions.length === this.restriction.length) {
        this.checkedRestrictions = [];
        this.checkedRestrictions.push(infoChecked);
        // console.log(
        //   'je log mon tableau une fois vider (1er if)',
        //   this.checkedRestrictions
        // );
      } else {
        this.checkedRestrictions.push(infoChecked);
        // console.log(
        //   `else du if dans 1 , je push, ${infoChecked} dans le tableau, ${this.checkedRestrictions} `
        // );
        // console.log(this.checkedRestrictions);
      }
    } else {
      if (this.checkedRestrictions.includes(infoChecked)) {
        this.checkedRestrictions = this.checkedRestrictions.filter(
          (e) => e != infoChecked
        );
        // console.log('if dans else', infoChecked);
      } else {
        this.checkedRestrictions.push(infoChecked);
        // console.log('else dans else', infoChecked);
      }
    }
    // if (this.checkedRestrictions.length === 0) {
    //   this.checkedRestrictions = [...this.restriction];
    //   console.log('last chose', infoChecked);
    // }
  }

  // Ajouter la restriction au tableau si on coche la checkbox
  // Enlever la restriction du tableau si on décoche la checkbox
  // Affiche le table de restriction cochées
}
