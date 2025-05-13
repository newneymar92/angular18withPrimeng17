import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    template: `
        <div class="card">
            <h2>Products Management</h2>
            <p-table [value]="products">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.price | currency}}</td>
                        <td>{{product.stock}}</td>
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
export class ProductsComponent {
    products = [
        { id: 1, name: 'Laptop', price: 999.99, stock: 50 },
        { id: 2, name: 'Smartphone', price: 499.99, stock: 100 }
    ];
} 