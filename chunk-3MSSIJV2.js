import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton, TuiDialogService, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [TuiActiveZone, TuiButton, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialog = inject(TuiDialogService);

    protected active = false;

    protected onZone(active: boolean): void {
        console.info(active);
        this.active = active;
    }

    protected onClick(): void {
        this.dialog
            .open(
                'Dialogs automatically attach themselves to the currently active zone',
                {label: "I'm inside", size: 's'},
            )
            .subscribe();
    }
}
`;export{i as default};
