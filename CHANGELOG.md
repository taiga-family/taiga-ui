# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.6.0](https://github.com/taiga-family/taiga-ui/compare/v4.5.0...v4.6.0) (2024-09-10)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix autofill styles
  ([#8794](https://github.com/taiga-family/taiga-ui/issues/8794))
  ([de3a923](https://github.com/taiga-family/taiga-ui/commit/de3a9230508fccf9224023287ec35d3de07aabd8))
- **addon-mobile:** `Card` fix paddings on mobile devices
  ([#8949](https://github.com/taiga-family/taiga-ui/issues/8949))
  ([12ebe35](https://github.com/taiga-family/taiga-ui/commit/12ebe35a0e21805fa3e3d8e57251f9c8559b8285))
- **addon-table:** TuiTableDirective Content Security Policy error v4
  ([#8872](https://github.com/taiga-family/taiga-ui/issues/8872))
  ([a7ae8f3](https://github.com/taiga-family/taiga-ui/commit/a7ae8f329e3439b9b0b98c8b06cc0fb489c64446))
- **cdk:** `NativeValidator` fix touched state ([#8818](https://github.com/taiga-family/taiga-ui/issues/8818))
  ([2a5e754](https://github.com/taiga-family/taiga-ui/commit/2a5e754856545b3f59b4aacfb9bce76ae09d7b79))
- **core:** `Textfield` fix expression change error ([#8809](https://github.com/taiga-family/taiga-ui/issues/8809))
  ([7206c29](https://github.com/taiga-family/taiga-ui/commit/7206c2920e145cf6fead63c420c1709dcd1c968d))
- **core:** show empty content in correct detect changes cycle
  ([#8837](https://github.com/taiga-family/taiga-ui/issues/8837))
  ([f102ad3](https://github.com/taiga-family/taiga-ui/commit/f102ad3ab38547868821bd33ce5da7cbd7740cec))
- **kit:** `BadgedContent` icon is positioned incorrectly when it's shown with a delay
  ([#8932](https://github.com/taiga-family/taiga-ui/issues/8932))
  ([96c476b](https://github.com/taiga-family/taiga-ui/commit/96c476b9bcd21075083c3d48d0694ca0fae8f5e0))
- **kit:** `CalendarRange` revert computedMonth changes ([#8909](https://github.com/taiga-family/taiga-ui/issues/8909))
  ([848d12c](https://github.com/taiga-family/taiga-ui/commit/848d12cfcc8e0d391bdb5b5c3ff5338e6dbf328e))
- **kit:** `InputFiles` fix validity and drag states ([#8845](https://github.com/taiga-family/taiga-ui/issues/8845))
  ([a7f1332](https://github.com/taiga-family/taiga-ui/commit/a7f13325bbf247128758731de8778df6532836ac))
- **kit:** `InputTime` fix selection of the nearest value from items
  ([#8902](https://github.com/taiga-family/taiga-ui/issues/8902))
  ([0b3894c](https://github.com/taiga-family/taiga-ui/commit/0b3894c85730037c9ada32083fc038f0734e23aa))
- **kit:** BadgedContent: icon is positioned incorrectly when it's shown with a delay
  ([4a26b1a](https://github.com/taiga-family/taiga-ui/commit/4a26b1a56f8e048eb5e5af0583584da491e1e630))
- **kit:** CalendarRange click again on selected item not switch to item date
  ([#8843](https://github.com/taiga-family/taiga-ui/issues/8843))
  ([4853671](https://github.com/taiga-family/taiga-ui/commit/4853671fb67d7e57002c4ddefc6ffb3cefaf90d0))
- **kit:** fix styles for input-inline when spellcheck marks word incorrect
  ([#8836](https://github.com/taiga-family/taiga-ui/issues/8836))
  ([7938dd5](https://github.com/taiga-family/taiga-ui/commit/7938dd5d51773781b04764b07eb7d820c07c2c65))
- **layout:** `Card` fix `Label` title font weight when `Label` is placed inside a card
  ([#8931](https://github.com/taiga-family/taiga-ui/issues/8931))
  ([b7e871c](https://github.com/taiga-family/taiga-ui/commit/b7e871c46a2c99fbeeb55278ba505c76a73c721c))

### 🚀 Features

- **addon-mobile:** `InputSearch` add iOS imitating input
  ([#8838](https://github.com/taiga-family/taiga-ui/issues/8838))
  ([7437250](https://github.com/taiga-family/taiga-ui/commit/743725047d9221782f49264ddf18f371b94620f4))
- **core:** `Dialog` add fade transition for multiple dialogs
  ([#8950](https://github.com/taiga-family/taiga-ui/issues/8950))
  ([5843da5](https://github.com/taiga-family/taiga-ui/commit/5843da5e2740a545298f3aa0385a840a7888265e))
- **kit:** `Copy` and `Password` add interactive icons to `Textfield`
  ([#8833](https://github.com/taiga-family/taiga-ui/issues/8833))
  ([c8bdaf0](https://github.com/taiga-family/taiga-ui/commit/c8bdaf03ce8d1df76870d13a342681299312225c))
- **kit:** `Segmented` update to the spec v1.1.0 ([#8825](https://github.com/taiga-family/taiga-ui/issues/8825))
  ([44d7d5b](https://github.com/taiga-family/taiga-ui/commit/44d7d5b5e3622d183a7d05666e42954caba0751e))
- **layout:** `Cell` add border-radius ([#8801](https://github.com/taiga-family/taiga-ui/issues/8801))
  ([1b05ba4](https://github.com/taiga-family/taiga-ui/commit/1b05ba45a0756e6d81fa5a9d1feb521ab427ff87))
- **testing:** adds link harness ([#8771](https://github.com/taiga-family/taiga-ui/issues/8771))
  ([e38cdb5](https://github.com/taiga-family/taiga-ui/commit/e38cdb55e5134b68529af56e7de2bb4fd8a7b567))

## [4.5.0](https://github.com/taiga-family/taiga-ui/compare/v4.4.1...v4.5.0) (2024-09-02)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCard` fix autofill ([#8728](https://github.com/taiga-family/taiga-ui/issues/8728))
  ([226a763](https://github.com/taiga-family/taiga-ui/commit/226a763ea0b6d0636de1b5b78f98f2209cfa81f0))
- **addon-doc:** code glitch in ssr ([#8705](https://github.com/taiga-family/taiga-ui/issues/8705))
  ([59712a2](https://github.com/taiga-family/taiga-ui/commit/59712a2988a2c7db699d86c901e6b9f3ac48b6a9))
- **core:** `Dropdown` triggers change detection too frequently
  ([#8738](https://github.com/taiga-family/taiga-ui/issues/8738))
  ([8bdcb19](https://github.com/taiga-family/taiga-ui/commit/8bdcb190e1e445b4e6de06caa7c368341a2cf66d))
- **core:** `Icons` fix mask shorthand ([#8711](https://github.com/taiga-family/taiga-ui/issues/8711))
  ([a292756](https://github.com/taiga-family/taiga-ui/commit/a29275647565b0b2c37ac281f7c58f996d85c5ba))
- **core:** `Textfield` should not change color of chevron on hover if `readOnly` is enabled
  ([#8754](https://github.com/taiga-family/taiga-ui/issues/8754))
  ([2e21615](https://github.com/taiga-family/taiga-ui/commit/2e21615e732112ea28fe2ab5f3c25d5c753c51bb))
- **kit:** `CalendarRange` shows end of range ([#8774](https://github.com/taiga-family/taiga-ui/issues/8774))
  ([6604fd6](https://github.com/taiga-family/taiga-ui/commit/6604fd68f5688450aa40778b0326434535fe3bf7))
- **kit:** `InputPhoneInternational` should not allow to open dropdown if `readOnly=true`
  ([#8764](https://github.com/taiga-family/taiga-ui/issues/8764))
  ([fcca2fa](https://github.com/taiga-family/taiga-ui/commit/fcca2fa6815dfcde4a5f6f9eac66958fb3cc9af9))
- **kit:** CalendarRange not switch to selected item ([#8784](https://github.com/taiga-family/taiga-ui/issues/8784))
  ([ad138ab](https://github.com/taiga-family/taiga-ui/commit/ad138abed3656a19e5ecb05576f76e3306855eff))
- **kit:** contain width for img in avatar ([#8723](https://github.com/taiga-family/taiga-ui/issues/8723))
  ([c9014a2](https://github.com/taiga-family/taiga-ui/commit/c9014a23e0ff2076b5dcbbfa2340428a89292e2f))
- **layout:** `Navigation` fix style specificity for `AsideItem`
  ([#8790](https://github.com/taiga-family/taiga-ui/issues/8790))
  ([77a1eea](https://github.com/taiga-family/taiga-ui/commit/77a1eea69fdc3d956215d28a721ea72e2d26d596))
- **legacy:** `InputDateRange` triggers cyclic change detection ticks
  ([#8706](https://github.com/taiga-family/taiga-ui/issues/8706))
  ([c7bc044](https://github.com/taiga-family/taiga-ui/commit/c7bc04403b7b379e184bad2fa978b62bcc9a500c))
- **legacy:** restore `autoColor` for `InputTag` and `MultiSelect`
  ([#8783](https://github.com/taiga-family/taiga-ui/issues/8783))
  ([e5477c4](https://github.com/taiga-family/taiga-ui/commit/e5477c401e5b3cb046c24fa2b64993917376c20f))
- **legacy:** trigger transform placeholder when using autofill
  ([#8779](https://github.com/taiga-family/taiga-ui/issues/8779))
  ([464dee4](https://github.com/taiga-family/taiga-ui/commit/464dee4c6bdb5dc47f8a9b657d188788fd5e6531))

### 🚀 Features

- **addon-commerce:** `ThumbnailCard` add `<img>` support
  ([#8789](https://github.com/taiga-family/taiga-ui/issues/8789))
  ([9fdb499](https://github.com/taiga-family/taiga-ui/commit/9fdb499790e3a7bf16a94162d6e01d26c19e252e))
- **addon-doc:** improve ui for link to sample ([#8406](https://github.com/taiga-family/taiga-ui/issues/8406))
  ([e5beb47](https://github.com/taiga-family/taiga-ui/commit/e5beb47843a578b8232431d9246daafdb0591165))
- **cdk:** add `tuiInjectId` ([#8730](https://github.com/taiga-family/taiga-ui/issues/8730))
  ([6b3bbb0](https://github.com/taiga-family/taiga-ui/commit/6b3bbb09d6c9917776ceb5c83ffaedbbe2c82dc9))
- **core:** `Textfield` add `ViewContainerRef` ([#8781](https://github.com/taiga-family/taiga-ui/issues/8781))
  ([5fee17a](https://github.com/taiga-family/taiga-ui/commit/5fee17a23c7ed83d3e8ea6befc49e804b3fa16ad))
- improve style for A11y ([#8408](https://github.com/taiga-family/taiga-ui/issues/8408))
  ([918e11f](https://github.com/taiga-family/taiga-ui/commit/918e11f0115a8fea8f6c9662a69ba40e2b60eb35))
- **kit:** `InputPassword` add new version, deprecate legacy
  ([#8786](https://github.com/taiga-family/taiga-ui/issues/8786))
  ([7a655de](https://github.com/taiga-family/taiga-ui/commit/7a655defe64cd89fc39b2da9092fe63b08b7d048))
- **kit:** `InputPhoneInternational` can be customized with `Icon` / `Tooltip`
  ([#8750](https://github.com/taiga-family/taiga-ui/issues/8750))
  ([b20459b](https://github.com/taiga-family/taiga-ui/commit/b20459b326a917c64ad10da54d68905af5720042))
- **layout:** `Navigation` add `Drawer` ([#8757](https://github.com/taiga-family/taiga-ui/issues/8757))
  ([cc64434](https://github.com/taiga-family/taiga-ui/commit/cc6443477b3c1941185c9e6556dfed38301d6731))
- **testing:** adds size harness for button ([#8760](https://github.com/taiga-family/taiga-ui/issues/8760))
  ([71e654f](https://github.com/taiga-family/taiga-ui/commit/71e654f75f447f494ce67503d8b45307dda249cf))

### [4.4.1](https://github.com/taiga-family/taiga-ui/compare/v4.4.0...v4.4.1) (2024-08-27)

### 🐞 Bug Fixes

- **cdk:** `schematics` fix bad import ([#8696](https://github.com/taiga-family/taiga-ui/issues/8696))
  ([c46899e](https://github.com/taiga-family/taiga-ui/commit/c46899e812f3354937fc5c8495a324f8fbafefca))

## [4.4.0](https://github.com/taiga-family/taiga-ui/compare/v4.3.0...v4.4.0) (2024-08-26)

### 🐞 Bug Fixes

- **addon-mobile:** `PullToRefresh` fix scroll ref ([#8684](https://github.com/taiga-family/taiga-ui/issues/8684))
  ([c9eef96](https://github.com/taiga-family/taiga-ui/commit/c9eef96273244c069c12bc512c888aadcc152a45))
- **cdk:** `ActiveZone` do not exit zone when scrollable container becomes non-scrollable
  ([#8631](https://github.com/taiga-family/taiga-ui/issues/8631))
  ([#8653](https://github.com/taiga-family/taiga-ui/issues/8653))
  ([b796d0d](https://github.com/taiga-family/taiga-ui/commit/b796d0d761e7fac064479da128a221a4b896885e))
- **kit:** `ButtonClose` fix icon ([#8659](https://github.com/taiga-family/taiga-ui/issues/8659))
  ([7287016](https://github.com/taiga-family/taiga-ui/commit/728701659554f263e5f5baafc1f2bb012da7494a))
- **kit:** `CalendarRange` delete code for `availableRange` property
  ([#8688](https://github.com/taiga-family/taiga-ui/issues/8688))
  ([18d9b07](https://github.com/taiga-family/taiga-ui/commit/18d9b0790be9fb66f0d6a8c81846a3b0f65bb7c0))
- **kit:** `Tiles` fix reorder issue ([#8663](https://github.com/taiga-family/taiga-ui/issues/8663))
  ([9ea0162](https://github.com/taiga-family/taiga-ui/commit/9ea0162c3a7371c50d390e9718b2a175ad30c001))
- **legacy:** `Textarea` use balance text-wrap in safari ([#8666](https://github.com/taiga-family/taiga-ui/issues/8666))
  ([cbaac1b](https://github.com/taiga-family/taiga-ui/commit/cbaac1b1c87b884cb692f979b44094ebb583ef1a))
- **legacy:** invalid css variable ([#8619](https://github.com/taiga-family/taiga-ui/issues/8619))
  ([4fa7631](https://github.com/taiga-family/taiga-ui/commit/4fa7631a81842abe7c47e3b8212a16121399d4c4))

### 🚀 Features

- **core:** `TUI_DARK_MODE` add new token ([#8657](https://github.com/taiga-family/taiga-ui/issues/8657))
  ([f409942](https://github.com/taiga-family/taiga-ui/commit/f409942f3cb21fa8dc66fe59e4dcbe316fc045c9))
- **icons:** drop useless comments inside svg file ([#8660](https://github.com/taiga-family/taiga-ui/issues/8660))
  ([327f470](https://github.com/taiga-family/taiga-ui/commit/327f4700ee0628a6cadb2e1deba35287ca8e83fe))
- **kit:** `CalendarRange` add `item` property for correctly switch value outside
  ([#8617](https://github.com/taiga-family/taiga-ui/issues/8617))
  ([39e3419](https://github.com/taiga-family/taiga-ui/commit/39e3419b1f03176770f49ebd03118a2c067546a1))
- **kit:** `IconBadge` add new directive ([#8667](https://github.com/taiga-family/taiga-ui/issues/8667))
  ([1d2c286](https://github.com/taiga-family/taiga-ui/commit/1d2c28614407307801fdb1e0c63b4896b86471d1))
- **layout:** `Search` add new component ([#8648](https://github.com/taiga-family/taiga-ui/issues/8648))
  ([8cb50c0](https://github.com/taiga-family/taiga-ui/commit/8cb50c024bbfeda2b691c170cecef80c9cc46e7d))

## [4.3.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.3.0) (2024-08-21)

### 🚀 Features

- **addon-mobile:** possibility drop mobile calendar header
  ([#8265](https://github.com/taiga-family/taiga-ui/issues/8265))
  ([819b17b](https://github.com/taiga-family/taiga-ui/commit/819b17ba2bf87d6ff92be9bf2d3508ae9a25ae01))
- **kit:** `ButtonSelect` add new directive ([#8559](https://github.com/taiga-family/taiga-ui/issues/8559))
  ([6cba52c](https://github.com/taiga-family/taiga-ui/commit/6cba52c140bc182cb8014809116356fb49c3c6e2))

### 🐞 Bug Fixes

- **addon-doc:** strange behavior on safari ([#8588](https://github.com/taiga-family/taiga-ui/issues/8588))
  ([9e6e865](https://github.com/taiga-family/taiga-ui/commit/9e6e865ec5c4a287dab14a46751fd53ff181a138))
- **addon-mobile:** PullToRefresh do not trigger pulled if dialog is inside
  ([#8597](https://github.com/taiga-family/taiga-ui/issues/8597))
  ([7474d6e](https://github.com/taiga-family/taiga-ui/commit/7474d6ea455fecf07a785a86cab2d61bd45f0d34))
- **core:** do not call resolver multiple time ([#8578](https://github.com/taiga-family/taiga-ui/issues/8578))
  ([6e5c9f4](https://github.com/taiga-family/taiga-ui/commit/6e5c9f4487d4f5a2633c13812c4ad4e2b221b5b3))
- **core:** user selection on safari ([#8587](https://github.com/taiga-family/taiga-ui/issues/8587))
  ([02e1c73](https://github.com/taiga-family/taiga-ui/commit/02e1c738f626f36425de0efdf424a006911d3b10))
- **kit:** `InputPhoneInternational` fix size for `border-box`
  ([#8633](https://github.com/taiga-family/taiga-ui/issues/8633))
  ([1dec452](https://github.com/taiga-family/taiga-ui/commit/1dec4524c8db8a0290eb82f10c302cb79c5d86ec))
- **kit:** `Segmented` fix native reset form action ([#8605](https://github.com/taiga-family/taiga-ui/issues/8605))
  ([ec87062](https://github.com/taiga-family/taiga-ui/commit/ec87062e2414d03bc212fd76d268b7890a40c1f8))
- **kit:** improve tree-shakeability of `InputPhoneInternational`
  ([#8603](https://github.com/taiga-family/taiga-ui/issues/8603))
  ([abfba9e](https://github.com/taiga-family/taiga-ui/commit/abfba9e8ba64988b4676387b7bbed3e5b0da7f5b))
- **kit:** segmented subscription to control value changes
  ([#8574](https://github.com/taiga-family/taiga-ui/issues/8574))
  ([e6cf175](https://github.com/taiga-family/taiga-ui/commit/e6cf1759eb427c7f8b2ee1496f8fdfc3effe9ee4))
- **legacy:** display view/hide password button with `readOnly` property
  ([#8584](https://github.com/taiga-family/taiga-ui/issues/8584))
  ([15857bc](https://github.com/taiga-family/taiga-ui/commit/15857bc81f7088956127cd331afe2b65dc495d94))
- **legacy:** prevent add/remove suffixes while InputNumber is readonly
  ([#8568](https://github.com/taiga-family/taiga-ui/issues/8568))
  ([7a58d78](https://github.com/taiga-family/taiga-ui/commit/7a58d7824a4fc72563558b3407889602b6714f89))
- **legacy:** set correct font size for small and medium sizes
  ([#8548](https://github.com/taiga-family/taiga-ui/issues/8548))
  ([8acfb39](https://github.com/taiga-family/taiga-ui/commit/8acfb394e899ffd69b4e666bca6742e44149830f))

## [4.2.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.2.0) (2024-08-14)

### 🚀 Features

- add `@taiga-ui/icons-fontawesome` ([#8493](https://github.com/taiga-family/taiga-ui/issues/8493))
  ([131b3ed](https://github.com/taiga-family/taiga-ui/commit/131b3ed6a007c3229fe65f13fd9bfe014d68e7c2))
- add `@taiga-ui/icons-material` ([#8454](https://github.com/taiga-family/taiga-ui/issues/8454))
  ([3315a29](https://github.com/taiga-family/taiga-ui/commit/3315a29f5e6539956d3dc7d6b4a01b1a0c3d45e4))
- **i18n:** add japanese ([#8420](https://github.com/taiga-family/taiga-ui/issues/8420))
  ([ef9f992](https://github.com/taiga-family/taiga-ui/commit/ef9f9929ccaa778811a2eda86803c35f726a1de2))
- **i18n:** add korean ([#8486](https://github.com/taiga-family/taiga-ui/issues/8486))
  ([691328f](https://github.com/taiga-family/taiga-ui/commit/691328f889c95346f18ced853fe2b91bd08e300f))
- **i18n:** improve literal string union ([#8516](https://github.com/taiga-family/taiga-ui/issues/8516))
  ([9bf0f8c](https://github.com/taiga-family/taiga-ui/commit/9bf0f8c39727cfccd481636433e44963b8b88331))
- **kit:** prevent disabled date selection for calendar-range
  ([#8329](https://github.com/taiga-family/taiga-ui/issues/8329))
  ([951779d](https://github.com/taiga-family/taiga-ui/commit/951779def714e366bb31c915be56ce9ee50115ee))

### 🐞 Bug Fixes

- **core:** ios menu is not triggered ([#8348](https://github.com/taiga-family/taiga-ui/issues/8348))
  ([8b00807](https://github.com/taiga-family/taiga-ui/commit/8b008072936d0c246a1eb6c7435360b39305bf8f))
- **i18n:** redundant whitespace ([#8501](https://github.com/taiga-family/taiga-ui/issues/8501))
  ([0f809a7](https://github.com/taiga-family/taiga-ui/commit/0f809a72b009e469e99ea0c773e446e8e9dafebd))
- **legacy:** fix issues with custom injector in templates
  ([#8523](https://github.com/taiga-family/taiga-ui/issues/8523))
  ([ce49bac](https://github.com/taiga-family/taiga-ui/commit/ce49bac400287512ca6c97231ce04c4336b9794c))

## [4.1.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.1.0) (2024-08-13)

### 🚀 Features

- add `@taiga-ui/icons-fontawesome` ([#8493](https://github.com/taiga-family/taiga-ui/issues/8493))
  ([131b3ed](https://github.com/taiga-family/taiga-ui/commit/131b3ed6a007c3229fe65f13fd9bfe014d68e7c2))
- add `@taiga-ui/icons-material` ([#8454](https://github.com/taiga-family/taiga-ui/issues/8454))
  ([3315a29](https://github.com/taiga-family/taiga-ui/commit/3315a29f5e6539956d3dc7d6b4a01b1a0c3d45e4))
- **i18n:** add korean ([#8486](https://github.com/taiga-family/taiga-ui/issues/8486))
  ([691328f](https://github.com/taiga-family/taiga-ui/commit/691328f889c95346f18ced853fe2b91bd08e300f))
- **kit:** prevent disabled date selection for calendar-range
  ([#8329](https://github.com/taiga-family/taiga-ui/issues/8329))
  ([951779d](https://github.com/taiga-family/taiga-ui/commit/951779def714e366bb31c915be56ce9ee50115ee))

### 🐞 Bug Fixes

- **core:** `Group` fix edge overlay ([#8509](https://github.com/taiga-family/taiga-ui/issues/8509))
  ([bd43b97](https://github.com/taiga-family/taiga-ui/commit/bd43b977e00e554bbed373ed4987816dce49831f))
- **kit:** `InputPhoneInternational` fix chevron ([#8491](https://github.com/taiga-family/taiga-ui/issues/8491))
  ([a0397d6](https://github.com/taiga-family/taiga-ui/commit/a0397d6e6a20da1094367d11fa070f178dc6a9fc))
- **legacy:** `InputTime` has missing zero padding on blur for `HH:MM` mode
  ([#8492](https://github.com/taiga-family/taiga-ui/issues/8492))
  ([84c3aae](https://github.com/taiga-family/taiga-ui/commit/84c3aaec0eaeb60cd4e5a4f101f6e056942c7a6c))

### [4.0.1](https://github.com/taiga-family/taiga-ui/compare/v4.0.0...v4.0.1) (2024-08-12)

### 🐞 Bug Fixes

- **cdk:** redundant assert log if hours are greater than 23
  ([#8448](https://github.com/taiga-family/taiga-ui/issues/8448))
  ([c3a7e49](https://github.com/taiga-family/taiga-ui/commit/c3a7e4923eb958154e90b6bef7bda582ba8427fd))
- **core:** `Root` fix background ([#8468](https://github.com/taiga-family/taiga-ui/issues/8468))
  ([bbbb82e](https://github.com/taiga-family/taiga-ui/commit/bbbb82ece14906531fc140a8063bf0fc0ba217de))
- **core:** add `type=button` to `textfield` for ignore submit event
  ([#8455](https://github.com/taiga-family/taiga-ui/issues/8455))
  ([4700e5d](https://github.com/taiga-family/taiga-ui/commit/4700e5d143f33ca5af175be40cffea3d55f8241d))
- **kit:** `TuiDataListGroupWrapperComponent` is not assignable to the same property in base type
  ([#8461](https://github.com/taiga-family/taiga-ui/issues/8461))
  ([933be65](https://github.com/taiga-family/taiga-ui/commit/933be658d84d426d5b71e6535d808aa3145a1293))

## [4.0.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.0-rc.10...v4.0.0) (2024-08-09)

- Update to Angular 16 (https://github.com/taiga-family/taiga-ui/pull/6966).
- Update supported browser versions (https://github.com/taiga-family/taiga-ui/pull/6818).
- Rename **all** entities: drop `Module` / `Component` / `Directive` postfix.
- Use deep entrypoints in **all** imports paths inside packages for microfrontends tree-shaking support.
- **@taiga-ui/legacy** create new package ([#7501](https://github.com/taiga-family/taiga-ui/pull/7501)).
- **@taiga-ui/browserslist-config** create new package (https://github.com/taiga-family/taiga-ui/pull/5344).
- **@taiga-ui/core:**
  - `Textfield` add new component ([#6298](https://github.com/taiga-family/taiga-ui/pull/6298)).
  - `Icon` add new component ([#5872](https://github.com/taiga-family/taiga-ui/pull/5872)). `Icons` add new directive
    ([#6053](https://github.com/taiga-family/taiga-ui/pull/6053)) `Icon` add new pipe
    (https://github.com/taiga-family/taiga-ui/pull/7244).
  - `Icons` new approach **based on mask** ([#7752](https://github.com/taiga-family/taiga-ui/pull/7752),
    [#7658](https://github.com/taiga-family/taiga-ui/pull/7658),
    [#7714](https://github.com/taiga-family/taiga-ui/pull/7714)).
  - `Scrollbar` add mode (https://github.com/taiga-family/taiga-ui/pull/8246).
  - `Notification` simplify to directive (https://github.com/taiga-family/taiga-ui/pull/8168). Add interactive mode
    (https://github.com/taiga-family/taiga-ui/pull/6760).
  - `HintOverflow` add new directive (https://github.com/taiga-family/taiga-ui/pull/8111).
  - `DropdownContext` implement for `IOS` (https://github.com/taiga-family/taiga-ui/pull/7814).
  - `Root` use `Platform` directive (https://github.com/taiga-family/taiga-ui/pull/7931).
  - `Tooltip` are refactored from component to just directive (https://github.com/taiga-family/taiga-ui/pull/7810).
  - `Dropdown` nested no longer needs manual active zone (https://github.com/taiga-family/taiga-ui/pull/7744). BREAKING
    CHANGE: `ActiveZone` is removed from context in favor of close method.
  - `WithDataList` add host directive (https://github.com/taiga-family/taiga-ui/pull/7693).
  - `Appearance` switch to data-mode (https://github.com/taiga-family/taiga-ui/pull/7651).
  - `Maskito` instead `input[tuiMaskAccessor]` directive (https://github.com/taiga-family/taiga-ui/pull/7646).
  - `Alert`, `Dialog` no longer need module imports (https://github.com/taiga-family/taiga-ui/pull/6670).
  - `Loader` add new algorithm to calculate `stroke-width` (https://github.com/taiga-family/taiga-ui/pull/6550).
    `Loader` new animation (https://github.com/taiga-family/taiga-ui/pull/6538).
  - Use `TUI_ANIMATIONS_SPEED` instead `TUI_ANIMATIONS_DURATION` (https://github.com/taiga-family/taiga-ui/pull/6542).
- **@taiga-ui/kit:**
  - `Radio`, `Checkbox`, `Switch` new components based on directives
    ([#5319](https://github.com/taiga-family/taiga-ui/pull/5319),
    [#6929](https://github.com/taiga-family/taiga-ui/pull/6929)).
  - `Sensitive` add new directive ([#5425](https://github.com/taiga-family/taiga-ui/pull/5425),
    [#6491](https://github.com/taiga-family/taiga-ui/pull/6491),
    [#6960](https://github.com/taiga-family/taiga-ui/pull/6960)).
  - `Skeleton` add new directive ([#6934](https://github.com/taiga-family/taiga-ui/pull/6934)).
  - `Segmented` add new component ([#6527](https://github.com/taiga-family/taiga-ui/pull/6527),
    [#7192](https://github.com/taiga-family/taiga-ui/pull/7192)). Tabs refactor and drop `MobileTabs` in favor of
    `Segmented` ([#7047](https://github.com/taiga-family/taiga-ui/pull/7047)).
  - `Fade` add new directive ([#5169](https://github.com/taiga-family/taiga-ui/pull/5169)).
  - `Avatar` add colored icons mode ([#7806](https://github.com/taiga-family/taiga-ui/pull/7806)).
  - `Connected` add directive for `Cell` and `Stepper` ([#8025](https://github.com/taiga-family/taiga-ui/pull/8025)).
  - Use `@maskito/phone` ([#7580](https://github.com/taiga-family/taiga-ui/pull/7580)) in `InputPhoneInternational`.
  - `FluidTypography` add new directive (https://github.com/taiga-family/taiga-ui/pull/8316).
  - `Progress` add options with DI (https://github.com/taiga-family/taiga-ui/pull/8061).
  - `Status` add new component (https://github.com/taiga-family/taiga-ui/pull/8057).
  - `Emails` add pipe (https://github.com/taiga-family/taiga-ui/pull/7596).
  - `Pulse` add new component (https://github.com/taiga-family/taiga-ui/pull/7544).
  - `Chevron` add new directive (https://github.com/taiga-family/taiga-ui/pull/7153).
  - `AvatarOutline` add new directive (https://github.com/taiga-family/taiga-ui/pull/7087).
  - `NumberFormat` allow dynamic changes (https://github.com/taiga-family/taiga-ui/pull/6856). BREAKING CHANGES: remove
    `TUI_NUMBER_FORMAT_OBSERVABLE` in favour of `TUI_NUMBER_FORMAT`, `tuiFormatNumber` pipe requires async pipe now.
  - `Block` add new component (https://github.com/taiga-family/taiga-ui/pull/6892).
- **@taiga-ui/cdk:**
  - `Dialogs` refactor creation way (https://github.com/taiga-family/taiga-ui/pull/6660).
  - `Provide` add new util (https://github.com/taiga-family/taiga-ui/pull/7168).
  - `TakeUntilDestroyed` add helper (https://github.com/taiga-family/taiga-ui/pull/7381).
  - `NativeElement` add util (https://github.com/taiga-family/taiga-ui/pull/7393).
  - `ToArray` add util (https://github.com/taiga-family/taiga-ui/pull/7489).
  - `DirectiveBinding` / `DirectiveListener` add utils (https://github.com/taiga-family/taiga-ui/pull/7611).
  - `Control` add signal based abstraction (https://github.com/taiga-family/taiga-ui/pull/7650).
  - `ThemeColorService` add service (https://github.com/taiga-family/taiga-ui/pull/8240).
  - `Portal` refactor abstractions (https://github.com/taiga-family/taiga-ui/pull/6692).
  - Rename and remove some helper instances (https://github.com/taiga-family/taiga-ui/pull/7065).
  - Scroll controls visible only inside `tui-root` area (https://github.com/taiga-family/taiga-ui/pull/6623).
- **@taiga-ui/layout:**
  - `Title`, `BlockDetails`, `Comment` add new components ([#5743](https://github.com/taiga-family/taiga-ui/pull/5743),
    [#7010](https://github.com/taiga-family/taiga-ui/pull/7010)).
  - `CardMedium`, `CardLarge` add new components ([#7260](https://github.com/taiga-family/taiga-ui/pull/7260)).
  - `Cell` add new component ([#5460](https://github.com/taiga-family/taiga-ui/pull/5460),
    [#7235](https://github.com/taiga-family/taiga-ui/pull/7235)).
  - `Navigation` implement grid (https://github.com/taiga-family/taiga-ui/pull/8377). Simplify 2nd level aside
    (https://github.com/taiga-family/taiga-ui/pull/8141).
- **@taiga-ui/addon-commerce:**
  - `InputCard` migrate to new `Textfield` ([#7581](https://github.com/taiga-family/taiga-ui/pull/7581)).
- **@taiga-ui/addon-doc:**
  - `ThemeSwitcher` add new component (https://github.com/taiga-family/taiga-ui/pull/7966).
  - `Preview` lazy component support (https://github.com/taiga-family/taiga-ui/pull/7048).
  - Support target property for links (https://github.com/taiga-family/taiga-ui/pull/6874).
- **@taiga-ui/addon-mobile:**
  - `SwipeActions` add new component ([#6644](https://github.com/taiga-family/taiga-ui/pull/6644)).
  - `DropdownMobile` add new directive ([#7428](https://github.com/taiga-family/taiga-ui/pull/7428),
    [#8094](https://github.com/taiga-family/taiga-ui/pull/8094)).
- **@taiga-ui/addon-table:**
  - `Reorder` add possibility to transfer a template (https://github.com/taiga-family/taiga-ui/pull/6967).
  - `TableSort` support nullable values (https://github.com/taiga-family/taiga-ui/pull/7888).
- **@taiga-ui/i18n**:
  - `Hebrew` add support (https://github.com/taiga-family/taiga-ui/pull/8242).
  - `Belarusian` add support (https://github.com/taiga-family/taiga-ui/pull/6421).

<div id="migration"> </div>

### Migration guide

This release introduces a lot of breaking changes.<br/> Most of them can be solved automatically with the following
command:

**Angular CLI:**

```
ng update @taiga-ui/cdk
```

**Nx CLI:**

```
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v3.x/CHANGELOG.md)

## [2.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v2.x/CHANGELOG.md)
