import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path : 'client', component: ClientComponent},
  {path : 'fornecedor', component: FornecedorComponent},
  {path : 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
