import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-with-primeng-app';
  menuItems: MenuItem[] = [
    {
      label: 'File',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Document' },
            { label: 'Image' }
          ]
        },
        { label: 'Open' },
        { label: 'Save' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-fw pi-undo' },
        { label: 'Redo', icon: 'pi pi-fw pi-replay' }
      ]
    }
  ];
}
