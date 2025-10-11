import {ChangeDetectionStrategy, Component, inject, input, computed} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiIsSafari} from '@taiga-ui/cdk/utils/browser';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_LOADER_OPTIONS} from './loader.options';

@Component({
    selector: 'tui-loader',
    imports: [PolymorpheusOutlet],
    templateUrl: './loader.template.html',
    styleUrl: './loader.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._loading]': 'loading()',
        '[attr.data-size]': 'size()',
    },
})
export class TuiLoader {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly options = inject(TUI_LOADER_OPTIONS);
    protected readonly isApple = tuiIsSafari(tuiInjectElement()) || this.isIOS;

    public size = input(this.options.size);

    public inheritColor = input(this.options.inheritColor);

    public overlay = input(this.options.overlay);

    public textContent = input<PolymorpheusContent>();

    // TODO: Drop alias in v5
    public loading = input(true, {alias: 'showLoader'});

    protected isHorizontal = computed(() => !tuiSizeBigger(this.size()));
}
