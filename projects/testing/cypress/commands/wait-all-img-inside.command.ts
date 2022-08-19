/// <reference types="cypress" />

export const tuiWaitAllImgInside = (
    prevSubject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
    enabled: boolean = true,
): Cypress.Chainable<unknown> => {
    const target =
        prevSubject && Cypress.dom.isJquery(prevSubject)
            ? cy.wrap(prevSubject, {log: false})
            : cy.get(`body`, {log: false});

    target.then($target => {
        const img = $target.find(`img`);

        if (img.length && enabled) {
            const log = Cypress.log({
                displayName: `Wait all images`,
                message: `naturalWidth greaterThan 0`,
                name: `tuiWaitAllImgInside`,
                autoEnd: false,
                consoleProps: () => ({
                    prevSubject,
                    img: img,
                }),
            });

            cy.wrap($target, {log: false})
                .get(`img`, {log: false})
                .each((img: JQuery<HTMLImageElement>) => {
                    const nativeImage = img.get(0);
                    const url = nativeImage?.src || nativeImage?.srcset;

                    if (!url) {
                        return;
                    }

                    const offsetParent = img.prop(`offsetParent`);

                    return cy.window({log: false}).then((win: Window) => {
                        const rect = nativeImage.getBoundingClientRect();
                        const isInViewport =
                            offsetParent &&
                            rect.top >= 0 &&
                            rect.left >= 0 &&
                            rect.bottom <=
                                (win.innerHeight ||
                                    win.document.documentElement.clientHeight) &&
                            rect.right <=
                                (win.innerWidth ||
                                    win.document.documentElement.clientWidth);

                        if (isInViewport) {
                            if (url.includes(`base64`)) {
                                (expect as any)(
                                    nativeImage.naturalWidth,
                                ).to.be.greaterThan(0);
                            } else {
                                cy.request({
                                    url: url,
                                    failOnStatusCode: false,
                                    log: false,
                                }).then(resp => {
                                    if (resp.status === 200) {
                                        cy.get(img as any, {log: false}).should(
                                            (el: JQuery<HTMLImageElement>) =>
                                                (expect as any)(
                                                    el[0].naturalWidth,
                                                ).to.be.greaterThan(0),
                                        );
                                    }
                                });
                            }
                        }
                    });
                })
                .then(() => log.end());
        }
    });

    return target;
};
