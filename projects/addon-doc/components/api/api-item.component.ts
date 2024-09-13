import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';

import {TuiInspectPipe} from '../documentation/pipes/inspect.pipe';
import {TuiDocTypeReferencePipe} from '../documentation/pipes/type-reference.pipe';

@Component({
    standalone: true,
    selector: 'tr[tuiDocAPIItem]',
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        TuiChevron,
        TuiDataListWrapper,
        TuiDocTypeReferencePipe,
        TuiIcon,
        TuiInputNumberModule,
        TuiInspectPipe,
        TuiSwitch,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './api-item.template.html',
    styleUrls: ['./api-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
