import {Location} from '@angular/common';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiPieChartModule} from '@taiga-ui/addon-charts';
import {TuiPageObject} from '@taiga-ui/testing';

describe('PieChart', () => {
    @Component({
        template: `
            <tui-pie-chart [value]="value"></tui-pie-chart>
        `,
    })
    class TestComponent {
        public readonly value = [1, 2, 3];
    }

    let fixture: ComponentFixture<TestComponent>;
    let pageObject: TuiPageObject<TestComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiPieChartModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: Location,
                    useValue: {
                        path: () => '',
                    },
                },
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('Has segment for each item in value', () => {
        expect(pageObject.getAllByAutomationId('tui-pie-chart__segment').length).toBe(3);
    });
});
