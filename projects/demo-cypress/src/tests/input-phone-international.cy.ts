import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    input,
    model,
    type OnInit,
    output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiIcon, TuiRoot} from '@taiga-ui/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

@Component({
    imports: [ReactiveFormsModule, TuiIcon, TuiInputPhoneInternational, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputPhoneInternational
                    [countries]="countries()"
                    [formControl]="control()"
                    [(countryIsoCode)]="countryIsoCode"
                    (countryIsoCodeChange)="countryIsoCodeChange.emit($event)"
                />

                <tui-icon icon="@tui.sun" />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: import('libphonenumber-js/min/metadata').then((m) => m.default),
        }),
    ],
})
export class Test implements OnInit {
    private readonly destroyRef = inject(DestroyRef);

    public readonly control = input(new FormControl<string>('', {nonNullable: true}));

    public readonly countryIsoCode = model<TuiCountryIsoCode>('RU');

    public readonly countries = input<readonly TuiCountryIsoCode[]>([
        'RU',
        'US',
        'BY',
        'KZ',
    ]);

    public readonly valueChange = output<string>();

    public readonly countryIsoCodeChange = output<string>();

    public ngOnInit(): void {
        this.control()
            .valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                this.valueChange.emit(value);
            });
    }
}

describe('InputPhoneInternational', () => {
    beforeEach(() => {
        cy.viewport(400, 300);
    });

    describe('Count form control updates', () => {
        let control!: FormControl<string>;

        beforeEach(() => {
            control = new FormControl('', {nonNullable: true});

            cy.mount(Test, {
                componentProperties: {
                    countryIsoCode: 'US',
                    control,
                    valueChange: createOutputSpy('valueChange'),
                },
            });

            initAliases();
        });

        it('Empty textfield => focus => country calling code appears => no form control value changes', () => {
            cy.get('@input').should('have.value', '').focus().should('have.value', '+1 ');

            cy.get('@valueChange')
                .should('not.be.called')
                .then(() => {
                    expect(control.value).equal('');
                });
        });

        it('Focused textfield with country calling code only => blur => empty textfield => no form control value changes', () => {
            cy.get('@input')
                .focus()
                .should('have.value', '+1 ')
                .blur()
                .should('have.value', '');

            cy.get('@valueChange')
                .should('not.be.called')
                .then(() => {
                    expect(control.value).equal('');
                });
        });

        describe('basic keyboard typing', () => {
            it('Type 212 => form control emits 3 events', () => {
                cy.get('@input').type('212').should('have.value', '+1 212');

                cy.get('@valueChange')
                    .should('have.callCount', 3)
                    .then(() => {
                        expect(control.value).equal('+1212');
                    });
            });

            it('+1 212| => Type 5 => +1 212 5 (space and 5 were added) => only one form control event', () => {
                cy.get('@input').type('2125').should('have.value', '+1 212 5');

                cy.get('@valueChange')
                    .should('have.callCount', 4)
                    .then(() => {
                        expect(control.value).equal('+12125');
                    });
            });

            it('+1 212 555| => Type 2 => +1 212 555-2 (hyphen and 2 were added) => only one form control event', () => {
                cy.get('@input').type('212555').should('have.value', '+1 212 555');

                cy.get('@valueChange').should('have.callCount', 6);

                cy.get('@input').type('2').should('have.value', '+1 212 555-2');

                cy.get('@valueChange')
                    .should('have.callCount', 7)
                    .then(() => {
                        expect(control.value).equal('+12125552');
                    });
            });
        });

        describe('select new country from dropdown', () => {
            it('Initially empty textfield => select new country => no form control emits', () => {
                cy.get('@select').click();

                cy.compareSnapshot('phone-18n-dropdown');

                selectCountry('Kazakhstan');

                cy.get('@input').should('be.focused').should('have.value', '+7 ');

                cy.get('@valueChange')
                    .should('not.be.called')
                    .then(() => {
                        expect(control.value).equal('');
                    });
            });

            it('Textfield contains +1 212 555-2368 => select new country => form control emits once and contains new value', () => {
                cy.get('@input')
                    .type('2125552368')
                    .should('have.value', '+1 212 555-2368');

                cy.get('@valueChange')
                    .should('have.callCount', 10)
                    .then(() => {
                        expect(control.value).equal('+12125552368');
                    });

                cy.get('@select').click();

                selectCountry('Russia');

                cy.get('@input')
                    .should('be.focused')
                    .should('have.value', '+7 2125552368');

                cy.get('@valueChange')
                    .should('have.callCount', 11)
                    .then(() => {
                        expect(control.value).equal('+72125552368');
                    });
            });
        });
    });

    describe('Programmatic form control updates', () => {
        describe('Set initial value for form control', () => {
            let control!: FormControl<string>;

            beforeEach(() => {
                control = new FormControl('+12125552368', {nonNullable: true});

                cy.mount(Test, {
                    componentProperties: {
                        countryIsoCode: 'US',
                        control,
                        valueChange: createOutputSpy('valueChange'),
                    },
                });

                initAliases();
            });

            it('form control emits nothing', () => {
                cy.get('@valueChange').should('not.be.called');
            });

            it('textfield value is formatted', () => {
                cy.get('@input').should('have.value', '+1 212 555-2368');
            });
        });

        describe('Run-time programmatic form control patching', () => {
            let control!: FormControl<string>;

            beforeEach(() => {
                control = new FormControl('', {nonNullable: true});

                cy.mount(Test, {
                    componentProperties: {
                        countryIsoCode: 'KZ',
                        control,
                        valueChange: createOutputSpy('valueChange'),
                        countryIsoCodeChange: createOutputSpy('countryIsoCodeChange'),
                    },
                });

                initAliases();
            });

            it('does not trigger subsequent form control emits', () => {
                control.patchValue('+77777777777');

                cy.get('@valueChange')
                    .should('have.callCount', 1)
                    .then(() => {
                        expect(control.value).equal('+77777777777');
                    });
            });

            it('textfield value is formatted', () => {
                control.patchValue('+77777777777');
                cy.wait(1);

                cy.get('@input')
                    .focus() // TODO: remove after update to Angular 17+ (https://github.com/taiga-family/taiga-ui/issues/9389#issuecomment-2551055582)
                    .should('have.value', '+7 777 777-7777');
                cy.get('tui-textfield').compareSnapshot({
                    name: 'phone-18n-formatted-value',
                    cypressScreenshotOptions: {padding: 8},
                });
            });

            it('automatically detects new [countryIsoCode] for complete phone', () => {
                cy.get('@input').focus();

                control.patchValue('+375123456789');

                cy.get('@input').should('have.value', '+375 12 345-67-89');
                cy.get('@countryIsoCodeChange').should('have.been.calledWith', 'BY');
            });
        });
    });
});

function initAliases(): void {
    cy.get('tui-textfield input[tuiInputPhoneInternational]').as('input');
    cy.get('tui-textfield button[tuiChevron]').as('select');
}

function selectCountry(countryName: string): void {
    cy.get('tui-dropdown tui-data-list [tuiOption]').contains(countryName).click();
}
