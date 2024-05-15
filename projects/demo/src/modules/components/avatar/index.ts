import {Component, inject} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    private readonly sanitizer = inject(DomSanitizer);

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

    protected size = this.sizes[3];

    protected readonly srcVariants: ReadonlyArray<SafeResourceUrl | string> = [
        'MW',
        'https://avatars.githubusercontent.com/u/11832552',
        'https://taiga-ui.dev/assets/images/test-not-found.png',
        'tuiIconUserLarge',
        this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://avatars.githubusercontent.com/u/10106368',
        ),
    ];

    protected src = this.srcVariants[0];

    protected round = true;
}
