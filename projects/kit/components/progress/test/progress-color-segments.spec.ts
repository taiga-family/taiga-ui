import {ChangeDetectionStrategy, Component, Injectable, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {Subject} from 'rxjs';

import {TuiProgress} from '../progress';

describe('TuiProgressColorSegments', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    let mutationObserverServiceMock: MutationObserverServiceMock;

    @Component({
        standalone: true,
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
    class MutationObserverServiceMock
        extends Subject<never[]>
        implements MutationObserverService {}

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        mutationObserverServiceMock = new MutationObserverServiceMock();
        TestBed.overrideProvider(MutationObserverService, {
            useValue: mutationObserverServiceMock,
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
            mutationObserverServiceMock.next([]);
            fixture.detectChanges();

            expect(getTuiProgressColor()).toBe(null);
        });

        it('contains color if there are colors', () => {
            testComponent.colors.set(['color1', 'color2', 'color3', 'color4', 'color5']);
            mutationObserverServiceMock.next([]);
            fixture.detectChanges();

            expect(getTuiProgressColor()).toBe(
                'linear-gradient(to right, color1 calc(0 / 5 * 100% / 1) calc(1 / 5 * 100% / 1), color2 calc(1 / 5 * 100% / 1) calc(2 / 5 * 100% / 1), color3 calc(2 / 5 * 100% / 1) calc(3 / 5 * 100% / 1), color4 calc(3 / 5 * 100% / 1) calc(4 / 5 * 100% / 1), color5 calc(4 / 5 * 100% / 1) calc(5 / 5 * 100% / 1))',
            );
        });

        it('changes color when value changes', () => {
            testComponent.colors.set(['color1', 'color2']);
            mutationObserverServiceMock.next([]);
            fixture.detectChanges();

            const color1 = getTuiProgressColor();

            testComponent.value.set(3);
            fixture.detectChanges();
            mutationObserverServiceMock.next([]);
            fixture.detectChanges();

            const color2 = getTuiProgressColor();

            expect(color1).toBe(
                'linear-gradient(to right, color1 calc(0 / 2 * 100% / 1) calc(1 / 2 * 100% / 1), color2 calc(1 / 2 * 100% / 1) calc(2 / 2 * 100% / 1))',
            );
            expect(color2).toBe(
                'linear-gradient(to right, color1 calc(0 / 2 * 100% / 0.6) calc(1 / 2 * 100% / 0.6), color2 calc(1 / 2 * 100% / 0.6) calc(2 / 2 * 100% / 0.6))',
            );
        });
    });
});
