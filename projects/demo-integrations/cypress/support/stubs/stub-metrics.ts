export const stubMetrics = (): void => {
    cy.intercept({hostname: `mc.yandex.ru`}, {});
};
