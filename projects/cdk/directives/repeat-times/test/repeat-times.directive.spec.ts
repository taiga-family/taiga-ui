import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

const DEFAULT_TEST_COUNT = 3;

describe('TuiRepeatTimes directive', () => {
    @Component({
        standalone: true,
        imports: [TuiRepeatTimes],
        template: `
            <div
                *tuiRepeatTimes="let index of count"
                class="test-item"
                [title]="index"
            >
                {{ index }}
            </div>
        `,
    })
    class Test {
        public count = DEFAULT_TEST_COUNT;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let debugElements: DebugElement[];

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
    });

    describe('repeats 0 times if', () => {
        it('0 is passed as a count', () => {
            testComponent.count = 0;
            fixture.detectChanges();

            debugElements = fixture.debugElement.queryAll(By.css('.test-item'));
            expect(debugElements.length).toBe(0);
        });

        it('NaN is passed', () => {
            testComponent.count = NaN;
            fixture.detectChanges();

            debugElements = fixture.debugElement.queryAll(By.css('.test-item'));
            expect(debugElements.length).toBe(0);
        });

        it('negative number is passed', () => {
            testComponent.count = -1;
            fixture.detectChanges();

            debugElements = fixture.debugElement.queryAll(By.css('.test-item'));
            expect(debugElements.length).toBe(0);
        });
    });

    describe('if 3 is passed', () => {
        beforeEach(() => {
            testComponent.count = 3;
            fixture.detectChanges();

            debugElements = fixture.debugElement.queryAll(By.css('.test-item'));
        });

        it('repeats template 3 times', () => {
            expect(debugElements.length).toBe(DEFAULT_TEST_COUNT);
        });

        it('passes index as implicit context', () => {
            expect(debugElements[0].nativeElement.title).toBe('0');
            expect(debugElements[1].nativeElement.title).toBe('1');
            expect(debugElements[2].nativeElement.title).toBe('2');
        });
    });
});
