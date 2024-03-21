import {Component, inject} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiAddonDocModule,
        TuiNotificationModule,
        TuiAvatarComponent,
        TuiExamplePipe,
        TuiComponentPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly exampleModule = import('./examples/import/module.md?raw');
    protected readonly exampleHtml = import('./examples/import/template.md?raw');

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
