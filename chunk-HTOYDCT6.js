import"./chunk-HU6DUUP4.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSearchResults} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiInputSearch, TuiNavigation} from '@taiga-ui/layout';
import {filter, map, startWith, switchMap, timer} from 'rxjs';

interface Result {
    href: string;
    title: string;
    subtitle?: string;
    icon?: string;
}

const DATA: Record<string, readonly Result[]> = {
    Documents: [
        {
            title: 'Monty Python',
            href: 'https://en.wikipedia.org/wiki/Monty_Python',
        },
    ],
    Code: [
        {
            title: 'Taiga UI',
            href: 'https://github.com/taiga-family/taiga-ui',
            icon: '@tui.github',
        },
        {
            title: 'Maskito',
            href: 'https://github.com/taiga-family/maskito',
            icon: '@tui.github',
        },
        {
            title: 'Web APIs with Angular',
            href: 'https://github.com/taiga-family/ng-web-apis',
            icon: '@tui.github',
        },
    ],
    Links: [
        {
            title: 'Taiga UI',
            subtitle: 'Super awesome library',
            href: 'https://taiga-ui.dev',
            icon: '/assets/images/taiga.svg',
        },
        {
            title: 'Maskito',
            href: 'https://maskito.dev',
            icon: '@tui.external-link',
        },
    ],
};

@Component({
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiInputSearch,
        TuiNavigation,
        TuiSearchResults,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly popular = ['Taiga UI', 'Maskito', 'Web APIs for Angular'];

    protected readonly control = new FormControl('');

    protected readonly results$ = this.control.valueChanges.pipe(
        filter(Boolean),
        switchMap((value: string) =>
            timer(2000).pipe(
                map(() => this.filter(value)),
                startWith(null),
            ),
        ),
    );

    protected open = false;

    private filter(query: string): Record<string, readonly Result[]> {
        return Object.entries(DATA).reduce(
            (result, [key, value]) => ({
                ...result,
                [key]: value.filter(({title, href, subtitle = ''}) =>
                    TUI_DEFAULT_MATCHER(title + href + subtitle, query),
                ),
            }),
            {},
        );
    }
}
`;export{i as default};
