import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiIsSafari} from '@taiga-ui/cdk/utils/browser';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_LOADER_OPTIONS} from './loader.options';

@Component({
    standalone: true,
    selector: 'tui-loader',
    imports: [NgIf, PolymorpheusOutlet],
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._loading]': 'loading',
        '[attr.data-size]': 'size',
    },
})
export class TuiLoader {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly options = inject(TUI_LOADER_OPTIONS);
    protected readonly isApple = tuiIsSafari(tuiInjectElement()) || this.isIOS;

    @Input()
    public size = this.options.size;

    @Input()
    public inheritColor = this.options.inheritColor;

    @Input()
    public overlay = this.options.overlay;

    @Input()
    public textContent: PolymorpheusContent;

    // TODO: Drop alias in v5
    @Input('showLoader')
    public loading = true;

    protected get isHorizontal(): boolean {
        return !tuiSizeBigger(this.size);
    }
}
