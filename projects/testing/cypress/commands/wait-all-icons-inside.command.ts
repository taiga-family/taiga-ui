/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Wait until all svg-icons have non-zero height
             * @param enabled=true
             * @example cy.get('#selector').tuiWaitAllIconsInside()
             */
            tuiWaitAllIconsInside(
                enabled?: boolean,
            ): Chainable<JQuery | Document | Window>;
        }
    }
}

function isExceptionSVG(
    $el: JQuery<unknown>,
    // SVGs with current `use`-element pattern always have height equal to zero
    svgExceptions = ['tuiIconHrLarge.svg', '#iconBlank'],
): boolean {
    const [$use] = $el.toArray() as SVGUseElement[];

    return svgExceptions.some(exception => $use.href.baseVal.includes(exception));
}

export const tuiWaitAllIconsInside = (
    prevSubject: JQuery | Document | Window | void,
    enabled: boolean = true,
): Cypress.Chainable<JQuery | Document | Window> => {
    const target =
        prevSubject && Cypress.dom.isJquery(prevSubject)
            ? cy.wrap(prevSubject, {log: false})
            : cy.get('body');

    target.then($target => {
        const svgUses = $target.find('svg use');

        if (svgUses.length && enabled) {
            const log = Cypress.log({
                displayName: 'Icons',
                message: 'Wait for icons',
                name: 'tuiWaitAllIconsInside',
                autoEnd: false,
                consoleProps: () => ({
                    prevSubject,
                    svgUses,
                }),
            });

            cy.wrap($target, {log: false})
                .find('svg use', {log: false})
                .each($use => {
                    if (!isExceptionSVG($use) && Cypress.dom.isVisible($use)) {
                        cy.wrap($use, {log: false})
                            .invoke({log: false}, 'height')
                            .should('be.greaterThan', 0);
                    }
                })
                .then(() => log.end());
        }
    });

    return target;
};

export const tuiAddWaitAllIconsInsideCommand = (): void => {
    Cypress.Commands.add(
        'tuiWaitAllIconsInside',
        {prevSubject: ['optional', 'element', 'window', 'document']},
        tuiWaitAllIconsInside,
    );
};
