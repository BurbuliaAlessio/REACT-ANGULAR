/**
 * FooterComponent
 * 
 * This component represents the footer section displayed on every page of the application. 
 * It provides consistent information such as copyright notices, navigation links, or 
 * contact details. The content is defined in its associated HTML template and styled 
 * through its SCSS file.
 * 
 * Functionalities:
 * - Displays static footer content for all pages.
 * - Can include dynamic links, social media icons, or other common footer elements.
 * - Enhances the user experience with consistent and accessible footer navigation.
 * 
 * @file footer.component.ts
 * @version 1.0.0
 * @since 2025-01-24
 * @see app.module.ts (for component declarations)
 * @see Angular Router (if dynamic footer links are added)
 * @see footer.component.html, footer.component.scss (for design and layout)
 * @see Global CSS or SCSS files for additional styling options
 * 
 * @note Ensure the footer is responsive and compatible with different screen sizes.
 * @note Consider lazy-loading or optimizing content if the footer contains heavy assets.
 * 
 * @author Alessio Burbulia
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
