import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {
    type ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {provideTaiga, TuiHint, TuiRoot} from '@taiga-ui/core';

describe('Custom hint', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <div
                    id="hint-host"
                    tuiHint
                    [tuiHintManual]="visible()"
                >
                    Host
                    <tui-hint *tuiHint>{{ text() }}</tui-hint>
                </div>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly visible = signal<boolean | null>(false);
        public readonly text = signal('Custom hint');
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();

        const host = document.querySelector('#hint-host')!;

        jest.spyOn(host, 'getClientRects').mockReturnValue([
            host.getBoundingClientRect(),
        ] as unknown as DOMRectList);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it.each(['onfinish', 'oncancel'] as const)(
        'keeps the hint until the leave animation calls %s',
        fakeAsync((event: 'oncancel' | 'onfinish') => {
            fixture.componentInstance.visible.set(true);
            fixture.detectChanges();
            tick();
            fixture.detectChanges();

            const hint = document.querySelector('tui-hint')!;
            const animation = {
                animationName: 'tuiFade',
                onfinish: null,
                oncancel: null,
            } as unknown as Animation;

            hint.getAnimations = () =>
                hint.classList.contains('tui-leave') ? [animation] : [];

            fixture.componentInstance.visible.set(false);
            fixture.detectChanges();
            discardPeriodicTasks();

            expect(hint.classList.contains('tui-leave')).toBe(true);
            expect(hint.isConnected).toBe(true);

            animation[event]?.call(
                animation,
                new Event('finish') as AnimationPlaybackEvent,
            );

            expect(hint.isConnected).toBe(false);
        }),
    );

    it('animates closing after hover leaves the host', fakeAsync(() => {
        fixture.componentInstance.visible.set(null);
        fixture.detectChanges();

        const host = document.querySelector('#hint-host')!;

        host.dispatchEvent(new Event('mouseenter'));
        tick(500);
        fixture.detectChanges();

        const hint = document.querySelector('tui-hint')!;
        const animation = {
            animationName: 'tuiFade',
            onfinish: null,
            oncancel: null,
        } as unknown as Animation;

        hint.getAnimations = () =>
            hint.classList.contains('tui-leave') ? [animation] : [];

        host.dispatchEvent(new Event('mouseleave'));
        tick(200);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(hint.classList.contains('tui-leave')).toBe(true);
        expect(hint.isConnected).toBe(true);

        animation.onfinish?.call(
            animation,
            new Event('finish') as AnimationPlaybackEvent,
        );

        expect(hint.isConnected).toBe(false);
    }));

    it('updates template bindings and closes immediately without animations', fakeAsync(() => {
        fixture.componentInstance.visible.set(true);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        const hint = document.querySelector('tui-hint')!;

        fixture.componentInstance.text.set('Updated hint');
        fixture.detectChanges();

        expect(hint.textContent).toBe('Updated hint');

        fixture.componentInstance.visible.set(false);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(hint.isConnected).toBe(false);
    }));
});
