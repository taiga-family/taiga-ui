import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {TuiDataListDirective} from '@taiga-ui/core';

import {AbstractTuiNativeSelect} from './native-select';

@Component({
    selector: `select[tuiSelect]:not([labels])`,
    templateUrl: `./native-select.template.html`,
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
export class TuiNativeSelectComponent extends AbstractTuiNativeSelect {
    @Input()
    items: readonly string[] | null = [];
}
