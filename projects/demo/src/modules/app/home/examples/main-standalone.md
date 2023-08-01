```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(TuiRootModule), provideAnimations()],
}).catch(err => console.error(err));
```
