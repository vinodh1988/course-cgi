
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routemod} from './app.route';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/*imports for http and translation*/

import {HttpClientModule,HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import {CourseService} from './services/course.service';
import {ReviewService} from './services/review.service'
import {EnquiryService } from './services/enquiry.service'

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


import { DiscountPipe } from './pipes/discount.pipe';
import { FormatpricePipe } from './pipes/formatprice.pipe';
import { FiltercoursePipe } from './pipes/filtercourse.pipe';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferDirective } from './directives/offer.directive';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
    CourseComponent,
    DiscountPipe,
    FormatpricePipe,
    FiltercoursePipe,
    ReviewComponent,
    EnquiryComponent,
    CoursedetailsComponent,
    ScheduleComponent,
    HighlightDirective,
    OfferDirective
  ],
  imports: [
    BrowserModule, Routemod, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [CourseService,ReviewService,EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
