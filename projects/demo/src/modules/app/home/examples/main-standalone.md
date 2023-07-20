```ts
import {TuiProprietaryRootModule} from '@taiga-ui/proprietary-core';
import {BrowserModule} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(), //extend BrowserAnimationModule
  ],
}).catch(err => console.error(err));
```
