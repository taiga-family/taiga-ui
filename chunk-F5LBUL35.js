import"./chunk-HU6DUUP4.js";var o=`import {Component, inject, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext, TuiMonth, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly formatter = Intl.DateTimeFormat(inject(LOCALE_ID), {
        year: '2-digit',
        month: 'short',
    });

    protected value: TuiMonth | null = TuiMonth.currentLocal().append({month: -1});
    protected readonly stringify: TuiStringHandler<TuiContext<TuiMonth>> = ({
        $implicit,
    }) => this.formatter.format($implicit.toLocalNativeDate());
}
`;export{o as default};
