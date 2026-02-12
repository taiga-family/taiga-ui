import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiDropdownMobile,
    TuiDropdownSheet,
    TuiResponsiveDialog,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiRoot, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInitialsPipe,
    TuiInputChip,
    TuiMultiSelect,
    TuiSelect,
} from '@taiga-ui/kit';

// Note: webpack compilation error
// Do not change to @demo/utils
// noinspection ES6PreferShortImport
import {assets} from '../../../demo/src/utils/load-assets';

interface User {
    readonly url?: string;
    readonly name: string;
    readonly balance: number;
}

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiDropdownSheet,
        TuiFilterByInputPipe,
        TuiInitialsPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiResponsiveDialog,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
        TuiTitle,
    ],
    template: `
        <tui-root>
            <ng-template [(tuiResponsiveDialog)]="dialog">
                <tui-textfield
                    tuiChevron
                    tuiDropdownSheet="Select user"
                    [content]="template"
                    [style.margin-block-end.rem]="1"
                >
                    <input
                        placeholder="Select user"
                        tuiSelect
                        [(ngModel)]="user"
                    />
                    <tui-data-list-wrapper
                        *tuiDropdown
                        [itemContent]="template"
                        [items]="users"
                    />
                </tui-textfield>

                <tui-textfield
                    multi
                    tuiChevron
                    tuiDropdownMobile
                    [open]="open()"
                    [stringify]="stringify"
                    (openChange)="open.set($event)"
                >
                    <input
                        placeholder="Pick more users"
                        tuiInputChip
                        [(ngModel)]="selected"
                    />

                    <tui-input-chip *tuiItem />

                    <ng-container *tuiDropdown>
                        <tui-data-list-wrapper
                            tuiMultiSelectGroup
                            [itemContent]="template"
                            [items]="users | tuiFilterByInput"
                        />
                        <button
                            appearance="accent"
                            size="m"
                            tuiButton
                            tuiDropdownButton
                            type="button"
                            (click)="open.set(false)"
                        >
                            Done
                        </button>
                    </ng-container>
                </tui-textfield>
            </ng-template>

            <ng-template
                #template
                let-user
            >
                <div [tuiAvatar]="user.name | tuiInitials">
                    @if (user.url) {
                        <img
                            alt=""
                            [src]="user.url"
                        />
                    }
                </div>
                <span tuiTitle>
                    {{ user.name }}
                    <span tuiSubtitle>
                        {{ user.balance | tuiAmount: '$' : 'start' }}
                    </span>
                </span>
            </ng-template>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestDropdownMobile {
    protected selected: readonly User[] = [];
    protected user: User | null = null;
    protected readonly open = signal(false);
    protected readonly users: readonly User[] = [
        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},
        {name: 'Roman Sedov', balance: 523242},
        {name: 'Vladimir Potekhin', balance: 645465},
        {name: 'Nikita Barsukov', balance: 468468},
        {name: 'Maxim Ivanov', balance: 498654},
    ];

    public readonly dialog = signal(false);

    protected readonly stringify = ({name}: User): string => name;
}

describe('DropdownMobile', () => {
    beforeEach(() => {
        cy.viewport(375, 660);
        cy.mount(TestDropdownMobile, {
            providers: [{provide: WA_IS_MOBILE, useValue: true}],
        }).then(({fixture, component}) => {
            fixture.detectChanges();
            component.dialog.set(true);
        });
    });

    describe('Sheet view', () => {
        it('Opens with no double overlay', () => {
            cy.get('input[tuiSelect]').focus();
            cy.get('input[tuiSelect]').click();

            cy.compareSnapshot('sheet-view-opened');
        });

        it('Closes and selects value', () => {
            cy.get('input[tuiSelect]').focus();
            cy.get('input[tuiSelect]').click();
            cy.get('[tuiOption]').first().click();

            cy.compareSnapshot('sheet-view-closed');
        });
    });

    describe('Type view', () => {
        it('Opens properly inside dialog', () => {
            cy.get('input[tuiInputChip]').click();

            cy.compareSnapshot('type-view-opened');
        });

        it('Filters items as you type', () => {
            cy.get('input[tuiInputChip]').click();
            cy.get('input[tuiInputChip]').type('Alex');

            cy.compareSnapshot('type-view-filtered');
        });

        it('Closes with selected values', () => {
            cy.get('input[tuiInputChip]').click();
            cy.get('input[tuiInputChip]').type('Alex');

            cy.get('[tuiOption]').first().click();
            cy.get('button[tuiDropdownButton]').click();

            cy.compareSnapshot('type-view-closed');
        });
    });
});
