describe(`Button`, () => {
    it(`tuiMode=OnDark + appearance=icon + hovered state`, () => {
        cy.tuiVisit(
            `/components/button/API?tuiMode=onDark&appearance=icon&icon=tuiIconEyeClosed`,
        );

        cy.get(`#demo-content`)
            .should(`be.visible`)
            .find(`[tuiButton]`)
            .trigger(`mouseenter`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(
                `01-[tuiMode=onDark]-[appearance=icon]-[data-state=hovered]`,
            );
    });
});
