import type {OnInit} from '@angular/core';
import {Component, DestroyRef, EventEmitter, inject, Input, Output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiRootComponent} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiInputPhoneInternationalComponent} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

@Component({
    standalone: true,
    imports: [TuiRootComponent, ReactiveFormsModule, TuiInputPhoneInternationalComponent],
    template: `
        <tui-root>
            <tui-input-phone-international
                [countries]="countries"
                [formControl]="control"
                [(countryIsoCode)]="countryIsoCode"
            ></tui-input-phone-international>
        </tui-root>
    `,
    providers: [provideAnimations()],
})
export class TestComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);

    @Input()
    public control = new FormControl<string>('', {nonNullable: true});

    @Input()
    public countryIsoCode: TuiCountryIsoCode = 'RU';

    @Input()
    public countries: readonly TuiCountryIsoCode[] = ['RU', 'US', 'BY', 'KZ'];

    @Output()
    public valueChange = new EventEmitter<string>();

    public ngOnInit(): void {
        this.control.valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(value => {
                this.valueChange.emit(value);
            });
    }
}

describe('InputPhoneInternational', () => {
    describe('Count form control updates', () => {
        let control!: FormControl<string>;

        beforeEach(() => {
            control = new FormControl('', {nonNullable: true});

            cy.mount(TestComponent, {
                componentProperties: {
                    countryIsoCode: 'US',
                    control,
                    valueChange: createOutputSpy('valueChange'),
                },
            });

            initAliases('tui-input-phone-international');
        });

        it('Empty textfield => focus => country calling code appears => no form control value changes', () => {
            cy.get('@textfield')
                .should('have.value', '')
                .focus()
                .should('have.value', '+1 ');

            cy.get('@valueChange')
                .should('not.be.called')
                .then(() => {
                    expect(control.value).equal('');
                });
        });

        it('Focused textfield with country calling code only => blur => empty textfield => no form control value changes', () => {
            cy.get('@textfield')
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
                cy.get('@textfield').type('212').should('have.value', '+1 212');

                cy.get('@valueChange')
                    .should('have.callCount', 3)
                    .then(() => {
                        expect(control.value).equal('+1212');
                    });
            });

            it('+1 212| => Type 5 => +1 212 5 (space and 5 were added) => only one form control event', () => {
                cy.get('@textfield').type('2125').should('have.value', '+1 212 5');

                cy.get('@valueChange')
                    .should('have.callCount', 4)
                    .then(() => {
                        expect(control.value).equal('+12125');
                    });
            });

            it('+1 212 555| => Type 2 => +1 212 555-2 (hyphen and 2 were added) => only one form control event', () => {
                cy.get('@textfield').type('212555').should('have.value', '+1 212 555');

                cy.get('@valueChange').should('have.callCount', 6);

                cy.get('@textfield').type('2').should('have.value', '+1 212 555-2');

                cy.get('@valueChange')
                    .should('have.callCount', 7)
                    .then(() => {
                        expect(control.value).equal('+12125552');
                    });
            });
        });

        describe('select new country from dropdown', () => {
            it('Initially empty textfield => select new country => no form control emits', () => {
                cy.get('tui-input-phone-international').click('left');

                selectCountry('Kazakhstan');

                cy.get('@textfield').should('be.focused').should('have.value', '+7 ');

                cy.get('@valueChange')
                    .should('not.be.called')
                    .then(() => {
                        expect(control.value).equal('');
                    });
            });

            it('Textfield contains +1 212 555-2368 => select new country => form control emits once and contains new value', () => {
                cy.get('@textfield')
                    .type('2125552368')
                    .should('have.value', '+1 212 555-2368');

                cy.get('@valueChange')
                    .should('have.callCount', 10)
                    .then(() => {
                        expect(control.value).equal('+12125552368');
                    });

                cy.get('tui-input-phone-international').click('left');

                selectCountry('Russia');

                cy.get('@textfield')
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

                cy.mount(TestComponent, {
                    componentProperties: {
                        countryIsoCode: 'US',
                        control,
                        valueChange: createOutputSpy('valueChange'),
                    },
                });

                initAliases('tui-input-phone-international');
            });

            it('form control emits nothing', () => {
                cy.get('@valueChange').should('not.be.called');
            });

            it('textfield value is formatted', () => {
                cy.get('@textfield').should('have.value', '+1 212 555-2368');
            });
        });

        describe('Run-time programmatic form control patching', () => {
            let control!: FormControl<string>;

            beforeEach(() => {
                control = new FormControl('', {nonNullable: true});

                cy.mount(TestComponent, {
                    componentProperties: {
                        countryIsoCode: 'KZ',
                        control,
                        valueChange: createOutputSpy('valueChange'),
                    },
                });

                initAliases('tui-input-phone-international');
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

                cy.get('@textfield').should('have.value', '+7 777 777-7777');
            });
        });
    });
});

function initAliases(wrapperSelector: string): void {
    cy.get(`${wrapperSelector} input`).first().as('textfield');
}

function selectCountry(countryName: string): void {
    cy.get('tui-dropdown tui-data-list [tuiOption]').contains(countryName).click();
}
