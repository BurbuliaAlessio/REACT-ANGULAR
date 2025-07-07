import { Component } from '@angular/core';
import { UsersListComponent } from '../../components/users-list/users-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
