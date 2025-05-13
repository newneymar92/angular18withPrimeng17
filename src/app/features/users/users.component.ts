import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    template: `
        <div class="card">
            <h2>Users Management</h2>
            <p-table [value]="users">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-user>
                    <tr>
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>
                            <button pButton icon="pi pi-pencil" class="p-button-rounded p-button-text"></button>
                            <button pButton icon="pi pi-trash" class="p-button-rounded p-button-text p-button-danger"></button>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})
export class UsersComponent {
    users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
} 