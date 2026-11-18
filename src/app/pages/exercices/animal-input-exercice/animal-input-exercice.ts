import { Component } from '@angular/core';
import { AnimalCard } from '../../../components/animal-card/animal-card';

interface Animal {
  id: number;
  name: string;
  species: string;
  age: number;
  energy: number;
  adoption: boolean;
}

@Component({
  selector: 'app-animal-input-exercice',
  imports: [AnimalCard],
  templateUrl: './animal-input-exercice.html',
})
export class AnimalInputExercice {
  readonly animals: Animal[] = [
    { id: 1, name: 'Minouche', species: 'Chat', age: 3, energy: 75, adoption: false },
    { id: 2, name: 'Cookie', species: 'Chat', age: 2, energy: 25, adoption: true },
    { id: 3, name: 'Ranger', species: 'Chien', age: 5, energy: 60, adoption: true },
    { id: 4, name: 'Arthur', species: 'Tortue', age: 37, energy: 4, adoption: false },
  ];
}
