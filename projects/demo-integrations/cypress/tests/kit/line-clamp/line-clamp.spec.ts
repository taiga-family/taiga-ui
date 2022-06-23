describe('LineClamp', () => {
    describe('basic text', () => {
        const basicText = 'Lorem ipsum Gaudeamus igiturCarpe diem Veni, vidi, vici';

        it('linesLimit=1', () => {
            cy.tuiVisit(
                encodeURI(`/components/line-clamp/API?content=${basicText}&linesLimit=1`),
            );

            cy.get('#demoContent')
                .should('be.visible')
                .matchImageSnapshot('01-[linesLimit=1]-basicText');
        });

        it('linesLimit=2', () => {
            cy.tuiVisit(
                encodeURI(`/components/line-clamp/API?content=${basicText}&linesLimit=2`),
            );

            cy.get('#demoContent')
                .should('be.visible')
                .matchImageSnapshot('02-[linesLimit=2]-basicText');
        });
    });

    describe('Very long word', () => {
        it('`linesLimit=1` + only long word', () => {
            cy.visit(
                '/components/line-clamp/API?content=Incomprehensibilities&linesLimit=1',
            );

            cy.get('#demoContent')
                .should('be.visible')
                .matchImageSnapshot('03-[linesLimit=1]-longWord');
        });

        it('`linesLimit=2` + text with long word on the 2nd line', () => {
            const textWithLongWord =
                'The near incomprehensibility of the instructions made assembling the desk a nightmare.';

            cy.tuiVisit(
                encodeURI(
                    `/components/line-clamp/API?content=${textWithLongWord}&linesLimit=2`,
                ),
            );

            cy.get('#demoContent')
                .should('be.visible')
                .matchImageSnapshot('04-[linesLimit=2]-longWord');
        });
    });
});
