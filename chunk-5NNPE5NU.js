import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCountFilledControls} from '@taiga-ui/cdk';
import {TuiButton, TuiInput, TuiLink} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilter,
    TuiSegmented,
    TuiSelect,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiSearch} from '@taiga-ui/layout';
import {map} from 'rxjs';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilter,
        TuiInput,
        TuiLink,
        TuiSearch,
        TuiSegmented,
        TuiSelect,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        search: new FormControl(),
        select: new FormControl(),
        date: new FormControl(),
        switch: new FormControl(),
        filter: new FormControl(),
        segmented: new FormControl(),
    });

    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly filters = ['Python', 'JavaScript', 'TypeScript'];
    protected readonly segments = [null, 'Unread', 'Archived'];

    protected readonly count = toSignal(
        this.form.valueChanges.pipe(map(() => tuiCountFilledControls(this.form))),
        {initialValue: 0},
    );
}
`;export{o as default};
