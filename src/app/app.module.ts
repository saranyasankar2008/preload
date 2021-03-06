import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule ,PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {QuicklinkStrategy, QuicklinkModule} from 'ngx-quicklink';
import { WordcountPipe } from './wordcount.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, WordcountPipe],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent 
      },
      {
        path: 'nyan',
        loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
        ]
      //  PreloadAllModules
    //     ,{
    //   preloadingStrategy: PreloadAllModules
    // }
    //QuicklinkStrategy
    ,{
      preloadingStrategy: QuicklinkStrategy
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
