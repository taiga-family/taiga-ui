import {Component, computed, inject, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE, TuiLet} from '@taiga-ui/cdk';
import {TuiDropdown, tuiItemsHandlersProvider, TuiTextfield} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
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
        TuiDataListWrapper,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiLet,
        TuiSelect,
        TuiTextfield,
    ],
    providers: [
        tuiItemsHandlersProvider<Country>({
            disabledItemHandler: signal((item) => item.id.charCodeAt(1) % 3 === 0),
        }),
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;

    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly control = new FormControl<Country | null>({
        id: 'US',
        name: 'USA',
    });

    protected textfieldContent: PolymorpheusContent = '';

    protected readonly countries$: Observable<Country[]> = inject(TUI_COUNTRIES).pipe(
        map((x) => Object.entries(x).map(([id, name]) => ({id, name}))),
    );

    protected readonly textfieldContentVariants = computed(() => [
        '',
        'TOP SECRET',
        ({$implicit: x}: TuiContext<any>) =>
            x?.name.includes('i') ? `->${x.name}<-` : x?.name,
    ]);

    protected selectOptionExample: TuiRawLoaderContent = import(
        './examples/10/option.ts?raw'
    );
}
