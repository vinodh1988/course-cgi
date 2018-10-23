import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routemod} from './app.route';

import {CourseService} from './services/course.service';
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
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';


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
    EbooksComponent,
    CourselistComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule, Routemod
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
