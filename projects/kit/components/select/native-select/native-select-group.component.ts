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
        '[attr.disabled]': `host.disabled || null`,
        '[tabIndex]': `host.focusable ? 0 : -1`,
        '[class._mobile]': `isMobile`,
        '[readOnly]': `host.readOnly`,
        '[value]': `host.value`,
        '(change)': `host.onValueChange($event.target.value)`,
    },
    styleUrls: [`./native-select.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeSelectGroupComponent extends AbstractTuiNativeSelect {
    @Input()
    items: readonly string[][] = [];

    @Input()
    labels: string[] = [];
}
