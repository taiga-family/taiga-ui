import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';

import {createKeyboardEvent} from './keyboard-event';
import {PageObject} from './page-object';

export class NativeInputPO {
    private readonly pageObject: PageObject<unknown>;

    constructor(
        private readonly fixture: ComponentFixture<unknown>,
        private readonly automationId: string,
        private readonly hostDebugElement?: DebugElement,
    ) {
        this.pageObject = new PageObject(fixture);
    }

    get nativeElement(): any {
        return this.pageObject.getByAutomationId(
            this.automationId,
            this.hostDebugElement,
        )!.nativeElement;
    }

    get value(): string {
        return this.nativeElement.value;
    }

    get focused(): boolean {
        return document.activeElement === this.nativeElement;
    }

    sendText(value: string): void {
        const nativeElement = this.nativeElement;

        nativeElement.value = value;
        nativeElement.dispatchEvent(new Event('input', {bubbles: true}));

        this.fixture.detectChanges();
    }

    // @bad TODO: Fix this with actually moving focus rather than just blurring
    sendTextAndBlur(value: string): void {
        this.focus();
        this.sendText(value);
        this.blur();
    }

    sendKeydown(key: string): void {
        this.nativeElement.dispatchEvent(createKeyboardEvent(key, 'keydown'));
        this.fixture.detectChanges();
    }

    focus(): void {
        this.nativeElement.focus();
        this.fixture.detectChanges();
    }

    blur(): void {
        this.nativeElement.blur();
        this.fixture.detectChanges();
    }

    click(): void {
        this.nativeElement.click();
        this.fixture.detectChanges();
    }
}
