import {Directive, effect, inject, TemplateRef} from '@angular/core';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';

import {TuiDataListComponent} from './data-list.component';
import type {TuiDataListAccessor} from './data-list.tokens';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiOptionContent]',
})
export class TuiOptionContent {
    private readonly templateRef = inject(TemplateRef);
    private readonly dataList = tuiInjectAuxiliary<TuiDataListAccessor>(
        (x: TuiDataListAccessor) =>
            x instanceof TuiDataListComponent || Boolean(x.optionContent),
    );

    protected readonly $ = effect(
        () => this.dataList()?.optionContent.update((x) => x || this.templateRef),
        TUI_ALLOW_SIGNAL_WRITES,
    );
}
