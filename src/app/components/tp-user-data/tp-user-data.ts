import { Component, signal, output } from '@angular/core';
import { TpUserModel } from '../../models/tp-user.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-tp-user-data',
  styleUrl: './tp-user-data.css',
  templateUrl: './tp-user-data.html',
})
export class TpUserData {
  readonly name = signal('');
  readonly age = signal<number | null>(null);
  readonly userDataEmitUpdate = output<TpUserModel>();

  submitUser(): void {
    const name = this.name().trim();
    const age = this.age();

    if (!name || age === null || !Number.isFinite(age) || age < 0) {
      return;
    }

    const user: TpUserModel = {
      name,
      age,
    };

    this.userDataEmitUpdate.emit(user);
  }
}
