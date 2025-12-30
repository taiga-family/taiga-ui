import {ChangeDetectionStrategy, Component, inject, input, signal} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {
    TUI_FALSE_HANDLER,
    type TuiBooleanHandler,
    type TuiIdentityMatcher,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_ITEMS_HANDLERS, type TuiItemsHandlers, TuiTitle} from '@taiga-ui/core';

@Component({
    selector: 'tbody[tuiDocItemsHandlers]',
    imports: [TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocItemsHandlers implements TuiItemsHandlers<unknown> {
    protected readonly options = inject(TUI_ITEMS_HANDLERS);
    protected readonly stringifyVariants: Array<TuiStringHandler<any>> = [
        (x) => x.name,
        (x) => String(x),
        (x) => x.id,
    ];

    protected readonly identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<any>> = [
        (controlValue, item) => controlValue.id === item.id,
        this.options.identityMatcher(),
    ];

    protected readonly falseHandler: TuiBooleanHandler<any> = TUI_FALSE_HANDLER;

    public readonly hiddenOptions = input<
        Array<string | keyof TuiItemsHandlers<unknown>>
    >([]);

    public readonly stringify = signal(this.stringifyVariants[0]!);
    public readonly disabledItemHandler = signal(this.falseHandler);
    public readonly identityMatcher = signal(this.identityMatcherVariants[0]!);

    public readonly providedDisabledItemHandler = input<TuiBooleanHandler<any>>(
        this.disabledItemHandler(),
        {alias: 'disabledItemHandler'},
    );
}
