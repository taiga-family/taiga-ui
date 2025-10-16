import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    tuiInjectMobileRes,
    TuiLink,
} from '@taiga-ui/core';
import {TuiActionBar, TuiFilter, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        TuiActionBar,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiFilter,
        TuiIcon,
        TuiItemsWithMore,
        TuiLink,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = ['one', 'two', 'three', 'four'];
    protected control = new FormControl<string[]>([]);
    protected expanded = false;

    protected readonly isMobile = toSignal(tuiInjectMobileRes());

    protected get value(): string[] {
        return this.control.value || [];
    }

    protected get open(): boolean {
        return this.value.length > 0;
    }

    protected get selected(): number {
        return this.value.length;
    }

    protected toggleSelect(): void {
        this.control.setValue(this.selected < this.items.length ? this.items : []);
    }

    protected close(): void {
        this.control.setValue([]);
        this.expanded = false;
    }
}
