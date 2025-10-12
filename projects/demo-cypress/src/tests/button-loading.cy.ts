import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonLoading} from '@taiga-ui/kit';

describe('Button[loading]', () => {
    let component: Test;

    @Component({
        imports: [TuiButton, TuiButtonLoading],
        template: `
            <form (submit)="increase(); $event.preventDefault()">
                <button
                    tuiButton
                    type="submit"
                    [loading]="loading()"
                    (click)="loading.set(true)"
                >
                    Click me
                </button>
            </form>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected loading = signal(false);
        public count = 0;

        protected increase(): void {
            this.count++;
        }
    }

    beforeEach(() => {
        cy.mount(Test).then((wrapper) => {
            component = wrapper.component;
        });
    });

    it('move focus inside trap on mounting', () => {
        const button = cy.get('[type=submit]').focus();

        button.click();
        button.click();
        button.click();
        button.click();

        button.click().then(() => expect(component.count).eq(1));
    });
});
