import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    signal,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiIcon, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiPageObject} from '@taiga-ui/testing';

import {TuiPushComponent} from '../push.component';
import {tuiPushOptionsProvider} from '../push.options';
import {TuiPushService} from '../push.service';

describe('Push', () => {
    describe('with TUI_PUSH_OPTIONS', () => {
        @Component({
            standalone: true,
            imports: [TuiRoot],
            template: `
                <tui-root />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {}

        const heading = 'Test';

        let fixture: ComponentFixture<Test>;
        let tuiPushService: TuiPushService;
        let pageObject: TuiPageObject<Test>;

        function getLabelElement(): DebugElement {
            return pageObject.getByAutomationId('tui-push__heading')!;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [tuiPushOptionsProvider({heading}), NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            tuiPushService = TestBed.inject(TuiPushService);
            pageObject = new TuiPageObject(fixture);
        });

        describe('heading', () => {
            it('correctly shows heading option data', () => {
                tuiPushService.open('Test').subscribe();
                fixture.detectChanges();

                const labelElement = getLabelElement();

                expect(labelElement.nativeElement.textContent.trim()).toBe(heading);
            });
        });
    });

    describe('header', () => {
        @Component({
            standalone: true,
            imports: [NgIf, TuiIcon, TuiPushComponent],
            template: `
                <tui-push
                    [timestamp]="timestamp()"
                    [type]="type()"
                >
                    <tui-icon
                        *ngIf="icon()"
                        icon="@tui.info"
                    />
                </tui-push>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly type = signal('');
            public readonly timestamp = signal<number | string>('');
            public readonly icon = signal(false);
        }

        let fixture: ComponentFixture<Test>;
        let component: Test;
        let element: HTMLElement;

        beforeEach(async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            component = fixture.componentInstance;
            element = fixture.nativeElement;
        });

        it('leaves header slots empty when metadata and icons are absent', () => {
            fixture.detectChanges();

            expect(element.querySelector('.t-top')?.textContent?.trim()).toBe('');

            // jsdom treats empty text nodes from interpolation as non-empty.
            for (const slot of Array.from(element.querySelectorAll('.t-top > span'))) {
                expect(slot.textContent).toBe('');
                expect(slot.childElementCount).toBe(0);
            }
        });

        it.each([
            {input: 'type', value: 'Update'},
            {input: 'timestamp', value: '12:34'},
        ] as const)('updates the header when $input changes', ({input, value}) => {
            fixture.detectChanges();
            component[input].set(value);
            fixture.detectChanges();

            expect(element.querySelector('.t-top')?.textContent?.trim()).toBe(value);

            component[input].set('');
            fixture.detectChanges();

            expect(element.querySelector('.t-top')?.textContent?.trim()).toBe('');

            for (const slot of Array.from(element.querySelectorAll('.t-top > span'))) {
                expect(slot.textContent).toBe('');
                expect(slot.childElementCount).toBe(0);
            }
        });

        it('updates the icon slot when an icon is added and removed', () => {
            fixture.detectChanges();

            expect(element.querySelector('.t-icon')?.matches(':empty')).toBe(true);

            component.icon.set(true);
            fixture.detectChanges();

            expect(element.querySelector('.t-icon tui-icon')).not.toBeNull();

            component.icon.set(false);
            fixture.detectChanges();

            expect(element.querySelector('.t-icon')?.matches(':empty')).toBe(true);
        });
    });
});
