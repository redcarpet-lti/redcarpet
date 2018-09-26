import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppCardComponent } from './app-card/app-card.component';
import { CardContainerComponent } from './card-container/card-container.component'; 
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AppCardComponent,
    CardContainerComponent,
    FeedContainerComponent,
    TwitterFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialModule,   
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
