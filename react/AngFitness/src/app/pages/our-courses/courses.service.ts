/**
 * CoursesService
 * 
 * This service handles all interactions with the server related to courses. It provides 
 * methods to load, add, update, and delete courses, as well as to manage subscriptions. 
 * The service is designed to encapsulate HTTP requests and provide a clean API for 
 * components and other services to interact with course-related data.
 * 
 * Functionalities:
 * - Fetches a list of courses from the server.
 * - Updates the `actualSubscribed` value for a specific course.
 * - Adds new courses to the server.
 * - Deletes existing courses from the server.
 * - Handles errors gracefully and provides meaningful error messages.
 * 
 * @file courses.service.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see HttpClient (Angular HTTP Client for API interactions)
 * @see Course (Model representing the structure of a course)
 * @see Observable (RxJS for handling asynchronous data streams)
 * 
 * @author Alessio Burbulia
 */

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Course } from '../../model/course.model';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private URL = 'http://localhost:3000';
  private httpClient = inject(HttpClient);

  /**
   * Fetches the list of courses from the given URL and returns an observable
   * containing the list of courses. If there is an error while fetching the
   * courses, it will throw an error with the given errorMessage.
   *
   * @param url The URL to fetch the courses from
   * @param errorMessage The error message to be thrown if there is an error
   * @returns An observable containing the list of courses
   * @throws Will throw an error if there is a problem fetching the courses
   */
  private fetchCourses(url: string, errorMessage: string){
    return this.httpClient.get<Course[]>(url)
    .pipe(
      catchError((error)=>{
        console.log(error);
        return throwError(
          ()=>{
            new Error(errorMessage);
          }
        )
      })
    )
  }

/**
 * Loads the list of courses from the server.
 * 
 * @returns {Observable<Course[]>} An observable containing an array of courses.
 * @throws Will throw an error if there is a problem loading courses.
 */
  loadCourses(): Observable<Course[]>{
    return this.fetchCourses(`${this.URL}/courses`, 'Error on load courses');
  }

  /**
   * Updates the actualSubscribed value of a course in the server if the value of isSubscribed
   * is different from the current value of the course in the server.
   *
   * @param id The id of the course
   * @param isSubscribed The new value of the actualSubscribed value to be set
   * @returns An observable containing the updated course
   * @throws Will throw an error if there is a problem updating the course subscription
   */
  updateActualSubscribed(id: string, isSubscribed: boolean): Observable<Course> {
    const url = `${this.URL}/courses/${id}`;
    
    // Fetch the current course to check its isSubscribed status
    return this.httpClient.get<Course>(url).pipe(
      switchMap(course => {
        // If isSubscribed is true and it's transitioning from false to true, increment actualSubscribed
        // If isSubscribed is false and it's transitioning from true to false, decrement actualSubscribed
        const actualSubscribedChange = isSubscribed
          ? (+course.actualSubscribed + 1).toString() // Increment
          : (+course.actualSubscribed - 1).toString(); // Decrement
        
        const payload = { actualSubscribed: actualSubscribedChange, isSubscribed };
        
        // Now send the update request with the new actualSubscribed value
        return this.httpClient.patch<Course>(url, payload).pipe(
          catchError(err => {
            console.error('Error updating course subscription:', err);
            return throwError(() => new Error('Error updating subscription'));
          })
        );
      })
    );
  }

  /**
   * Adds a new course to the server.
   *
   * @param course The new course to add
   * @returns An observable containing the newly added course
   * @throws Will throw an error if there is a problem adding the course
   */
  addNewCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${this.URL}/courses`, course);
  }

  /**
   * Deletes a course from the server.
   *
   * @param id The id of the course to delete
   * @returns An observable that emits when the course has been successfully deleted
   * @throws Will throw an error if there is a problem deleting the course
   */
  deleteCourse(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/courses/${id}`);
  }
}
