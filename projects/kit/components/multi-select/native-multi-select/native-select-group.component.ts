import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {TuiDataListDirective} from '@taiga-ui/core';

import {AbstractTuiNativeSelect} from './native-select';

@Component({
    selector: 'select[multiple][tuiSelect][labels]',
    templateUrl: './native-select-group.template.html',
    providers: [
        {
            provide: TuiDataListDirective,
            deps: [TuiNativeSelectGroupComponent],
            useExisting: TuiNativeSelectGroupComponent,
        },
        {
            provide: TemplateRef,
            deps: [TuiNativeSelectGroupComponent],
            useFactory: ({datalist}: TuiNativeSelectGroupComponent) => datalist,
        },
        {
            provide: AbstractTuiNativeSelect,
            useExisting: TuiNativeSelectGroupComponent,
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
export class TuiNativeSelectGroupComponent extends AbstractTuiNativeSelect {
    @Input()
    items: readonly string[][] | null = [];

    @Input()
    labels: readonly string[] = [];
}
