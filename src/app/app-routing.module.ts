import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadModule } from './services/canLoadModule';



const routes: Routes = [
  {
    path : "",
    redirectTo : "/courses",
    pathMatch : "full"
  },
{
  path: 'courses',
  loadChildren : () => import( './courses/courses.module').then(m => m.CoursesModule)
  //,canLoad : [CanLoadModule]
  //canLoad only load the lazy module for authenticated user
  //canLoad commented out to demonstrate preLoadingstrategy property set below, even without the user clicking on it
},
{
  path: 'login' ,
  component: LoginComponent 
},
{
  path : 'about',
  component : AboutComponent
},
{
  path : "**",
  component : PageNotFoundComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {preloadingStrategy : PreloadAllModules}
      )
  ],
  exports: [RouterModule],
  providers: [
    CanLoadModule

  ]
})
export class AppRoutingModule {


}
