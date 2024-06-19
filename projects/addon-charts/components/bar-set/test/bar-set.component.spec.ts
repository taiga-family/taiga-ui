import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiBarSet} from '@taiga-ui/addon-charts';

describe('BarSet', () => {
    @Component({
        standalone: true,
        imports: [TuiBarSet],
        template: `
            <tui-bar-set
                [collapsed]="collapsed"
                [value]="value"
            ></tui-bar-set>
        `,
    })
    class Test {
        @ViewChild(TuiBarSet)
        public readonly component!: TuiBarSet;

        public readonly value = [10, 20, 30, 40];
        public collapsed = false;
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

    describe('collapsed', () => {
        it('has multiple bars when false', () => {
            expect(
                fixture.debugElement.queryAll(
                    By.css('[automation-id="tui-bar-set__bar"]'),
                ).length,
            ).toBe(4);
        });

        it('has single bar when true', () => {
            testComponent.collapsed = true;
            fixture.detectChanges();

            expect(
                fixture.debugElement.queryAll(
                    By.css('[automation-id="tui-bar-set__bar"]'),
                ).length,
            ).toBe(1);
        });
    });
});
