import { Component } from '@angular/core';

interface Friend {
  id: number;
  name: string;
  age: number;
  status: string;
  bio: string;
  imgUrl: string;
}

@Component({
  imports: [],
  selector: 'app-property-binding-exercice',
  styleUrl: './property-binding-exercice.css',
  templateUrl: './property-binding-exercice.html',
})

export class PropertyBindingExercice {
  oneFriend: Friend = {
  id: 1,
  name: 'Eric',
  age: 8,
  status: 'offline',
  bio: 'Eric aime le KFC et déteste les hippies.',
  imgUrl: 'https://static.wikia.nocookie.net/southpark/images/9/91/Erica_Cartman.transparent.png/revision/latest?cb=20230429202409&path-prefix=fr',
};

getOneFriendStatus(): string {
  return this.oneFriend.status;
}
}
