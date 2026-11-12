import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface friend {
  oneFriendId: number;
  oneFriendName: string;
  oneFriendAge: number;
  oneFriendStatus: string;
  oneFriendBio: string;
  oneFriendImgUrl: string;
}

@Component({
  imports: [NgClass, NgStyle, FormsModule],
  selector: 'app-dynamic-styling',
  styleUrl: './dynamic-styling.css',
  templateUrl: './dynamic-styling.html',
})
export class DynamicStyling {
  oneFriend: friend = {
    oneFriendId: 1,
    oneFriendName: 'John Doe',
    oneFriendAge: 30,
    oneFriendStatus: 'Offline',
    oneFriendBio: 'John is a software developer who loves coding and coffee.',
    oneFriendImgUrl: 'https://example.com/john-doe.jpg',
  };

  getOneFriendStatus(): string {
    return this.oneFriend.oneFriendStatus;
  }
}
