import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DIALOGS_CLOSE, TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import {merge} from 'rxjs';

import {AuthService} from './service';

@Component({
    imports: [TuiButton, TuiDialog, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        // This has to be added to global providers, shown here for demonstration purposes only
        {
            provide: TUI_DIALOGS_CLOSE,
            useFactory: () => merge(inject(AuthService), inject(Router).events),
        },
    ],
})
export default class Example {
    protected readonly auth = inject(AuthService);
    protected open = false;
}
`;export{t as default};
