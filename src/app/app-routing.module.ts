import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedPageComponent } from './components/access-denied-page/access-denied-page.component';
import { ApiInteractionComponent } from './components/api-interaction/api-interaction.component';
import { CustomDirectiveExampleComponent } from './components/custom-directive-example/custom-directive-example.component';
import { CustomPipeExampleComponent } from './components/custom-pipe-example/custom-pipe-example.component';
import { InterceptorExampleComponent } from './components/interceptor-example/interceptor-example.component';
import { ObservableExampleComponent } from './components/observable-example/observable-example.component';
import { ReactiveFormArrayExampleComponent } from './components/reactive-form-array-example/reactive-form-array-example.component';
import { SubjectsBehaviorExampleComponent } from './components/subjects-behavior-example/subjects-behavior-example.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'api-interaction', component: ApiInteractionComponent, canActivate: [AuthGuard]},
  {path: 'interceptor', component: InterceptorExampleComponent, canActivate: [AuthGuard]},
  {path: 'observable', component: ObservableExampleComponent, canActivate: [AuthGuard]},
  {path: 'subject-behavior', component: SubjectsBehaviorExampleComponent, canActivate: [AuthGuard]},
  {path: 'reactive-form-array', component: ReactiveFormArrayExampleComponent, canActivate: [AuthGuard]},
  {path: 'pipe', component:CustomPipeExampleComponent, canActivate: [AuthGuard]},
  {path: 'directive', component:CustomDirectiveExampleComponent, canActivate: [AuthGuard]},
  {path: 'denied-access', component:AccessDeniedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
