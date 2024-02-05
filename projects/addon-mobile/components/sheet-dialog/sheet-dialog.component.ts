import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, TuiPopover, tuiPure} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TuiCommonIcons,
    tuiGetDuration,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable} from 'rxjs';

import {TuiSheetDialogOptions} from './sheet-dialog.options';

// So we re-enter ngZone and trigger change detection
function isCloseable(this: TuiSheetDialogComponent<unknown>): boolean {
    return this.context.closeable;
}

@Component({
    selector: 'tui-sheet-dialog',
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
    host: {
        '[$.class._stuck]': 'stuck$',
        '($.class._stuck)': 'stuck$',
    },
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    @ViewChild('sheet')
    private readonly sheet?: ElementRef<HTMLElement>;

    @ViewChildren('stops')
    private readonly stopsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private pointers = 0;

    @HostBinding('@tuiSlideInTop')
    readonly slideInTop = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(this.speed),
        },
    };

    stuck$ = new BehaviorSubject(false);

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_ANIMATIONS_SPEED) private readonly speed: number,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiPopover<TuiSheetDialogOptions<I>, any>,
    ) {}

    @HostBinding('style.top.px')
    get offset(): number {
        return this.context.offset;
    }

    @HostBinding('class._closeable')
    get closeable(): boolean {
        return this.context.closeable;
    }

    get isSmall(): boolean {
        return this.sheetTop > (this.sheet?.nativeElement.clientHeight || Infinity);
    }

    @HostListener('document:touchstart.passive.silent', ['1'])
    @HostListener('document:touchend.silent', ['-1'])
    @HostListener('document:touchcancel.silent', ['-1'])
    @HostListener('scroll.silent', ['0'])
    onPointerChange(delta: number): void {
        this.pointers += delta;

        if (!delta) {
            const stuck = this.el.nativeElement.scrollTop > this.sheetTop;

            this.stuck$.value !== stuck && this.stuck$.next(stuck);
        }

        if (
            this.context.closeable &&
            !this.pointers &&
            !this.el.nativeElement.scrollTop
        ) {
            this.close();
        }
    }

    @shouldCall(isCloseable)
    close(): void {
        // TODO: Refactor focus visible on mobile
        this.el.nativeElement.dispatchEvent(new Event('mousedown', {bubbles: true}));
        this.context.$implicit.complete();
    }

    ngAfterViewInit(): void {
        this.el.nativeElement.scrollTop = [
            ...this.getStops(this.stopsRefs),
            this.sheetTop,
        ][this.context.initial];
    }

    private get sheetTop(): number {
        return this.sheet?.nativeElement.offsetTop ?? Infinity;
    }

    @tuiPure
    private getStops(stops: QueryList<ElementRef<HTMLElement>>): readonly number[] {
        return stops.map(
            ({nativeElement}) => nativeElement.offsetTop + nativeElement.clientHeight,
        );
    }
}
