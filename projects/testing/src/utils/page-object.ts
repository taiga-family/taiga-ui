import {DebugElement, Predicate} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';

export class PageObject<T> {
    static getIds({nativeElement}: DebugElement): string[] {
        const attributeValue: string | null = nativeElement.getAttribute('automation-id');

        return attributeValue === null ? [] : attributeValue.split(' ');
    }

    static containsId(debugElement: DebugElement, automationId: string): boolean {
        return PageObject.getIds(debugElement).indexOf(automationId) >= 0;
    }

    static containsOneOfIds(
        debugElement: DebugElement,
        automationIds: ReadonlyArray<string>,
    ): boolean {
        return PageObject.getIds(debugElement).some(id => automationIds.indexOf(id) >= 0);
    }

    private static byAutomationId(automationId: string): Predicate<DebugElement> {
        return debugElement => PageObject.containsId(debugElement, automationId);
    }

    private static byOneOfIds(ids: ReadonlyArray<string>): Predicate<DebugElement> {
        return debugElement => PageObject.containsOneOfIds(debugElement, ids);
    }

    constructor(protected fixture: ComponentFixture<T>) {}

    getByAutomationId(
        automationId: string,
        debugElement: DebugElement = this.fixture.debugElement,
    ): DebugElement | null {
        return debugElement.query(PageObject.byAutomationId(automationId));
    }

    getAllByOneOfIds(
        ids: ReadonlyArray<string>,
        debugElement: DebugElement = this.fixture.debugElement,
    ): DebugElement[] {
        return debugElement.queryAll(PageObject.byOneOfIds(ids));
    }

    // Syncing result order with DOM order: https://github.com/angular/angular/issues/13066
    getAllByAutomationId(
        automationId: string,
        debugElement: DebugElement = this.fixture.debugElement,
    ): DebugElement[] {
        const debugEls = debugElement.queryAll(PageObject.byAutomationId(automationId));
        const domEls = Array.from(
            debugElement.nativeElement.querySelectorAll(
                `[automation-id='${automationId}']`,
            ),
        );

        return debugEls.sort(
            (a, b) => domEls.indexOf(a.nativeElement) - domEls.indexOf(b.nativeElement),
        );
    }

    sendTextToInput(
        automationId: string,
        value: string,
        debugElement: DebugElement = this.fixture.debugElement,
    ) {
        const inputDebugElement: DebugElement | null = this.getByAutomationId(
            automationId,
            debugElement,
        );

        if (inputDebugElement === null) {
            throw new Error(`Поле ${automationId} не найдено`);
        }

        if (!(inputDebugElement.nativeElement instanceof HTMLInputElement)) {
            throw new Error(`Элемент ${automationId} не является <input />`);
        }

        inputDebugElement.nativeElement.value = value;
        inputDebugElement.nativeElement.dispatchEvent(new Event('input'));
    }
}
