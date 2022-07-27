import {Component, Directive, ElementRef} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TuiForAsyncModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';
import {Subject} from 'rxjs';

describe(`TuiForAsync directive`, () => {
    let fixture: ComponentFixture<AbstractTuiTestComponent>;
    let testComponent: AbstractTuiTestComponent;

    @Directive()
    abstract class AbstractTuiTestComponent {
        readonly items$: Subject<string[] | null | undefined> = new Subject();

        constructor(readonly elementRef: ElementRef<HTMLElement>) {}
    }

    describe(`Basic`, () => {
        @Component({
            template: `
                <div *tuiForAsync="let item of items$ | async; timeout: 1000">
                    {{ item }}
                </div>
            `,
        })
        class TestComponent extends AbstractTuiTestComponent {}

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiForAsyncModule],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it(`when tuiForAsync is falsy`, () => {
            expect(text()).toBe(``);
        });

        it(`when tuiForAsync is empty shows empty content`, () => {
            testComponent.items$.next([]);
            fixture.detectChanges();

            expect(text()).toBe(``);
        });

        it(`when regular tuiForAsync`, fakeAsync(() => {
            testComponent.items$.next([`1`, `2`, `3`]);
            fixture.detectChanges();

            expect(text()).toBe(``);

            tick(1000);

            expect(text()).toBe(`1`);

            tick(1000);

            expect(text()).toBe(`1  2`);

            tick(1000);

            expect(text()).toBe(`1  2  3`);
        }));

        it(`tuiForAsync should be re-rerender content when source is changed`, fakeAsync(() => {
            testComponent.items$.next([`1`, `2`]);
            fixture.detectChanges();

            expect(text()).toBe(``);

            tick(2000);

            expect(text()).toBe(`1  2`);

            tick(2000);

            testComponent.items$.next([`5`, `6`]);
            fixture.detectChanges();

            expect(text()).toBe(``);

            tick(2000);

            expect(text()).toBe(`5  6`);

            tick(2000);

            testComponent.items$.next(null);
            fixture.detectChanges();

            expect(text()).toBe(``);
        }));

        it(`prevent race condition`, fakeAsync(() => {
            testComponent.items$.next([`1`, `2`, `3`]);
            fixture.detectChanges();

            expect(text()).toBe(``);

            // race condition
            setTimeout(() => {
                testComponent.items$.next([`5`, `6`]);
                fixture.detectChanges();
            }, 1500);

            tick(1000);

            expect(text()).toBe(`1`);

            tick(1000);

            expect(text()).toBe(``);

            tick(1000);

            expect(text()).toBe(`5`);

            tick(1000);

            expect(text()).toBe(`5  6`);
        }));
    });

    describe(`Support index`, () => {
        @Component({
            template: `
                <div
                    *tuiForAsync="
                        let item of items$ | async;
                        timeout: 1000;
                        let index = index
                    "
                >
                    {{ index }}
                </div>
            `,
        })
        class TestComponent extends AbstractTuiTestComponent {}

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiForAsyncModule],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it(`when regular tuiForAsync with index`, fakeAsync(() => {
            testComponent.items$.next([`x`, `y`, `z`]);
            fixture.detectChanges();

            expect(text()).toBe(``);

            tick(1000);

            expect(text()).toBe(`0`);

            tick(1000);

            expect(text()).toBe(`0  1`);

            tick(1000);

            expect(text()).toBe(`0  1  2`);
        }));
    });

    function text(): string {
        return testComponent.elementRef.nativeElement.textContent?.trim() || ``;
    }
});
