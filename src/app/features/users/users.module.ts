import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    }
];

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TableModule,
        ButtonModule
    ]
})
export class UsersModule { } 