import {DOCUMENT} from '@angular/common';
import {Directive, inject, OnDestroy} from '@angular/core';

/**
 * Use this abstract class to create your own toggleable themes.
 * A component extending this class must have CSS variables definitions
 * and have ViewEncapsulation set to NONE. A boolean input allows to
 * switch theme on or off.
 */
@Directive()
export abstract class AbstractTuiThemeSwitcher implements OnDestroy {
    protected static style: HTMLStyleElement | null = null;

    private readonly doc = inject(DOCUMENT);

    constructor() {
        if (this.style !== null) {
            this.addTheme();

            return;
        }

        const styles = this.doc.head.querySelectorAll('style');

        (this.constructor as typeof AbstractTuiThemeSwitcher).style =
            styles[styles.length - 1];
    }

    public ngOnDestroy(): void {
        this.removeTheme();
    }

    protected get style(): HTMLStyleElement | null {
        return (this.constructor as typeof AbstractTuiThemeSwitcher).style;
    }

    private addTheme(): void {
        if (this.style) {
            this.doc.head.appendChild(this.style);
        }
    }

    private removeTheme(): void {
        this.style?.remove();
    }
}
