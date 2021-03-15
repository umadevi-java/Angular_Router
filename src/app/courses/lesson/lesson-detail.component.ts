import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  //the $ at the end denotes that it is a observable that returns LessonDetail
  lesson$: Observable<LessonDetail>;
  seqNo : number;

  constructor(private router: Router,
    private route : ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    //this.lesson = this.route.snapshot.data['lessonDetail'];
    //snapshot will not work in getting the resolver data when there
    // is a change in the seqNo which is the Url, so we should get it from data
    //and the pipe(map is from rxjs map
    
    
    this.lesson$ = this.route.data.
                                  pipe(map 
                                    (data => data['lessonDetail'])
                                    );
     

  }
  onPrevious(lesson : LessonDetail){
    this.router.navigate(['../', lesson.seqNo -1 ],{relativeTo : this.route});

  } 

  onNext(lesson : LessonDetail){
    this.router.navigate(['../', lesson.seqNo +1 ],{relativeTo : this.route});
  }



}
