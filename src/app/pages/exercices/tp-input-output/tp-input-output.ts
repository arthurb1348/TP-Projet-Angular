import { Component, signal } from '@angular/core';
import type { TpUserModel } from '../../../models/tp-user.model';
import { TpUserActive } from '../../../components/tp-user-active/tp-user-active';
import { TpUserData } from '../../../components/tp-user-data/tp-user-data';

@Component({
  selector: 'app-component-communication-tp',
  imports: [TpUserActive, TpUserData],
  templateUrl: './tp-input-output.html',
})
export class TpInputOutput {
  readonly currentUser = signal<TpUserModel>({
    name: 'Alex',
    age: 25,
  });
}