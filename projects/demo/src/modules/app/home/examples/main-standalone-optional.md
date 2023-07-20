```ts
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiAlertModule, TuiDialogModule} from '@taiga-ui/core';
import {TuiProprietaryRootModule} from '@taiga-ui/proprietary-core';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule, TuiProprietaryRootModule, TuiDialogModule, TuiAlertModule),
    provideAnimations(), //extend BrowserAnimationModule
    provideRouter(routes), //for routing
  ],
}).catch(err => console.error(err));
```
