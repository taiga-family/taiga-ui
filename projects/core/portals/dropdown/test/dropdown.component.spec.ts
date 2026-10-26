import {ElementRef, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {
    TUI_DARK_MODE,
    TUI_DROPDOWN_ANCHOR,
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownComponent,
    TuiDropdownDirective,
    TuiDropdownPosition,
} from '@taiga-ui/core';

describe('TuiDropdownComponent leave animation', () => {
    let component: TuiDropdownComponent;
    let anchor: HTMLButtonElement;
    let dropdown: HTMLElement;
    let frames: Map<number, FrameRequestCallback>;
    let rects: jest.SpyInstance<DOMRectList>;

    const nextFrame = (): void => {
        const frame = frames.entries().next().value;

        if (!frame) {
            throw new Error('No animation frame scheduled');
        }

        const [id, callback] = frame;

        frames.delete(id);
        callback(performance.now());
    };

    beforeEach(() => {
        anchor = document.createElement('button');
        dropdown = document.createElement('tui-dropdown');
        frames = new Map<number, FrameRequestCallback>();
        let frameId = 0;

        jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
            const id = ++frameId;

            frames.set(id, callback);

            return id;
        });
        jest.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
            frames.delete(id);
        });

        rects = jest
            .spyOn(anchor, 'getClientRects')
            .mockReturnValue(
                Object.assign([anchor.getBoundingClientRect()], {item: () => null}),
            );
        document.body.append(anchor, dropdown);
        dropdown.style.visibility = 'visible';

        TestBed.configureTestingModule({
            providers: [
                {provide: ElementRef, useValue: new ElementRef(dropdown)},
                {provide: TUI_DROPDOWN_ANCHOR, useValue: new ElementRef(anchor)},
                {provide: TUI_DROPDOWN_OPTIONS, useValue: {}},
                {provide: TUI_DARK_MODE, useValue: signal(false)},
                {provide: TuiDropdownPosition, useValue: {}},
                {provide: TuiDropdownDirective, useValue: {el: anchor}},
            ],
        });
        component = TestBed.runInInjectionContext(() => new TuiDropdownComponent());
    });

    afterEach(() => {
        anchor.remove();
        dropdown.remove();
        jest.restoreAllMocks();
    });

    it('hides immediately if the anchor has already been removed', () => {
        anchor.remove();
        component.ngOnDestroy();

        expect(dropdown.style.visibility).toBe('hidden');
        expect(frames.size).toBe(0);
    });

    it('hides immediately if the anchor is connected but no longer rendered', () => {
        rects.mockReturnValue(Object.assign([], {item: () => null}));
        component.ngOnDestroy();

        expect(dropdown.style.visibility).toBe('hidden');
        expect(frames.size).toBe(0);
    });

    it('hides if the anchor is removed after Angular destroys the dropdown', () => {
        component.ngOnDestroy();
        anchor.remove();
        nextFrame();

        expect(dropdown.style.visibility).toBe('hidden');
        expect(frames.size).toBe(0);
    });

    it('hides if the anchor stops rendering during the leave animation', () => {
        component.ngOnDestroy();
        nextFrame();
        rects.mockReturnValue(Object.assign([], {item: () => null}));
        nextFrame();

        expect(dropdown.style.visibility).toBe('hidden');
        expect(frames.size).toBe(0);
    });

    it('preserves the leave animation while the anchor is rendered', () => {
        component.ngOnDestroy();
        nextFrame();
        nextFrame();

        expect(dropdown.style.visibility).toBe('visible');
        expect(frames.size).toBe(1);
    });

    it('stops observing when the leave animation removes the dropdown', () => {
        component.ngOnDestroy();
        dropdown.remove();
        nextFrame();

        expect(frames.size).toBe(0);
    });

    it('does not observe a dropdown that has already been removed', () => {
        dropdown.remove();
        component.ngOnDestroy();

        expect(frames.size).toBe(0);
    });
});
