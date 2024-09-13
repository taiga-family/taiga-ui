import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSwitch} from '@taiga-ui/kit';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {TuiDocTypeReferencePipe} from '../documentation/pipes/type-reference.pipe';
import {TuiInspectPipe} from '../documentation/pipes/inspect.pipe';

@Component({
    standalone: true,
    selector: 'tr[tuiDocAPIItem]',
    templateUrl: './api-item.template.html',
    styleUrls: ['./api-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf,
        NgForOf,
        NgSwitch,
        NgSwitchCase,
        FormsModule,
        TuiDocTypeReferencePipe,
        TuiInspectPipe,
        TuiIcon,
        TuiSwitch,
        TuiChevron,
        TuiTextfield,
        TuiDataListWrapper,
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
    ],
})
export class TuiDocAPIItem<T> {
    @Input()
    public name = '';

    @Input()
    public type = '';

    @Input()
    public value?: T;

    @Input()
    public items: readonly T[] = [];

    @Output()
    public readonly valueChange = new EventEmitter<T>();
}
