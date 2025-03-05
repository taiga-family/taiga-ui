import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiKeySteps} from '@taiga-ui/kit';
import {TuiRange} from '@taiga-ui/kit';

describe('TuiRange', () => {
    let component: Test;
    let fixture: ComponentFixture<Test>;

    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiRange],
        template: `
            <tui-range
                [formControl]="testValue"
                [keySteps]="keySteps"
                [limit]="limit"
                [margin]="margin"
                [max]="max"
                [min]="min"
                [segments]="segments"
                [step]="step"
            ></tui-range>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiRange, {static: true})
        protected component!: TuiRange;

        @ViewChild(TuiRange, {static: true, read: ElementRef})
        public el!: ElementRef<HTMLElement>;

        public testValue = new FormControl([3, 5]);
        public max = 11;
        public min = 1;
        public segments = 10;
        public step = 1;
        public keySteps: TuiKeySteps | null = null;
        public margin = 0;
        public limit = Infinity;
    }

    beforeEach(() => {
        cy.mount(Test).then((wrapper) => {
            component = wrapper.component;
            fixture = wrapper.fixture;
        });

        cy.get('[automation-id="tui-range__left"]').as('leftThumb');
        cy.get('[automation-id="tui-range__right"]').as('rightThumb');
    });

    it('The bar is filled from 20% to 60%', () => {
        expect(getFilledRangeOffset(component).left).to.equal('20%');
        expect(getFilledRangeOffset(component).right).to.equal('60%');
    });

    describe('Changing values', () => {
        describe('Left point', () => {
            it('Pressing the left arrow decreases the value by one step', () => {
                cy.get('@leftThumb')
                    .focus()
                    .type('{leftArrow}')
                    .then(() => {
                        expect(component.testValue.value?.[0]).to.equal(2);
                        expect(component.testValue.value?.[1]).to.equal(5);
                    });
            });

            it('Pressing the right arrow increases the value by one step', () => {
                cy.get('@leftThumb')
                    .focus()
                    .type('{rightArrow}')
                    .then(() => {
                        expect(component.testValue.value?.[0]).to.equal(4);
                        expect(component.testValue.value?.[1]).to.equal(5);
                    });
            });

            it('Pressing the left arrow correctly paints the strip', () => {
                cy.get('@leftThumb')
                    .focus()
                    .type('{leftArrow}')
                    .then(() => {
                        expect(getFilledRangeOffset(component).left).to.equal('10%');
                        expect(getFilledRangeOffset(component).right).to.equal('60%');
                    });
            });

            it('Pressing the right arrow correctly paints the strip', () => {
                cy.get('@leftThumb')
                    .focus()
                    .type('{rightArrow}')
                    .then(() => {
                        expect(getFilledRangeOffset(component).left).to.equal('30%');
                        expect(getFilledRangeOffset(component).right).to.equal('60%');
                    });
            });
        });
    });

    describe('Right point', () => {
        it('Pressing the left arrow decreases the value by one step', () => {
            cy.get('@rightThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(3);
                    expect(component.testValue.value?.[1]).to.equal(4);
                });
        });

        it('Pressing the right arrow increases the value by one step', () => {
            cy.get('@rightThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(3);
                    expect(component.testValue.value?.[1]).to.equal(6);
                });
        });

        it('Pressing the left arrow correctly paints the strip', () => {
            cy.get('@rightThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(getFilledRangeOffset(component).left).to.equal('20%');
                    expect(getFilledRangeOffset(component).right).to.equal('70%');
                });
        });

        it('Pressing the right arrow correctly paints the strip', () => {
            cy.get('@rightThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(getFilledRangeOffset(component).left).to.equal('20%');
                    expect(getFilledRangeOffset(component).right).to.equal('50%');
                });
        });
    });

    describe('Borders', () => {
        it('Prevents the left border from exceeding the right', () => {
            component.testValue.setValue([5, 5]);
            cy.get('@leftThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(5);
                    expect(component.testValue.value?.[1]).to.equal(5);
                });
        });

        it('Prevents the right border from dropping below the left', () => {
            component.testValue.setValue([5, 5]);
            cy.get('@rightThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(5);
                    expect(component.testValue.value?.[1]).to.equal(5);
                });
        });

        it('Prevents the value from decreasing below the minimum', () => {
            component.testValue.setValue([1, 11]);
            cy.get('@leftThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(1);
                });
        });

        it('Prevents the value from exceeding the maximum', () => {
            component.testValue.setValue([1, 11]);
            cy.get('@rightThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[1]).to.equal(11);
                });
        });

        it('Adds a value to the closest allowed step', () => {
            component.testValue.setValue([3.3, 5]);
            cy.get('@leftThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(4);
                });
        });

        it('Prevents the value from exceeding the limit', () => {
            component.step = 3;
            component.limit = 2;
            component.testValue.setValue([1, 5]);
            cy.get('@rightThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[1]).to.equal(5);
                });
        });

        it('Allow the value in the limit', () => {
            component.step = 2;
            component.limit = 2;
            component.testValue.setValue([1, 1]);
            cy.get('@rightThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[1]).to.equal(3);
                });
        });

        it('Prevents the value from exceeding the margin', () => {
            component.limit = 0;
            component.step = 1;
            component.margin = 5;
            component.testValue.setValue([1, 5]);
            cy.get('@rightThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(component.testValue.value?.[1]).to.equal(5);
                });
        });

        it('Allow the value within the margin', () => {
            component.margin = 5;
            component.testValue.setValue([1, 7]);
            cy.get('@rightThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(component.testValue.value?.[1]).to.equal(6);
                });
        });
    });

    describe('[step] prop', () => {
        beforeEach(() => {
            component.min = 0;
            component.max = 10;
            component.step = 0.1;
            component.testValue.setValue([1, 5]);
        });

        it('Pressing the right arrow increases the value by one step (step = 1)', () => {
            cy.get('@leftThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(1.1);
                });
        });

        it('Pressing the left arrow decreases the value by one step', () => {
            cy.get('@rightThumb')
                .focus()
                .type('{leftArrow}')
                .then(() => {
                    expect(component.testValue.value?.[1]).to.equal(4.9);
                });
        });

        it('Pressing the right arrow increases the value by one step (step = 3)', () => {
            component.testValue.setValue([0, 10]);
            component.step = 3;
            cy.get('@leftThumb')
                .focus()
                .type('{rightArrow}')
                .then(() => {
                    expect(component.testValue.value?.[0]).to.equal(3);
                });
        });
    });

    describe('keySteps', () => {
        beforeEach(() => {
            component.keySteps = [
                [0, 0],
                [25, 10_000],
                [50, 100_000],
                [75, 500_000],
                [100, 1_000_000],
            ];
            component.step = (component.max - component.min) / 10;
            component.testValue.setValue([0, 0]);
            fixture.detectChanges();
        });

        const testsContexts = [
            {
                value: [0, 10_000],
                leftOffset: '0%',
                rightOffset: '75%',
            },
            {
                value: [10_000, 10_000],
                leftOffset: '25%',
                rightOffset: '75%',
            },
            {
                value: [10_000, 100_000],
                leftOffset: '25%',
                rightOffset: '50%',
            },
            {
                value: [100_000, 100_000],
                leftOffset: '50%',
                rightOffset: '50%',
            },
            {
                value: [100_000, 500_000],
                leftOffset: '50%',
                rightOffset: '25%',
            },
            {
                value: [500_000, 500_000],
                leftOffset: '75%',
                rightOffset: '25%',
            },
            {
                value: [500_000, 750_000],
                leftOffset: '75%',
                rightOffset: '12.5%',
            },
            {
                value: [750_000, 1_000_000],
                leftOffset: '87.5%',
                rightOffset: '0%',
            },
        ] as const;

        testsContexts.forEach(({value, leftOffset, rightOffset}) => {
            it(`${JSON.stringify(value)}`, () => {
                component.testValue.setValue(value as unknown as number[]);
                fixture.detectChanges();

                expect(getFilledRangeOffset(component).left).to.equal(leftOffset);
                expect(getFilledRangeOffset(component).right).to.equal(rightOffset);
            });
        });
    });

    function getFilledRangeOffset(component: Test): {
        left: string;
        right: string;
    } {
        const computedStyles = component.el.nativeElement;

        return {
            left: getComputedStyle(computedStyles).getPropertyValue('--t-left'),
            right: getComputedStyle(computedStyles).getPropertyValue('--t-right'),
        };
    }
});
