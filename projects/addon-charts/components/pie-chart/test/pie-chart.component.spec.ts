import {Location} from '@angular/common';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiPieChartComponent} from '@taiga-ui/addon-charts';
import {TuiPageObject} from '@taiga-ui/testing';

describe('PieChart', () => {
    @Component({
        standalone: true,
        imports: [TuiPieChartComponent],
        template: `
            <tui-pie-chart [value]="value"></tui-pie-chart>
        `,
    })
    class Test {
        public readonly value = [1, 2, 3];
    }

    let fixture: ComponentFixture<Test>;
    let pageObject: TuiPageObject<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
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
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('Has segment for each item in value', () => {
        expect(pageObject.getAllByAutomationId('tui-pie-chart__segment').length).toBe(3);
    });
});
