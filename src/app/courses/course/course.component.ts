import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Course} from '../model/course';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    course: Course;

    couponCode: string;


    constructor(private route: ActivatedRoute) {

        this.course = this.route.snapshot.data["courseResolve"];

    }

    ngOnInit() {


    }
    confirmExit(){
       return confirm('Are you sure you want to leave this '+this.course.description);
    }


}











