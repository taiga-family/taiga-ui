import {Component, EventEmitter, ViewChild} from '@angular/core';
import {TuiMobileCalendarComponent} from '@taiga-ui/addon-mobile';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {createOutputSpy} from 'cypress/angular';
import {of} from 'rxjs';

describe('Mobile calendar', () => {
    const today = TuiDay.currentLocal();
    const tomorrow = today.append({day: 1});

    @Component({
        template: `
            <tui-mobile-calendar
                style="height: 800px"
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [min]="min"
                [single]="single"
                (cancel)="onCancel.emit(true)"
                (confirm)="onConfirm.emit($event)"
            ></tui-mobile-calendar>
        `,
        providers: [
            {
                provide: TUI_CALENDAR_DATE_STREAM,
                useValue: of(tomorrow),
            },
        ],
    })
    class TestComponent {
        protected min = TUI_FIRST_DAY;
        protected max = TUI_LAST_DAY;
        protected disabledItemHandler = TUI_FALSE_HANDLER;

        @ViewChild(TuiMobileCalendarComponent, {static: true})
        public calendar!: TuiMobileCalendarComponent;

        public single = true;
        public onCancel = new EventEmitter<boolean>();
        public onConfirm = new EventEmitter<TuiDay | TuiDayRange | readonly TuiDay[]>();
    }

    it('the back button emits a cancel event', () => {
        cy.mount(TestComponent, {
            imports: [TuiMobileCalendarComponent],
            providers: [NG_EVENT_PLUGINS],
            componentProperties: {
                onCancel: createOutputSpy('onCancelSpy'),
            },
        });

        cy.get('[automation-id="tui-mobile-calendar__cancel"]').click();
        cy.get('@onCancelSpy').should('be.calledWith', true);
    });

    it('single === true', () => {
        cy.mount(TestComponent, {
            imports: [TuiMobileCalendarComponent],
        });

        cy.get('[automation-id="tui-mobile-calendar__label"]').should(
            'contain.text',
            'Choose day',
        );
    });

    it('single === false', () => {
        cy.mount(TestComponent, {
            imports: [TuiMobileCalendarComponent],
            componentProperties: {
                single: false,
            },
        });

        cy.get('[automation-id="tui-mobile-calendar__label"]').should(
            'contain.text',
            'Choose range',
        );
    });

    describe('when the done button emits', () => {
        it('confirm event with selected day', () => {
            cy.mount(TestComponent, {
                imports: [TuiMobileCalendarComponent],
                componentProperties: {
                    onConfirm: createOutputSpy('onConfirmSpy'),
                },
            });

            cy.get(
                '[automation-id="tui-primitive-calendar-mobile__cell"].t-cell_today',
            ).click();
            cy.get('[automation-id="tui-mobile-calendar__confirm"]').click();
            cy.get('@onConfirmSpy').should('be.calledWith', today);
        });

        it('confirm event at selected interval', () => {
            cy.mount(TestComponent, {
                imports: [TuiMobileCalendarComponent],
                componentProperties: {
                    single: false,
                    onConfirm: createOutputSpy('onConfirmSpy'),
                },
            });

            cy.get(
                '[automation-id="tui-primitive-calendar-mobile__cell"].t-cell_today',
            ).click();
            cy.get('[automation-id="tui-mobile-calendar__confirm"]').click();
            cy.get('@onConfirmSpy').should(
                'be.calledWith',
                new TuiDayRange(today, today),
            );
        });

        it('year selection scrolls through months', () => {
            cy.mount(TestComponent, {
                imports: [TuiMobileCalendarComponent],
                componentProperties: {
                    onConfirm: createOutputSpy('onConfirmSpy'),
                },
            })
                .then(wrapper => wrapper.component)
                .then(component => {
                    cy.wait(500).then(() => {
                        component.calendar.setYear(1950);

                        cy.get(
                            '[automation-id="tui-primitive-calendar-mobile__cell"]:visible',
                        )
                            .eq(0)
                            .click();

                        cy.get('[automation-id="tui-mobile-calendar__confirm"]').click();
                    });
                });

            cy.get('@onConfirmSpy').should('be.called');
            cy.get('[data-state="active"]').contains('1950');
        });
    });
});
