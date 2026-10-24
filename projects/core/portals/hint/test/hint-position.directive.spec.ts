import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    signal,
    type Type,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WA_CSS} from '@ng-web-apis/common';
import {
    provideTaiga,
    TUI_ANCHOR_SUPPORT,
    TUI_VIEWPORT,
    tuiAsRectAccessor,
    TuiHint,
    type TuiHintDirection,
    TuiPositionService,
    TuiRectAccessor,
    TuiRoot,
} from '@taiga-ui/core';
import {Subscription} from 'rxjs';

describe('Hint positioning', () => {
    @Directive({
        selector: '[customRect]',
        providers: [tuiAsRectAccessor(CustomRect)],
    })
    class CustomRect extends TuiRectAccessor {
        public readonly type = 'hint';

        public getClientRect(): DOMRect {
            return new DOMRect(100, 100, 20, 20);
        }
    }

    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <span
                    tuiHint="Hint"
                    [tuiHintManual]="true"
                    [tuiHintDirection]="direction()"
                    [tuiHintCentered]="centered()"
                    [tuiHintOffset]="offset()"
                >
                    Host
                </span>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly direction = signal<TuiHintDirection | TuiHintDirection[]>(
            'bottom',
        );

        public readonly centered = signal(true);
        public readonly offset = signal(8);
        public readonly host = signal<HTMLElement | undefined>(undefined);
    }

    @Component({
        imports: [CustomRect, TuiHint, TuiRoot],
        template: `
            <tui-root>
                <span
                    customRect
                    tuiHint="Hint"
                    [tuiHintManual]="true"
                >
                    Host
                </span>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class CustomRectTest extends Test {}

    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <svg>
                    <circle
                        tuiHint="Hint"
                        tuiHintPointer
                        [tuiHintManual]="true"
                    />
                </svg>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SvgTest extends Test {}

    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <span
                    tuiHint="Hint"
                    [tuiHintManual]="true"
                    [tuiHintHost]="host()"
                >
                    Host
                </span>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class ExternalHostTest extends Test {}

    let fixture: ComponentFixture<Test>;
    let subscribe: jest.SpyInstance;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test, CustomRectTest, ExternalHostTest, SvgTest],
            providers: [
                provideTaiga(),
                {provide: TUI_ANCHOR_SUPPORT, useValue: true},
                {provide: WA_CSS, useValue: {supports: () => true}},
            ],
        });
        subscribe = jest
            .spyOn(TuiPositionService.prototype, 'subscribe')
            .mockReturnValue(new Subscription());
    });

    afterEach(() => subscribe.mockRestore());

    it('does not start animation-frame positioning when anchors are supported', async () => {
        await create();

        expect(subscribe).not.toHaveBeenCalled();
        expect(hint().classList.contains('_anchored')).toBe(true);
    });

    it('updates an open hint when positioning inputs change', async () => {
        await create();
        const element = hint();

        fixture.componentInstance.direction.set(['top', 'end']);
        fixture.componentInstance.centered.set(false);
        fixture.componentInstance.offset.set(20);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(hint()).toBe(element);
        expect(element.dataset.direction).toBe('top');
        expect(element.style).toHaveProperty(
            'positionTryFallbacks',
            expect.stringMatching(/^--tui-hint-end, --tui-hint-bottom-start,/),
        );
        expect(element.style.getPropertyValue('--t-offset')).toBe('12px');
        expect(element.classList.contains('_centered')).toBe(false);
        expect(subscribe).not.toHaveBeenCalled();
    });

    it('keeps JS positioning when anchors are not supported', async () => {
        TestBed.overrideProvider(TUI_ANCHOR_SUPPORT, {useValue: false});
        await create();

        expect(subscribe).toHaveBeenCalledTimes(1);
        expect(hint().classList.contains('_anchored')).toBe(false);
    });

    it('keeps JS positioning for a custom viewport', async () => {
        TestBed.overrideProvider(TUI_VIEWPORT, {
            useValue: {type: 'custom', getClientRect: () => new DOMRect()},
        });
        await create();

        expect(subscribe).toHaveBeenCalledTimes(1);
        expect(hint().classList.contains('_anchored')).toBe(false);
    });

    it('keeps JS positioning without the CSS math needed by the arrow', async () => {
        TestBed.overrideProvider(WA_CSS, {useValue: {supports: () => false}});
        await create();

        expect(subscribe).toHaveBeenCalledTimes(1);
        expect(hint().classList.contains('_anchored')).toBe(false);
    });

    it('keeps JS positioning for a custom rect accessor', async () => {
        await create(CustomRectTest);

        expect(subscribe).toHaveBeenCalledTimes(1);
        expect(hint().classList.contains('_anchored')).toBe(false);
    });

    it('keeps JS positioning for SVG pointer hints', async () => {
        await create(SvgTest);

        expect(subscribe).toHaveBeenCalledTimes(1);
        expect(hint().classList.contains('_anchored')).toBe(false);
    });

    it('updates the anchor when tuiHintHost changes while the hint is open', async () => {
        await create(ExternalHostTest);
        const external = document.createElement('span');

        fixture.componentInstance.host.set(external);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(external.dataset.tuiAnchor).toBeTruthy();
        expect(hint().style).toHaveProperty('positionAnchor', external.dataset.tuiAnchor);
        expect(subscribe).not.toHaveBeenCalled();
    });

    async function create(component: Type<Test> = Test): Promise<void> {
        fixture = TestBed.createComponent(component);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
    }

    function hint(): HTMLElement {
        return fixture.nativeElement.querySelector('tui-hint')!;
    }
});
