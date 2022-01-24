import {Component, DebugElement, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiMultiSelectComponent} from '@taiga-ui/kit/components';
import {PageObject} from '@taiga-ui/testing';

@Component({
    template: `
        <tui-root>
            <tui-multi-select [formControl]="control" [readOnly]="readOnly">
                <tui-data-list-wrapper
                    *tuiDataList
                    automation-id="tui-multi-select__menu"
                    [items]="items"
                ></tui-data-list-wrapper>
            </tui-multi-select>
        </tui-root>
    `,
})
export class MultiSelectTestComponent {
    @ViewChild(TuiMultiSelectComponent, {static: true})
    component: TuiMultiSelectComponent<User>;

    items = ITEMS;

    control = new FormControl([ITEMS[0]]);

    readOnly = false;
}

export class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly id: string,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export const ITEMS = [
    new User('Marsi', 'Barsi', '0'),
    new User('Water', 'Plea', '2'),
    new User('Alexander', 'Inkin', '3'),
];

export function getArrow(
    pageObject: PageObject<MultiSelectTestComponent>,
): DebugElement | null {
    return pageObject.getByAutomationId('tui-multi-select__arrow');
}

export function getInputTag(
    pageObject: PageObject<MultiSelectTestComponent>,
): DebugElement {
    return pageObject.getByAutomationId('tui-multi-select__input')!;
}

export function getDropdown(
    pageObject: PageObject<MultiSelectTestComponent>,
): DebugElement | null {
    return pageObject.getByAutomationId('tui-multi-select__menu');
}
