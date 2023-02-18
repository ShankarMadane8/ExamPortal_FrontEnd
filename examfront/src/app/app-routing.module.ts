import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuizzesComponent } from './pages/admin/add-quizzes/add-quizzes.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"admin",
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        component:WelcomeComponent
     },
      {
         path:"profile",
         component:ProfileComponent
      },
      {
        path:"categories",
        component:ViewCategoriesComponent
     },

     {
      path:"addCategories",
      component:AddCategoriesComponent
     },

     {
      path:"quizzes",
      component:ViewQuizzesComponent
     },

     {
      path:"addQuizzes",
      component:AddQuizzesComponent
     },

     {
      path:"update/:any",
      component:UpdateQuizComponent
     },

     {
      path:"update/category/:cId",
      component:UpdateCategoryComponent
     },
     {
      path:"Question/Quiz/:qId",
      component:ViewQuestionComponent
     },


    ]
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    pathMatch:"full",
    canActivate:[NormalGuard],
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
