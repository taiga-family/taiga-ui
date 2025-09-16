import {Component} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiDemo, TuiDocAppearance],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Content types',
        'Colors',
        'Sizes',
        'Stacking',
        'Options with DI',
        'Labeled',
        'Outline',
    ];

    protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size = this.sizes[3]!;

    protected readonly srcVariants: readonly string[] = [
        'MW',
        '@tui.star',
        'https://avatars.githubusercontent.com/u/11832552',
        'https://taiga-ui.dev/assets/images/test-not-found.png',
    ];

    protected src = this.srcVariants[0]!;

    protected round = true;
}
