import type {ComponentFixture} from '@angular/core/testing';

import {tuiCreateKeyboardEvent} from './keyboard-event';

export function tuiDispatchOnActive<T>(key: string, fixture?: ComponentFixture<T>): void {
    if (document.activeElement) {
        document.activeElement.dispatchEvent(tuiCreateKeyboardEvent(key, `keydown`));
    }

    if (fixture) {
        fixture.detectChanges();
    }
}

export function tuiActiveText(): string {
    return document.activeElement?.textContent?.trim() || ``;
}

export function tuiIsActive(element: Element): boolean {
    return document.activeElement === element;
}
