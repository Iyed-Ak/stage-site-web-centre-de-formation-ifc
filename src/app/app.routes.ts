import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormationComponent } from './formation/formation.component';
import { FormationDetailComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'acc',
        pathMatch:'full'

    },
    { path: 'acc', component: AcceuilComponent },
    { path: 'form', component: FormationComponent },
    { path: 'formations/:name', component: FormationDetailComponent},
    { path: 'contact', component: ContactComponent },
];
