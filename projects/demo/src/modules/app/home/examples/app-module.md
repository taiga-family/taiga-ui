```ts
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule, // Required by Taiga UI
    TuiRootModule, // Has to go after BrowserAnimationsModule
    // ...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
