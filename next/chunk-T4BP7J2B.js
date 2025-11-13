import"./chunk-42JZD6NG.js";var t=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {DialogComponent} from './component';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly dialogs = inject(TuiDialogService);

    protected click(): void {
        this.dialogs
            .open<string>(new PolymorpheusComponent(DialogComponent), {
                label: 'Edit info',
                size: 's',
                data: 'Alex Inkin',
            })
            .pipe(switchMap((name) => this.alerts.open(name)))
            .subscribe();
    }
}
`;export{t as default};
