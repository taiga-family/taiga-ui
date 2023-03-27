import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {tuiAsDataList} from '@taiga-ui/core';

import {AbstractTuiNativeMultiSelect} from './native-multi-select';

@Component({
    selector: 'select[multiple][tuiSelect][labels]',
    templateUrl: './native-multi-select-group.template.html',
    providers: [
        tuiAsDataList(TuiNativeMultiSelectGroupComponent),
        {
            provide: TemplateRef,
            deps: [TuiNativeMultiSelectGroupComponent],
            useFactory: ({datalist}: TuiNativeMultiSelectGroupComponent) => datalist,
        },
        {
            provide: AbstractTuiNativeMultiSelect,
            useExisting: TuiNativeMultiSelectGroupComponent,
        },
    ],
    host: {
        '[attr.aria-invalid]': 'host.invalid',
        '[disabled]': 'host.disabled || control.readOnly',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '(change)': 'onValueChange()',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-multi-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeMultiSelectGroupComponent extends AbstractTuiNativeMultiSelect {
    @Input()
    items: readonly string[][] | null = [];

    @Input()
    labels: readonly string[] = [];
}
