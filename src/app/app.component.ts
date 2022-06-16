import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  onCardClicked() {
    console.log('on card clicked.... ');
  }

  onCourseSelected(course: Course) {
    console.log("on onCourseSelected - click event bubbled2...", course );
  }

  data = {
    title : 'foobar'
  };
  title = 'my title';

  onLogoClicked() {
    alert('hello world')
  }

  onKeyUp(newTitle : string) {
    this.data.title = newTitle;
  }
  
}
