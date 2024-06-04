import {AsyncPipe, NgFor} from '@angular/common';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiForDirective, tuiInjectElement} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {Subject} from 'rxjs';

describe('TuiFor directive', () => {
    @Component({
        standalone: true,
        imports: [TuiForDirective, NgFor, AsyncPipe],
        template: `
            <div *ngFor="let item of items$ | async; else: loading; empty: blank">
                {{ item }}
            </div>
            <ng-template #loading>Loading</ng-template>
            <ng-template #blank>Blank</ng-template>
        `,
    })
    class TestComponent {
        public readonly el = tuiInjectElement();

        public readonly items$ = new Subject<string[]>();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('when ngFor is falsy shows loading', () => {
        expect(text()).toBe('Loading');
    });

    it('when ngFor is empty shows empty content', () => {
        testComponent.items$.next([]);
        fixture.detectChanges();

        expect(text()).toBe('Blank');
    });

    it('does not interfere with regular ngFor', () => {
        testComponent.items$.next(['1', '2', '3']);
        fixture.detectChanges();

        expect(text()).toBe('1  2  3');
    });

    function text(): string {
        return testComponent.el.textContent?.trim() || '';
    }
});
