/**
 * HomeComponent
 * 
 * This component serves as the homepage of the application. It provides users with an entry point 
 * to navigate to other sections of the app using the Angular Router. The component is lightweight 
 * and focuses on rendering the home page template.
 * 
 * Functionalities:
 * - Displays the homepage content.
 * - Includes router links for seamless navigation to other components.
 * 
 * @file home.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see RouterLink
 * @author Alessio Burbulia
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
