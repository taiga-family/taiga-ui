# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.4.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.3.0...v2.4.0) (2021-02-02)

### Features

-   **core:** add scss mixin support ([#165](https://github.com/TinkoffCreditSystems/taiga-ui/issues/165)) ([865bbaa](https://github.com/TinkoffCreditSystems/taiga-ui/commit/865bbaafb5cac5587dd3ffc20eacfa2283329b10))
-   **i18n:** Add German with 100% support ([#198](https://github.com/TinkoffCreditSystems/taiga-ui/issues/198)) ([54f1284](https://github.com/TinkoffCreditSystems/taiga-ui/commit/54f12843e3521543cb39effea64c66e9440de1c9))
-   **i18n:** add Spanish with 100% support ([#191](https://github.com/TinkoffCreditSystems/taiga-ui/issues/191)) ([6f9a19e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6f9a19e7cdee34445cdfe26584a91bd7bcd64291))
-   **kit:** use lazy loading strategy in avatar component ([#185](https://github.com/TinkoffCreditSystems/taiga-ui/issues/185)) ([d6ea803](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d6ea8032a11a546e7c65474d9991da46030e7e08))

### Bug Fixes

-   **button:** fix button loader size for XL ([#174](https://github.com/TinkoffCreditSystems/taiga-ui/issues/174)) ([f9929fe](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f9929fef2d73cbf829f8d9f53150316d04c739ca))
-   **cdk:** fix isFirefox check ([#158](https://github.com/TinkoffCreditSystems/taiga-ui/issues/158)) ([8e9c7a4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))
-   **core:** `Button` fix margin for right aligned icons ([#173](https://github.com/TinkoffCreditSystems/taiga-ui/issues/173)) ([a3f9ed5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a3f9ed5a4ab6b650130c16616bb8f20e78d8d718))

## [2.3.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.2.1...v2.3.0) (2021-01-29)

### Features

-   **core:** add `ThemeNight` component ([#167](https://github.com/TinkoffCreditSystems/taiga-ui/issues/167)) ([a953be7](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a953be715ac1c624bf4b2b1d12631715fd376234))
-   **demo:** add `Wrapper` customization page ([#153](https://github.com/TinkoffCreditSystems/taiga-ui/issues/153)) ([eef8382](https://github.com/TinkoffCreditSystems/taiga-ui/commit/eef83822593c20f8de8c398ed1e4e705578d11bf))
-   **demo:** add guide on using different icon set ([#157](https://github.com/TinkoffCreditSystems/taiga-ui/issues/157)) ([b35a891](https://github.com/TinkoffCreditSystems/taiga-ui/commit/b35a89181cb59e6ae5f80a54d52ea266490152c1))
-   **demo:** add page on custom dialogs ([#159](https://github.com/TinkoffCreditSystems/taiga-ui/issues/159)) ([13e17a1](https://github.com/TinkoffCreditSystems/taiga-ui/commit/13e17a13c0e2a805984425f19ad04b6979abdfb0))
-   **format:** number formatting supports custom thousands separator ([#145](https://github.com/TinkoffCreditSystems/taiga-ui/issues/145)) ([a8c0743](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a8c0743dae7ad432576d1e6f567943a28e7c8a37))

### Bug Fixes

-   **cdk:** fix isFirefox check ([#158](https://github.com/TinkoffCreditSystems/taiga-ui/issues/158)) ([8e9c7a4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))
-   **core:** `Svg` properly use Angular `Sanitizer` ([#170](https://github.com/TinkoffCreditSystems/taiga-ui/issues/170)) ([249392d](https://github.com/TinkoffCreditSystems/taiga-ui/commit/249392d2727c7af1d0da404ae0f2619a08847857))
-   **core:** fix new CSS vars for height name mismatch ([#149](https://github.com/TinkoffCreditSystems/taiga-ui/issues/149)) ([aa7c961](https://github.com/TinkoffCreditSystems/taiga-ui/commit/aa7c9617ed42b767a118e2c145e2ba6bc4cb54d8))

### [2.2.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.2.0...v2.2.1) (2021-01-22)

### Bug Fixes

-   **highlight:** change background color to selection ([#137](https://github.com/TinkoffCreditSystems/taiga-ui/issues/137)) ([7f60e25](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7f60e25b2f4b0ef4bf00eaac99892067801316cc))

## [2.2.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.3...v2.2.0) (2021-01-22)

### ⚠ BREAKING CHANGES

-   **kit:** `UnfinishedValidator` now has no default message
-   **cdk, core:** `MonthPipe` import it from @taiga-ui/core library and use with async pipe

### Features

-   **cdk, core:** `TuiMonthPipe` move from cdk to core, add i18n ([59474d2](https://github.com/TinkoffCreditSystems/taiga-ui/commit/59474d2d4eceea34a744a9c2034a0081bff260fb))
-   **demo:** add page for `Sidebar` directive ([#125](https://github.com/TinkoffCreditSystems/taiga-ui/issues/125)) ([bea427e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bea427e1d88e6275ee87bf40d53a03a562b3952b))
-   **i18n:** add i18n package ([523d5de](https://github.com/TinkoffCreditSystems/taiga-ui/commit/523d5dec3f76a23bda81cb873bd9c5201ce665d5))
-   **i18n:** add russian language ([71dab5c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/71dab5c8ed6d18e6cddee52121e2354db8c56fee))
-   **kit:** add tokens to customize `Checkbox`, `Radio` and `InputTag` ([#124](https://github.com/TinkoffCreditSystems/taiga-ui/issues/124)) ([94e8b00](https://github.com/TinkoffCreditSystems/taiga-ui/commit/94e8b00a32b01e81108e8c74c7a9601d6179abf7))
-   **kit:** allow setting mask directly on `Input`, `InputInline` and `InputCopy` ([#122](https://github.com/TinkoffCreditSystems/taiga-ui/issues/122)) ([173cd8f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/173cd8ffc1f0d123915eb916f93b46cb04c08e68))

### Bug Fixes

-   **cdk:** `Media` fix stuttering in Safari ([#129](https://github.com/TinkoffCreditSystems/taiga-ui/issues/129)) ([43afe21](https://github.com/TinkoffCreditSystems/taiga-ui/commit/43afe21e912f65e50da211de5e47354cac026ec2))
-   **kit:** `TabsWithMore` fix freezing on resize loop ([#121](https://github.com/TinkoffCreditSystems/taiga-ui/issues/121)) ([b87737a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/b87737ae2d98a266fa37e367caac003ab45e9a76))

### [2.1.3](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.2...v2.1.3) (2021-01-19)

### Features

-   **cdk:** add `uniqBy` utility method ([#108](https://github.com/TinkoffCreditSystems/taiga-ui/issues/108)) ([2fe83be](https://github.com/TinkoffCreditSystems/taiga-ui/commit/2fe83be88c5db38eccf25d8d1a28f94b4cd3714a))
-   **let:** improve type checking for tuiLet ([#98](https://github.com/TinkoffCreditSystems/taiga-ui/issues/98)) ([5cff8ae](https://github.com/TinkoffCreditSystems/taiga-ui/commit/5cff8ae205b6d4711bf44e0576603edf9ab88730))

### Bug Fixes

-   **core:** add lost body-l-2 global text class ([#106](https://github.com/TinkoffCreditSystems/taiga-ui/issues/106)) ([d296243](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d296243350269a4984bf1cd81275c71b064ffc3e))
-   **core:** add will-change for smooth transition ([#99](https://github.com/TinkoffCreditSystems/taiga-ui/issues/99)) ([35e2bf4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/35e2bf48253487218c71aa0eb258ec28bf20b583)), closes [#90](https://github.com/TinkoffCreditSystems/taiga-ui/issues/90)
-   **icons:** fix broken flags ([#96](https://github.com/TinkoffCreditSystems/taiga-ui/issues/96)) ([37d2e61](https://github.com/TinkoffCreditSystems/taiga-ui/commit/37d2e6101546e493cd6eec2ea47de8e2adac20d9))
-   **kit:** `DataListWrapper` fix `emptyContent` not working ([#89](https://github.com/TinkoffCreditSystems/taiga-ui/issues/89)) ([f90d96f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f90d96fe5ef96fef6498c8bdb662b1cbcbb84176))
-   **kit:** `InputDate` fix mobile calendar ([#104](https://github.com/TinkoffCreditSystems/taiga-ui/issues/104)) ([0fd20e5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0fd20e58a3c22763b94881541a8e21b9bb2b39e0)), closes [#100](https://github.com/TinkoffCreditSystems/taiga-ui/issues/100)
-   **kit:** `Select` fix template for falsy values ([#118](https://github.com/TinkoffCreditSystems/taiga-ui/issues/118)) ([c718e1f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c718e1fe6a2462f9dd9ae7a4c88d444796f589b7))

### [2.1.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.1...v2.1.2) (2021-01-12)

### Bug Fixes

-   **core:** textfield style fix wrapper .transition mixin ([12206ea](https://github.com/TinkoffCreditSystems/taiga-ui/commit/12206ead01d35f88928aa574a32a4f27965116b2))

### [2.1.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.1.0...v2.1.1) (2021-01-12)

### Bug Fixes

-   **core:** fix theme less import syntax for StackBlitz ([#86](https://github.com/TinkoffCreditSystems/taiga-ui/issues/86)) ([3b6d874](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3b6d87447bf99e67b38cb6962a88a7b752475ee8))

## [2.1.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.0.1...v2.1.0) (2021-01-11)

### Features

-   **cdk:** `Media` add `playbackRate` input ([#83](https://github.com/TinkoffCreditSystems/taiga-ui/issues/83)) ([5351762](https://github.com/TinkoffCreditSystems/taiga-ui/commit/5351762299835c2e99777bb62a37e2a1cc217913))

### [2.0.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v2.0.0...v2.0.1) (2021-01-11)

### Features

-   **core:** enable `window` scrolling instead of `tui-root` ([#80](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0190a8fb1aeb26870402f288f8ee933e36228e25))
-   **demo:** fix play/pause icons, add eur and gbp currency ([#77](https://github.com/TinkoffCreditSystems/taiga-ui/issues/77)) ([360a3b1](https://github.com/TinkoffCreditSystems/taiga-ui/commit/360a3b1b2ab9ae4743bbcd693ac7df01fd7e3726))

### Bug Fixes

-   **addon-doc:** fix demo component on mobile ([#79](https://github.com/TinkoffCreditSystems/taiga-ui/issues/79)) ([7676d84](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7676d84513525f464303ec45e9ed07ddde55183a))
-   **all:** fix .less relative paths for better IDE and StackBlitz support ([#81](https://github.com/TinkoffCreditSystems/taiga-ui/issues/81)) ([f061dcd](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f061dcd8dbff4ef0fe902260981be8bdf3ee8714))
-   **doc:** prevent tabs underline above sidebar in Safari ([4ed25de](https://github.com/TinkoffCreditSystems/taiga-ui/commit/4ed25de66a78f8280c3865be9d588d0d813ddffa))

## [2.0.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.5...v2.0.0) (2020-12-29)

### Features

-   **addon-doc:** add header ([#58](https://github.com/TinkoffCreditSystems/taiga-ui/issues/58)) ([1f2abd4](https://github.com/TinkoffCreditSystems/taiga-ui/commit/1f2abd4358a442c9e4dbd1e5106d3081119f2c33))
-   **demo:** add SSR support ([#64](https://github.com/TinkoffCreditSystems/taiga-ui/issues/64)) ([aaf0786](https://github.com/TinkoffCreditSystems/taiga-ui/commit/aaf07864b63697c7205cdaeab656a19195d394f4))
-   **demo:** translate into eng ([#51](https://github.com/TinkoffCreditSystems/taiga-ui/issues/51)) ([04f9994](https://github.com/TinkoffCreditSystems/taiga-ui/commit/04f9994ae759fe3ca854cbf96e44cb0ebf8a30a8)), closes [#69](https://github.com/TinkoffCreditSystems/taiga-ui/issues/69) [#68](https://github.com/TinkoffCreditSystems/taiga-ui/issues/68)
-   **icons:** add editor and color picker icons ([170f9a0](https://github.com/TinkoffCreditSystems/taiga-ui/commit/170f9a00fcd26abd8ef96b4dfcfc4dd4507707b0))

### Bug Fixes

-   **cdk:** `DialogHost` fix overlay above dialog issue ([3e16ec8](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3e16ec838457198753b8ee6830893ada50236b30))
-   **cdk:** `tuiZoneOptimized` fix re-entering the zone ([#66](https://github.com/TinkoffCreditSystems/taiga-ui/issues/66)) ([6c5667c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6c5667cd75aa15530b5aed35fc0281df58966941))
-   **core:** `PrimitiveTextfield` fix value content selecting ([6c85668](https://github.com/TinkoffCreditSystems/taiga-ui/commit/6c85668903e796ce4d0af22d9396ac96864798d5))
-   **core:** fix less style strings in font weight ([404b01f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/404b01f00a72383888afa456665a0c7295201abb))
-   **doc:** `Page` fix package input name ([bdc32a7](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bdc32a72457663e59f0c10b06011c949d4791ea6))

### [1.6.5](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.4...v1.6.5) (2020-12-11)

### [1.6.4](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.3...v1.6.4) (2020-12-09)

### [1.6.3](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.2...v1.6.3) (2020-12-08)

### Bug Fixes

-   **addon-commerce:** `InputCVC` fix font issue ([#54](https://github.com/TinkoffCreditSystems/taiga-ui/issues/54)) ([bf3a4bd](https://github.com/TinkoffCreditSystems/taiga-ui/commit/bf3a4bd64b05c9796b7ded57566215c374283b74))

### [1.6.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.1...v1.6.2) (2020-12-08)

### Features

-   **cdk:** `mustBePresent` add new operator ([#53](https://github.com/TinkoffCreditSystems/taiga-ui/issues/53)) ([0f12ac5](https://github.com/TinkoffCreditSystems/taiga-ui/commit/0f12ac5b972529c4cbef8f0ff53ce7f75c59f3d2))
-   **core:** move theme related styles into separate export ([#50](https://github.com/TinkoffCreditSystems/taiga-ui/issues/50)) ([c240274](https://github.com/TinkoffCreditSystems/taiga-ui/commit/c240274104a7460c416e818876913920b5ddd53f))
-   **kit:** `InputFile` add mode support ([#52](https://github.com/TinkoffCreditSystems/taiga-ui/issues/52)) ([dacf719](https://github.com/TinkoffCreditSystems/taiga-ui/commit/dacf719721a3097325542903d55a266fc57166a2))

### [1.6.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.6.0...v1.6.1) (2020-12-04)

### Features

-   **all:** i18n for packages ([#49](https://github.com/TinkoffCreditSystems/taiga-ui/issues/49)) ([020fb59](https://github.com/TinkoffCreditSystems/taiga-ui/commit/020fb59b12959c0dfbda19db167bf9cc7f621f90))
-   **core:** `TableMode` add new directive, remove `tuiTable` from `Mode` ([#48](https://github.com/TinkoffCreditSystems/taiga-ui/issues/48)) ([60da86f](https://github.com/TinkoffCreditSystems/taiga-ui/commit/60da86f6f6e344dc802180c91132c41821b475b3))
-   **kit:** refactor `Badge` and `BadgedContent` to use colors directly ([#46](https://github.com/TinkoffCreditSystems/taiga-ui/issues/46)) ([1961b9a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/1961b9a05ca6454d75c692fb1684dd85bb56de86))

### Bug Fixes

-   **core, addon-mobile:** include styles as library asset ([#47](https://github.com/TinkoffCreditSystems/taiga-ui/issues/47)) ([f4797ec](https://github.com/TinkoffCreditSystems/taiga-ui/commit/f4797ec9ac09e9c442aece8258bd8b54272c9cbf))

## [1.6.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.5.2...v1.6.0) (2020-12-02)

### Features

-   **core, kit, addons, demo, tools:** add packages ([854b544](https://github.com/TinkoffCreditSystems/taiga-ui/commit/854b544e87a8916703ecdb8624757b602b3e9a40))

### [1.5.2](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.5.1...v1.5.2) (2020-11-25)

### [1.5.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.5.0...v1.5.1) (2020-11-25)

## [1.5.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.4.0...v1.5.0) (2020-11-24)

### Features

-   **cdk:** i18n for date fillers ([#43](https://github.com/TinkoffCreditSystems/taiga-ui/issues/43)) ([a5011ba](https://github.com/TinkoffCreditSystems/taiga-ui/commit/a5011bad8ec585d517b384785e434c85c20385d9))

## [1.4.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.3.0...v1.4.0) (2020-11-23)

### Bug Fixes

-   **cdk:** `FocusTrap` blur manually to prevent ExpressionChanged error ([#40](https://github.com/TinkoffCreditSystems/taiga-ui/issues/40)) ([339df70](https://github.com/TinkoffCreditSystems/taiga-ui/commit/339df706b34a2ab38614b55d13bdfc62bfb7482c))
-   **cdk:** fix types in dist and remove metadata emit ([d92c0fa](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d92c0fa1310fdcce63214fd59fe63be5cc47d90d))
-   **cdk:** rename `TUI_IDENTITY_MATCHER` to `TUI_DEFAULT_IDENTITY_MATCHER` to align to other constants ([#38](https://github.com/TinkoffCreditSystems/taiga-ui/issues/38)) ([3a9f2db](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3a9f2dbac044619c229de6f2c4e9ecdd678988ee))

## [1.3.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.2.1...v1.3.0) (2020-11-18)

### Features

-   **cdk:** remove TuiValidation; AbstractControl works with pseudoInvalid boolean([#37](https://github.com/TinkoffCreditSystems/taiga-ui/issues/37)) ([ff8c921](https://github.com/TinkoffCreditSystems/taiga-ui/commit/ff8c92164939f180aa4b47afadef1a808e14569f))

### [1.2.1](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.2.0...v1.2.1) (2020-11-16)

## [1.2.0](https://github.com/TinkoffCreditSystems/taiga-ui/compare/v1.1.0...v1.2.0) (2020-11-13)

### Features

-   **cdk:** `TUI_IDENTITY_MATCHER` consider two empty arrays equal ([#34](https://github.com/TinkoffCreditSystems/taiga-ui/issues/34)) ([e17c08d](https://github.com/TinkoffCreditSystems/taiga-ui/commit/e17c08d7eb209c6b389b4dc07a32ff9e792d70af))
-   **cdk:** add @ng-web-apis/mutation-observer ([#32](https://github.com/TinkoffCreditSystems/taiga-ui/issues/32)) ([7459c70](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7459c70f272b464cd95959a7f66f039194d874ce))
-   **cdk:** remove preventScroll polyfill ([#21](https://github.com/TinkoffCreditSystems/taiga-ui/issues/21)) ([68db75a](https://github.com/TinkoffCreditSystems/taiga-ui/commit/68db75adc7bb3d7eea37709963e89a3ab2152f1e))
-   **observables:** `stopPropagation` add operator ([d930e9d](https://github.com/TinkoffCreditSystems/taiga-ui/commit/d930e9dcc0255c154089d1baceb4fe0a28e74604))

### Bug Fixes

-   **cdk:** `Control` fix typing ([#36](https://github.com/TinkoffCreditSystems/taiga-ui/issues/36)) ([7e1c91e](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7e1c91e539ec81426eb4519080679016757c3a50))
-   **cdk:** `TuiTime` fix currentLocal at 0:00 ([#16](https://github.com/TinkoffCreditSystems/taiga-ui/issues/16)) ([3f7786c](https://github.com/TinkoffCreditSystems/taiga-ui/commit/3f7786c62281c8c3c438b869afc7d317d0abba84))
-   **observables:** `pressedObservable` ignore synthetic events ([28e6a04](https://github.com/TinkoffCreditSystems/taiga-ui/commit/28e6a045dbcb0c57b2afac44c5b4e784182cf3e9))

## 1.1.0 (2020-09-26)

### Features

-   **cdk:** `Dialogs` add ability to create multiple custom dialogs ([#8](https://github.com/TinkoffCreditSystems/taiga-ui/issues/8)) ([7f18bfb](https://github.com/TinkoffCreditSystems/taiga-ui/commit/7f18bfbb92199a7efcaeaa033dd0df86cb94974f))
-   **cdk:** `Pure` add access to `this` ([#6](https://github.com/TinkoffCreditSystems/taiga-ui/issues/6)) ([4cf9e16](https://github.com/TinkoffCreditSystems/taiga-ui/commit/4cf9e161f415a151bb2522cec3793650041d7e7c))
