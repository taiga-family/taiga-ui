import {WAIT_BEFORE_SCREENSHOT} from '../tests/addon-editor/utils';

export function tuiWaitKitDialog(selector = `tui-dialog`): void {
    cy.get(selector)
        .last()
        .should(`be.visible`)
        .should(`not.have.class`, `ng-animating`)
        .wait(WAIT_BEFORE_SCREENSHOT);
}
