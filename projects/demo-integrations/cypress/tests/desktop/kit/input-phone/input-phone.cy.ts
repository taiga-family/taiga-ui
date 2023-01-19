describe(`InputPhone`, () => {
    it(`filler`, () => {
        cy.tuiVisit(
            `components/input-phone/API?tuiTextfieldCustomContent=tuiIconMastercardMono&phoneMaskAfterCountryCode=(%23%23%23)%20%23%23%23-%23%23-%23%23&tuiTextfieldCleaner=true&focusable=true&tuiTextfieldPrefix=&tuiTextfieldPostfix=&tuiTextfieldFiller=57567567&tuiTextfieldSize=l&search=q3e`,
            {skipExpectUrl: true, skipDecodingUrl: true},
        );

        cy.get(`#demo-content`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .focus()
            .matchImageSnapshot(`input-phone-filler`);
    });
});
