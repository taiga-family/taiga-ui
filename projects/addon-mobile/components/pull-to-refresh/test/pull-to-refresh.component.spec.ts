import {ChangeDetectionStrategy, Component, type Type} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiPullToRefresh} from '@taiga-ui/addon-mobile';
import {TuiScrollbar, TuiScrollRef} from '@taiga-ui/core';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('PullToRefresh', () => {
    let fixture: ComponentFixture<unknown>;
    let setPropertySpy: jest.SpyInstance;

    const lastValueOf = (element: HTMLElement, property: string): string | undefined =>
        setPropertySpy.mock.calls
            .filter(
                (call, index) =>
                    setPropertySpy.mock.contexts[index] === element.style &&
                    call[0] === property,
            )
            .map(([, value]) => value)
            .pop();

    const scrollTo = (element: HTMLElement, scrollTop: number): void => {
        Object.defineProperty(element, 'scrollTop', {
            configurable: true,
            value: scrollTop,
        });
        element.dispatchEvent(new Event('scroll'));
    };

    const setup = async (component: Type<unknown>): Promise<void> => {
        TestBed.configureTestingModule({
            imports: [component],
            providers: [provideEventPlugins()],
        });

        await TestBed.compileComponents();

        fixture = TestBed.createComponent(component);
        fixture.detectChanges();
        await fixture.whenStable();
    };

    beforeEach(() => {
        setPropertySpy = jest.spyOn(CSSStyleDeclaration.prototype, 'setProperty');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('inside tui-scrollbar', () => {
        @Component({
            imports: [TuiPullToRefresh, TuiScrollbar],
            template: `
                <tui-scrollbar>
                    <tui-pull-to-refresh>Content</tui-pull-to-refresh>
                </tui-scrollbar>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {}

        const container = (): HTMLElement =>
            (fixture.nativeElement as HTMLElement).querySelector('tui-scrollbar')!;

        beforeEach(async () => setup(Test));

        it('blocks overscroll and upward panning while scrolled to the top', () => {
            expect(lastValueOf(container(), 'overscroll-behavior')).toBe('none');
            expect(lastValueOf(container(), 'touch-action')).toBe('pan-down');
        });

        it('restores native overscroll when scrolled away from the top', () => {
            scrollTo(container(), 100);

            expect(lastValueOf(container(), 'overscroll-behavior')).toBe('');
            expect(lastValueOf(container(), 'touch-action')).toBe('');
        });

        it('blocks overscroll again when scrolled back to the top', () => {
            scrollTo(container(), 100);
            scrollTo(container(), 0);

            expect(lastValueOf(container(), 'overscroll-behavior')).toBe('none');
            expect(lastValueOf(container(), 'touch-action')).toBe('pan-down');
        });

        it('restores native overscroll when the component is destroyed', () => {
            const removePropertySpy = jest.spyOn(
                CSSStyleDeclaration.prototype,
                'removeProperty',
            );

            const style = container().style;

            fixture.destroy();

            const removed = removePropertySpy.mock.calls
                .filter((_, index) => removePropertySpy.mock.contexts[index] === style)
                .map(([property]) => property);

            expect(removed).toEqual(
                expect.arrayContaining(['overscroll-behavior', 'touch-action']),
            );
        });
    });

    describe('inside custom scroll container with tuiScrollRef', () => {
        @Component({
            imports: [TuiPullToRefresh, TuiScrollRef],
            template: `
                <div
                    tuiScrollRef
                    class="viewport"
                >
                    <tui-pull-to-refresh>Content</tui-pull-to-refresh>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {}

        const viewport = (): HTMLElement =>
            (fixture.nativeElement as HTMLElement).querySelector('.viewport')!;

        beforeEach(async () => setup(Test));

        it('manages overscroll on the custom scroll container', () => {
            expect(lastValueOf(viewport(), 'overscroll-behavior')).toBe('none');

            scrollTo(viewport(), 100);

            expect(lastValueOf(viewport(), 'overscroll-behavior')).toBe('');

            scrollTo(viewport(), 0);

            expect(lastValueOf(viewport(), 'overscroll-behavior')).toBe('none');
        });
    });
});
