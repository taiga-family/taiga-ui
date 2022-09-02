import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

import type {TuiAxesComponent} from '../axes.component';
import {TuiAxesModule} from '../axes.module';

describe(`Axes`, () => {
    @Component({
        template: `
            <tui-axes #defaultValues></tui-axes>
            <tui-axes
                #customValues
                [axisXLabels]="axisXLabels"
                [axisYLabels]="axisYLabels"
                [axisYSecondaryLabels]="axisYSecondaryLabels"
                [axisYName]="axisYName"
                [axisYSecondaryName]="axisYSecondaryName"
            ></tui-axes>
        `,
    })
    class TestComponent {
        @ViewChild(`defaultValues`)
        readonly defaultValues!: TuiAxesComponent;

        @ViewChild(`customValues`)
        readonly customValues!: TuiAxesComponent;

        axisXLabels = [`Label 1`, `Label 2`];

        axisYLabels = [``, `Label 2`, `Label 3`];

        axisYSecondaryLabels = [``, `Label 2`, `Label 3`];

        axisYName = ``;

        axisYSecondaryName = ``;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiAxesModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`axisXLabels`, () => {
        it(`By default there are no X labels`, () => {
            expect(testComponent.defaultValues.hasXLabels).toBe(false);
        });

        it(`When axisXLabels is not empty, labels are shown`, () => {
            expect(testComponent.customValues.hasXLabels).toBe(true);
        });
    });

    describe(`axisYLabels`, () => {
        it(`By default there are no Y labels`, () => {
            expect(testComponent.defaultValues.hasYLabels).toBe(false);
        });

        it(`When axisYLabels is not empty, labels are shown`, () => {
            expect(testComponent.customValues.hasYLabels).toBe(true);
        });

        it(`When axisYLabels is empty, but there is name for the axis, labels section is shown`, () => {
            testComponent.axisYLabels = [];
            testComponent.axisYName = `Test`;
            fixture.detectChanges();

            expect(testComponent.customValues.hasYLabels).toBe(true);
        });

        it(`Empty labels falls back to non-breaking space`, () => {
            expect(testComponent.defaultValues.fallback(``)).toBe(CHAR_NO_BREAK_SPACE);
        });
    });

    describe(`axisYSecondaryLabels`, () => {
        it(`By default there are no secondary Y labels`, () => {
            expect(testComponent.defaultValues.hasYSecondaryLabels).toBe(false);
        });

        it(`When axisYSecondaryLabels is not empty, secondary labels are shown`, () => {
            expect(testComponent.customValues.hasYSecondaryLabels).toBe(true);
        });

        it(`When axisYSecondaryLabels is empty, but there is name for the secondary axis, secondary labels section is shown`, () => {
            testComponent.axisYSecondaryLabels = [];
            testComponent.axisYSecondaryName = `Test`;
            fixture.detectChanges();

            expect(testComponent.customValues.hasYSecondaryLabels).toBe(true);
        });
    });
});
