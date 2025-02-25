import {KeyValuePipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiButton, TuiRoot} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [FormsModule, KeyValuePipe, NgForOf, TuiAccordion, TuiButton, TuiRoot],
    template: `
        <tui-root>
            <button
                tuiButton
                (click)="change()"
            >
                Change data
            </button>

            <tui-accordion>
                <ng-container *ngFor="let item of data | keyvalue; let index = index">
                    <button [tuiAccordion]="index === 1">{{ item.key }}</button>
                    <tui-expand>{{ item.value }}</tui-expand>
                </ng-container>
            </tui-accordion>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestAccordion {
    protected data: Record<string, string> = {
        'Taiga UI cdk': '1',
        'Taiga UI core': '2',
        'Taiga UI kit': '3',
    };

    protected change(): void {
        this.data = {
            'Taiga UI addon-doc': '4',
            'Taiga UI addon-mobile': '5',
        };
    }
}

describe('Accordion', () => {
    it('Dynamic change content', () => {
        cy.mount(TestAccordion);

        cy.get('tui-accordion').compareSnapshot('tui-accordion__1');
        cy.get('button').contains('Change data').click();
        cy.get('tui-accordion').compareSnapshot('tui-accordion__2');
    });
});
