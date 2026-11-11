import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {TuiTreeItem} from '../components/tree-item/tree-item.component';
import {TuiTreeControllerDirective} from '../directives/tree-controller.directive';

@Component({
    imports: [TuiTreeControllerDirective],
    template: `
        <div
            [map]="map"
            [tuiTreeController]="fallback"
        ></div>
    `,
})
class Test {
    public readonly map = new Map<unknown, boolean>();
    public fallback = false;
}

describe('TuiTreeControllerDirective', () => {
    it.each([0, false, ''])('toggles an item with a falsy value %j', (value) => {
        const fixture = TestBed.createComponent(Test);

        fixture.componentInstance.map.set(value, true);
        fixture.detectChanges();

        const controller = fixture.debugElement
            .query(By.directive(TuiTreeControllerDirective))
            .injector.get(TuiTreeControllerDirective);

        const item = Object.create(TuiTreeItem.prototype) as TuiTreeItem;

        controller.register(item, value);

        expect(controller.isExpanded(item)).toBe(true);

        controller.toggle(item);

        expect(fixture.componentInstance.map.get(value)).toBe(false);
        expect(controller.isExpanded(item)).toBe(false);

        controller.toggle(item);

        expect(fixture.componentInstance.map.get(value)).toBe(true);
        expect(controller.isExpanded(item)).toBe(true);
    });

    it.each([false, true])('uses fallback %j', (fallback) => {
        const fixture = TestBed.createComponent(Test);

        fixture.componentInstance.fallback = fallback;
        fixture.detectChanges();

        const controller = fixture.debugElement
            .query(By.directive(TuiTreeControllerDirective))
            .injector.get(TuiTreeControllerDirective);

        const item = Object.create(TuiTreeItem.prototype) as TuiTreeItem;

        expect(controller.isExpanded(item)).toBe(fallback);

        controller.toggle(item);

        expect(fixture.componentInstance.map.size).toBe(0);
    });
});
