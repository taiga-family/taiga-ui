function makeScreenshot(screenshotName: string): void {
    cy.get(`#usage`)
        .tuiFindByExampleId()
        .tuiScrollIntoView()
        .tuiWaitBeforeScreenshot()
        .matchImageSnapshot(screenshotName);
}

describe(`Viewport`, () => {
    it(`device width = 767px => mobile (@mobile-m-interval)`, () => {
        cy.viewport(767, 900);
        cy.tuiVisit(`/breakpoints`, {hideHeader: false, hideNavigation: false});

        makeScreenshot(`01-breakpoints-767-900-mobile-viewport`);
    });

    it(`device width = 768px => tablet (@tablet-lg-interval)`, () => {
        cy.viewport(768, 900);
        cy.tuiVisit(`/breakpoints`, {hideHeader: false, hideNavigation: false});

        makeScreenshot(`02-breakpoints-768-900-tablet-viewport`);
    });

    it(`device width = 1023px => tablet (@tablet-lg-interval)`, () => {
        cy.viewport(1023, 900);
        cy.tuiVisit(`/breakpoints`, {hideHeader: false, hideNavigation: false});

        makeScreenshot(`03-breakpoints-1023-900-tablet-viewport`);
    });

    it(`device width = 1024px => desktop (@desktop-s-interval)`, () => {
        cy.viewport(1024, 900);
        cy.tuiVisit(`/breakpoints`, {hideHeader: false, hideNavigation: false});

        makeScreenshot(`04-breakpoints-1024-900-desktop-s-viewport`);
    });

    it(`device width = 1279px => desktop (@desktop-s-interval)`, () => {
        cy.viewport(1279, 900);
        cy.tuiVisit(`/breakpoints`, {hideHeader: false, hideNavigation: false});

        makeScreenshot(`05-breakpoints-1279-900-desktop-s-viewport`);
    });

    it(`device width = 1280px => desktop (@desktop-m-min)`, () => {
        cy.viewport(1280, 900);
        cy.tuiVisit(`/breakpoints`, {hideHeader: false, hideNavigation: false});

        makeScreenshot(`06-breakpoints-1280-900-desktop-m-viewport`);
    });

    describe(`Check fonts`, () => {
        const fonts: Array<[string, {width: number; font: string}]> = Object.entries(
            Cypress.env(`fonts`) ?? [],
        );

        for (const [breakpoint, {width, font}] of fonts) {
            it(breakpoint, () => {
                cy.viewport(width, 900).tuiVisit(`/breakpoints`, {
                    waitRenderedFont: new RegExp(font),
                });
            });
        }
    });
});
