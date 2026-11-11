import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiBarChart} from '@taiga-ui/addon-charts';

describe('BarChart', () => {
    @Component({
        imports: [TuiBarChart],
        template: `
            <tui-bar-chart
                [collapsed]="collapsed()"
                [max]="max"
                [value]="value()"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly component = viewChild.required(TuiBarChart);

        public readonly value = signal<number[][]>([
            [1, 2, 3],
            [4, 5, 6],
        ]);

        public max = Number.NaN;
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
        it('computes max by absolute value for a single group of negative values', () => {
            testComponent.value.set([[-1, -4, -2]]);
            fixture.detectChanges();

            expect(testComponent.component().computedMax()).toBe(4);
        });

        it('computes percent by absolute value', () => {
            testComponent.value.set([[-1, -4, -2]]);
            fixture.detectChanges();

            expect(
                testComponent
                    .component()
                    .percentMapper([-2], false, testComponent.component().computedMax()),
            ).toBe(50);
        });

        it('computes max and percent by absolute values in collapsed mode', () => {
            testComponent.value.set([
                [-1, 2],
                [-3, -6],
            ]);
            testComponent.collapsed.set(true);
            fixture.detectChanges();

            expect(testComponent.component().computedMax()).toBe(8);
            expect(
                testComponent
                    .component()
                    .percentMapper(
                        [-1, -3],
                        true,
                        testComponent.component().computedMax(),
                    ),
            ).toBe(50);
        });
    });
});
