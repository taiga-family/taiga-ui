import {Component} from '@angular/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiImgLazyLoading} from '@taiga-ui/kit';

describe('LazyLoading', () => {
    @Component({
        template: `
            <img
                alt="picsum"
                loading="lazy"
                style="--tui-background-neutral-2: rgba(0, 0, 0, 0.16); width: 100px; height: 100px; display: block"
                [attr.src]="src"
            />

            <button (click)="updateSrc()">click</button>
        `,
    })
    class Test {
        protected src = '';

        protected updateSrc(): void {
            this.src =
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABwAAkAcABAAAADAyMTABkQcABAAAAAECAwCGkgcAFgAAAMAAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAAEAAAADoAQAAQAAAAEAAAAAAAAAQVNDSUkAAABQaWNzdW0gSUQ6IDY3Nf/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAAEAAQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGOE//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQC//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z';
        }
    }

    beforeEach(() =>
        cy.mount(Test, {
            imports: [TuiImgLazyLoading],
            providers: [NG_EVENT_PLUGINS],
            componentProperties: {
                src: '',
            },
        }),
    );

    it('image has background color', () => {
        cy.get('img').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.16)');
    });

    it('loading animation is shown', () => {
        cy.get('img').should('have.css', 'animation-name', 'tuiSkeletonVibe');
    });

    it('loading animation is cancelled after image load', () => {
        cy.get('img').should('have.css', 'animation-name', 'tuiSkeletonVibe');
        cy.get('button').click();
        cy.get('img').should('have.css', 'animation-name', 'none');
    });
});
