import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      { path: '', component: ClientesComponent },
      { path: 'cliente/:id', component: FormComponent }
    ]
  }
]; 