import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import type {TuiSizeS} from '@taiga-ui/core/types';

import type {TuiLikeOptions} from './like.options';
import {TUI_LIKE_OPTIONS} from './like.options';

@Component({
    standalone: true,
    selector: 'input[tuiLike][type=checkbox]',
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/like.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_LIKE_OPTIONS)],
    hostDirectives: [TuiWithAppearance],
    host: {
        tuiLike: '',
        '[attr.data-size]': 'size',
        '[attr.data-mode]': '""',
        '[style.--t-icon-color]': 'color',
        '[style.--t-unchecked-icon]': 'getIcon("unchecked")',
        '[style.--t-checked-icon]': 'getIcon("checked")',
    },
})
export class TuiLike {
    private readonly options = inject(TUI_LIKE_OPTIONS);
    private readonly resolver = tuiInjectIconResolver();

    @Input('tuiLike')
    public color = '';

    @Input()
    public uncheckedIcon: TuiStringHandler<TuiSizeS> | string =
        this.options.icons.unchecked;

    @Input()
    public checkedIcon: TuiStringHandler<TuiSizeS> | string = this.options.icons.checked;

    @Input()
    public size: TuiSizeS = this.options.size;

    protected getIcon(state: keyof TuiLikeOptions['icons']): string {
        const option = state === 'checked' ? this.checkedIcon : this.uncheckedIcon;
        const icon = tuiIsString(option) ? option : option(this.size);

        return icon && `url(${this.resolver(icon)})`;
    }
}
