import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiHintDirective, TuiRoot} from '@taiga-ui/core';
import type {MountResponse} from 'cypress/angular';

describe('TuiHint', () => {
    let component: Test;
    let wrapper: MountResponse<Test>;

    @Component({
        standalone: true,
        selector: 'my-host',
        imports: [NgIf],
        template: `
            <ng-container *ngIf="!hideElement">
                <ng-content></ng-content>
            </ng-container>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Host {
        @Input()
        public hideElement = false;
    }

    @Component({
        standalone: true,
        imports: [Host, TuiHintDirective, TuiRoot],
        template: `
            <tui-root>
                <my-host [hideElement]="hide">
                    <button tuiHint="hint">button</button>
                </my-host>
            </tui-root>
        `,
        // TODO: check why hint doesn't work onPush
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public hide = false;
    }

    beforeEach(() =>
        cy
            .mount(Test, {
                imports: [NoopAnimationsModule, Host],
            })
            .then((wrap) => {
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
