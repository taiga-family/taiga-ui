import {Component, Input} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiSwipeDirective} from '@taiga-ui/cdk';
import {TuiHint, TuiRootComponent} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import type {MountResponse} from 'cypress/angular';

describe('TuiHint', () => {
    let component: TestComponent;
    let wrapper: MountResponse<TestComponent>;

    @Component({
        selector: 'my-host',
        template: `
            <ng-container *ngIf="!hideElement">
                <ng-content></ng-content>
            </ng-container>
        `,
    })
    class HostComponent {
        @Input()
        public hideElement = false;
    }

    @Component({
        template: `
            <tui-root>
                <my-host [hideElement]="hide">
                    <button tuiHint="hint">button</button>
                </my-host>
            </tui-root>
        `,
    })
    class TestComponent {
        public hide = false;
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [
                    BrowserAnimationsModule,
                    TuiRootComponent,
                    TuiSwipeDirective,
                    TuiHint,
                ],
                declarations: [HostComponent],
                providers: [NG_EVENT_PLUGINS],
            })
            .then(wrap => {
                component = wrap.component;
                wrapper = wrap;
            }),
    );

    it('hint should hidden when detached from dom', () => {
        cy.get('button').trigger('mouseenter');
        cy.get('tui-hint')
            .should('exist')
            .then(() => {
                component.hide = true;
                wrapper.fixture.detectChanges();

                cy.get('tui-hint').should('not.exist');
            });
    });
});
