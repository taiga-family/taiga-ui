import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {TuiDataListDirective} from '@taiga-ui/core';

import {AbstractTuiNativeSelect} from './native-select';

@Component({
    selector: 'select[multiple][tuiSelect]:not([labels])',
    templateUrl: './native-select.template.html',
    providers: [
        {
            provide: TuiDataListDirective,
            deps: [TuiNativeSelectComponent],
            useExisting: TuiNativeSelectComponent,
        },
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectComponent],
            useFactory: ({datalist}: TuiNativeSelectComponent) => datalist,
        },
        {
            provide: AbstractTuiNativeSelect,
            useExisting: TuiNativeSelectComponent,
        },
    ],
    host: {
        '[attr.aria-invalid]': 'host.invalid',
        '[disabled]': 'host.disabled || control.readOnly',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '(change)': 'onValueChange($event.target)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeSelectComponent extends AbstractTuiNativeSelect {
    @Input()
    items: string[] | null = [];
}
