const getNotLoadedRequests = (alias: string): Cypress.Chainable =>
    cy
        .get<Array<{state: string}>>(`${alias}.all`, {log: false})
        .then(requests => requests.filter(req => req.state !== `Complete`));

export const waitAllRequests = (alias: string): void => {
    getNotLoadedRequests(alias)
        .then(requests =>
            requests.length ? cy.wait(alias, {log: false}) : cy.tuiWaitBeforeAction(),
        )
        .then(() => getNotLoadedRequests(alias))
        .then(requests =>
            requests.length
                ? waitAllRequests(alias)
                : cy
                      .tuiWaitBeforeAction()
                      .then(() => getNotLoadedRequests(alias))
                      .then(async request =>
                          request.length ? waitAllRequests(alias) : Promise.resolve(),
                      ),
        );
};
