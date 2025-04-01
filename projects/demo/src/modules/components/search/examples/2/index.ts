import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearch} from '@taiga-ui/beaver';
import {tuiCountFilledControls} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilter,
    TuiSegmented,
    TuiSwitch,
} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilter,
        TuiLink,
        TuiSearch,
        TuiSegmented,
        TuiSwitch,
        TuiTextfield,
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
