import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiHint, TuiRoot} from '@taiga-ui/core';
import {type MountResponse} from 'cypress/angular';

describe('TuiHint', () => {
    let component: Test;
    let wrapper: MountResponse<Test>;

    @Component({
        selector: 'my-host',
        template: `
            @if (!hideElement()) {
                <ng-content />
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Host {
        public readonly hideElement = input(false);
    }

    @Component({
        imports: [Host, TuiHint, TuiRoot],
        template: `
            <tui-root>
                <my-host [hideElement]="hide">
                    <button
                        tuiHint="hint"
                        type="button"
                    >
                        button
                    </button>
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
                imports: [Host],
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
