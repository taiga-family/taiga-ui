import {WAIT_BEFORE_SCREENSHOT} from '@demo-integrations/support/properties/shared.entities';

export function tuiWaitKitDialog(selector = `tui-dialog`): void {
    cy.get(selector)
        .last()
        .should(`be.visible`)
        .should(`not.have.class`, `ng-animating`)
        .wait(WAIT_BEFORE_SCREENSHOT);
}
