/**
* Navbar script to manage scroll behavior and toggle menu visibility.
* 
* This script handles the following functionalities:
* - Disabling/enabling scrolling when a checkbox is checked or unchecked.
* - Toggling the visibility of a background overlay when the checkbox is toggled.
* - Handling touch and click events on the background overlay to toggle the checkbox state.
* 
* @file navigation-bar.component.ts
* @version 1.0.2
* @author Alessio Burbulia
*/


import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {
  
  //* ViewChild e' un decoratore che nasce per prendere un elemento figlio del DOM del componente
  /* 
  * ElementRef e' una classe angular che permettere di 
  * accedere e modificare elementi del dom con maggiore 
  * efficacia e facilita' di utilizzo.
  * 
  * Rappresenta un wrapper che ha proprio questa funzione,
  * avvolge il nostro elemento (in questo caso del DOM)
  * per facilitare la manipolazione e con maggiore sicurezza.
  */
  //this element is used on mobile to toggle the menu
  @ViewChild('menuCheckbox') menuCheckbox!: ElementRef<HTMLInputElement>;
  
  //class variables for view the overlay of navbar
  isShow = false;
  
  /**
  * Toggles the visibility state of the background overlay.
  * 
  * This method inverts the current visibility state of the overlay,
  * switching it between visible and hidden.
  */
  toggleOverlay() {
    this.isShow = !this.isShow;
  }
  
  /**
   * Toggles the state of the menu toggle checkbox.
   *
   * This method inverts the current state of the checkbox,
   * switching it between checked and unchecked.
   */
  toggleInput() {
    this.menuCheckbox.nativeElement.checked = !this.menuCheckbox.nativeElement.checked;
  }
  
  //* questa funzione permette di compiere azioni al rendering del componente
  ngOnInit(): void {
    
    /* 
    * this.router serve per interagire con il router
    * la proprieta' events e' un observable che mi permette di 
    * sottoscrivere agli eventi del router in questo caso 
    * il cambio di pagina. 
    * 
    * subcribe e' un metodo che permette di compiere
    * delle azioni a ogni cambiamento del'observable.
    */
    this.router.events.subscribe(event => {
      
      //* Navigation end e' un istanza del router che rappresenta il cambiamento di pagina avvenuto con successo
      if (event instanceof NavigationEnd && this.menuCheckbox.nativeElement.checked === true) {
        this.menuCheckbox.nativeElement.checked = false;
        this.toggleOverlay();
      }
    });
  }

  
  
  constructor(private router: Router) {}
}
