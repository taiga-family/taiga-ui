import {NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    Input,
    Output,
    signal,
} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiStringHandler, TuiStringMatcher} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_SPEED, TuiDataList, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

interface Item {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiRoot,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [stringify]="stringify()"
            >
                <input
                    tuiComboBox
                    [formControl]="control"
                    [matcher]="matcher()"
                    (input)="inputEvent.emit($any($event.target).value)"
                />

                <tui-data-list *tuiTextfieldDropdown>
                    <button
                        *ngFor="let item of items()"
                        new
                        tuiOption
                        type="button"
                        [value]="item.id"
                    >
                        {{ item.name }}
                    </button>
                </tui-data-list>
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class Sandbox implements OnInit {
    protected readonly items = signal<readonly Item[]>([]);

    protected readonly stringify = computed<TuiStringHandler<number>>(
        (items = this.items()) =>
            (id) =>
                items.find((item) => item.id === id)?.name ?? '',
    );

    protected readonly matcher = computed<TuiStringMatcher<number>>(
        (items = this.items()) =>
            (id, query) => {
                const name = items.find((item) => item.id === id)?.name ?? '';

                return query === String(id) || query.toLowerCase() === name.toLowerCase();
            },
    );

    @Input()
    public control = new FormControl<number | null>(null);

    @Output()
    public readonly valueChanges = new EventEmitter();

    @Output()
    public readonly inputEvent = new EventEmitter<string>();

    public ngOnInit(): void {
        this.control.valueChanges.subscribe((x) => this.valueChanges.emit(x));

        // Simulate API request. Don't use rxjs to avoid problems with cy.clock()!
        setTimeout(() => {
            this.items.set([
                {id: 42, name: 'John Cleese'},
                {id: 0, name: 'Eric Idle'},
                {id: 666, name: 'Michael Palin'},
                {id: 123, name: 'Terry Gilliam'},
                {id: 777, name: 'Terry Jones'},
                {id: 999, name: 'Graham Chapman'},
            ]);
        }, 3_000);
    }
}

describe('ComboBox + form control contains IDs of items from datalist', () => {
    describe('items will be loaded later from API', () => {
        let fixture!: ComponentFixture<unknown>;

        describe('but form control already contains initial value', () => {
            beforeEach(() => {
                cy.clock();

                cy.mount(Sandbox, {
                    componentProperties: {
                        control: new FormControl(0),
                    },
                }).then((x) => {
                    fixture = x.fixture;
                });
            });

            it('textfield initially empty during items loading', () => {
                cy.smartTick(100, {fixture});
                cy.get('[tuiComboBox]').should('have.value', '');
                cy.smartTick(900, {fixture});
                cy.get('[tuiComboBox]').should('have.value', '');
                cy.smartTick(1_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', '');
            });

            it('textfield are filled with value when items are loaded', () => {
                cy.smartTick(1_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', '');
                cy.smartTick(2_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', 'Eric Idle');
            });
        });

        describe('but user already enters something', () => {
            beforeEach(() => {
                cy.clock();

                cy.mount(Sandbox, {
                    componentProperties: {
                        valueChanges: createOutputSpy('valueChanges'),
                    },
                }).then((x) => {
                    fixture = x.fixture;
                });
            });

            it('user enters item ID', () => {
                cy.get('[tuiComboBox]').type('42');

                cy.smartTick(1_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', '42');
                cy.get('@valueChanges').should('not.have.been.called');

                cy.smartTick(2_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', 'John Cleese');
                cy.get('@valueChanges').should('have.been.calledOnceWith', 42);
            });

            it('user enters item name', () => {
                cy.get('[tuiComboBox]').type('tErRy JoNeS');

                cy.smartTick(1_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', 'tErRy JoNeS');
                cy.get('@valueChanges').should('not.have.been.called');

                cy.smartTick(2_000, {fixture});
                cy.get('[tuiComboBox]').should('have.value', 'Terry Jones');
                cy.get('@valueChanges').should('have.been.calledOnceWith', 777);
            });
        });
    });
});
