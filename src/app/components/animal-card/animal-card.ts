import { Component, input, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-animal-card',
  styleUrl: './animal-card.css',
  templateUrl: './animal-card.html',
})

export class AnimalCard {
  name = input.required<string>();
  species = input.required<string>();
  age = input<number>(1);
  energy = input<number>(50);
  adoption= input<boolean>(false);

  readonly speciesEmoji = computed(() => {
    const species = this.species().trim().toLowerCase();
    return speciesEmojis.get(species) ?? '🐾';
  });

  readonly ageLabel = computed(() => {
    const age = this.age();
    if (age == null) return 'Inconnu';

    const unit = age >= 2 ? 'ans' : 'an';
    return `${age} ${unit}`;
  });
}

const speciesEmojis = new Map([
  ['chat', '🐱'],
  ['chien', '🐶'],
  ['lapin', '🐰'],
  ['tortue', '🐢'],
  ['oiseau', '🐦'],
]);
