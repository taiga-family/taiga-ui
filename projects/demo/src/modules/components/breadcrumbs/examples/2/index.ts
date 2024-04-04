import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-breadcrumbs-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiBreadcrumbsOptionsProvider({
            icon: 'tuiIconArrowRight',
            size: 'l',
        }),
    ],
})
export class TuiBreadcrumbsExample2 {
    protected readonly items = [
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
            link: 'https://github.com/taiga-family/taiga-ui',
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

    protected max = 4;
}
