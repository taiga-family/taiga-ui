import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiListOptions {
    readonly size: TuiSizeL | TuiSizeS;
}

export const [TUI_LIST_OPTIONS, tuiListOptionsProvider] =
    tuiCreateOptions<TuiListOptions>({
        size: 'l',
    });

@Component({
    template: '',
    styleUrl: './list.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-list'},
})
class Styles {}

@Directive({
    selector: 'ul[tuiList], ol[tuiList]',
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiList {
    private readonly options = inject(TUI_LIST_OPTIONS);
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly size = input(this.options.size, {
        alias: 'tuiList',
        transform: (size: TuiSizeL | TuiSizeS | '') => size || this.options.size,
    });
}
