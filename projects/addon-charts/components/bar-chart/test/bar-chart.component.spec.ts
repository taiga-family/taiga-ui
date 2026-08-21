import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiBarChart} from '@taiga-ui/addon-charts';

describe('BarChart', () => {
    @Component({
        imports: [TuiBarChart],
        template: `
            <tui-bar-chart
                [collapsed]="collapsed()"
                [max]="max()"
                [min]="min()"
                [value]="value()"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly component = viewChild.required(TuiBarChart);

        public readonly value = signal<ReadonlyArray<readonly number[]>>([
            [1, 2, 3],
            [4, 5, 6],
        ]);

        public readonly max = signal(Number.NaN);
        public readonly min = signal(Number.NaN);
        public readonly collapsed = signal(false);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('computes percent correctly', () => {
        expect(
            testComponent
                .component()
                .percentMapper(
                    [1, 3],
                    testComponent.component().collapsed(),
                    testComponent.component().computedMax(),
                ),
        ).toBe(50);
    });

    it('computes percent correctly in collapsed mode', () => {
        testComponent.collapsed.set(true);
        fixture.detectChanges();

        expect(
            testComponent
                .component()
                .percentMapper(
                    [8, 1],
                    testComponent.component().collapsed(),
                    testComponent.component().computedMax(),
                ),
        ).toBe(100);
    });

    describe('negative values', () => {
        beforeEach(() => {
            testComponent.value.set([[5000, -5000]]);
            testComponent.max.set(10000);
            testComponent.min.set(-10000);
            fixture.detectChanges();
        });

        it('places the zero line in the middle of a symmetric range', () => {
            expect(testComponent.component().zeroLineDistance()).toBe(50);
        });

        it('gives a negative-only column a positive height', () => {
            const component = testComponent.component();

            expect(
                component.percentMapper([-5000], false, component.computedRange()),
            ).toBe(25);
        });

        it('keeps the zero line at the bottom when there are no negatives', () => {
            testComponent.value.set([[1, 2, 3]]);
            testComponent.min.set(Number.NaN);
            fixture.detectChanges();

            expect(testComponent.component().zeroLineDistance()).toBe(0);
        });
    });
});
