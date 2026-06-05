import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    Directive,
    forwardRef,
    inject,
    input,
    model,
} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTableTr} from '../tr/tr.component';

@Directive()
export class TuiTableTbodyDirective<T extends Partial<Record<keyof T, unknown>>> {
    public readonly rows = contentChildren<TuiTableTr<T>>(forwardRef(() => TuiTableTr));
    public readonly data = input<readonly T[]>([]);
}

/** TODO(v6): delete */
@Component({
    selector: 'tbody[tuiTbody]',
    imports: [PolymorpheusOutlet, TuiChevron, TuiIcon],
    templateUrl: './tbody.template.html',
    styleUrl: './tbody.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiTableTbodyDirective,
            inputs: ['data'],
        },
    ],
})
export class TuiTableTbody<T extends Partial<Record<keyof T, unknown>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    public readonly heading = input<PolymorpheusContent>();

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    public readonly open = model(this.options.open);

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    protected onClick = (): void => {
        this.open.set(!this.open());
    };
}
