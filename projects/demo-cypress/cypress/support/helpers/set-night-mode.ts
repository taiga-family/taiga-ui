export function tuiSetNightMode({enable}: {enable: boolean}): void {
    cy.window().then((win: Window) =>
        win.localStorage.setItem(`tuiNight`, enable.toString()),
    );
}
