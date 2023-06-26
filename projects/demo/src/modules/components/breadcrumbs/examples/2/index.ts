import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-breadcrumbs-example-2',
    templateUrl: './index.html',
    providers: [
        tuiBreadcrumbsOptionsProvider({
            icon: 'tuiIconArrowRight',
            mode: null,
            size: 'l',
        }),
    ],
    changeDetection,
    encapsulation,
})
export class TuiBreadcrumbsExample2 {
    readonly items = [
        {
            caption: 'Open Source',
            link: 'https://github.com',
        },
        {
            caption: 'Angular',
            link: 'https://github.com/topics/angular',
        },
        {
            caption: 'Tinkoff',
            link: 'https://github.com/tinkoff',
        },
        {
            caption: 'Taiga UI',
            link: 'https://github.com/tinkoff/taiga-ui',
        },
        {
            caption: 'Components',
            link: 'https://taiga-ui.dev',
        },
        {
            caption: 'Breadcrumbs',
            link: 'https://taiga-ui.dev/navigation/breadcrumbs',
        },
    ];

    max = 4;
}
