import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolver } from './services/course-resolver';
import { LessonDetailResolver } from './services/lesson-detail.resolver';
import { LessonsResolver } from './services/lessons.resolver';
import { AuthGuard } from '../services/authguard';
import { ConfirmExitGuard } from './services/cofirm-exit.guard';


const routes: Routes = [
  {
    path: "",
    component : HomeComponent
  },
  {
    path : ":courseUrl",
    canActivate : [AuthGuard],
    canActivateChild : [AuthGuard],
    canDeactivate : [ConfirmExitGuard],
    component : CourseComponent, children :[
      {
        path : "",
        component : LessonsListComponent,
        resolve : {
          lessons : LessonsResolver
        }

      },
      { 
        path : "lessons/:lessonSeqNo",
        component : LessonDetailComponent,
        resolve : {
          lessonDetail : LessonDetailResolver
        }
      }
    ],

    //courseResolve is the variable to be used in the snapshot data
    resolve : {
      courseResolve : CourseResolver

    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsResolver,
    LessonDetailResolver,
    AuthGuard,
    ConfirmExitGuard
  ]
})
export class CoursesRoutingModule {



}
