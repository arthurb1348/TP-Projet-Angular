import { Injectable, signal, computed } from '@angular/core';

export interface AppNotification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning';
  timestamp: string;
  read: boolean;
}

@Injectable({
  providedIn: 'root', // Enregistré globalement comme Singleton dans toute l'application
})
export class NotificationService {
  // 1. État privé modifiable uniquement par le service
  private _notifications = signal<AppNotification[]>([
    {
      id: 1,
      message: 'Service NotificationService initialisé avec succès.',
      type: 'info',
      timestamp: '09:00',
      read: false,
    },
    {
      id: 2,
      message: 'Connexion à l’API ADRAR établie.',
      type: 'success',
      timestamp: '09:05',
      read: true,
    },
  ]);

  // 2. Exposition publique en lecture seule (empêche la mutation directe depuis les composants)
  readonly notifications = this._notifications.asReadonly();

  // 3. État dérivé calculé automatiquement
  readonly unreadCount = computed(
    () => this._notifications().filter((notif) => !notif.read).length
  );

  // 4. Méthodes métier centralisées
  addNotification(message: string, type: 'info' | 'success' | 'warning' = 'info'): void {
    const trimmed = message.trim();
    if (!trimmed) return;

    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    const newNotif: AppNotification = {
      id: Date.now(),
      message: trimmed,
      type,
      timestamp: time,
      read: false,
    };

    this._notifications.update((list) => [newNotif, ...list]);
  }

  markAllAsRead(): void {
    this._notifications.update((list) =>
      list.map((notif) => ({ ...notif, read: true }))
    );
  }

  removeNotification(id: number): void {
    this._notifications.update((list) => list.filter((notif) => notif.id !== id));
  }

  clearAll(): void {
    this._notifications.set([]);
  }
}
