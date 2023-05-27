import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{


  courses: Course[] = [
    {
      id: '1', name: 'Angular', category: 'front-end'
    },
    {
      id: '2', name: 'Java', category: 'Back-End'
    }
    ];


  displayedColumns = ['id', 'name', 'category']

  constructor(){
  }


  ngOnInit(): void {

  }
}
