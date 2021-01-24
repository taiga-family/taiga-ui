import {Component, OnDestroy} from '@angular/core';

/**
 * Use this abstract class to create your own toggleable themes.
 * A component extending this class must have CSS variables definitions
 * and have ViewEncapsulation set to NONE. A boolean input allows to
 * switch theme on or off.
 */
@Component({
    template: '',
})
export abstract class AbstractTuiThemeSwitcher implements OnDestroy {
    static style: HTMLStyleElement | null = null;

    protected constructor(private readonly documentRef: Document) {
        if (this.style !== null) {
            this.addTheme();

            return;
        }

        const styles = this.documentRef.head.querySelectorAll('style');

        (<typeof AbstractTuiThemeSwitcher>this.constructor).style =
            styles[styles.length - 1];
    }

    get style(): HTMLStyleElement | null {
        return (<typeof AbstractTuiThemeSwitcher>this.constructor).style;
    }

    ngOnDestroy() {
        this.removeTheme();
    }

    private addTheme() {
        if (this.style && !this.documentRef.head.contains(this.style)) {
            for (let i = this.style.attributes.length - 1; i >= 0; i--) {
                this.style.removeAttribute(this.style.attributes[i].name);
            }

            this.documentRef.head.appendChild(this.style);
        }
    }

    private removeTheme() {
        if (this.style && this.documentRef.head.contains(this.style)) {
            this.documentRef.head.removeChild(this.style);
        }
    }
}
