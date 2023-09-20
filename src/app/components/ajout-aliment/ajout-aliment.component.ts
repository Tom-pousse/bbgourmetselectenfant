import { Component } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { NewAliment } from 'src/app/models/newAliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-ajout-aliment',
  templateUrl: './ajout-aliment.component.html',
  styleUrls: ['./ajout-aliment.component.css'],
})
export class AjoutAlimentComponent {
  aliment!: Aliment;

  constructor(private alimentService: AlimentService) {}

  createAliment(
    libelle: string,
    age_introduction: number,
    category: number,
    saisons: string,
    restrictions: string
  ) {
    let infoAliment = {
      libelle: libelle,
      age_introduction: age_introduction,
      category: Number(category),
      saisons: saisons,
      restrictions: restrictions,
    };
    console.log('je reçoie', infoAliment);

    if (!libelle || !age_introduction || !category || !saisons) {
      // alert(`Merci de renseigner les champs vides`);
      console.log('error methode ', infoAliment);
    } else {
      this.alimentService.createAliment(infoAliment).subscribe((data) => {
        if (data.status == 'OK') {
          console.log('jai creer', data);
          return;

          alert(`L'aliment id ${data.data.id} a été créée.`);
        }
        return NaN;
      });
    }
  }
}
