/**
 * AdministratorComponent
 * 
 * This component serves as the main dashboard for administrators. It provides access to 
 * administrative tools and functionalities, such as adding courses, managing users, and 
 * navigating between different admin-related sections using the Angular Router.
 * 
 * Functionalities:
 * - Acts as a container for administrative features.
 * - Integrates with the `AddCourseComponent` for adding new courses.
 * - Utilizes Angular Router for navigation within the administrator panel.
 * 
 * @file administrator.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see AddCourseComponent
 * @see RouterLink, RouterOutlet
 * @see Angular Routing Module (admin-related routes)
 * @see app.module.ts (for component declarations and dependencies)
 * @author Alessio Burbulia
 */

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-administrator',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.scss'
})
export class AdministratorComponent {
  
}
