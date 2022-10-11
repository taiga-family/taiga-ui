import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';

import {tuiCreateKeyboardEvent} from './keyboard-event';
import {TuiPageObject} from './page-object';
import {tuiReplaceNbsp} from './replace-nbsp';

export class TuiNativeInputPO<T extends HTMLInputElement = HTMLInputElement> {
    private readonly pageObject: TuiPageObject<unknown>;

    constructor(
        private readonly fixture: ComponentFixture<unknown>,
        private readonly automationId: string,
        private readonly hostDebugElement?: DebugElement,
    ) {
        this.pageObject = new TuiPageObject(fixture);
    }

    get nativeElement(): T | null {
        return (
            this.pageObject.getByAutomationId(this.automationId, this.hostDebugElement)
                ?.nativeElement ?? null
        );
    }

    get value(): string {
        return tuiReplaceNbsp(this.nativeElement?.value ?? ``);
    }

    get focused(): boolean {
        return document.activeElement === this.nativeElement;
    }

    sendText(value: string): void {
        this.focus(); // need focus before initial value for emulate user interaction

        const nativeElement = this.nativeElement;

        if (nativeElement) {
            nativeElement.value = value;

            try {
                nativeElement.dispatchEvent(new Event(`input`, {bubbles: true}));
            } catch (err) {
                console.error(`invalid event`, err.message);
            }
        }

        this.fixture.detectChanges();
    }

    // @bad TODO: Fix this with actually moving focus rather than just blurring
    sendTextAndBlur(value: string): void {
        this.focus();
        this.sendText(value);
        this.blur();
    }

    sendKeydown(key: string): void {
        this.nativeElement?.dispatchEvent(tuiCreateKeyboardEvent(key, `keydown`));
        this.fixture.detectChanges();
    }

    focus(): void {
        this.nativeElement?.focus();
        this.fixture.detectChanges();
    }

    blur(): void {
        this.nativeElement?.blur();
        this.fixture.detectChanges();
    }

    click(): void {
        this.nativeElement?.click();
        this.fixture.detectChanges();
    }
}
