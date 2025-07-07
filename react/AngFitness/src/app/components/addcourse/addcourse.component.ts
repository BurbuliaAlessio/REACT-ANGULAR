/**
 * AddCourseComponent
 *
 * This component provides a form to add a new course, including fields for course name, 
 * description, duration, level, schedule, price, maximum capacity, and instructor.
 * It validates inputs, communicates with the `CoursesService`, and displays feedback to the user.
 *
 * Functionalities:
 * - Form validation with custom and built-in validators.
 * - Random ID generation for new courses.
 * - Real-time feedback for successful or failed course addition.
 * - Modal toggle functionality for enhanced UI/UX.
 *
 * @file addcourse.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see Course (Model representing the structure of a course)
 * @see CoursesService (Service to manage course-related server interactions)
 *
 * @author Alessio Burbulia
 */


import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../pages/our-courses/courses.service';

// Custom Validators
function priceValidator(control: AbstractControl) {
  const pricePattern = /^\$([0-9]+)$/;
  const value = control.value;
  
  if (typeof value !== 'string' || !value.match(pricePattern)) {
    return { 
      invalidPrice: true ,
      
    };
  }
  return null;
}

function positiveNumber(control: AbstractControl) {
  
  const value = control.value;
  
  if (typeof value === 'number' && value > 0) {
    return null;
  }
  
  const numberPattern = /^[1-9]\d*$/;
  if (typeof value === 'string' && value.match(numberPattern)) {
    return null;
  }
  
  return { invalidNumber: true };
}

@Component({
  selector: 'app-addCourse',
  imports: [ReactiveFormsModule],
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})

export class AddCourseComponent {
  
  theCourseAdded: string = '';
  isModalOpen: boolean = false;
  
  // Create the form group for course creation
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    days: new FormControl([], Validators.required),
    time: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, priceValidator]),
    maxCapacity: new FormControl('', [Validators.required, positiveNumber]),
    instructor: new FormControl('', Validators.required)
  });
  
  private coursesService = inject(CoursesService);
  
  get isNameValid() {
    return this.form.controls.name.touched && this.form.controls.name.invalid;
  }
  
  get isDescriptionValid() {
    return this.form.controls.description.touched && this.form.controls.description.invalid;
  }
  
  get isDurationValid() {
    return this.form.controls.duration.touched && this.form.controls.duration.invalid;
  }
  
  get isLevelValid() {
    return this.form.controls.level.touched && this.form.controls.level.invalid;
  }
  
  get isDaysValid() {
    return this.form.controls.days.touched && this.form.controls.days.invalid;
  }
  
  get isTimeValid() {
    return this.form.controls.time.touched && this.form.controls.time.invalid;
  }
  
  get isPriceValid() {
    return this.form.controls.price.touched && this.form.controls.price.invalid;
  }
  
  get isMaxCapacityValid() {
    return this.form.controls.maxCapacity.touched && this.form.controls.maxCapacity.invalid;
  }
  
  get isInstructorValid() {
    return this.form.controls.instructor.touched && this.form.controls.instructor.invalid;
  }
  
  generateRandomId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
  }
  
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
  
  // Submit function
  onSubmit() {
    if (this.form.valid) {
      const course: Course = {
        id: this.generateRandomId(),
        isSubscribed: false,
        image: '',
        actualSubscribed: '',
        name: this.form.value.name?.toString() ?? '',
        description: this.form.value.description?.toString() ?? '',
        duration: this.form.value.duration?.toString() ?? '',
        level: this.form.value.level?.toString() ?? '',
        schedule: {
          days: this.form.value.days ?? [],
          time: this.form.value.time?.toString() ?? ''
        },
        price: this.form.value.price?.toString() ?? '',
        maxCapacity: this.form.value.maxCapacity?.toString() ?? '',
        instructor: this.form.value.instructor?.toString() ?? ''
      };
      
      this.coursesService.addNewCourse(course).subscribe(
        {
          next: () => {
            console.log('Course added successfully');
            this.theCourseAdded = 'Course added successfully';
            window.setTimeout(() => this.theCourseAdded = '', 3000);
          },
          error: (error) => {
            console.error('Error adding course:', error);
            this.theCourseAdded = 'Error adding course, try again';
          }
        }
      ); 
      this.form.reset();
    }
  }
}
