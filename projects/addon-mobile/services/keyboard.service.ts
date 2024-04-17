import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {inject, Injectable} from '@angular/core';
import {tuiGetNativeFocused} from '@taiga-ui/cdk';
import {filter, fromEvent, merge} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TuiKeyboardService implements OnDestroy {
    private readonly doc = inject(DOCUMENT);
    private readonly sub = merge(
        fromEvent(this.doc, 'focusout'),
        fromEvent(this.doc, 'mousedown').pipe(
            filter(e => Object.is(e.target, this.element)),
        ),
    ).subscribe(() => {
        this.show();
    });

    private element?: ElementContentEditable;
    private inputMode = '';

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.show();
    }

    public toggle(): void {
        if (this.element) {
            this.show();
        } else {
            this.hide();
        }
    }

    public hide(): void {
        const focused: any = tuiGetNativeFocused(this.doc);

        if (focused?.inputMode === undefined || this.element) {
            return;
        }

        this.element = focused;
        this.inputMode = focused.inputMode;
        focused.inputMode = 'none';
    }

    public show(): void {
        if (!this.element) {
            return;
        }

        this.element.inputMode = 'none';
        this.element.inputMode = this.inputMode;
        this.element = undefined;
    }
}
