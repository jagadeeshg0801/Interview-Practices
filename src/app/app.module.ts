import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInteractionComponent } from './components/api-interaction/api-interaction.component';
import { InterceptorExampleComponent } from './components/interceptor-example/interceptor-example.component';
import { MyInterceptorService } from './services/my-interceptor.service';
import { ObservableExampleComponent } from './components/observable-example/observable-example.component';
import { SubjectsBehaviorExampleComponent } from './components/subjects-behavior-example/subjects-behavior-example.component';
import { ReactiveFormArrayExampleComponent } from './components/reactive-form-array-example/reactive-form-array-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipeExampleComponent } from './components/custom-pipe-example/custom-pipe-example.component';
import { MultiplierTablePipe } from './services/multiplier-table.pipe';
import { HighlightDirectDirective } from './services/highlight-direct.directive';
import { CustomDirectiveExampleComponent } from './components/custom-directive-example/custom-directive-example.component';
import { ShowHideImageDriectiveDirective } from './services/show-hide-image-driective.directive';
import { AccessDeniedPageComponent } from './components/access-denied-page/access-denied-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiInteractionComponent,
    InterceptorExampleComponent,
    ObservableExampleComponent,
    SubjectsBehaviorExampleComponent,
    ReactiveFormArrayExampleComponent,
    CustomPipeExampleComponent,
    MultiplierTablePipe,
    HighlightDirectDirective,
    CustomDirectiveExampleComponent,
    ShowHideImageDriectiveDirective,
    AccessDeniedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
