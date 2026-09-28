import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {
    TuiDropdownDirective,
    TuiDropdownSelection,
} from '@taiga-ui/core/portals/dropdown';
import {TUI_SELECTION_STREAM} from '@taiga-ui/core/tokens';
import {Subject, type Subscription} from 'rxjs';

describe('TuiDropdownSelection', () => {
    @Component({
        imports: [TuiDropdownSelection],
        template: `
            <div
                tuiDropdownSelection
                style="line-height: 20px"
            >
                <textarea>Selected text</textarea>
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let directive: TuiDropdownSelection;
    let host: HTMLElement;
    let textarea: HTMLTextAreaElement;
    let selection$: Subject<void>;
    let subscription: Subscription;
    let visible: boolean[];
    let caret: DOMRect;

    const originalRect = Object.getOwnPropertyDescriptor(
        Range.prototype,
        'getBoundingClientRect',
    );

    beforeAll(() => {
        Object.defineProperty(Range.prototype, 'getBoundingClientRect', {
            configurable: true,
            writable: true,
            value: () => EMPTY_CLIENT_RECT,
        });
    });

    afterAll(() => {
        if (originalRect) {
            Object.defineProperty(Range.prototype, 'getBoundingClientRect', originalRect);
        } else {
            Reflect.deleteProperty(Range.prototype, 'getBoundingClientRect');
        }
    });

    function rect(x: number, y: number, width: number, height: number): DOMRect {
        return {
            ...EMPTY_CLIENT_RECT,
            x,
            y,
            left: x,
            top: y,
            width,
            height,
            right: x + width,
            bottom: y + height,
        };
    }

    beforeEach(() => {
        selection$ = new Subject<void>();
        visible = [];
        caret = rect(30, 110, 10, 20);
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                {provide: TUI_SELECTION_STREAM, useValue: selection$},
                {provide: TuiDropdownDirective, useValue: {ref: () => null}},
            ],
        });
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();

        const element = fixture.debugElement.query(By.directive(TuiDropdownSelection));

        directive = element.injector.get(TuiDropdownSelection);
        host = element.nativeElement;
        textarea = host.querySelector('textarea')!;
        jest.spyOn(host, 'getBoundingClientRect').mockReturnValue(rect(20, 100, 200, 40));
        jest.spyOn(Range.prototype, 'getBoundingClientRect').mockImplementation(
            () => caret,
        );
        subscription = directive.subscribe((value) => visible.push(value));
        fixture.detectChanges();
        textarea.focus();
        textarea.setSelectionRange(1, 4);
    });

    afterEach(() => {
        subscription.unsubscribe();
        fixture.destroy();
        jest.restoreAllMocks();
    });

    it('finishes measuring before writing anchor geometry', () => {
        const sizesDuringReads: string[] = [];

        jest.spyOn(Range.prototype, 'getBoundingClientRect').mockImplementation(() => {
            sizesDuringReads.push(directive.nativeElement.style.blockSize);

            return caret;
        });

        selection$.next();

        expect(visible).toEqual([true]);
        expect(sizesDuringReads.length).toBeGreaterThan(0);
        expect(sizesDuringReads.every((size) => size === '')).toBe(true);
        expect(directive.nativeElement.style.blockSize).toBe('20px');
        expect(directive.nativeElement.style.inlineSize).toBe('10px');
    });

    it.each([
        [90, true],
        [89, false],
        [130, true],
        [131, false],
        [150, false],
    ])('handles a caret at y=%s (visible=%s)', (top, expected) => {
        caret = rect(30, top, 10, 20);

        selection$.next();

        expect(visible).toEqual([expected]);
        expect(directive.nativeElement.style.blockSize).toBe('20px');
    });

    it('updates visibility on scroll without changing the selection', fakeAsync(() => {
        selection$.next();
        caret = rect(30, 150, 10, 20);
        textarea.dispatchEvent(new Event('scroll'));
        tick(16);

        expect(visible).toEqual([true, false]);

        caret = rect(30, 110, 10, 20);
        textarea.dispatchEvent(new Event('scroll'));
        tick(16);

        expect(visible).toEqual([true, false, true]);
    }));

    it('keeps the ghost at the host origin and preserves selection offsets', () => {
        jest.spyOn(Range.prototype, 'getBoundingClientRect').mockImplementation(function (
            this: Range,
        ) {
            expect(this.startOffset).toBe(1);
            expect(this.endOffset).toBe(4);

            return caret;
        });
        selection$.next();

        const ghost = host.lastElementChild as HTMLElement;
        const range = document.createRange();

        range.selectNodeContents(ghost);
        expect(ghost.style.top).toBe('0px');
        expect(ghost.style.left).toBe('0px');
        expect(ghost.style.width).toBe('200px');
        expect(ghost.style.height).toBe('40px');
        expect(range.toString()).toBe('\u200BSelected text\u00A0');
        expect(directive.getClientRect()).toEqual(caret);
    });
});
