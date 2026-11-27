import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {
    provideTaiga,
    TUI_HINT_ANCHOR,
    TuiHint,
    TuiHintHost,
    TuiRoot,
} from '@taiga-ui/core';

describe('Hint host', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <span id="target"></span>
                <span id="next"></span>
                <button
                    id="trigger"
                    tuiHint="Hint"
                    type="button"
                    [style.anchor-name]="customAnchor()"
                    [tuiHintHost]="host()"
                ></button>
                <button
                    tuiHint="Shared hint"
                    type="button"
                    [tuiHintHost]="sharedHost()"
                ></button>
                <button
                    id="default"
                    tuiHint="Hint"
                    type="button"
                ></button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly host = signal<HTMLElement | undefined>(undefined);
        public readonly sharedHost = signal<HTMLElement | undefined>(undefined);
        public readonly customAnchor = signal<string | null>(null);
    }

    let fixture: ComponentFixture<Test>;
    let trigger: HTMLElement;
    let target: HTMLElement;
    let accessor: TuiHintHost;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        trigger = fixture.nativeElement.querySelector('#trigger');
        target = fixture.nativeElement.querySelector('#target');
        accessor = fixture.debugElement
            .query(By.css('#trigger'))
            .injector.get(TuiHintHost);
    });

    afterEach(() => jest.restoreAllMocks());

    it('assigns the fallback anchor on the first render', () => {
        expect(accessor.nativeElement).toBe(trigger);
        expect(trigger.dataset.tuiAnchor).toMatch(/^--/);
    });

    it('only assigns a hint anchor to the delegated host', () => {
        fixture.componentInstance.host.set(target);
        fixture.detectChanges();

        expect(trigger.hasAttribute('data-tui-anchor')).toBe(false);
        expect(target.dataset.tuiAnchor).toMatch(/^--/);
        expect(accessor.nativeElement).toBe(target);
        expect(
            fixture.debugElement.query(By.css('#trigger')).injector.get(TUI_HINT_ANCHOR),
        ).toBe(accessor);

        const rect = {...EMPTY_CLIENT_RECT, left: 10, top: 20, width: 30, height: 40};

        jest.spyOn(target, 'getBoundingClientRect').mockReturnValue(rect);

        expect(accessor.getClientRect()).toBe(rect);
    });

    it('keeps the anchor when the host is the trigger itself', () => {
        const anchor = trigger.dataset.tuiAnchor;

        fixture.componentInstance.host.set(trigger);
        fixture.detectChanges();

        expect(accessor.nativeElement).toBe(trigger);
        expect(trigger.dataset.tuiAnchor).toBe(anchor);
    });

    it('uses distinct anchors when switching between delegated hosts', () => {
        const next: HTMLElement = fixture.nativeElement.querySelector('#next');

        fixture.componentInstance.host.set(target);
        fixture.detectChanges();

        const anchor = target.dataset.tuiAnchor;

        fixture.componentInstance.host.set(next);
        fixture.detectChanges();

        expect(next.dataset.tuiAnchor).toMatch(/^--/);
        expect(next.dataset.tuiAnchor).not.toBe(anchor);

        fixture.componentInstance.host.set(target);
        fixture.detectChanges();

        expect(target.dataset.tuiAnchor).toBe(anchor);
    });

    it('preserves the previous host anchor while another hint uses it', () => {
        const next: HTMLElement = fixture.nativeElement.querySelector('#next');

        fixture.componentInstance.host.set(target);
        fixture.detectChanges();
        fixture.componentInstance.sharedHost.set(target);
        fixture.detectChanges();

        const anchor = target.dataset.tuiAnchor;

        fixture.componentInstance.host.set(next);
        fixture.detectChanges();

        expect(target.dataset.tuiAnchor).toBe(anchor);
        expect(next.dataset.tuiAnchor).not.toBe(anchor);
    });

    it('preserves a custom anchor on the trigger', () => {
        const setStyle = jest.spyOn(trigger.style, 'setProperty');
        const removeStyle = jest.spyOn(trigger.style, 'removeProperty');

        fixture.componentInstance.customAnchor.set('--custom');
        fixture.detectChanges();
        fixture.componentInstance.host.set(target);
        fixture.detectChanges();

        expect(setStyle).toHaveBeenCalledWith('anchor-name', '--custom', '');
        expect(removeStyle).not.toHaveBeenCalledWith('anchor-name');
    });

    it('reuses an existing anchor when several hints share a host', () => {
        target.dataset.tuiAnchor = '--shared';
        fixture.componentInstance.host.set(target);
        fixture.detectChanges();

        expect(target.dataset.tuiAnchor).toBe('--shared');
    });

    it('keeps ordinary hints anchored to their trigger', () => {
        const element = fixture.nativeElement.querySelector('#default') as HTMLElement;

        expect(element.dataset.tuiAnchor).toMatch(/^--/);
    });
});
