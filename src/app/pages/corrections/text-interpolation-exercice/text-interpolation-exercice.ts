import { Component } from '@angular/core';
//Si besoin une ptite interface pour faciliter typage.
interface Student {
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
  getFullName: () => string;
}
// Classe pour l'exercice, si on veut déclarer la méthode getFullName() dans la classe plutôt que dans l'objet.
class StudentClass{
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;

  constructor(firstName: string, lastName: string, role: string, isActive: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.isActive = isActive;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName.toUpperCase()}`;
  }
}

//?Différence entre interface et class :
//! Une interface est un contrat qui définit la structure d'un objet, mais elle ne peut pas être instanciée. Elle est utilisée pour le typage et la vérification de type à la compilation.
//! Une classe, en revanche, est une structure qui peut être instanciée pour créer des objets. Elle peut contenir un constructeur avec des propriétés et des méthodes, et peut également implémenter des interfaces.
@Component({
  imports: [],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})
export class TextInterpolationExercice {
  // 1. String & Number
  courseTitle: string = 'Exercice : Interpolation de texte';
  maxScore: number = 20;
  currentScore: number = 15;

  // 2. Objet typé
  currentStudent: Student = {
    firstName: 'Alexandre',
    lastName: 'Dupont',
    role: 'Dev',
    isActive: false,
    getFullName: function (): string {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  };

  // 3. Tableau (Array)
  skills: string[] = ['Angular 22', 'TypeScript', 'DaisyUI'];

  // 4. Méthode utilisable dans le template (en fait on va utiliser la méthode de l'objet currentStudent)
  getFullNameGlobal(): string {
    return `${this.currentStudent.firstName} ${this.currentStudent.lastName.toUpperCase()}`;
  }
}
