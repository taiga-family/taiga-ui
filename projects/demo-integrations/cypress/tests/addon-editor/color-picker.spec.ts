import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe("Editor's color picker", () => {
    beforeEach(() => {
        cy.goToDemoPage('components/color-picker');
        cy.hideHeader();
        cy.hideNavigation();
    });

    it('opened color picker', () => {
        openColorPicker('wrapper');

        cy.get('@wrapper').scrollIntoView().wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
        cy.matchImageSnapshot('1-color-picker-with-hex', {capture: 'viewport'});
    });

    it('opened color picker and change rgb', () => {
        openColorPicker('wrapper');
        changeToHex();

        setInputBox(1, 255);
        setInputBox(2, 255);
        setInputBox(3, 255);

        cy.get('@wrapper').scrollIntoView().wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
        cy.matchImageSnapshot('2-color-picker-with-rgb', {capture: 'viewport'});
    });

    function openColorPicker(alias: string) {
        cy.get('#dropdown').findByAutomationId('tui-doc-example').as(alias);
        cy.get('@wrapper')
            .scrollIntoView()
            .findByAutomationId('color-picker__button')
            .click();
    }

    function changeToHex() {
        cy.get('tui-color-edit')
            .find('tui-select')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .click()
            .get('tui-data-list button:nth-of-type(2)')
            .click();
    }

    function setInputBox(index: 1 | 2 | 3, value: number) {
        cy.get(`tui-color-edit tui-input-count:nth-of-type(${index})`)
            .findByAutomationId('tui-primitive-textfield__native-input')
            .type(value.toString(), {force: true});
    }
});
