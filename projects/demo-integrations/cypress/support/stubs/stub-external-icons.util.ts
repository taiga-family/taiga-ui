// not taiga ui icons
export const EXTERNAL_ICONS = [
    `web-api.svg`,
    `marsibarsi.*1x1small.jpg`,
    `.*ng-polymorpheus.*logo.svg`,
    `bf2e94ae58ee713717faf397958a8e3d.jpg`, // filename - MD5 hash value of file content (waterplea avatar)
];

export const stubExternalIcons = (icons: string[] = EXTERNAL_ICONS): void => {
    icons.forEach(iconName => {
        cy.intercept(
            {
                method: `GET`,
                url: new RegExp(`.*${iconName}`),
            },
            {fixture: `stubs/web-api.svg`},
        );
    });
};
