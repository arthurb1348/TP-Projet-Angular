import { Component, signal, computed } from '@angular/core';
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
  templateUrl: './animal-input-output-exercice.html',
})
export class AnimalInputOutputExercice {
  readonly animals = signal<Animal[]>([
    { id: 1, name: 'Minouche', species: 'Chat', age: 3, energy: 75, adoption: false },
    { id: 2, name: 'Cookie', species: 'Chat', age: 2, energy: 25, adoption: true },
    { id: 3, name: 'Ranger', species: 'Chien', age: 5, energy: 60, adoption: true },
    { id: 4, name: 'Arthur', species: 'Tortue', age: 37, energy: 4, adoption: false },
    { id: 5, name: 'Pioupiou', species: 'Oiseau', age: 1, energy: 98, adoption: false },
  ]);

  readonly actionMessage = signal('');

  readonly adoptedCount = computed(() =>
    this.animals().filter((animal) => animal.adoption).length,
  );

  readonly availableCount = computed(() =>
    this.animals().length - this.adoptedCount(),
  );

  toggleAdoption(id: number): void {
    const animal = this.animals().find((item) => item.id === id);
    if (!animal) return;

    const adoption = !animal.adoption;

    this.animals.update((animals) =>
      animals.map((item) => item.id === id ? { ...item, adoption } : item),
    );

    this.actionMessage.set(
      adoption
        ? `Adoption confirmée pour ${animal.name}.`
        : `Adoption annulée pour ${animal.name}.`,
    );
  }

  changeEnergy(id: number, delta: number): void {
    const animal = this.animals().find((item) => item.id === id);
    if (!animal || animal.adoption) return;

    const energy = Math.max(0, Math.min(100, animal.energy + delta));

    this.animals.update((animals) =>
      animals.map((item) => item.id === id ? { ...item, energy } : item),
    );

    const action = delta < 0 ? 'a joué' : 'a fait une sieste';
    this.actionMessage.set(`${animal.name} ${action}. Énergie à ${energy} %.`);
  }
}