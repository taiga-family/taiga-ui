import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
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

    protected readonly isHorizontal = computed(() => !tuiSizeBigger(this.size()));

    public readonly size = input(this.options.size);

    public readonly inheritColor = input(this.options.inheritColor);

    public readonly overlay = input(this.options.overlay);

    public readonly textContent = input<PolymorpheusContent>();

    public readonly loading = input(true);
}
