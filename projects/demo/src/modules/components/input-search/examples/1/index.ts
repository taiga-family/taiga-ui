import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSearchResults} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCell, TuiInputSearch, TuiNavigation} from '@taiga-ui/layout';
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
            title: 'Taiga UI Proprietary',
            href: 'https://super-secret-evil.org/taiga-ui',
            icon: '@tui.gitlab',
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
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAvatar,
        TuiCell,
        TuiInputSearch,
        TuiNavigation,
        TuiSearchResults,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
