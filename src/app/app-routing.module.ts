import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      { path: '', component: ClientesComponent },
      { path: 'cliente/:id', component: FormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
