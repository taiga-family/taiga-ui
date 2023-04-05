describe(`InputNumber`, () => {
    describe(`API`, () => {
        it(`Infinite precision`, () => {
            cy.tuiVisit(`components/input-number/API?tuiMode=null&precision=Infinity`);

            cy.get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .focus()
                .type(`1,2345`);

            cy.get(`#demo-content`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`00-input-number-decimals`);
        });

        it(`prefix + value + postfix`, () => {
            cy.tuiVisit(`components/input-number/API?tuiMode=null&prefix=$&postfix=GBP`);

            cy.get(`#demo-content`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`01-input-number-prefix-value-postfix`);

            cy.get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .focus()
                .type(`{selectall}{backspace}`);

            cy.get(`#demo-content`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`02-input-number-prefix-postfix`);
        });

        for (const align of [`left`, `right`]) {
            it(`align=${align}`, () => {
                const readableFormatText = `Very long text`;

                cy.tuiVisit(
                    `/components/input-number/API?tuiMode=null&style.text-align=${align}&prefix=${readableFormatText}&postfix=${readableFormatText}`,
                );

                cy.get(`#demo-content`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`03-input-number-align-${align}`);
            });
        }

        describe(`overflow`, () => {
            for (const sandboxWidth of [`75`, `140`, `158`]) {
                it(`sandboxWidth=${sandboxWidth}`, () => {
                    cy.tuiVisit(
                        `components/input-number/API?tuiTextfieldPostfix=$&tuiTextfieldPrefix=VeryLongText&sandboxWidth=${sandboxWidth}`,
                    );

                    cy.get(`#demo-content`).matchImageSnapshot(
                        `input-number-sandboxWidth-${sandboxWidth}`,
                    );
                });
            }
        });
    });

    describe(`Examples`, () => {
        it(`cursor position`, () => {
            cy.tuiVisit(`components/input-number`);

            cy.get(`tui-doc-example[id=currency] .t-demo`)
                .tuiScrollIntoView()
                .as(`currency`);

            cy.get(`@currency`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`03-input-number-currency`);

            for (const [index, currency] of [`dollar`, `eur`, `pounds`].entries()) {
                cy.get(`@currency`)
                    .findByAutomationId(`tui-primitive-textfield__native-input`)
                    .eq(index)
                    .focus()
                    .type(`{selectall}{backspace}`)
                    .focused();

                cy.get(`@currency`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`0${4 + index}-currency-${currency}`);
            }
        });
    });
});
