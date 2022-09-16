describe(`InputFiles`, () => {
    describe(`supports dynamic change of i18n for errors`, () => {
        it(`Wrong file type`, () => {
            cy.viewport(800, 500);
            cy.tuiVisit(`/components/input-files/API?accept=application/pdf`, {
                skipExpectUrl: true,
                hideNavigation: false,
                hideLanguageSwitcher: false,
            });

            cy.get(`#demoContent input[type="file"]`).selectFile(
                `cypress/fixtures/stubs/web-api.svg`,
            );

            cy.get(`#demoContent tui-file`)
                .should(`contain.text`, `Wrong file type`)
                .matchImageSnapshot(`01-01-input-files-[english]-wrong-file-type`);

            cy.tuiSetLanguage(`dutch`);

            cy.get(`#demoContent tui-file`)
                .should(`contain.text`, `Verkeerd bestandsformaat`)
                .matchImageSnapshot(`01-02-input-files-[dutch]-wrong-file-type`);
        });

        it(`File is too large`, () => {
            cy.viewport(850, 500);
            cy.tuiVisit(`/components/input-files/API?accept=image/*&maxFileSize=2000`, {
                skipExpectUrl: true,
                hideNavigation: false,
                hideLanguageSwitcher: false,
            });

            cy.get(`#demoContent input[type="file"]`).selectFile(
                `cypress/fixtures/stubs/web-api.svg`,
            );

            cy.get(`#demoContent tui-file`)
                .should(`contain.text`, `File is too large 2 KB`)
                .matchImageSnapshot(`02-01-input-files-[english]-file-too-large`);

            cy.tuiSetLanguage(`dutch`);

            cy.get(`#demoContent tui-file`)
                .should(`contain.text`, `Bestandsgrootte overschreden 2 KB`)
                .matchImageSnapshot(`02-02-input-files-[dutch]-file-too-large`);
        });
    });
});
