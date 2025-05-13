import { Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    template: `
        <div class="card">
            <h2>Settings</h2>
            <div class="settings-list">
                <div class="setting-item">
                    <span>Dark Mode</span>
                    <p-inputSwitch></p-inputSwitch>
                </div>
                <div class="setting-item">
                    <span>Email Notifications</span>
                    <p-inputSwitch></p-inputSwitch>
                </div>
                <div class="setting-item">
                    <span>Two-Factor Authentication</span>
                    <p-inputSwitch></p-inputSwitch>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .settings-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid var(--surface-border);
        }
    `]
})
export class SettingsComponent {} 