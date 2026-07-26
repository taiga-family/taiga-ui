```ts
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {mergeApplicationConfig, type ApplicationRef} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {provideUniversal} from '@ng-web-apis/universal';

import {appConfig} from './app.config';

const serverConfig = mergeApplicationConfig(appConfig, {
  providers: [provideServerRendering(), provideUniversal()],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
  bootstrapApplication(App, serverConfig, context);
```
