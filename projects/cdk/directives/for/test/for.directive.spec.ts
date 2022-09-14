import {Component, ElementRef, Inject} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite} from '@taiga-ui/testing';
import {Subject} from 'rxjs';

import {TuiForModule} from '../for.module';

describe(`TuiFor directive`, () => {
    @Component({
        template: `
            <div *ngFor="let item of items$ | async; else: loading; empty: blank">
                {{ item }}
            </div>
            <ng-template #loading>Loading</ng-template>
            <ng-template #blank>Blank</ng-template>
        `,
    })
    class TestComponent {
        readonly items$ = new Subject<string[]>();

        constructor(@Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>) {}
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiForModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`when ngFor is falsy shows loading`, () => {
        expect(text()).toBe(`Loading`);
    });

    it(`when ngFor is empty shows empty content`, () => {
        testComponent.items$.next([]);
        fixture.detectChanges();

        expect(text()).toBe(`Blank`);
    });

    it(`does not interfere with regular ngFor`, () => {
        testComponent.items$.next([`1`, `2`, `3`]);
        fixture.detectChanges();

        expect(text()).toBe(`1  2  3`);
    });

    function text(): string {
        return testComponent.elementRef.nativeElement.textContent!.trim();
    }
});
