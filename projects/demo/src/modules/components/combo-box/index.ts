import {Component, computed, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiContext, TuiStringMatcher} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE, TUI_STRICT_MATCHER} from '@taiga-ui/cdk';
import {TuiDropdown, TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

interface Country {
    id: string;
    name: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly isMobile = inject(TUI_IS_MOBILE);

    protected readonly control = new FormControl<Country | null>(null);

    protected textfieldContent: PolymorpheusContent = '';

    protected readonly countries$: Observable<Country[]> = inject(TUI_COUNTRIES).pipe(
        map((x) => Object.entries(x).map(([id, name]) => ({id, name}))),
    );

    protected readonly matcherVariants: ReadonlyArray<TuiStringMatcher<Country>> = [
        TUI_STRICT_MATCHER as TuiStringMatcher<Country>,
        (item: Country, search: string) => item.id === search,
    ];

    protected matcher = this.matcherVariants[0]!;

    protected readonly textfieldContentVariants = computed(() => [
        '',
        'TOP SECRET',
        ({$implicit: x}: TuiContext<any>) =>
            x?.name.includes('i') ? `->${x.name}<-` : x?.name,
    ]);

    protected strict = true;

    protected readonly databaseExample: TuiRawLoaderContent = import(
        './examples/5/database.ts?raw'
    );

    protected readonly selectOptionExample: TuiRawLoaderContent = import(
        './examples/12/option.ts?raw'
    );
}
