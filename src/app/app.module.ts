import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { RankingComponent } from './ranking/ranking.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChampionsComponent } from './champions/champions.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    RankingComponent,
    CompetitionsComponent,
    CalendarComponent,
    ChampionsComponent,
    AboutComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
