import {ApplicationRef, NgModuleRef} from '@angular/core';
import {createNewHosts} from '@angularclass/hmr';

import {AppBrowserModule} from './modules/app/app.browser.module';

export const hmrBootstrap = (
    module: any,
    bootstrap: () => Promise<NgModuleRef<AppBrowserModule>>,
) => {
    let ngModule: NgModuleRef<AppBrowserModule>;

    module.hot.accept();
    bootstrap().then(mod => (ngModule = mod));
    module.hot.dispose(() => {
        const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = createNewHosts(elements);

        ngModule.destroy();
        makeVisible();
    });
};
