/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    signal,
    type Type,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {form, FormField} from '@angular/forms/signals';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiSearchResults} from '@taiga-ui/experimental';
import {TuiInputSearch} from '@taiga-ui/layout';

describe('tuiSearchHistory + signal forms', () => {
    const POPULAR = ['Taiga UI', 'Maskito'];
    const QUERY = 'angular';

    @Directive()
    abstract class SearchSandbox {
        public readonly popular = POPULAR;
    }

    @Component({
        imports: [FormField, TuiInputSearch, TuiRoot, TuiSearchResults, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield (pointerdown.capture.stop)="(0)">
                    <input
                        [formField]="$any(f.query)"
                        [tuiInputSearch]="dropdown"
                    />
                    <ng-template #dropdown>
                        <tui-search-history [popular]="popular" />
                    </ng-template>
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SignalFormsSandbox extends SearchSandbox {
        public readonly model = signal({query: ''});
        public readonly f = form(this.model);
    }

    @Component({
        imports: [
            ReactiveFormsModule,
            TuiInputSearch,
            TuiRoot,
            TuiSearchResults,
            TuiTextfield,
        ],
        template: `
            <tui-root>
                <tui-textfield (pointerdown.capture.stop)="(0)">
                    <input
                        [formControl]="control"
                        [tuiInputSearch]="dropdown"
                    />
                    <ng-template #dropdown>
                        <tui-search-history [popular]="popular" />
                    </ng-template>
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class ReactiveFormsSandbox extends SearchSandbox {
        public readonly control = new FormControl('', {nonNullable: true});
    }

    const SANDBOXES: ReadonlyArray<{
        readonly component: Type<SearchSandbox>;
        readonly title: string;
    }> = [
        {component: SignalFormsSandbox, title: '[formField] (signal forms)'},
        {component: ReactiveFormsSandbox, title: '[formControl] (reactive forms)'},
    ];

    SANDBOXES.forEach(({component, title}) => {
        describe(title, () => {
            beforeEach(() => {
                cy.clearLocalStorage();
                cy.viewport(600, 400);
                cy.mount(component);
            });

            it('a query typed into the field is remembered in the search history', () => {
                cy.get('input').focus();
                cy.get('input').type(QUERY);
                cy.get('input').type('{esc}');
                cy.get('input').focus();

                cy.get('tui-search-history button[tuiCell]')
                    .contains(QUERY)
                    .should('be.visible');
            });

            it('picking an item from the list puts it into the field', () => {
                cy.get('input').focus();

                cy.get('tui-search-history button[tuiCell]')
                    .contains(POPULAR[0]!)
                    .click();

                cy.get('input').should('have.value', POPULAR[0]);
            });
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
