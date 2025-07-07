/**
 * OurCoursesComponent
 * 
 * This component handles the display of a list of courses and manages interactions with the
 * CoursesService to fetch course data. It utilizes Angular signals to manage state and supports
 * clean resource management through proper subscription handling.
 * 
 * Functionalities:
 * - Fetching and displaying a list of courses from the server.
 * - Managing component lifecycle and unsubscribing from services upon destruction.
 * - Updating UI signals to reflect loading states.
 * 
 * @file our-courses.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see CoursesService
 * @see Course
 * @author Alessio Burbulia
 */

import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from '../../model/course.model';
import { CourseComponent } from '../../components/course/course.component';

@Component({
  selector: 'app-our-courses',
  imports: [CourseComponent],
  templateUrl: './our-courses.component.html',
  styleUrl: './our-courses.component.scss'
})
export class OurCoursesComponent implements OnInit {
  
  private coursesService = inject(CoursesService);
  private destroyRef = inject(DestroyRef);
  
  courses = signal<Course[] | undefined>(undefined);
  isFetching = signal(false);
  
  /**
   * Called when the component is initialized. Loads the courses from the server and sets
   * the local signal with the received data. Also sets the isFetching signal to false when
   * the loading is complete. Unsubscribes from the observable when the component is destroyed.
   */
  ngOnInit(): void {
    const subscription = this.coursesService.loadCourses()
      .subscribe({
      next: (resData) =>{
        console.log(resData);
        this.courses.set(resData);
      },
      complete: ()=>{
        this.isFetching.set(false);
      }
    })
    
    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    }
  )
}
}
