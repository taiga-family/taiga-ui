import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
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
    standalone: true,
    template: '',
    styleUrls: ['./list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-list'},
})
class Styles {}

@Directive({
    standalone: true,
    selector: 'ul[tuiList], ol[tuiList]',
    host: {'[attr.data-size]': 'size || options.size'},
})
export class TuiList {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_LIST_OPTIONS);

    @Input('tuiList')
    public size: TuiListOptions['size'] | '' = this.options.size;
}
