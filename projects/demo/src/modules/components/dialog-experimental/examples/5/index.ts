import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TUI_DIALOGS_CLOSE, TuiButton, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiHeader} from '@taiga-ui/layout';
import {merge} from 'rxjs';

import {AuthService} from './service';

@Component({
    standalone: true,
    imports: [TuiAutoFocus, TuiButton, TuiDialog, TuiHeader, TuiTextfield, TuiTitle],
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
