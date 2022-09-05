```ts
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import * as ADDON_CHARTS from '@taiga-ui/addon-charts';
import * as ADDON_COMMERCE from '@taiga-ui/addon-commerce';
import * as ADDON_EDITOR from '@taiga-ui/addon-editor';
import * as ADDON_MOBILE from '@taiga-ui/addon-mobile';
import * as ADDON_TABLE from '@taiga-ui/addon-table';
import * as CDK from '@taiga-ui/cdk';
import * as CORE from '@taiga-ui/core';
import * as KIT from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {AppComponent} from './app.component';

const {TUI_ICONS_PATH, tuiIconsPathFactory, TUI_SANITIZER} = CORE;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    RouterModule.forRoot([]),
    ...tuiPropagateModules(CORE),
    ...tuiPropagateModules(KIT),
    ...tuiPropagateModules(CDK),
    ...tuiPropagateModules(ADDON_EDITOR),
    ...tuiPropagateModules(ADDON_MOBILE),
    ...tuiPropagateModules(ADDON_COMMERCE),
    ...tuiPropagateModules(ADDON_CHARTS),
    ...tuiPropagateModules(ADDON_TABLE),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    // A workaround because StackBlitz does not support assets
    {
      provide: TUI_ICONS_PATH,
      useValue: tuiIconsPathFactory('https://taiga-ui.dev/assets/taiga-ui/icons'),
    },
    /**
     * If you use unsafe icons or have kind of WYSISYG editor in your app
     *
     * Take a look at: https://github.com/tinkoff/ng-dompurify
     *
     * This library implements DOMPurify as Angular Sanitizer or Pipe.
     * It delegates sanitizing to DOMPurify and supports the same configuration.
     */
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
})
export class AppModule {}

/**
 * Don't use this approach,
 * it's a workaround for stackblitz
 */
function tuiPropagateModules<T>(entryPoint: T) {
  const modules = [];

  for (const name in entryPoint) {
    if (name.endsWith('Module')) {
      modules.push(entryPoint[name]);
    }
  }

  return modules;
}
```
