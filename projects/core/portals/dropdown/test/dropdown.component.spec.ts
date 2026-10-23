import {ElementRef, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    TUI_DARK_MODE,
    TUI_DROPDOWN_ANCHOR,
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownComponent,
    TuiDropdownDirective,
    TuiDropdownPosition,
} from '@taiga-ui/core';
import {Subject} from 'rxjs';

describe('TuiDropdownComponent leave animation', () => {
    let component: TuiDropdownComponent;
    let anchor: HTMLButtonElement;
    let dropdown: HTMLElement;
    let frames$: Subject<number>;
    let rects: jest.SpyInstance<DOMRectList>;

    beforeEach(() => {
        anchor = document.createElement('button');
        dropdown = document.createElement('tui-dropdown');
        frames$ = new Subject<number>();
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
                {provide: WA_ANIMATION_FRAME, useValue: frames$},
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
        frames$.complete();
    });

    it('hides immediately if the anchor has already been removed', () => {
        anchor.remove();
        component.ngOnDestroy();

        expect(dropdown.style.visibility).toBe('hidden');
    });

    it('hides immediately if the anchor is connected but no longer rendered', () => {
        rects.mockReturnValue(Object.assign([], {item: () => null}));
        component.ngOnDestroy();

        expect(dropdown.style.visibility).toBe('hidden');
    });

    it('hides if the anchor is removed after Angular destroys the dropdown', () => {
        component.ngOnDestroy();
        anchor.remove();
        frames$.next(0);

        expect(dropdown.style.visibility).toBe('hidden');
        expect(frames$.observed).toBe(false);
    });

    it('hides if the anchor stops rendering during the leave animation', () => {
        component.ngOnDestroy();
        frames$.next(0);
        rects.mockReturnValue(Object.assign([], {item: () => null}));
        frames$.next(16);

        expect(dropdown.style.visibility).toBe('hidden');
        expect(frames$.observed).toBe(false);
    });

    it('preserves the leave animation while the anchor is rendered', () => {
        component.ngOnDestroy();
        frames$.next(0);
        frames$.next(16);

        expect(dropdown.style.visibility).toBe('visible');
    });

    it('stops observing when the leave animation removes the dropdown', () => {
        component.ngOnDestroy();
        dropdown.remove();
        frames$.next(0);

        expect(frames$.observed).toBe(false);
    });

    it('does not observe a dropdown that has already been removed', () => {
        dropdown.remove();
        component.ngOnDestroy();

        expect(frames$.observed).toBe(false);
    });
});
