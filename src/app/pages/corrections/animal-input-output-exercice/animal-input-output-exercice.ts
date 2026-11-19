import { Component, computed, signal } from '@angular/core';
import { AnimalCard } from '../../../components/corrections/animal-card/animal-card';

interface Animal {
  id: number;
  name: string;
  species: string;
  age: number;
  energyLevel: number;
  isAdopted: boolean;
}

@Component({
  selector: 'app-animal-input-output-exercice',
  imports: [AnimalCard],
  styleUrl: './animal-input-output-exercice.css',
  templateUrl: './animal-input-output-exercice.html',
})
export class AnimalInputOutputExercice {
  readonly animals = signal<Animal[]>([
    { id: 1, name: 'Rex', species: 'chien', age: 3, energyLevel: 85, isAdopted: false },
    { id: 2, name: 'Pixel', species: 'chat', age: 2, energyLevel: 45, isAdopted: true },
    { id: 3, name: 'Noisette', species: 'lapin', age: 1, energyLevel: 30, isAdopted: false },
    { id: 4, name: 'Kiwi', species: 'oiseau', age: 4, energyLevel: 70, isAdopted: false },
    { id: 5, name: 'Luna', species: 'chat', age: 6, energyLevel: 20, isAdopted: false },
    { id: 6, name: 'Oslo', species: 'chien', age: 1, energyLevel: 95, isAdopted: true },
  ]);

  readonly lastEventMessage = signal<string | null>(null);

  // Compteurs réactifs calculés par le parent
  readonly adoptedCount = computed(
    () => this.animals().filter((animal) => animal.isAdopted).length,
  );

  readonly availableCount = computed(
    () => this.animals().filter((animal) => !animal.isAdopted).length,
  );

  // Réaction à (adoptToggle)
  onToggleAdopt(targetAnimal: Animal): void {
    const nextStatus = !targetAnimal.isAdopted;

    this.animals.update((list) =>
      list.map((animal) =>
        animal.id === targetAnimal.id
          ? { ...animal, isAdopted: nextStatus }
          : animal,
      ),
    );

    this.lastEventMessage.set(
      nextStatus
        ? `🎉 ${targetAnimal.name} a trouvé une famille !`
        : `🏠 ${targetAnimal.name} est de nouveau disponible à l'adoption.`,
    );
  }

  // Réaction à (energyChange) avec récupération de $event (delta)
  onEnergyChange(targetAnimal: Animal, delta: number): void {
    // console.log(targetAnimal, delta)
    const nextEnergy = Math.min(100, Math.max(0, targetAnimal.energyLevel + delta));

    this.animals.update((list) =>
      list.map((animal) =>
        animal.id === targetAnimal.id
          ? { ...animal, energyLevel: nextEnergy }
          : animal,
      ),
    );

    const actionLabel = delta > 0 ? 'a joué' : 'a fait une sieste';
    this.lastEventMessage.set(
      `⚡ ${targetAnimal.name} ${actionLabel} (énergie : ${nextEnergy} %).`,
    );
  }
}
