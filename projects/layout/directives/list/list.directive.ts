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
    tuiCreateOptions<TuiListOptions>({size: 'l'});

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
    host: {'[attr.data-size]': 'size() || options.size'},
})
export class TuiList {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_LIST_OPTIONS);

    public readonly size = input<TuiListOptions['size'] | ''>(this.options.size, {
        alias: 'tuiList',
    });
}
