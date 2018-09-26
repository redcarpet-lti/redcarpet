import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },    
    { path: '', component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent,
                // children:[
                //     // {path:'twitter', component:TwitterFeedComponent, outlet: "twitter"}
                //     // {path:'',   redirectTo: 'twitter', pathMatch: 'full'},
                //     {path:'twitter', component:TwitterFeedComponent }
                // ]

            },
            // { path: '**', component: NotFoundComponent },
        ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
