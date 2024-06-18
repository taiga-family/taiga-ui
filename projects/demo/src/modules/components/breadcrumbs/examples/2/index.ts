import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItemDirective, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiLink} from '@taiga-ui/core';
import {TuiBreadcrumbsComponent, tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiBreadcrumbsComponent,
        TuiDropdown,
        TuiDataList,
        TuiInputNumberModule,
        TuiRepeatTimes,
        TuiLink,
        TuiButton,
        TuiItemDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiBreadcrumbsOptionsProvider({
            icon: '@tui.arrow-right',
            size: 'l',
        }),
    ],
})
export default class Example {
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
