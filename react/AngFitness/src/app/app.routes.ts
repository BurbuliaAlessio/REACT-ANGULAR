import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { OurCoursesComponent } from './pages/our-courses/our-courses.component';
import { ErrorComponent } from './pages/error/error.component';
import { AddCourseComponent } from './components/addcourse/addcourse.component';
import { DeleteCoursesComponent } from './components/delete-courses/delete-courses.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { 
      path: 'administrator', 
      component: AdministratorComponent, 
      children: [
        { path: 'addCourse', component: AddCourseComponent },
        { path: 'deleteCourses', component: DeleteCoursesComponent }
      ]
    },
    { path: 'ourCourses', component: OurCoursesComponent },
    { path: 'error404', component: ErrorComponent },
    { path: '**', redirectTo: 'error404' }
  ];
