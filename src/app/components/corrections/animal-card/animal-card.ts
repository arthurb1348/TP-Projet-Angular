// import { Component, computed, input } from '@angular/core';

// @Component({
//   selector: 'app-animal-card',
//   imports: [],
//   styleUrl: './animal-card.css',
//   templateUrl: './animal-card.html',
// })
// export class AnimalCard {
//   // 1. Entrées obligatoires
//   readonly name = input.required<string>();
//   readonly species = input.required<string>();

//   // 2. Entrées optionnelles avec valeurs par défaut
//   readonly age = input<number>(1);
//   readonly energyLevel = input<number>(50);
//   readonly isAdopted = input<boolean>(false);

//   // 3. Signaux dérivés calculés à partir des inputs
//   readonly speciesInfo = computed(() => {
//     switch (this.species().toLowerCase().trim()) {
//       case 'chien':
//         return { emoji: '🐶', label: 'Chien', badge: 'badge-primary' };
//       case 'chat':
//         return { emoji: '🐱', label: 'Chat', badge: 'badge-secondary' };
//       case 'lapin':
//         return { emoji: '🐰', label: 'Lapin', badge: 'badge-accent' };
//       case 'oiseau':
//         return { emoji: '🦜', label: 'Oiseau', badge: 'badge-info' };
//       default:
//         return { emoji: '🐾', label: this.species(), badge: 'badge-neutral' };
//     }
//   });

//   readonly ageLabel = computed(() =>
//     this.age() <= 1 ? `${this.age()} an` : `${this.age()} ans`,
//   );
// }

// Version avec output en +
import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  imports: [],
  styleUrl: './animal-card.css',
  templateUrl: './animal-card.html',
})
export class AnimalCard {
  // 1. Entrées obligatoires (Parent -> Enfant)
  readonly name = input.required<string>();
  readonly species = input.required<string>();

  // 2. Entrées optionnelles avec valeurs par défaut
  readonly age = input<number>(1);
  readonly energyLevel = input<number>(50);
  readonly isAdopted = input<boolean>(false);

  // 3. Événements sortants (Enfant -> Parent)
  readonly adoptToggle = output<void>();
  readonly energyChange = output<number>();

  // 4. Signaux dérivés
  readonly speciesInfo = computed(() => {
    switch (this.species().toLowerCase().trim()) {
      case 'chien':
        return { emoji: '🐶', label: 'Chien', badge: 'badge-primary' };
      case 'chat':
        return { emoji: '🐱', label: 'Chat', badge: 'badge-secondary' };
      case 'lapin':
        return { emoji: '🐰', label: 'Lapin', badge: 'badge-accent' };
      case 'oiseau':
        return { emoji: '🦜', label: 'Oiseau', badge: 'badge-info' };
      default:
        return { emoji: '🐾', label: this.species(), badge: 'badge-neutral' };
    }
  });

  readonly ageLabel = computed(() =>
    this.age() <= 1 ? `${this.age()} an` : `${this.age()} ans`,
  );
}
