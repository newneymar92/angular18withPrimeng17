import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        InputTextModule,
        TableModule,
        CardModule,
        MenubarModule,
        MenuModule,
        ToastModule,
        RouterModule.forRoot(routes),
        LayoutModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { } 