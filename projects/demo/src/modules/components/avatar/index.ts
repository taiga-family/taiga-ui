import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiExamplePipe} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiAddonDocModule,
        TuiNotificationModule,
        TuiAvatarComponent,
        TuiExamplePipe,
        PolymorpheusModule,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly exampleModule = import('./examples/import/module.md?raw');
    protected readonly exampleHtml = import('./examples/import/template.md?raw');
    protected readonly example1 = import('./examples/1');
    protected readonly example2 = import('./examples/2');
    protected readonly example3 = import('./examples/3');
    protected readonly example4 = import('./examples/4');
    protected readonly example5 = import('./examples/5');
    protected readonly example6 = import('./examples/6');

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
