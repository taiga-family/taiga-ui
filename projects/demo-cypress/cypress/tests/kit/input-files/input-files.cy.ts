describe('InputFiles', () => {
    describe('supports dynamic change of i18n for errors', () => {
        it('Wrong file type', () => {
            cy.viewport(800, 500);
            cy.tuiVisit('/components/input-files/API?accept=application/pdf', {
                skipExpectUrl: true,
                hideNavigation: false,
                hideLanguageSwitcher: false,
            });

            cy.get('[tuiInputFiles]').selectFile('cypress/fixtures/stubs/web-api.svg');

            cy.get('#demo-content tui-file')
                .should('contain.text', 'Wrong file type')
                .matchImageSnapshot('01-01-input-files-[english]-wrong-file-type');
        });

        it('File is larger than', () => {
            cy.viewport(850, 500);
            cy.tuiVisit('/components/input-files/API?accept=image/*&maxFileSize=2000', {
                skipExpectUrl: true,
                hideNavigation: false,
                hideLanguageSwitcher: false,
            });

            cy.get('[tuiInputFiles]').selectFile('cypress/fixtures/stubs/web-api.svg');

            cy.get('#demo-content tui-file')
                .contains(/File is larger than 2 Ki?B/)
                .matchImageSnapshot('02-01-input-files-[english]-file-too-large');
        });

        it('Link text is too long', () => {
            cy.viewport(550, 500);
            cy.tuiVisit(
                '/components/input-files/API?tuiMode=null&link=Select%20a%20file%20with%20a%20too%20long%20name.%20Long%20filename.%20Very%20long%20filename',
                {
                    skipExpectUrl: true,
                    hideNavigation: false,
                    hideLanguageSwitcher: false,
                },
            );

            cy.get('[tuiInputFiles]').matchImageSnapshot(
                '03-01-input-files-link-text-too-long',
            );
        });
    });
});
