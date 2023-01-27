describe(`tuiMarkerIcon`, () => {
    it(`link`, () => {
        cy.tuiVisit(`components/marker-icon#modes`);

        cy.get(`tui-doc-example[heading="modes"]`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .should(`be.visible`)
            .as(`content`);

        cy.get(`@content`).find(`a[tuiMarkerIcon]`).as(`markerIcon`);

        cy.get(`@content`).matchImageSnapshot(`tui-all-icons`);

        cy.get(`body`)
            .invoke(`attr`, `data-tui-theme`)
            .then(theme => {
                if (theme === `taiga`) {
                    /**
                     * @description:
                     * https://github.com/dmtrKovalenko/cypress-real-events#1-why-cyrealhover-hovering-state-does-not-show-in-the-visual-regression-services
                     * Unfortunately, neither visual regression services like Happo and Percy nor plain cy.screenshot
                     * do not allow to test the hovering state. The hovering state is very different from any kind of js
                     * and css so it is not possible to capture it using dom snapshotting
                     * (like visual regression services do) and the screenshotting as well because
                     * cypress core itself is preventing hovering state in the screenshots.
                     */
                    cy.get(`@markerIcon`)
                        .should(`have.css`, `background-color`, `rgb(235, 239, 255)`)
                        .realHover()
                        .should(`have.css`, `background-color`, `rgb(223, 227, 243)`);
                }
            });
    });
});
