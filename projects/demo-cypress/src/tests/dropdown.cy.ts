import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDropdown, TuiRoot} from '@taiga-ui/core';

describe('TuiDropdown', () => {
    @Component({
        imports: [TuiDropdown, TuiRoot],
        template: `
            <tui-root>
                <span
                    class="host"
                    [tuiDropdown]="dropdown"
                    [tuiDropdownManual]="true"
                ></span>

                <ng-template #dropdown>Dropdown</ng-template>
            </tui-root>
        `,
        styles: `
            .host {
                display: block;
                width: 0;
                height: 0;
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    it('stays open for a zero-sized host', () => {
        cy.mount(Test);

        cy.get('tui-dropdown').should('be.visible');
    });
});
