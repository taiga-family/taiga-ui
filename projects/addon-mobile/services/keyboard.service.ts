import {DOCUMENT} from '@angular/common';
import {inject, Injectable, type OnDestroy} from '@angular/core';
import {tuiGetFocused} from '@taiga-ui/cdk/utils/focus';
import {filter, fromEvent, merge} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TuiKeyboardService implements OnDestroy {
    private readonly doc = inject(DOCUMENT);
    private readonly sub = merge(
        fromEvent(this.doc, 'focusout'),
        fromEvent(this.doc, 'mousedown').pipe(
            filter((e) => Object.is(e.target, this.element)),
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
        const focused = tuiGetFocused(this.doc) as HTMLInputElement;

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
