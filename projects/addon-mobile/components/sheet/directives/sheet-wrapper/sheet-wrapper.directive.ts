import {ContentChild, Directive, inject, Input, NgZone} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    ALWAYS_FALSE_HANDLER,
    tuiClamp,
    tuiIsFalsy,
    tuiPure,
    tuiZonefull,
} from '@taiga-ui/cdk';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    Observable,
    race,
    startWith,
    switchMap,
    take,
    timer,
} from 'rxjs';

import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

// Safety offset for shadow
const OFFSET = 16;

function processDragged(
    dragged$: Observable<boolean>,
    scroll$: Observable<unknown>,
): Observable<boolean> {
    const touchstart$ = dragged$.pipe(filter(Boolean));
    const touchend$ = dragged$.pipe(filter(tuiIsFalsy));
    const race$ = race(scroll$, timer(100)).pipe(
        debounceTime(200),
        take(1),
        map(ALWAYS_FALSE_HANDLER),
    );

    return touchstart$.pipe(
        switchMap(() =>
            touchend$.pipe(
                switchMap(() => race$),
                startWith(true),
            ),
        ),
        startWith(false),
    );
}

@Directive({
    selector: '[tuiSheetWrapper]',
    exportAs: 'tuiSheetWrapper',
})
export class TuiSheetWrapperDirective {
    @ContentChild(TuiSheetComponent)
    private readonly sheet?: TuiSheetComponent<unknown>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_DRAGGED, static: true})
    private readonly dragged$!: Observable<boolean>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_SCROLL, static: true})
    private readonly scroll$!: Observable<number>;

    private readonly zone = inject(NgZone);
    private readonly win = inject(WINDOW);

    @Input()
    public tuiSheetWrapper = 16;

    @tuiPure
    public get overlay$(): Observable<boolean> {
        return this.scroll$.pipe(
            map(y => y + 16 > this.win.innerHeight - this.tuiSheetWrapper),
            distinctUntilChanged(),
            tuiZonefull(this.zone),
        );
    }

    @tuiPure
    public get visible$(): Observable<boolean> {
        return processDragged(this.dragged$, this.scroll$).pipe(
            distinctUntilChanged(),
            tuiZonefull(this.zone),
        );
    }

    @tuiPure
    public get height$(): Observable<number | null> {
        return this.scroll$.pipe(map(this.getHeight.bind(this)));
    }

    private getHeight(value: number): number | null {
        return this.sheet?.context.overlay
            ? null
            : tuiClamp(this.withImage(value) + OFFSET, OFFSET, this.win.innerHeight);
    }

    private withImage(value: number): number {
        return !this.sheet?.imageStop || Math.floor(value) > this.sheet.imageStop
            ? value
            : value - this.sheet.imageHeight;
    }
}
