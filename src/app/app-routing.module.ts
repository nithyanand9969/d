import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AllCourcesComponent } from './all-cources/all-cources.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { TestComponent } from './test/test.component';
import { RatingComponent } from './shared/rating/rating.component';
import { TextnewComponent } from './textnew/textnew.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'all-cources', component: AllCourcesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'test', component: TestComponent },
  { path: 'testnew', component: TextnewComponent },

  { path: 'rating', component: RatingComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule],
})
export class AppRoutingModule {}
