import { Component, Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { CourseComponent } from "../course/course.component";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {
    canDeactivate(component: CourseComponent, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
    boolean {
        return component.confirmExit()
    }

}