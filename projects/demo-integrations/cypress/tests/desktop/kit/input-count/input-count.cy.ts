import {WAIT_BEFORE_SCREENSHOT} from '../../../../support/properties/shared.entities';

describe(`InputCount`, () => {
    it(`API`, () => {
        cy.tuiVisit(`components/input-count/API`);

        cy.get(`#demoContent`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`01-input-count`);

        cy.get(`#demoContent`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .focus()
            .type(`{selectall}{backspace}`)
            .type(`1234`)
            .blur();

        cy.get(`#demoContent`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`02-input-count`);

        cy.get(`#demoContent`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .focus()
            .type(`{selectall}{backspace}`)
            .blur();

        cy.get(`#demoContent`)
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot(`03-input-count`);
    });
});
