import { Restriction } from './restriction';

export interface Enfant {
  id?: number;
  prenom: string;
  date_naissance: Date;
  id_utilisateur: number;
  restrictions: Restriction[];
}
