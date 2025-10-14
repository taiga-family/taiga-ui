import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiDropdownMobile,
    TuiDropdownSheet,
    TuiResponsiveDialog,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TuiButton,
    TuiCell,
    TuiInitialsPipe,
    TuiRoot,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
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
        AsyncPipe,
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
        TuiMultiSelect,
        TuiResponsiveDialog,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
        TuiTitle,
        TuiInitialsPipe,
        TuiInputChip,
        TuiDropdownSheet,
    ],
    template: `
        <tui-root>
            <ng-template [(tuiResponsiveDialog)]="dialog">
                <tui-textfield
                    tuiChevron
                    tuiDropdownSheet="Select user"
                    class="tui-space_vertical-4"
                    [content]="template"
                >
                    <input
                        placeholder="Select user"
                        tuiSelect
                        [(ngModel)]="user"
                    />
                    <tui-data-list-wrapper
                        *tuiDropdown
                        new
                        [itemContent]="template"
                        [items]="users"
                    />
                </tui-textfield>

                <tui-textfield
                    multi
                    tuiChevron
                    tuiDropdownMobile
                    class="tui-space_vertical-4"
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
                            new
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
                <span tuiCell>
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
                            {{ user.balance | tuiAmount: '$' : 'left' | async }}
                        </span>
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
    protected dialog = true;

    protected readonly open = signal(false);
    protected readonly users: readonly User[] = [
        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},
        {name: 'Roman Sedov', balance: 523242},
        {name: 'Vladimir Potekhin', balance: 645465},
        {name: 'Nikita Barsukov', balance: 468468},
        {name: 'Maxim Ivanov', balance: 498654},
    ];

    protected readonly stringify = ({name}: User): string => name;
}

describe('DropdownMobile', () => {
    beforeEach(() => {
        cy.viewport(375, 660);
        cy.mount(TestDropdownMobile, {
            providers: [
                {provide: TUI_ANIMATIONS_SPEED, useValue: 0},
                {provide: TUI_IS_MOBILE, useValue: true},
            ],
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
            cy.get('tui-textfield[multi]').click();

            cy.compareSnapshot('type-view-opened');
        });

        it('Filters items as you type', () => {
            cy.get('tui-textfield[multi]').click();
            cy.get('tui-textfield[multi]').type('Alex');

            cy.compareSnapshot('type-view-filtered');
        });

        it('Closes with selected values', () => {
            cy.get('tui-textfield[multi]').click();
            cy.get('tui-textfield[multi]').type('Alex');

            cy.get('[tuiOption]').first().click();
            cy.get('button[tuiDropdownButton]').click();

            cy.compareSnapshot('type-view-closed');
        });
    });
});
