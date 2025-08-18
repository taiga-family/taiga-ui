import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input, signal} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {
    TUI_FALSE_HANDLER,
    type TuiBooleanHandler,
    type TuiIdentityMatcher,
    type TuiLooseUnion,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
    TuiTitle,
    TuiWithItemsHandlers,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocItemsHandlers]',
    imports: [NgIf, TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithItemsHandlers],
})
export class TuiDocItemsHandlers {
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

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiItemsHandlers<unknown>>> = [];

    public readonly stringify = signal(this.stringifyVariants[0]!);
    public readonly disabledItemHandler = signal(this.falseHandler);
    public readonly identityMatcher = signal(this.identityMatcherVariants[0]!);
}
