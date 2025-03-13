import type {DebugElement, Predicate} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';

export class TuiPageObject<T> {
    constructor(protected readonly fixture: ComponentFixture<T>) {}

    public static getIds({nativeElement}: DebugElement): string[] {
        const attributeValue: string | null = nativeElement.getAttribute('automation-id');

        return attributeValue === null ? [] : attributeValue.split(' ');
    }

    public static containsId(debugElement: DebugElement, automationId: string): boolean {
        return TuiPageObject.getIds(debugElement).includes(automationId);
    }

    private static byAutomationId(automationId: string): Predicate<DebugElement> {
        return (debugElement) => TuiPageObject.containsId(debugElement, automationId);
    }

    public getByAutomationId(
        automationId: string,
        debugElement: DebugElement = this.fixture.debugElement,
    ): DebugElement | null {
        return debugElement.query(TuiPageObject.byAutomationId(automationId));
    }

    // Syncing result order with DOM order: https://github.com/angular/angular/issues/13066
    public getAllByAutomationId(
        automationId: string,
        debugElement: DebugElement = this.fixture.debugElement,
    ): DebugElement[] {
        const debugEls = debugElement.queryAll(
            TuiPageObject.byAutomationId(automationId),
        );
        const domEls = Array.from(
            debugElement.nativeElement.querySelectorAll(
                `[automation-id='${automationId}']`,
            ),
        );

        return debugEls.sort(
            (a, b) => domEls.indexOf(a.nativeElement) - domEls.indexOf(b.nativeElement),
        );
    }
}
