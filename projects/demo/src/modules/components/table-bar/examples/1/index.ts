import {AsyncPipe, KeyValuePipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLetDirective, TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {
    TuiBreakpointService,
    TuiButtonDirective,
    TuiDataList,
    TuiIconComponent,
    TuiLinkDirective,
} from '@taiga-ui/core';
import {
    TuiChipDirective,
    TuiFilterComponent,
    TuiTableBarComponent,
    TuiTableBarDirective,
} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiTableBarComponent,
        TuiDataList,
        NgIf,
        AsyncPipe,
        TuiLetDirective,
        TuiChipDirective,
        FormsModule,
        TuiRepeatTimesDirective,
        TuiTableBarDirective,
        TuiLinkDirective,
        ReactiveFormsModule,
        KeyValuePipe,
        TuiFilterComponent,
        TuiIconComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected items = ['one', 'two', 'three'];

    protected control = new FormControl<string[]>([]);

    protected expanded = false;

    protected readonly isMobileRes$ = inject(TuiBreakpointService).pipe(
        map(size => size === 'mobile'),
    );

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
