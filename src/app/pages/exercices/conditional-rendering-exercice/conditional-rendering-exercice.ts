import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering-exercice',
  imports: [],
  templateUrl: './conditional-rendering-exercice.html',
  styleUrl: './conditional-rendering-exercice.css',
})
export class ConditionalRenderingExercice {
  private readonly changeDetector = inject(ChangeDetectorRef);

  listFriendsInputText = '';
  listFriendsAuth = false;

  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
      this.changeDetector.markForCheck();
    }, 3000);
  }

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }

  onAddingFriends(): void {
    this.listFriendsAuth = true;
  }
}