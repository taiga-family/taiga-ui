import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input, signal} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {
    TuiBooleanHandler,
    TuiIdentityMatcher,
    TuiLooseUnion,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import type {TuiItemsHandlers} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocItemsHandlers]',
    imports: [NgIf, TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocItemsHandlers {
    private readonly options = inject(TUI_ITEMS_HANDLERS);
    protected readonly stringifyVariants: Array<TuiStringHandler<any>> = [
        (x) => x.name,
        (x) => String(x),
        (x) => x.id,
    ];

    protected readonly identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<any>> = [
        (controlValue, item) => controlValue.id === item.id,
        this.options.identityMatcher(),
    ];

    protected disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<any>> = [
        (item) => item.id.charCodeAt(1) % 3 === 0,
        () => Math.random() > 0.5,
        TUI_TRUE_HANDLER,
        this.options.disabledItemHandler(),
    ];

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiItemsHandlers<unknown>>> = [];

    public readonly stringify = signal(this.stringifyVariants[0]!);
    public readonly disabledItemHandler = signal(this.disabledItemHandlerVariants[0]!);
    public readonly identityMatcher = signal(this.identityMatcherVariants[0]!);
}
