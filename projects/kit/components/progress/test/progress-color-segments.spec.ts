import {ChangeDetectionStrategy, Component, Injectable, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {Subject} from 'rxjs';

import {TuiProgress} from '../progress';

describe('TuiProgressColorSegments', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let observerServiceMock: ResizeObserverServiceMock;

    @Component({
        imports: [TuiProgress],
        template: `
            <progress
                tuiProgressBar
                [max]="max()"
                [segments]="segments()"
                [tuiProgressColorSegments]="colors()"
                [value]="value()"
            ></progress>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly max = signal(5);
        public readonly segments = signal(5);
        public readonly colors = signal<string[]>([]);
        public readonly value = signal(5);
    }

    @Injectable()
    class ResizeObserverServiceMock extends Subject<
        ReadonlyArray<{contentRect: Partial<ResizeObserverEntry['contentRect']>}>
    > {}

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        observerServiceMock = new ResizeObserverServiceMock();
        TestBed.overrideProvider(WaResizeObserverService, {
            useValue: observerServiceMock,
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('TuiProgressColorSegments', () => {
        const getTuiProgressColor = (): string | null => {
            const property = '--tui-progress-color';
            const styles: unknown = fixture.debugElement.query(By.css('progress')).styles;

            if (
                !styles ||
                typeof styles !== 'object' ||
                !('getPropertyValue' in styles) ||
                typeof styles.getPropertyValue !== 'function'
            ) {
                throw new Error('Unexpected styles object');
            }

            return Object.values(styles).includes(property)
                ? styles.getPropertyValue(property)
                : null;
        };

        it('contains no color if there are no colors', () => {
            testComponent.colors.set([]);
            observerServiceMock.next([{contentRect: {width: 1000}}]);
            fixture.detectChanges();

            expect(getTuiProgressColor()).toBe(null);
        });

        it('contains color if there are colors', () => {
            testComponent.colors.set(['color1', 'color2', 'color3', 'color4', 'color5']);
            observerServiceMock.next([{contentRect: {width: 100}}]);
            fixture.detectChanges();

            expect(getTuiProgressColor()).toBe(
                'linear-gradient(to right, color1 0px 20px, color2 20px 40px, color3 40px 60px, color4 60px 80px, color5 80px 100px)',
            );
        });

        it('changes color when width changes', () => {
            testComponent.colors.set(['color1', 'color2']);
            observerServiceMock.next([{contentRect: {width: 500}}]);
            fixture.detectChanges();

            const color1 = getTuiProgressColor();

            testComponent.value.set(3);
            fixture.detectChanges();
            observerServiceMock.next([{contentRect: {width: 300}}]);
            fixture.detectChanges();

            const color2 = getTuiProgressColor();

            expect(color1).toBe(
                'linear-gradient(to right, color1 0px 250px, color2 250px 500px)',
            );
            expect(color2).toBe(
                'linear-gradient(to right, color1 0px 150px, color2 150px 300px)',
            );
        });
    });
});
