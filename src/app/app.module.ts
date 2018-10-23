import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routemod} from './app.route';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { DisplayareaComponent } from './components/displayarea/displayarea.component';
import { HomeComponent } from './routes/home/home.component';
import { CoursesComponent } from './routes/courses/courses.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { VclassesComponent } from './routes/vclasses/vclasses.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { EbooksComponent } from './routes/ebooks/ebooks.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidebarComponent,
    SlideshowComponent,
    DisplayareaComponent,
    HomeComponent,
    CoursesComponent,
    ReviewsComponent,
    VclassesComponent,
    OfficesComponent,
    EbooksComponent
  ],
  imports: [
    BrowserModule, Routemod
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
