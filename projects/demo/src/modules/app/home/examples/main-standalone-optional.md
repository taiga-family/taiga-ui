```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiAlertModule, TuiDialogModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(TuiDialogModule, TuiAlertModule), provideAnimations()],
}).catch(err => console.error(err));
```
