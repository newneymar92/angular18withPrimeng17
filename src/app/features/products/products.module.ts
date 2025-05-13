import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    }
];

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TableModule,
        ButtonModule
    ]
})
export class ProductsModule { } 