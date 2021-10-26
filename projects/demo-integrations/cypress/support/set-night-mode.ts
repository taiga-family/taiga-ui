export function setNightMode({enable}: {enable: boolean}): void {
    cy.window().then((win: Window) => {
        win.localStorage.setItem('night', enable.toString());
    });
}
