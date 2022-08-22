import {INPUT_PAGE_URL} from '../../../support/shared.entities';

describe(`Input`, () => {
    describe(`macbook-13`, () => {
        beforeEach(() => cy.viewport(`macbook-13`));

        it(`has custom content (text) + cleaner + hint which dont overlapping each others`, () => {
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiHintContent=Some%20content&tuiTextfieldCleaner=true&tuiTextfieldCustomContent=%3Cspan%3ELongTextContent%3Cspan%3E`,
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

        it(`input overflow due to placeholder`, () => {
            cy.viewport(400, 812);
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiMode=null&icon=tuiIconSearch&iconAlign=left&tuiTextfieldExampleText=Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit,%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore&pseudoFocused=true`,
            );

            cy.get(`.t-input-wrapper`)
                .find(`input`)
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
            `components/input/API?tuiMode=null&tuiTextfieldExampleText=${characters}`,
        );

        cy.get(`#demoContent`)
            .find(`.t-input-wrapper`)
            .tuiScrollIntoView()
            .find(`input`)
            .as(`input`);

        cy.get(`@input`)
            .focus()
            .should(`have.value`, `111`)
            .focused()
            .clear()
            .matchImageSnapshot(`06-character-descenders`);

        cy.get(`@input`)
            .type(
                `It has been the industry's standard dummy text ever since the 1500s{enter}`,
            )
            .matchImageSnapshot(`07-very-long-text-without-text-ellipsis`);
    });
});
