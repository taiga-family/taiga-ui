import {ComponentFixture} from '@angular/core/testing';

import {createKeyboardEvent} from './keyboard-event';
import {PageObject} from './page-object';

export class NativeInputPO {
    private pageObject: PageObject<any>;

    constructor(private fixture: ComponentFixture<any>, private automationId: string) {
        this.pageObject = new PageObject(fixture);
    }

    get nativeElement(): any {
        return this.pageObject.getByAutomationId(this.automationId)!.nativeElement;
    }

    get value(): string {
        return this.nativeElement.value;
    }

    get focused(): boolean {
        return document.activeElement === this.nativeElement;
    }

    sendText(value: string) {
        const nativeElement = this.nativeElement;

        nativeElement.value = value;
        nativeElement.dispatchEvent(new Event('input', {bubbles: true}));

        this.fixture.detectChanges();
    }

    // @bad TODO: Fix this with actually moving focus rather than just blurring
    sendTextAndBlur(value: string) {
        this.focus();
        this.sendText(value);
        this.blur();
    }

    sendKeydown(key: string) {
        this.nativeElement.dispatchEvent(createKeyboardEvent(key, 'keydown'));
        this.fixture.detectChanges();
    }

    focus() {
        this.nativeElement.focus();
        this.fixture.detectChanges();
    }

    blur() {
        this.nativeElement.blur();
        this.fixture.detectChanges();
    }

    click() {
        this.nativeElement.click();
        this.fixture.detectChanges();
    }
}
