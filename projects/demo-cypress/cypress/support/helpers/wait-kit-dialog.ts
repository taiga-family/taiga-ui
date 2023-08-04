export function tuiWaitKitDialog(selector = `tui-dialog`): void {
    cy.get(selector)
        .last()
        .should(`be.visible`)
        .should(`not.have.class`, `ng-animating`)
        .tuiWaitBeforeScreenshot();
}
