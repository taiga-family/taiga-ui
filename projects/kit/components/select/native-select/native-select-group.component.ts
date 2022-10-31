import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {TuiDataListDirective} from '@taiga-ui/core';

import {AbstractTuiNativeSelect} from './native-select';

@Component({
    selector: `select[tuiSelect][labels]`,
    templateUrl: `./native-select-group.template.html`,
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
        '[attr.aria-invalid]': `host.invalid`,
        '[disabled]': `host.disabled`,
        '[tabIndex]': `host.focusable ? 0 : -1`,
        '[readOnly]': `host.readOnly`,
        '[value]': `host.value`,
        '(change)': `host.onValueChange($event.target.value)`,
    },
    styleUrls: [`./native-select.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeSelectGroupComponent extends AbstractTuiNativeSelect {
    @Input()
    items: readonly string[][] | null = [];

    @Input()
    labels: readonly string[] = [];
}
