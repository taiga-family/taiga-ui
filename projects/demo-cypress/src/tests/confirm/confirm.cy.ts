import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TUI_CONFIRM_WORDS, TuiConfirm} from '@taiga-ui/kit';
import {
    injectContext,
    // eslint-disable-next-line no-restricted-imports
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
} from '@taiga-ui/polymorpheus';

describe('TuiConfirm', () => {
    @Component({
        template: '<span class="content">{{ context.data?.test }}</span>',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class CustomContentComponent {
        protected readonly context = injectContext();
    }

    it('passes dialog context to polymorpheus content', () => {
        cy.mount(TuiConfirm, {
            providers: [
                {
                    provide: POLYMORPHEUS_CONTEXT,
                    useValue: {
                        appearance: 'taiga',
                        data: {
                            content: new PolymorpheusComponent(CustomContentComponent),
                            test: 'foo',
                        },
                        label: 'Confirm',
                        required: false,
                        size: 'm',
                        id: 'context-id',
                    },
                },
                {provide: TUI_IS_MOBILE, useValue: false},
                {provide: TUI_CONFIRM_WORDS, useValue: () => ({yes: 'Yes', no: 'No'})},
            ],
        });

        cy.get('.content').should('have.text', 'foo');
    });
});
