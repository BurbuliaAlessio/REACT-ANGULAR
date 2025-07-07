/**
 * ErrorComponent
 * 
 * This component is displayed when an error occurs in the application. It serves as a user-friendly 
 * way to inform users about issues such as 404 (Page Not Found), server errors, or other unexpected 
 * problems. The content can be customized in the template to provide helpful information or 
 * navigation options to return to a valid page.
 * 
 * Functionalities:
 * - Displays an error message or page content.
 * - Can be customized to handle different error scenarios (e.g., 404, 500).
 * 
 * @file error.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see Angular Component Lifecycle (for potential dynamic error handling)
 * @see app-routing.module.ts (for error route configuration)
 * @author Alessio Burbulia
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

}
