import {INPUT_PAGE_URL} from '@demo-integrations/support/shared.entities';

describe(`Input`, () => {
    describe(`macbook-13`, () => {
        beforeEach(() => cy.viewport(`macbook-13`));

        it(`has custom content (text) + cleaner + hint which dont overlapping each others`, () => {
            cy.tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiMode=null&tuiTextfieldCustomContent=<span>LongTextContent<%2Fspan>&tuiHintContent=Some%20content`,
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

        it(`input overflow due to placeholder`, () => {
            cy.viewport(400, 812).tuiVisit(
                `${INPUT_PAGE_URL}/API?tuiMode=null&icon=tuiIconSearch&iconAlign=left&pseudoFocused=true&placeholder=Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit,%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore`,
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
            `${INPUT_PAGE_URL}/API?tuiMode=null&pseudoFocused=true&placeholder=${characters}`,
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

    it(`can be horizontally scrolled`, () => {
        cy.viewport(450, 300).tuiVisit(`${INPUT_PAGE_URL}/API`);

        cy.get(`#demoContent`).should(`be.visible`).as(`wrapper`);
        cy.get(`@wrapper`).find(`tui-input input[tuiTextfield]`).as(`input`);

        cy.get(`@input`)
            .should(`not.have.css`, `text-overflow`, `ellipsis`)
            .focus()
            .clear()
            .type(
                `You should not set 'text-overflow: ellipsis' for input because it can be horizontally scrolled`,
            )
            .blur();

        cy.get(`@input`).scrollTo(`center`, {ensureScrollable: false});
        cy.get(`@wrapper`).matchImageSnapshot(`08-horizontally-scrolled`);
    });

    it(`external mask works`, () => {
        cy.tuiVisit(`${INPUT_PAGE_URL}`);

        cy.get(`tui-doc-example[id=mask]`).tuiScrollIntoView().as(`wrapper`);
        cy.get(`@example`).find(`tui-input input[tuiTextfield]`).as(`input`);
        cy.get(`@input`).first().focus().type(`111111111111`).blur();
        cy.get(`@wrapper`).matchImageSnapshot(`09-mask`);
    });
});
