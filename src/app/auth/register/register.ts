import { Component } from '@angular/core';
import { inject, signal } from '@angular/core';
import { Router } from '@angular/router';
// Import direct du service Auth et de la fonction de création de compte Firebase
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  templateUrl: './register.html',
})
export class Register {
  private auth = inject(Auth);
  private router = inject(Router);

  // State du formulaire
  email = signal<string>('');
  password = signal<string>('');
  confirmPassword = signal<string>('');
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false);

  async onRegister(): Promise<void> {
    const userEmail = this.email().trim();
    const userPassword = this.password().trim();
    const confirm = this.confirmPassword().trim();

    // Validation locale basique
    if (!userEmail || !userPassword || !confirm) {
      this.errorMessage.set('Veuillez remplir tous les champs.');
      return;
    }

    if (userPassword !== confirm) {
      this.errorMessage.set('Les mots de passe ne correspondent pas.');
      return;
    }

    if (userPassword.length < 6) {
      this.errorMessage.set('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    //! a vous de faire l'inscription
    // On va try de faire la méthode createUserWithEmailAndPassword
    // en lui passant this.auth, le mail et le mot de passe du formulaire
    //ensuite avec le router on va naviguer sur une page
    try {
      createUserWithEmailAndPassword(this.auth, userEmail, userPassword)
      await this.router.navigate(['/firebase-exercice']);
    } catch (error: any) {
      this.errorMessage.set(this.formatFirebaseError(error.code));
    } finally {
      this.isLoading.set(false);
    }
  }

  private formatFirebaseError(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Cet email est déjà utilisé par un autre compte.';
      case 'auth/invalid-email':
        return 'Adresse email invalide.';
      case 'auth/weak-password':
        return 'Le mot de passe est trop faible.';
      default:
        return 'Une erreur est survenue lors de l\'inscription.';
    }
  }
}
