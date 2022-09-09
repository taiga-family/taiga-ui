import {INPUT_PAGE_URL} from '../../../support/shared.entities';

describe(`Input`, () => {
    describe(`macbook-13`, () => {
        beforeEach(() => cy.viewport(`macbook-13`));

        it(`has custom content (text) + cleaner + hint which dont overlapping each others`, () => {
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiHintContent=Some content&tuiTextfieldCustomContent=<b>LongTextContent<b>`,
                {skipExpectUrl: true},
            );

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`01-custom-text-content-cleaner-hint`);
        });

        it(`correctly aligns single custom content (as large icon)`, () => {
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiTextfieldCustomContent=tuiIconCalendarLarge`,
            );

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`02-custom-large-icon-content`);
        });

        it(`custom content (as large icon) + cleaner + hint dont overlapping each others`, () => {
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiTextfieldCleaner=true&tuiTextfieldCustomContent=tuiIconSearchLarge&tuiHintContent=Some%20content`,
            );

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`03-custom-large-icon-content-cleaner-hint`);
        });

        it(`custom content (as normal-size icon) + cleaner + hint dont overlapping each others`, () => {
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiTextfieldCleaner=true&tuiTextfieldCustomContent=tuiIconVisaMono&tuiHintContent=Some%20content`,
            );

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`04-custom-normal-icon-content-cleaner-hint`);
        });

        // TODO: fix after adding native input to example
        it(`input overflow due to placeholder`, () => {
            cy.viewport(400, 812);
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiMode=null&icon=tuiIconSearch&iconAlign=left&pseudoFocused=true`,
            );

            cy.get(`.t-input-wrapper`)
                .find(`input[tuiTextfield]`)
                .focus()
                .should(`have.value`, `111`)
                .focused()
                .clear()
                .blur();

            cy.matchImageSnapshot(`05-placeholder-will-be-hidden-inside`, {
                capture: `viewport`,
            });
        });
    });

    it(`character descenders overflow the line`, () => {
        const characters = `big, placeholder, qwerty, jackson, yellow and more`;

        cy.viewport(450, 300).tuiVisit(
            `components/input/API?tuiMode=null&pseudoFocused=true&attr.placeholder=${characters}`,
        );

        cy.get(`#demoContent`)
            .find(`.t-input-wrapper`)
            .tuiScrollIntoView()
            .find(`input[tuiTextfield]`)
            .as(`input`);

        cy.get(`@input`)
            .focus()
            .should(`have.value`, `111`)
            .focused()
            .clear()
            .blur()
            .matchImageSnapshot(`06-character-descenders`);

        cy.get(`@input`)
            .type(
                `It has been the industry's standard dummy text ever since the 1500s{enter}`,
            )
            .blur()
            .matchImageSnapshot(`07-very-long-text-without-text-ellipsis`);
    });
});
