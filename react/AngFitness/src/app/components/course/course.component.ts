/**
 * CourseComponent
 * 
 * This component represents an individual course and manages its display, 
 * subscription status, and interactions such as opening modals and subscribing/unsubscribing.
 * 
 * Functionalities:
 * - Displays course information passed as an input property.
 * - Allows toggling of subscription status with real-time updates.
 * - Displays subscription confirmation messages.
 * - Interacts with the `CoursesService` to synchronize subscription updates with the server.
 * 
 * @file course.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see Course (Model representing the structure of a course)
 * @see CoursesService (Service to manage course-related server interactions)
 * 
 * @example Usage in a Parent Component:
 * ```html
 * <app-course [course]="courseData"></app-course>
 * ```
 * 
 * @note Ensure the course object passed to the component has the required structure.
 * @note Handle edge cases like maximum capacity limits during subscriptions.
 * 
 * @authoredBy Alessio Burbulia
 */


import { Component, input, inject, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../pages/our-courses/courses.service';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  
  private coursesService = inject(CoursesService);
  course = input.required<Course>();

  coursesSubscribed: string = '';
  isModalOpen: boolean = false;

  buttonContent!: string;
  textIsSubscribe!: string;
  
  /**
  * Toggles the modal open/close state and returns the updated state.
  * Logs the current state to the console before toggling.
  *
  * @returns The new state of the modal, true if open, false if closed.
  */
  isOpenModal(): boolean{
    console.log(this.isModalOpen);
    this.isModalOpen = !this.isModalOpen;
    return this.isModalOpen;
  }
  
  /**
   * Updates the subscription status of a course in the local component state
   * and on the server.
   * @param course the course to update
   */
  updateSubscription(course: Course): void {
    if (course.isSubscribed) {
      // If the user is already subscribed, allow them to unsubscribe
      course.isSubscribed = false;
      course.actualSubscribed = (Number(course.actualSubscribed) - 1).toString(); // Decrement subscription count
    } else if (course.maxCapacity > course.actualSubscribed) {
      // If the course is not full and the user is not subscribed, allow them to subscribe
      course.isSubscribed = true;
      course.actualSubscribed = (Number(course.actualSubscribed) + 1).toString(); // Increment subscription count
    }
  
    // Update button text and the subscription status message
    this.buttonContent = course.isSubscribed ? 'Unsubscribe' : 'Subscribe';
    this.textIsSubscribe = course.isSubscribed ? 'You are subscribed' : 'You\'re not subscribed';
  
    // Call service to update the course subscription status on the server
    this.coursesService.updateActualSubscribed(course.id, course.isSubscribed).subscribe({
      next: (resData) => {
        console.log('Subscription updated successfully:', resData);
        if(course.isSubscribed){
          this.coursesSubscribed = 'You are subscribed';
        } else{
          this.coursesSubscribed = 'You\'re not subscribed';
        }
        setTimeout(() => {
          this.coursesSubscribed = ''; // Cancella il messaggio
        }, 3000);
      },
      error: (resData) => {
        console.error('Error updating subscription:', resData);
      }
    });
  }
}