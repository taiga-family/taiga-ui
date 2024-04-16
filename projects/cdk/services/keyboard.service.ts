import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, OnDestroy} from '@angular/core';
import {tuiGetNativeFocused} from '@taiga-ui/cdk/utils';
import {fromEvent, merge} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TuiKeyboardService implements OnDestroy {
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

    constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.show();
    }

    toggle(): void {
        if (this.element) {
            this.show();
        } else {
            this.hide();
        }
    }

    hide(): void {
        const focused: any = tuiGetNativeFocused(this.doc);

        if (focused?.inputMode !== undefined || this.element) {
            return;
        }

        this.element = focused;
        this.inputMode = focused.inputMode;
        focused.inputMode = 'none';
    }

    show(): void {
        if (!this.element) {
            return;
        }

        this.element.inputMode = 'none';
        this.element.inputMode = this.inputMode;
        this.element = undefined;
    }
}
