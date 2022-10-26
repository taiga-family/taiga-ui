import {tuiMakeInputSuit} from './inputs-suits.helper';

describe(`input-range`, () => {
    for (const {component, size} of tuiMakeInputSuit(
        `input-range`,
        [`left`],
        [{prefix: ``, postfix: ``}],
    )) {
        it(`${component}_${size}`, () => {
            cy.viewport(800, 500);

            cy.tuiVisit(
                `components/${component}/API?tuiMode=null&tuiTextfieldSize=${size}&leftValueContent=TOP&rightValueContent=SECRET`,
            );

            cy.get(`#demoContent`).tuiScrollIntoView().as(`wrapper`);
            cy.get(`#demoContent`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .as(`input`);

            cy.get(`@input`).eq(0).focus();
            cy.get(`@wrapper`).matchImageSnapshot(`${component}_${size}_left`);

            cy.get(`@input`).eq(1).focus();
            cy.get(`@wrapper`).matchImageSnapshot(`${component}_${size}_right`);
        });
    }
});
