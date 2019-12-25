import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./features/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./features/about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'feature-list',
  //   loadChildren: () =>
  //     import('./features/feature-list/feature-list.module').then(
  //       m => m.FeatureListModule
  //     )
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./features/settings/settings.module').then(m => m.SettingsModule)
  // },
  // {
  //   path: 'examples',
  //   loadChildren: () =>
  //     import('./features/examples/examples.module').then(m => m.ExamplesModule)
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
