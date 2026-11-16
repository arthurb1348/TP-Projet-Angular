import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-dynamic-styling-exercice',
  templateUrl: './dynamic-styling-exercice.html',
  styles: `
    .oldman {
      background-color: greenyellow;
      font-style: oblique;
    }
  `,
})
export class DynamicStylingExercice {
  oneFriendId: number = 99;
  oneFriendName: string = 'Steven Cigale';
  oneFriendAge: number = 25;
  oneFriendStatus: string = 'Offline';
  oneFriendBio: string =
    'Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.';
  oneFriendImgUrl: string = 'https://picsum.photos/seed/picsum/150/150';
  // oneFriendImgUrl = signal<string>('https://picsum.photos/seed/picsum/150/150');
  // oneFriendStatus = signal<string>('Offline');
  getOneFriendStatus(): string {
    return this.oneFriendStatus;
  }
}
