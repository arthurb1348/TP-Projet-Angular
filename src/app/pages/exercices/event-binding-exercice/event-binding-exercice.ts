import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-event-binding-exercice',
  imports: [],
  templateUrl: './event-binding-exercice.html',
  styleUrl: './event-binding-exercice.css',
})
export class EventBindingExercice {
  private readonly changeDetector = inject(ChangeDetectorRef);

  listFriendsInputText = '';
  listFriendsAuth = false;
  listFriendsCreationStatus = '🥶 Aucun ami ...';

  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
      this.changeDetector.markForCheck();
    }, 3000);
  }

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;

    this.listFriendsCreationStatus = this.listFriendsInputText.trim()
      ? '✍️ Saisie en cours…'
      : '🥶 Aucun ami ...';
  }

  onAddingFriends(): void {
    const name = this.listFriendsInputText.trim();

    if (name) {
      this.listFriendsCreationStatus = `😎 ${name} a été ajouté !`;
    }
  }
}