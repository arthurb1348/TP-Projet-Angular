import { computed, Service, signal } from '@angular/core';

export interface AppNotification {
  id: number;
  message: string;
  type: string;
  read: boolean;
  timestamp: string;
}

@Service()
export class NotificationService {
  private nextId = 1;
  private readonly notificationList = signal<AppNotification[]>([]);

  readonly notifications = this.notificationList.asReadonly();

  readonly unreadCount = computed(() =>
    this.notifications().filter((notification) => !notification.read).length
  );

  addNotification(message: string, type: string): void {
    const notification: AppNotification = {
        id: this.nextId++,
        message,
        type,
        read: false,
        timestamp: new Date().toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
        }),
    };

    this.notificationList.update((notifications) => [
      ...notifications,
      notification,
    ]);
  }

  markAllAsRead(): void {
    this.notificationList.update((notifications) =>
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  }

  clearAll(): void {
    this.notificationList.set([]);
  }

  removeNotification(id: number): void {
    this.notificationList.update((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  }
}