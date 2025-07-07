/**
 * DeleteCoursesComponent
 * 
 * This component handles the deletion of courses from the server and manages the state 
 * of the courses list. It provides a user interface to confirm and delete courses, 
 * utilizing a modal for confirmation and Angular signals for state management.
 * 
 * Functionalities:
 * - Fetches and displays a list of courses.
 * - Deletes a selected course from the server and updates the local state.
 * - Manages a modal for confirming course deletion.
 * 
 * @file delete-courses.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see CoursesService
 * @see Course
 * @see Angular Signals (for state management)
 * @see DestroyRef (for cleanup during component destruction)
 * 
 * 
 * 
 * @author Alessio Burbulia
 */

import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../pages/our-courses/courses.service';

@Component({
  selector: 'app-delete-courses',
  imports: [],
  templateUrl: './delete-courses.component.html',
  styleUrl: './delete-courses.component.scss'
})
export class DeleteCoursesComponent {
  
  courses = signal<Course[] | undefined>(undefined);
  selectedCourse: Course | null = null;

  isFetching = signal(false);
  coursesService = inject(CoursesService);
  private destroyRef = inject(DestroyRef);

  coursesDeleted: string = '';
  isModalOpen: boolean = false;

  

  /**
   * Deletes a course from the server and updates the local signal.
   * 
   * @param course The course to delete
   */
  onClickDeleteCourse(course: Course): void {
    this.isFetching.set(true);console.log(course.id);
    this.coursesService.deleteCourse(course.id).subscribe({
      next: () => {
        // Use the update method to filter out the deleted course from the signal
        this.courses.update(courses => courses?.filter(c => c.id !== course.id) ?? []);
        this.isFetching.set(false);
      },
      error: (err) => {
        console.error('Error deleting course:', err);
        this.isFetching.set(false);
      }
    });
  }


  /**
   * Toggles the modal open/close state and returns the updated state.
   * If a course is provided, sets the selected course to that course.
   * 
   * @param course The course to select in the modal
   * @returns The new state of the modal, true if open, false if closed.
   */
  isOpenModal(course?: Course): boolean {
    if (course) {
      this.selectedCourse = course;
    }
    this.isModalOpen = !this.isModalOpen; 
    return this.isModalOpen;
  }

  ngOnInit(): void {
    const subscription = this.coursesService.loadCourses()
      .subscribe({
      next: (resData) =>{
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
