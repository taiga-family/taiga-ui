# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.12.0](https://github.com/tinkoff/taiga-ui/compare/v3.11.0...v3.12.0) (2022-12-05)

### Features

- **cdk:** `Schematics` migration multiple projects ([#3144](https://github.com/tinkoff/taiga-ui/issues/3144))
  ([cf25f6a](https://github.com/tinkoff/taiga-ui/commit/cf25f6a9ba142b25a6f6db4bd1034e8fe6aa5fe0))
- **cdk:** support `SafeHtml` input value in `tui-svg` ([#3166](https://github.com/tinkoff/taiga-ui/issues/3166))
  ([aad787b](https://github.com/tinkoff/taiga-ui/commit/aad787b76e662b49c44b3c62ab4202a9f2ffdab7))
- **kit:** avatar now accepts `SafeResourceUrl` as `avatarUrl`
  ([#3149](https://github.com/tinkoff/taiga-ui/issues/3149))
  ([d4bdf64](https://github.com/tinkoff/taiga-ui/commit/d4bdf64fd05f6dc58620fbb4159d158f822e2f37))

### Bug Fixes

- **addon-charts:** `Bar`, `BarSet` fix color getter ([#3148](https://github.com/tinkoff/taiga-ui/issues/3148))
  ([e7c517c](https://github.com/tinkoff/taiga-ui/commit/e7c517cfc94d2be3b77900d124e2bf7f5a32c828))
- **addon-editor:** allow paste base64 image ([#3138](https://github.com/tinkoff/taiga-ui/issues/3138))
  ([4222293](https://github.com/tinkoff/taiga-ui/commit/42222934708aa72139feb263ef926269ae595d6c))
- **addon-table:** `Reorder` fix wrong order when toggling visibility
  ([#3145](https://github.com/tinkoff/taiga-ui/issues/3145))
  ([0e7eb9b](https://github.com/tinkoff/taiga-ui/commit/0e7eb9b09a06f5e8b2154028bbd8852c3a1b660b))
- **cdk:** add `tuiControlValue` to schematic ([#3137](https://github.com/tinkoff/taiga-ui/issues/3137))
  ([465f834](https://github.com/tinkoff/taiga-ui/commit/465f834b1062496342f0eee5d405bca45cb32ac2))
- **kit:** `InputPhone` cut value by max phone length ([#3160](https://github.com/tinkoff/taiga-ui/issues/3160))
  ([67d80fc](https://github.com/tinkoff/taiga-ui/commit/67d80fc345918b9f13b727d1872b54ddd0880cfc))
- **kit:** `Range` broken alignment + artifact line before track
  ([#3136](https://github.com/tinkoff/taiga-ui/issues/3136))
  ([17dd30b](https://github.com/tinkoff/taiga-ui/commit/17dd30ba396f7ece9b0a45664cb01448bd0ebb69))
- **kit:** `Tiles` remove binding with JS to allow media query control
  ([#3164](https://github.com/tinkoff/taiga-ui/issues/3164))
  ([91e9f5f](https://github.com/tinkoff/taiga-ui/commit/91e9f5f230702ef564b70bcd6d3a443fd7846f45))
- **kit:** `Tiles` switch to CSS `order` to prevent DOM redraw
  ([#3170](https://github.com/tinkoff/taiga-ui/issues/3170))
  ([e90da1d](https://github.com/tinkoff/taiga-ui/commit/e90da1d82e11b71f0556158d4d681aebaef1160e))
- **kit:** Add missing `TUI_COUNTRIES_MASKS` for Overseas France
  ([#3112](https://github.com/tinkoff/taiga-ui/issues/3112))
  ([8c2a1c9](https://github.com/tinkoff/taiga-ui/commit/8c2a1c9540cc745ca4e4c62d2a7654df03737e7b))
- **kit:** fixed label text align for input files ([#3156](https://github.com/tinkoff/taiga-ui/issues/3156))
  ([699d473](https://github.com/tinkoff/taiga-ui/commit/699d47397d0b97d64e6f4adedadbd3424e9e2a05))

## [3.11.0](https://github.com/tinkoff/taiga-ui/compare/v3.10.0...v3.11.0) (2022-11-28)

### Features

- **kit:** `Tiles` add component ([#3124](https://github.com/tinkoff/taiga-ui/issues/3124))
  ([6facd5a](https://github.com/tinkoff/taiga-ui/commit/6facd5a80f793991edd79e0348e67f14d091de67))
- **kit:** support capture in input files ([#3065](https://github.com/tinkoff/taiga-ui/issues/3065))
  ([64d212c](https://github.com/tinkoff/taiga-ui/commit/64d212c120dd628b96fb051f15c654303cdd8c83))
- **testing:** calendar harness test ([#3058](https://github.com/tinkoff/taiga-ui/issues/3058))
  ([cfdb866](https://github.com/tinkoff/taiga-ui/commit/cfdb866b6bc74bf357af539ecc2cf6ec05acf877))

### Bug Fixes

- **addon-charts:** remove location origin from mask ([#3125](https://github.com/tinkoff/taiga-ui/issues/3125))
  ([eaaa1fa](https://github.com/tinkoff/taiga-ui/commit/eaaa1fa112dd487167d954c8ee0375cd27c1bfe3))
- **core:** `Dropdown` fix direction set with binding ([#3084](https://github.com/tinkoff/taiga-ui/issues/3084))
  ([866675e](https://github.com/tinkoff/taiga-ui/commit/866675e3d95ae951ceff28e728f0ebc7d1a7098e))
- **i18n:** fix vietnamese ([#3115](https://github.com/tinkoff/taiga-ui/issues/3115))
  ([9ae15c7](https://github.com/tinkoff/taiga-ui/commit/9ae15c7f4387c1ee5e378414cbe808c6d697ab31))
- **kit:** `Input` fix mask ([#3107](https://github.com/tinkoff/taiga-ui/issues/3107))
  ([9d721e1](https://github.com/tinkoff/taiga-ui/commit/9d721e1740e0597ae498b322884d2462d264af6d))
- **kit:** `Stepper` fix gap according to design spec ([#3095](https://github.com/tinkoff/taiga-ui/issues/3095))
  ([aafd26e](https://github.com/tinkoff/taiga-ui/commit/aafd26ebb90dd3c4d81863fa6d1d78d1b1434bf0))
- **kit:** `Stepper` scroll to active step when activeItemIndex changes
  ([#3080](https://github.com/tinkoff/taiga-ui/issues/3080))
  ([235100e](https://github.com/tinkoff/taiga-ui/commit/235100e01fcdb7e019a6a1ce93eadc89506253bf))
- **kit:** correct default active month based on `min/max` ([#3092](https://github.com/tinkoff/taiga-ui/issues/3092))
  ([e1668e7](https://github.com/tinkoff/taiga-ui/commit/e1668e7d85e91c20bc2e7eaeddeed3098ec239d2))

## [3.10.0](https://github.com/tinkoff/taiga-ui/compare/v3.9.0...v3.10.0) (2022-11-16)

### Features

- **addon-editor:** improve ux for edit links ([#3008](https://github.com/tinkoff/taiga-ui/issues/3008))
  ([b432f04](https://github.com/tinkoff/taiga-ui/commit/b432f0433049ecb36e76ae34691796d34dff6033))
- **addon-editor:** support attach files ([#3056](https://github.com/tinkoff/taiga-ui/issues/3056))
  ([7a3fbad](https://github.com/tinkoff/taiga-ui/commit/7a3fbad244df4e7905ac0f784857d162878e4a4c))
- **addon-editor:** support nested counters in ordered list ([#3012](https://github.com/tinkoff/taiga-ui/issues/3012))
  ([1fc6ee6](https://github.com/tinkoff/taiga-ui/commit/1fc6ee69358f3226916559d436a661398f60ccdb))
- **addon-editor:** upgrade all tiptap dependencies ([#3001](https://github.com/tinkoff/taiga-ui/issues/3001))
  ([c0ba4e3](https://github.com/tinkoff/taiga-ui/commit/c0ba4e3b8748ad46f9569251eac7fb6099cd7d3b))
- **cdk:** implement `tuiIsPresent` pipe ([#3002](https://github.com/tinkoff/taiga-ui/issues/3002))
  ([db4a29b](https://github.com/tinkoff/taiga-ui/commit/db4a29bf617b574815db7df13ffc319f1208dd35))
- **core:** `DataList` add `size` input, deprecate `size` for `Option`
  ([#3071](https://github.com/tinkoff/taiga-ui/issues/3071))
  ([765ea01](https://github.com/tinkoff/taiga-ui/commit/765ea0129d1984d51700712395c18ac6d5ab6a71))
- **core:** `HostedDropdown` add `sided` input and `close` method to context
  ([#3060](https://github.com/tinkoff/taiga-ui/issues/3060))
  ([60bd0db](https://github.com/tinkoff/taiga-ui/commit/60bd0dbc65af2bbd4f8562c1addefa1163e1a172))
- **core:** change underline color for today cell in calendar ([#3037](https://github.com/tinkoff/taiga-ui/issues/3037))
  ([331158a](https://github.com/tinkoff/taiga-ui/commit/331158a78bcf0794d1effe04a23ff4b7a3d8832d))
- **testing:** accordion harness test ([#3018](https://github.com/tinkoff/taiga-ui/issues/3018))
  ([5905545](https://github.com/tinkoff/taiga-ui/commit/590554541d16f11d9241f5641ce2c5c582338fe1))
- **testing:** avatar harness test ([#3019](https://github.com/tinkoff/taiga-ui/issues/3019))
  ([970e1d0](https://github.com/tinkoff/taiga-ui/commit/970e1d08f1584ef279abafd7621b398130cd0a9d))

### Bug Fixes

- **addon-commerce:** `InputExpire` fix translation in safari ([#3043](https://github.com/tinkoff/taiga-ui/issues/3043))
  ([1a258c5](https://github.com/tinkoff/taiga-ui/commit/1a258c50960ee65745791367ea564c917a0e9e25))
- **addon-commerce:** fix safari expire autofill ([#3015](https://github.com/tinkoff/taiga-ui/issues/3015))
  ([c2aac4b](https://github.com/tinkoff/taiga-ui/commit/c2aac4b2ad5ede251da8b8fb1a66d8d8be70bb61))
- **addon-doc:** scroll to last element in DOM if there are several
  ([#3040](https://github.com/tinkoff/taiga-ui/issues/3040))
  ([883db38](https://github.com/tinkoff/taiga-ui/commit/883db38ac63aad27e72819838bbf75afac023986))
- **addon-editor:** support long words inside bulleted or ordered list
  ([#3038](https://github.com/tinkoff/taiga-ui/issues/3038))
  ([c93ae27](https://github.com/tinkoff/taiga-ui/commit/c93ae2781367565cf36455c268a3f7cc8f207696))
- **addon-editor:** support write simple text after marked link
  ([#3021](https://github.com/tinkoff/taiga-ui/issues/3021))
  ([a2f0123](https://github.com/tinkoff/taiga-ui/commit/a2f01236e6df6974e8bf31315ac3b40bccb5135a))
- **core:** `Dialog` fix padding ([#3009](https://github.com/tinkoff/taiga-ui/issues/3009))
  ([0a68461](https://github.com/tinkoff/taiga-ui/commit/0a68461150e1e95564fe99e4a7bb86d9d018d0fa))
- **core:** hide autofill button for Safari ([#3061](https://github.com/tinkoff/taiga-ui/issues/3061))
  ([27a6aa2](https://github.com/tinkoff/taiga-ui/commit/27a6aa24205c1cb42a8eb88f872c624a946d1822))
- **eslint-plugin:** broken `no-deep-imports` on `Windows`-OS ([#3053](https://github.com/tinkoff/taiga-ui/issues/3053))
  ([a3451c2](https://github.com/tinkoff/taiga-ui/commit/a3451c28a809b1ad2afc32d13cfa7288bf4cc253))
- **i18n:** fix french translations ([#3017](https://github.com/tinkoff/taiga-ui/issues/3017))
  ([2afc420](https://github.com/tinkoff/taiga-ui/commit/2afc4207866f1afd3f71dfd82458e866f430a68e))
- **kit:** icon in date-related components occupies space when hidden
  ([#2966](https://github.com/tinkoff/taiga-ui/issues/2966))
  ([27c2d79](https://github.com/tinkoff/taiga-ui/commit/27c2d79a7d1313a4372d04b5bfe93ba2f98afe2f))

## [3.9.0](https://github.com/tinkoff/taiga-ui/compare/v3.8.0...v3.9.0) (2022-10-31)

### Features

- **addon-editor:** add anchor extension ([#2931](https://github.com/tinkoff/taiga-ui/issues/2931))
  ([1e3a22a](https://github.com/tinkoff/taiga-ui/commit/1e3a22a6c245f5fd1a7eaa57547b7b0182d94175))
- **cdk:** `ScrollService` support `Window` ([#2955](https://github.com/tinkoff/taiga-ui/issues/2955))
  ([ccac3c0](https://github.com/tinkoff/taiga-ui/commit/ccac3c02d463c2186a240316ab36006aae8435fc))
- **core:** `DataList` update styles ([#2949](https://github.com/tinkoff/taiga-ui/issues/2949))
  ([3c219c1](https://github.com/tinkoff/taiga-ui/commit/3c219c1c39de08ced81e42fe29845e60322b7df7))
- **kit:** `Avatar`, `MarkerIcon` synchronize sizes ([#2975](https://github.com/tinkoff/taiga-ui/issues/2975))
  ([ebb8676](https://github.com/tinkoff/taiga-ui/commit/ebb8676e24cf99761e63d161862177e9321842b6))
- **kit:** `Select` add ability to use native select on mobile
  ([#2964](https://github.com/tinkoff/taiga-ui/issues/2964))
  ([c909bec](https://github.com/tinkoff/taiga-ui/commit/c909bec49bda91c83744c4295242c8b4a8990026))
- **kit:** add tokens for customizing different bundled dialogs
  ([#2490](https://github.com/tinkoff/taiga-ui/issues/2490))
  ([66e1aca](https://github.com/tinkoff/taiga-ui/commit/66e1acaaf8be5c10e8ba37f1708fdacb57eafe08))

### Bug Fixes

- **addon-editor:** support original order of colors in palette
  ([#2986](https://github.com/tinkoff/taiga-ui/issues/2986))
  ([0c869ca](https://github.com/tinkoff/taiga-ui/commit/0c869caaedff6242f336b3d8475e4c5d7f6b1550))
- **addon-editor:** support overflow content of table ([#2985](https://github.com/tinkoff/taiga-ui/issues/2985))
  ([89af6a9](https://github.com/tinkoff/taiga-ui/commit/89af6a91082795834e2d8b160c1894800980a259))
- **cdk:** add wrapper style migration ([#2971](https://github.com/tinkoff/taiga-ui/issues/2971))
  ([2f736a1](https://github.com/tinkoff/taiga-ui/commit/2f736a1b02da1120c11989356a4759a02109ebc9))
- **eslint-plugin:** fix incorrect project name search ([#2962](https://github.com/tinkoff/taiga-ui/issues/2962))
  ([dfbb09e](https://github.com/tinkoff/taiga-ui/commit/dfbb09eb0d1bbfdf3c3c94ce1ac922366aceb532))

## [3.8.0](https://github.com/tinkoff/taiga-ui/compare/v3.7.1...v3.8.0) (2022-10-24)

### Features

- **core:** `Button` add padding customization ([#2932](https://github.com/tinkoff/taiga-ui/issues/2932))
  ([91c1b81](https://github.com/tinkoff/taiga-ui/commit/91c1b81b57f5768dca877588e964fee53af8a90a))
- **core:** `PrimitiveCalendar` add ability to change the color of the days
  ([#2904](https://github.com/tinkoff/taiga-ui/issues/2904))
  ([3a14454](https://github.com/tinkoff/taiga-ui/commit/3a144547e0da3d5d8f33640b991fea39fd944fd9))
- **core:** disable smooth scrolling when users have prefers-reduced-motion enabled
  ([#2943](https://github.com/tinkoff/taiga-ui/issues/2943))
  ([05027f4](https://github.com/tinkoff/taiga-ui/commit/05027f451caed201e7e907677bc0e0fc621612e1))
- **core:** update shadows styles ([#2933](https://github.com/tinkoff/taiga-ui/issues/2933))
  ([37144b5](https://github.com/tinkoff/taiga-ui/commit/37144b526e2d5c1279b2e74026aea3993089e447))
- **icons:** add `tuiIconAnchorLarge` ([#2944](https://github.com/tinkoff/taiga-ui/issues/2944))
  ([1e28581](https://github.com/tinkoff/taiga-ui/commit/1e28581b376aa4b8751428ddfefc5879f34c3d57))
- **kit:** `InputYear` add new component ([#2919](https://github.com/tinkoff/taiga-ui/issues/2919))
  ([214fc30](https://github.com/tinkoff/taiga-ui/commit/214fc30a0d71ee0031860a1e26abf433ee2fcbb0))
- **testing:** add harness class for toggle component ([#2939](https://github.com/tinkoff/taiga-ui/issues/2939))
  ([3dd08ce](https://github.com/tinkoff/taiga-ui/commit/3dd08ce321bca9b80f3f62dd76026061ed3de5c7))

### Bug Fixes

- **cdk:** `schematics` always install styles package when migrating
  ([#2922](https://github.com/tinkoff/taiga-ui/issues/2922))
  ([52feffd](https://github.com/tinkoff/taiga-ui/commit/52feffdd817fd53b5ec7421d320e208023824d8b))
- **core:** fix notification padding and background color ([#2937](https://github.com/tinkoff/taiga-ui/issues/2937))
  ([4ef310d](https://github.com/tinkoff/taiga-ui/commit/4ef310d0454456d5081b4a6e7300b66c35299e9d))
- **kit:** `InputTag` fix pasting behaviour ([#2936](https://github.com/tinkoff/taiga-ui/issues/2936))
  ([cd5d309](https://github.com/tinkoff/taiga-ui/commit/cd5d3096497f59ea9c1da7282124d3760e65b82e))
- **kit:** `MarkerIcon` only show hover state for interactive elements
  ([#2950](https://github.com/tinkoff/taiga-ui/issues/2950))
  ([90da7d5](https://github.com/tinkoff/taiga-ui/commit/90da7d5bc93a393b8ae5718f5f92d2db37d30ecb))
- **kit:** `TextArea` fix height for size `m` ([#2952](https://github.com/tinkoff/taiga-ui/issues/2952))
  ([e17346d](https://github.com/tinkoff/taiga-ui/commit/e17346d9b51426e92b9e460a01955955b19c9d48))

### [3.7.1](https://github.com/tinkoff/taiga-ui/compare/v3.7.0...v3.7.1) (2022-10-18)

### Bug Fixes

- **addon-editor:** revert some breaking packages ([#2920](https://github.com/tinkoff/taiga-ui/issues/2920))
  ([48e3597](https://github.com/tinkoff/taiga-ui/commit/48e3597181aed9fcd19df9eda5f0bdb965e3ce6d))

## [3.7.0](https://github.com/tinkoff/taiga-ui/compare/v3.6.0...v3.7.0) (2022-10-18)

### Features

- **addon-editor:** upgrade `@tiptap/*` to latest ([#2855](https://github.com/tinkoff/taiga-ui/issues/2855))
  ([79e14c8](https://github.com/tinkoff/taiga-ui/commit/79e14c8d93abb7a7a5986f447d168156798ad893))
- **demo:** stackblitz starter available via `https://taiga-ui.dev/stackblitz`
  ([#2907](https://github.com/tinkoff/taiga-ui/issues/2907))
  ([71225b0](https://github.com/tinkoff/taiga-ui/commit/71225b0619c8c54253dafcb0c82c5c8869711904))
- **kit:** `ProgressBar` add `:indeterminate`-state ([#2876](https://github.com/tinkoff/taiga-ui/issues/2876))
  ([e311069](https://github.com/tinkoff/taiga-ui/commit/e3110694a2a9af0d7a3201daf29dc1a7b92351b2))
- **kit:** `Tabs` add vertical option ([#2862](https://github.com/tinkoff/taiga-ui/issues/2862))
  ([a0513c8](https://github.com/tinkoff/taiga-ui/commit/a0513c8f4d23466406f6d5f2dd46740db00d7bf1))
- **testing:** add harness tests for tag component ([#2746](https://github.com/tinkoff/taiga-ui/issues/2746))
  ([fb12283](https://github.com/tinkoff/taiga-ui/commit/fb12283ebe4abbea910a355f30b7b9a9811e1d1e))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` fix wrong offset for card number
  ([#2878](https://github.com/tinkoff/taiga-ui/issues/2878))
  ([c387fb2](https://github.com/tinkoff/taiga-ui/commit/c387fb288bd5c73c9a42d62c6b207f43ec8f7223))
- **addon-editor:** downgrade `@tiptap/extension-table` ([#2888](https://github.com/tinkoff/taiga-ui/issues/2888))
  ([93b0ed6](https://github.com/tinkoff/taiga-ui/commit/93b0ed66982d949e8b5cca204052f49e4a98db5d))
- **addon-table:** `Table` don't render column with unspecified template
  ([#2896](https://github.com/tinkoff/taiga-ui/issues/2896))
  ([526c40a](https://github.com/tinkoff/taiga-ui/commit/526c40a760fe72624bafd056e9bac17223e6248b))
- **core:** `DataList` fix first label padding ([#2870](https://github.com/tinkoff/taiga-ui/issues/2870))
  ([1988491](https://github.com/tinkoff/taiga-ui/commit/1988491739d53980991091bc34809374501a9a1b))
- **core:** `Hint` fix mobile offscreen overflow ([#2879](https://github.com/tinkoff/taiga-ui/issues/2879))
  ([5d606b3](https://github.com/tinkoff/taiga-ui/commit/5d606b3bca6ab6504035065935563af4410a4ac1))
- **core:** `TUI_FIRST_DAY_OF_WEEK` ignores DI-hierarchy ([#2868](https://github.com/tinkoff/taiga-ui/issues/2868))
  ([169cd5c](https://github.com/tinkoff/taiga-ui/commit/169cd5c30e80e91dba141d0af948aae034d09264))
- **docs:** Typo in the description of the tuiTextfieldMaxLength attribute
  ([#2882](https://github.com/tinkoff/taiga-ui/issues/2882))
  ([00ec432](https://github.com/tinkoff/taiga-ui/commit/00ec4327acf399e086a41674955589711e442980))
- **kit:** `MultiSelect` fix sanitizer warnings ([#2903](https://github.com/tinkoff/taiga-ui/issues/2903))
  ([0356d7d](https://github.com/tinkoff/taiga-ui/commit/0356d7d09716b65040c08867bef76c02ea267e7a))
- **kit:** `TextArea` add ability to override minHeight when using maxLength
  ([#2899](https://github.com/tinkoff/taiga-ui/issues/2899))
  ([7292a70](https://github.com/tinkoff/taiga-ui/commit/7292a709f8df4a3b41d729f6a66b4bb706d3649f))
- **styles:** put tui-island_transparent after tui-island_hoverable
  ([#2910](https://github.com/tinkoff/taiga-ui/issues/2910))
  ([833e4de](https://github.com/tinkoff/taiga-ui/commit/833e4de327a629045c4de91dd303cd82c9decba4))

### Deprecations

- **addon-table:** `*tuiRow` deprecation (use `*ngFor` + `tuiTableSort`-pipe)
  ([#2736](https://github.com/tinkoff/taiga-ui/issues/2736))
  ([5723e1b](https://github.com/tinkoff/taiga-ui/commit/5723e1b3f4569ad494d326ed3bd852d7e9156743))

## [3.6.0](https://github.com/tinkoff/taiga-ui/compare/v3.5.0...v3.6.0) (2022-10-11)

### Features

- **addon-table:** add `TuiDirectionOrderDirective` to sort by order
  ([#2782](https://github.com/tinkoff/taiga-ui/issues/2782))
  ([962084a](https://github.com/tinkoff/taiga-ui/commit/962084a36a9504166a47c45c4bce0f46324573f7))
- **kit:** `Avatar` add stacking option ([#2811](https://github.com/tinkoff/taiga-ui/issues/2811))
  ([0264b38](https://github.com/tinkoff/taiga-ui/commit/0264b388a43c916a1409ec187ba77754257188c5))
- **kit:** `Avatar` allow Taiga UI icons ([#2824](https://github.com/tinkoff/taiga-ui/issues/2824))
  ([cfa5ead](https://github.com/tinkoff/taiga-ui/commit/cfa5ead78c2c60c6bb469843b0272a3a882eaed6))
- **kit:** `Badge` add overflow elipsis and title ([#2806](https://github.com/tinkoff/taiga-ui/issues/2806))
  ([02713d6](https://github.com/tinkoff/taiga-ui/commit/02713d63ebfd7290420df66d37b5919db9138c3c))
- **kit:** `Carousel` allow vertical alignment control ([#2814](https://github.com/tinkoff/taiga-ui/issues/2814))
  ([36d3c6f](https://github.com/tinkoff/taiga-ui/commit/36d3c6f019e61203e021d6c7854c9cdc7559286b))
- **kit:** `InputDate`, `InputDateRange`, `InputDateTime` add options DI token for custom icons
  ([#2785](https://github.com/tinkoff/taiga-ui/issues/2785))
  ([0fe5d5b](https://github.com/tinkoff/taiga-ui/commit/0fe5d5b7197ee435e64cea2155ff296e9a046c30))
- **kit:** `InputMonth`, `InputMonthRange` add options DI token
  ([#2840](https://github.com/tinkoff/taiga-ui/issues/2840))
  ([217d670](https://github.com/tinkoff/taiga-ui/commit/217d670a2df74139b76a047302558a07fa70bc43))

### Bug Fixes

- **addon-doc:** misaligned column fix ([#2815](https://github.com/tinkoff/taiga-ui/issues/2815))
  ([783f59c](https://github.com/tinkoff/taiga-ui/commit/783f59c4e78215d277e882a4f986daacf5ed46b8))
- **addon-editor:** edit link modal shouldn't overlap content ([#2803](https://github.com/tinkoff/taiga-ui/issues/2803))
  ([7f8643a](https://github.com/tinkoff/taiga-ui/commit/7f8643adc5ef562a63276ab9771ee3584c2c7477))
- **addon-editor:** normalize h1-h6 heading in editor socket ([#2808](https://github.com/tinkoff/taiga-ui/issues/2808))
  ([c8ff2d2](https://github.com/tinkoff/taiga-ui/commit/c8ff2d2d197802c3aa711e29f2d23270b29ee80c))
- **addon-editor:** removing all `!important` styles ([#2798](https://github.com/tinkoff/taiga-ui/issues/2798))
  ([a59afe8](https://github.com/tinkoff/taiga-ui/commit/a59afe8bddc1a084c819fb6389612b3fdbe2029e))
- **addon-editor:** support nested ordered list inside a bullet list
  ([#2805](https://github.com/tinkoff/taiga-ui/issues/2805))
  ([340ebdc](https://github.com/tinkoff/taiga-ui/commit/340ebdc4877d8a10fee83b71d0c2d4fe0557aede))
- **addon-editor:** use `starterKit` only from custom extension
  ([#2845](https://github.com/tinkoff/taiga-ui/issues/2845))
  ([98311f8](https://github.com/tinkoff/taiga-ui/commit/98311f877c3136eb6438d5b84e02f3dde91dce28))
- **cdk:** `Obscured` fix for SSR ([#2835](https://github.com/tinkoff/taiga-ui/issues/2835))
  ([6b69efb](https://github.com/tinkoff/taiga-ui/commit/6b69efba4e1dad508f9f835b2d5928d1fce8ace7))
- **cdk:** `schematics` error `Cannot read property 'getInitializer' of undefined`
  ([#2828](https://github.com/tinkoff/taiga-ui/issues/2828))
  ([8d5f40b](https://github.com/tinkoff/taiga-ui/commit/8d5f40bff6d17cc5bd35f98e412c5a6c22a50fa0))
- **kit:** `MultiSelect` fix overflow issues ([#2847](https://github.com/tinkoff/taiga-ui/issues/2847))
  ([372410e](https://github.com/tinkoff/taiga-ui/commit/372410e4a6057e3fd09b390abf71fee25e4bd629))
- **kit:** `RadioLabeled` fix disabled label style ([#2842](https://github.com/tinkoff/taiga-ui/issues/2842))
  ([001c0ad](https://github.com/tinkoff/taiga-ui/commit/001c0ad208d33477156038c14faf90e3ddb58c92))
- **styles:** move required styles from `styles` package to tui-root
  ([#2854](https://github.com/tinkoff/taiga-ui/issues/2854))
  ([033960d](https://github.com/tinkoff/taiga-ui/commit/033960de23f90f516f810e76a07d37271b6390cd))
- **styles:** pseudo elements `:after` aren't removed in Safari 16
  ([#2825](https://github.com/tinkoff/taiga-ui/issues/2825))
  ([fdab37a](https://github.com/tinkoff/taiga-ui/commit/fdab37ac0ac27dd7836b23691cc463165d6eb70b))

## [3.5.0](https://github.com/tinkoff/taiga-ui/compare/v3.4.0...v3.5.0) (2022-10-03)

### Features

- **addon-charts:** `BarSet` add label ([#2780](https://github.com/tinkoff/taiga-ui/issues/2780))
  ([d4f4ce0](https://github.com/tinkoff/taiga-ui/commit/d4f4ce05678f663437e092bcbc5c18c6a7e73f97))
- **addon-commerce:** `InputCard` extend custom icon type to `PolymorpheusContent`
  ([#2788](https://github.com/tinkoff/taiga-ui/issues/2788))
  ([b8eff54](https://github.com/tinkoff/taiga-ui/commit/b8eff54e8e10da6ba6fcafd60aed0e818116db59))
- **core:** `Dialog` allow `Default` change detection strategy to work
  ([#2762](https://github.com/tinkoff/taiga-ui/issues/2762))
  ([f71ed71](https://github.com/tinkoff/taiga-ui/commit/f71ed7145ae88b7099becd67915426785dfdcd5a))
- **kit:** `InputTime` add checkmark near selected time ([#2763](https://github.com/tinkoff/taiga-ui/issues/2763))
  ([75be9bc](https://github.com/tinkoff/taiga-ui/commit/75be9bcb19257e2427690eecc94f8eb4b00c7c83))

### Bug Fixes

- **addon-charts:** make hint properties dynamic ([#2774](https://github.com/tinkoff/taiga-ui/issues/2774))
  ([0a7a068](https://github.com/tinkoff/taiga-ui/commit/0a7a0689f247082932f2f43876e2ec5dd78341d1))
- **addon-commerce:** show caret color when filling in input card group value
  ([#2794](https://github.com/tinkoff/taiga-ui/issues/2794))
  ([aae0212](https://github.com/tinkoff/taiga-ui/commit/aae0212c82854deec152f8e99998aed4592e57c0))
- **addon-editor:** add missing starterkit dependencies ([#2764](https://github.com/tinkoff/taiga-ui/issues/2764))
  ([3d017b6](https://github.com/tinkoff/taiga-ui/commit/3d017b66f88bc5112d243f666847b07095aa30a0))
- **core:** `Expand` return `tuiExpandContent`-directive ([#2753](https://github.com/tinkoff/taiga-ui/issues/2753))
  ([0027332](https://github.com/tinkoff/taiga-ui/commit/00273321b5b7b1115ba899d622654e7946de2e45))
- **kit:** `InputNumber` introduce safe integers for min/max props
  ([#2781](https://github.com/tinkoff/taiga-ui/issues/2781))
  ([27f7c86](https://github.com/tinkoff/taiga-ui/commit/27f7c86dd3146145318070fb0fdf10cba18e5d6c))

## [3.4.0](https://github.com/tinkoff/taiga-ui/compare/v3.3.0...v3.4.0) (2022-09-27)

### Features

- **testing:** add component harness test for primitive-textfield component
  ([#2584](https://github.com/tinkoff/taiga-ui/issues/2584))
  ([40e2a91](https://github.com/tinkoff/taiga-ui/commit/40e2a916564c5d669750dbbee9c799b82d442775))
- **testing:** add harness for island ([#2727](https://github.com/tinkoff/taiga-ui/issues/2727))
  ([f938d49](https://github.com/tinkoff/taiga-ui/commit/f938d491bc7c0a9a806b354776f0d50709d04e32))

### Bug Fixes

- **addon-editor:** add deps for starter-kit ([#2757](https://github.com/tinkoff/taiga-ui/issues/2757))
  ([8c07868](https://github.com/tinkoff/taiga-ui/commit/8c078689ee01aa9a242237b70ecd628a329a3fe8))
- **cdk:** `schematics` add `Node.js < 16`-support ([#2744](https://github.com/tinkoff/taiga-ui/issues/2744))
  ([69d20d5](https://github.com/tinkoff/taiga-ui/commit/69d20d508dd92dc353dc0e080cf138446bbb7fa2))
- **core:** `Hint` fix offscreen position on small devices ([#2749](https://github.com/tinkoff/taiga-ui/issues/2749))
  ([e249a54](https://github.com/tinkoff/taiga-ui/commit/e249a54c740cf3ac35bf57234542d950a867e5e3))
- **core:** `PrimitiveTextfield` drop wrong `text-overflow: ellipsis` (horizontal scroll bug)
  ([#2733](https://github.com/tinkoff/taiga-ui/issues/2733))
  ([2ddc249](https://github.com/tinkoff/taiga-ui/commit/2ddc24947b5324f58cc3a903a2e63a48f9c1d673))
- **demo:** `Stackblitz` broken styles ([#2747](https://github.com/tinkoff/taiga-ui/issues/2747))
  ([1bf9e2d](https://github.com/tinkoff/taiga-ui/commit/1bf9e2d88f4543fb259d8807f666791239c5059f))
- **eslint-plugin:** `no-deep-imports` add `Windows`-OS support
  ([#2741](https://github.com/tinkoff/taiga-ui/issues/2741))
  ([e54e3de](https://github.com/tinkoff/taiga-ui/commit/e54e3de79d47afdfab45e2c59932059aa42c57d7))

## [3.3.0](https://github.com/tinkoff/taiga-ui/compare/v3.2.0...v3.3.0) (2022-09-16)

### Features

- **eslint-plugin:** new `no-deep-imports`-rule ([#2666](https://github.com/tinkoff/taiga-ui/issues/2666))
  ([467420e](https://github.com/tinkoff/taiga-ui/commit/467420edc83da349fce9dfa00a099d7845b0913f))
- **eslint-plugin:** new `prefer-inject-decorator`-rule ([#2688](https://github.com/tinkoff/taiga-ui/issues/2688))
  ([3105204](https://github.com/tinkoff/taiga-ui/commit/3105204efdc4c7ecaa9d51e12a3f5c1110bc79c7))

### Bug Fixes

- **addon-table:** support partial objects ([#2722](https://github.com/tinkoff/taiga-ui/issues/2722))
  ([550b11a](https://github.com/tinkoff/taiga-ui/commit/550b11ade0fd951a6f42659909de9cc58f392b50))
- **core:** `styles` sync `.scss`-files with `.less`-files ([#2717](https://github.com/tinkoff/taiga-ui/issues/2717))
  ([1549898](https://github.com/tinkoff/taiga-ui/commit/154989812739818b2c21c439411aedb9f562a02b))
- **kit:** `InputFlies` new value of i18n-token `TUI_INPUT_FILE_TEXTS` triggers text changes
  ([#2711](https://github.com/tinkoff/taiga-ui/issues/2711))
  ([fa4e1e1](https://github.com/tinkoff/taiga-ui/commit/fa4e1e184b9bdac06add3b4c249bca151f2b8d9f))
- **kit:** `InputPhoneInternational` extend country masks for Croatia and Bosnia
  ([#2713](https://github.com/tinkoff/taiga-ui/issues/2713))
  ([d26b3cb](https://github.com/tinkoff/taiga-ui/commit/d26b3cbf51264f423c3680b04df1efefaeb8360d))

## [3.2.0](https://github.com/tinkoff/taiga-ui/compare/v3.1.0...v3.2.0) (2022-09-12)

### Features

- **eslint-plugin:** new `injection-token-description`-rule ([#2661](https://github.com/tinkoff/taiga-ui/issues/2661))
  ([3a30d5b](https://github.com/tinkoff/taiga-ui/commit/3a30d5b61e09f567309de7526fe46d534b77f5c6))
- **kit:** `InputDateRange` navigate months in sync, cancel unfinished range on esc
  ([#2647](https://github.com/tinkoff/taiga-ui/issues/2647))
  ([14f2907](https://github.com/tinkoff/taiga-ui/commit/14f2907ceb775bfaf6b303a2fe2fbe21754fffa5))

### Bug Fixes

- **addon-editor:** using editor-socket inside editor to fix editor styles
  ([#2631](https://github.com/tinkoff/taiga-ui/issues/2631))
  ([68b0acb](https://github.com/tinkoff/taiga-ui/commit/68b0acb048eb6a3f3544f5fe077b3ede0c048bd8))
- **addon-table:** Type string is not assignable to type keyof T
  ([#2649](https://github.com/tinkoff/taiga-ui/issues/2649))
  ([bb6d824](https://github.com/tinkoff/taiga-ui/commit/bb6d824c37a986d248e7af1aa1f2c7aa9c13a7b1))
- **cdk:** `schematics` migration 3.x `Error: Cannot determine project target configuration`
  ([#2669](https://github.com/tinkoff/taiga-ui/issues/2669))
  ([eba43c0](https://github.com/tinkoff/taiga-ui/commit/eba43c0ddd716f23eb0ed7cdfd1989c0977aafd7))
- **core:** support `text-overflow` in `tuiTextfield` ([#2657](https://github.com/tinkoff/taiga-ui/issues/2657))
  ([9b72134](https://github.com/tinkoff/taiga-ui/commit/9b72134f54d83a501dbd858d6178cf73d8dcd2ff))
- **demo:** make `Stackblitz` to be compatible with `Taiga UI 3.0`
  ([#2636](https://github.com/tinkoff/taiga-ui/issues/2636))
  ([5130208](https://github.com/tinkoff/taiga-ui/commit/51302086222762ce7254b70a6c3744aea6f8e80d))

## [3.1.0](https://github.com/tinkoff/taiga-ui/compare/v3.0.1...v3.1.0) (2022-09-07)

### Features

- **addon-table:** `TUI_TABLE_PAGINATION_OPTIONS` add `showPages` option
  ([#2586](https://github.com/tinkoff/taiga-ui/issues/2586))
  ([dc70f38](https://github.com/tinkoff/taiga-ui/commit/dc70f38d27319bd77185df095c8e4e7b41c0239f))
- **testing:** `SVG`, `Badge` component harness ([#2582](https://github.com/tinkoff/taiga-ui/issues/2582))
  ([1a8b77a](https://github.com/tinkoff/taiga-ui/commit/1a8b77a83e8614ddbf817e516787d2bddb1bec70)),
  ([#2583](https://github.com/tinkoff/taiga-ui/issues/2583))
  ([5797282](https://github.com/tinkoff/taiga-ui/commit/579728279707bc600aa5d7043fdbd51fcdaa9eff))

### Bug Fixes

- add compatibility with TypeScript 4.8 ([#2608](https://github.com/tinkoff/taiga-ui/issues/2608))
  ([42f8d91](https://github.com/tinkoff/taiga-ui/commit/42f8d91f8d6b57a564f72be8781c8a09ef527c46))
- **addon-commerce:** `InputCardGrouped` fix dropdown width ([#2616](https://github.com/tinkoff/taiga-ui/issues/2616))
  ([4aa5026](https://github.com/tinkoff/taiga-ui/commit/4aa502682e37ca8de5e89df166bb2588be021c11))
- **addon-table:** `ThGroup` fix columns updating ([#2602](https://github.com/tinkoff/taiga-ui/issues/2602))
  ([1de7c24](https://github.com/tinkoff/taiga-ui/commit/1de7c2447582ac29dbbb425973c3fd6d30105b68))
- **cdk:** `parse5` & `ng-morph` move `dependencies` => `optionalDependencies`
  ([#2604](https://github.com/tinkoff/taiga-ui/issues/2604))
  ([8a6d3a8](https://github.com/tinkoff/taiga-ui/commit/8a6d3a8262807839e69db077bab270f6b804fd0e))
- **core:** fix dialog header type ([#2559](https://github.com/tinkoff/taiga-ui/issues/2559))
  ([36d0aa4](https://github.com/tinkoff/taiga-ui/commit/36d0aa4abc2ef1065110a698f246e8f56be30996))
- **kit:** `Carousel` reset autoscroll timer when index changes
  ([#2614](https://github.com/tinkoff/taiga-ui/issues/2614))
  ([4c1b958](https://github.com/tinkoff/taiga-ui/commit/4c1b9586579900101ed44805f3463c1b18fbea5c))
- **kit:** `InputNumber` fix positive min/negative max clipping
  ([#2575](https://github.com/tinkoff/taiga-ui/issues/2575))
  ([87b13f7](https://github.com/tinkoff/taiga-ui/commit/87b13f7381ca945ad56b93accccbeb45d0bceb25))

### [3.0.1](https://github.com/tinkoff/taiga-ui/compare/v3.0.0...v3.0.1) (2022-09-01)

### Bug Fixes

- **cdk:** `schematics` fix 3.0-migration for `tuiTextfieldInputMode`
  ([#2544](https://github.com/tinkoff/taiga-ui/issues/2544))
  ([9f8fd3d](https://github.com/tinkoff/taiga-ui/commit/9f8fd3d2454e1a32b1dd40cd455292524857b658))
- **core:** `DropdownContext` close previous dropdown after new one is opened
  ([#2535](https://github.com/tinkoff/taiga-ui/issues/2535))
  ([ae45123](https://github.com/tinkoff/taiga-ui/commit/ae451233a3cf1c79ca137431b51a39df028abeb0))

## [3.0.0](https://github.com/tinkoff/taiga-ui/compare/v2.62.1...v3.0.0) (2022-08-30)

### ⚠ BREAKING CHANGES

- Update to Angular 12 ([#2080](https://github.com/tinkoff/taiga-ui/issues/2080),
  [#2097](https://github.com/tinkoff/taiga-ui/issues/2097), [#2110](https://github.com/tinkoff/taiga-ui/issues/2110)).
  Enable `Ivy` by default ([#2076](https://github.com/tinkoff/taiga-ui/issues/2076)). Drop legacy `View Engine`-support.
- Migrate to [Polymorpheus](https://github.com/Tinkoff/ng-polymorpheus) 4.x.x
  ([#2165](https://github.com/tinkoff/taiga-ui/issues/2165)).
- Update supported browser versions. Drop support of legacy not-chromium Edge (EdgeHTML)
  ([#2318](https://github.com/tinkoff/taiga-ui/issues/2318)). Bump supported `Safari` to `12.1+`
  ([#2391](https://github.com/tinkoff/taiga-ui/issues/2391)).
- All exported entities without `tui`-prefix was renamed to the same one with prefix: functions, constants, pipes,
  classes, etc.
- **styles:** move all global styles from `@taiga-ui/core` to new optional package `@taiga-ui/styles`
  ([#2320](https://github.com/tinkoff/taiga-ui/issues/2320)). Delete `tui-palette.less` (`data-tui-background` and
  `data-tui-color` global states) ([#2473](https://github.com/tinkoff/taiga-ui/issues/2473)).
- **core:** `Dropdown` refactor dropdowns completely ([#2389](https://github.com/tinkoff/taiga-ui/issues/2389)).
- **kit:** remove legacy `InputFile` component ([#2087](https://github.com/tinkoff/taiga-ui/issues/2087)). Use new
  `InputFiles` component instead.
- **addon-editor:** replace legacy `Editor` with new one based on popular open-source solution
  [TipTap](https://tiptap.dev).
- **core:** `Hint` support 12 directions ([#2256](https://github.com/tinkoff/taiga-ui/issues/2256)). Add context input
  ([#2273](https://github.com/tinkoff/taiga-ui/issues/2273)). Add new directive `HintDescribe`
  ([#2495](https://github.com/tinkoff/taiga-ui/issues/2495)). `HintController` remove separate module (move inside
  `TuiHintModule`) ([#2484](https://github.com/tinkoff/taiga-ui/issues/2484)).
- **core:** `TuiTextfieldController` delete `tuiTextfieldAutocomplete`, `tuiTextfieldExampleText`,
  `tuiTextfieldInputMode`, `tuiTextfieldMaxLength`, `tuiTextfieldType`
  ([#2410](https://github.com/tinkoff/taiga-ui/issues/2410)) in favor of native input alternatives. Allow passing icons
  at both sides simultaneously in textfield components ([#2037](https://github.com/tinkoff/taiga-ui/issues/2037)).
- **kit:** `Slider` | `InputSlider` | `Range` | `InputRange` drop all deprecated API
  ([#2200](https://github.com/tinkoff/taiga-ui/issues/2200), [#2207](https://github.com/tinkoff/taiga-ui/issues/2207),
  [#2215](https://github.com/tinkoff/taiga-ui/issues/2215), [#2243](https://github.com/tinkoff/taiga-ui/issues/2243)).
  Use strict version of `TuiKeySteps` ([#2220](https://github.com/tinkoff/taiga-ui/issues/2220)). Delete legacy
  `<tui-slider />` ([#2184](https://github.com/tinkoff/taiga-ui/issues/2184)).
- **kit:** `Action` new selector `button[tuiAction], a[tuiAction]`
  ([#2479](https://github.com/tinkoff/taiga-ui/issues/2479)). Better customization + new API
  ([#2505](https://github.com/tinkoff/taiga-ui/issues/2505))
- **kit:** `Stepper` rename `state` input (=> `stepState`) to avoid collision with `routerLink`
  ([#2437](https://github.com/tinkoff/taiga-ui/issues/2437)).
- **core:** remove `tuiExpandContent` directive ([#2501](https://github.com/tinkoff/taiga-ui/issues/2501))
- **kit:** `DataListDropdownManager` move into separate module
  ([#2317](https://github.com/tinkoff/taiga-ui/issues/2317))
- **cdk:** `Let` directive can emit `null` ([#2496](https://github.com/tinkoff/taiga-ui/issues/2496))
- **cdk:** remove deprecated `setNativeFocused`,`tuiCustomEvents`, `tuiPadStart`, `getClosestElement`, `fallbackValue`
  ([#2074](https://github.com/tinkoff/taiga-ui/issues/2074), [#2276](https://github.com/tinkoff/taiga-ui/issues/2276)).
  Use native alternatives.
- **core:** `tuiFormatNumber(value, configs)` new function signature
  ([#2309](https://github.com/tinkoff/taiga-ui/issues/2309))
- **cdk:** `tuiGetClosestFocusableElement(configs)` new function signature
  ([#2436](https://github.com/tinkoff/taiga-ui/issues/2436))
- **core:** new names of css breakpoints ([#2393](https://github.com/tinkoff/taiga-ui/issues/2393)).
- **core:** remove deprecated pluralize ([#2222](https://github.com/tinkoff/taiga-ui/issues/2222)). Use Angular built-in
  [I18nPluralPipe](https://angular.io/api/common/I18nPluralPipe).
- **core:** move fonts to separate file `taiga-ui-fonts.less` ([#2132](https://github.com/tinkoff/taiga-ui/issues/2132))
- Replace deprecated directives (`*tuiTab`, `*tuiBreadcrumb`,`[tuiToolbarTool]`) with universal `tuiItem`-directive
  ([#2069](https://github.com/tinkoff/taiga-ui/issues/2069))
- Move all color-converter utils (`addon-editor` / `addon-doc` => `cdk`)
  ([#2280](https://github.com/tinkoff/taiga-ui/issues/2280))
- Remove `tui-wrapper`, `tui-group`, `table-mode`, `field-error` component, `tui-breadcrumb` items
  ([#2121](https://github.com/tinkoff/taiga-ui/issues/2121)).
- **kit:** remove deprecated `TUI_MOBILE_AWARE` ([#2099](https://github.com/tinkoff/taiga-ui/issues/2099)).
- **core:** `AlertComponent` use new context ([#2362](https://github.com/tinkoff/taiga-ui/issues/2362))
- **cdk:** `PortalService` switch to using `PolymorpheusComponent`
- **addon-commerce, addon-chart:** remove deprecated enums ([#2095](https://github.com/tinkoff/taiga-ui/issues/2095))
- remove deprecated core-enums, `TuiColor`, `colorFallback`, `DEFAULT_COLORS`, `TuiColorHandler`
  ([#2158](https://github.com/tinkoff/taiga-ui/issues/2158))
- remove date-time related deprecations, `EMPTY_VALIDATOR` ([#2164](https://github.com/tinkoff/taiga-ui/issues/2164))
- remove deprecated properties from `AbstractTuiInteractive` ([#2124](https://github.com/tinkoff/taiga-ui/issues/2124))
- remove autofill enums ([#2500](https://github.com/tinkoff/taiga-ui/issues/2500)).

### Migration guide

This release introduces a lot of breaking changes.<br/> Most of them can be solved automatically with the following
command:

```
ng update @taiga-ui/cdk
```

**Troubleshooting:**

- Npm 7 has a known [issue](https://github.com/npm/cli/issues/3666). If you face "Conflicting peer dependency"-error,
  try the following workaround:<br/> `ng update @taiga-ui/cdk --force`.
- If you face any other issues, try to update all Taiga UI's packages manually.<br/> Then check that
  `node_modules/@taiga-ui/cdk/package.json` contains `3.x.x`-version.<br/> After all, run
  `ng update @taiga-ui/cdk --migrate-only --from=2 --to=3`.
- If any problem still persists, please, [create an issue](https://github.com/Tinkoff/taiga-ui/issues/new/choose).

### [2.62.3](https://github.com/tinkoff/taiga-ui/compare/v2.62.2...v2.62.3) (2022-09-07)

### Bug Fixes

- **addon-table:** `ThGroup` fix columns updating ([#2601](https://github.com/tinkoff/taiga-ui/issues/2601))
  ([3467bff](https://github.com/tinkoff/taiga-ui/commit/3467bfff515dc0dd57a6e036782542a69ac2b916))
- **kit:** `Carousel` reset autoscroll timer when index changes
  ([#2613](https://github.com/tinkoff/taiga-ui/issues/2613))
  ([6b8e578](https://github.com/tinkoff/taiga-ui/commit/6b8e5788ababf2b8880397b46f8698633d967ab7))

### [2.62.2](https://github.com/tinkoff/taiga-ui/compare/v2.62.1...v2.62.2) (2022-09-05)

### Bug Fixes

- **core:** prevent injection conflict with CSS global interface
  ([#2508](https://github.com/tinkoff/taiga-ui/issues/2508))
  ([60bd130](https://github.com/tinkoff/taiga-ui/commit/60bd13052d9dfb33057326b1e4f02961518ea3cd))
- **kit:** InputNumber fix positive min/negative max clipping ([#2593](https://github.com/tinkoff/taiga-ui/issues/2593))
  ([460074d](https://github.com/tinkoff/taiga-ui/commit/460074d4443a24b10a2e34f28e611ecc0dbcd013))
- **core:** prevent injection conflict with CSS global interface
  ([#2508](https://github.com/tinkoff/taiga-ui/issues/2508))

### [2.62.1](https://github.com/tinkoff/taiga-ui/compare/v2.62.0...v2.62.1) (2022-08-29)

### Bug Fixes

- **cdk:** support to override return type in compile time for dialogs
  ([#2503](https://github.com/tinkoff/taiga-ui/issues/2503))
  ([6bac921](https://github.com/tinkoff/taiga-ui/commit/6bac921e91362c0d0543d5014bcef186c3bab1ec))

## [2.62.0](https://github.com/tinkoff/taiga-ui/compare/v2.61.0...v2.62.0) (2022-08-26)

### Features

- **addon-editor:** add `TUI_EDITOR_MAX_IMAGE_WIDTH` token ([#2476](https://github.com/tinkoff/taiga-ui/issues/2476))
  ([8757537](https://github.com/tinkoff/taiga-ui/commit/8757537e61109f36c1d55be36a0be8af352fbca5))
- **cdk:** `FormatDate` add new pipe ([#2468](https://github.com/tinkoff/taiga-ui/issues/2468))
  ([e953b16](https://github.com/tinkoff/taiga-ui/commit/e953b160707b8030fd037d51a7b20b578beaf815))
- **kit:** `Push` add new component ([#2469](https://github.com/tinkoff/taiga-ui/issues/2469))
  ([8de5a65](https://github.com/tinkoff/taiga-ui/commit/8de5a650ef6d62ce30094baa6fc28c5dda20d4ad))

## [2.61.0](https://github.com/tinkoff/taiga-ui/compare/v2.60.0...v2.61.0) (2022-08-23)

### Features

- **kit:** `Badge` add new `xs` size ([#2397](https://github.com/tinkoff/taiga-ui/issues/2397))
  ([90ba012](https://github.com/tinkoff/taiga-ui/commit/90ba01248193409d4360eab9e16990167b078366))

### Bug Fixes

- **addon-editor:** fix tab behaviour ([#2375](https://github.com/tinkoff/taiga-ui/issues/2375))
  ([8f0c6db](https://github.com/tinkoff/taiga-ui/commit/8f0c6db3611b27ecdbdc711d87c0b8fe1a61198d))
- **core:** character descenders overflow the line ([#2387](https://github.com/tinkoff/taiga-ui/issues/2387))
  ([6125137](https://github.com/tinkoff/taiga-ui/commit/61251373982182b8074240c5ba4513234ddb76af))
- **i18n:** support typings for custom languages ([#2384](https://github.com/tinkoff/taiga-ui/issues/2384))
  ([bed8892](https://github.com/tinkoff/taiga-ui/commit/bed8892b0b9cbe7afc1e8d87413e8551c94c137c))
- **kit:** `TextArea` fix incorrect padding on newer iOS ([#2403](https://github.com/tinkoff/taiga-ui/issues/2403))
  ([de4f160](https://github.com/tinkoff/taiga-ui/commit/de4f1609f68f5e8fd5f05308db800afb044f3026))

## [2.60.0](https://github.com/tinkoff/taiga-ui/compare/v2.59.1...v2.60.0) (2022-08-15)

### Features

- **addon-commerce:** add `UZS`, `KGS`, `AED` ([#2357](https://github.com/tinkoff/taiga-ui/issues/2357))
  ([488f3ec](https://github.com/tinkoff/taiga-ui/commit/488f3ecf02ddbb554ebfcb06a605017ffa3259fe))

### Bug Fixes

- **addon-table:** fix sort chevron direction to correctly match the sorting state.
  ([cb6b9ec](https://github.com/tinkoff/taiga-ui/commit/cb6b9ec745e630ea9c28cfb6b8c554dbdf585d4a))
- **cdk:** `ParentAnimation` properly query direct child ([#2368](https://github.com/tinkoff/taiga-ui/issues/2368))
  ([12c78ad](https://github.com/tinkoff/taiga-ui/commit/12c78adc68c4098f372e4639ff2057b5107e6748))

### [2.59.1](https://github.com/tinkoff/taiga-ui/compare/v2.59.0...v2.59.1) (2022-08-12)

### Bug Fixes

- **core:** css media breakpoints correction (edge cases)
  ([e504965](https://github.com/tinkoff/taiga-ui/commit/e5049650fdc548eda8ec8f797cc98854c6e9a521))
- **core:** set transparent of autofill only for bank cards
  ([3ccad4d](https://github.com/tinkoff/taiga-ui/commit/3ccad4dbc54daf1c365caf3ee51d4d629a41ee99))

## [2.59.0](https://github.com/tinkoff/taiga-ui/compare/v2.58.1...v2.59.0) (2022-08-11)

### Features

- **core:** `Button` add `mono` style ([#2339](https://github.com/tinkoff/taiga-ui/issues/2339))
  ([943c57c](https://github.com/tinkoff/taiga-ui/commit/943c57c2103cde34ab1a5da8f6c9b8551f78b4bf))

### Bug Fixes

- **cdk:** don't override deep imports inside less files
  ([edf2505](https://github.com/tinkoff/taiga-ui/commit/edf2505e1a13194c49db66c85ff4a498cc216a4b))
- **i18n:** `InputFiles` small misspells corrections (English)
  ([#2344](https://github.com/tinkoff/taiga-ui/issues/2344))
  ([59a1b3d](https://github.com/tinkoff/taiga-ui/commit/59a1b3d316ca73770e4bff611edd6a23e11ce774))
- **kit:** `Tabs` fix opening dropdown on clicking margin area
  ([#2338](https://github.com/tinkoff/taiga-ui/issues/2338))
  ([de37918](https://github.com/tinkoff/taiga-ui/commit/de379184653c1b4bd62ff8666422e134400d6584))

### [2.58.1](https://github.com/tinkoff/taiga-ui/compare/v2.58.0...v2.58.1) (2022-08-10)

### Bug Fixes

- **core:** support dark-theme for `tui-skeleton`
  ([6de5167](https://github.com/tinkoff/taiga-ui/commit/6de5167cfaecbcbeb93e9df35cd168185c242d94))
- **kit:** support dark-theme for `TuiLazyLoadingDirective`
  ([70d703b](https://github.com/tinkoff/taiga-ui/commit/70d703b14cb368b1d83a1d8b59c9f9313be6158b))
- **addon-editor:** prevent emit `null` for editor
  ([4f0ddad](https://github.com/tinkoff/taiga-ui/commit/4f0ddada32ea0643bbaa0c1cb83c3f3d4e367179))

## [2.58.0](https://github.com/tinkoff/taiga-ui/compare/v2.57.0...v2.58.0) (2022-08-08)

### Features

- **addon-commerce:** add description for Mexican peso currency
  ([ec943be](https://github.com/tinkoff/taiga-ui/commit/ec943bec478cc6828d5f4842d8d572d99ba58092))
- **cdk:** add laquo and raquo unicode symbols
  ([fe66091](https://github.com/tinkoff/taiga-ui/commit/fe660914b4c5ad4053218bf1091a47a154531ffc))
- **core:** `Button` add `secondary-destructive` appearance ([#2282](https://github.com/tinkoff/taiga-ui/issues/2282))
  ([de84eb6](https://github.com/tinkoff/taiga-ui/commit/de84eb6765910b2c0a29596875cfd2da635b25e7))
- **core:** add round corners to paddingless tables ([#2284](https://github.com/tinkoff/taiga-ui/issues/2284))
  ([d481c76](https://github.com/tinkoff/taiga-ui/commit/d481c76fb14d0932794d42cc0b1e5d56782c1c40))
- **i18n:** add switcher for language
  ([4e1b70e](https://github.com/tinkoff/taiga-ui/commit/4e1b70e838765bfe2d836b5c5c58d80337d2a069))

### Bug Fixes

- **cdk:** correct autofill value for input controls
  ([4af8e20](https://github.com/tinkoff/taiga-ui/commit/4af8e2091826a103ed77cf21aca611f16f8dba36))
- **core:** card number overlay after autofill in dark theme
  ([16dc18c](https://github.com/tinkoff/taiga-ui/commit/16dc18c1353d5166753241944e561d21e7613013))
- **kit:** `Slider` incorrect calculations with `[ngModel]` + `[keySteps]`
  ([#2262](https://github.com/tinkoff/taiga-ui/issues/2262))
  ([99dfee1](https://github.com/tinkoff/taiga-ui/commit/99dfee172da461844b1f5b80531640970d691856))
- **kit:** current range must be a text node only
  ([58951ba](https://github.com/tinkoff/taiga-ui/commit/58951ba92151d44a355db4494ae8749a2ef57bf6))

### Deprecations

- **kit:** `InputTag` deprecate property `[allowSpaces]` ([#2286](https://github.com/tinkoff/taiga-ui/issues/2286))
  ([0a6c5d2](https://github.com/tinkoff/taiga-ui/commit/0a6c5d28f80af784598a83939d8d56601b016a3b))

## [2.57.0](https://github.com/tinkoff/taiga-ui/compare/v2.56.0...v2.57.0) (2022-08-02)

### Features

- **addon-editor:** add group extension
  ([86082f2](https://github.com/tinkoff/taiga-ui/commit/86082f21b369095129eb4fbe69cf462df10aae9a))

### Bug Fixes

- **kit:** use `break-all` for `LineClamp`
  ([2a24854](https://github.com/tinkoff/taiga-ui/commit/2a24854b8608ac2bdfed4f15eca44ffeb343c9e7))

## [2.56.0](https://github.com/tinkoff/taiga-ui/compare/v2.55.0...v2.56.0) (2022-07-28)

### Features

- **addon-editor:** add `TUI_EDITOR_CONTENT_PROCESSOR` ([#2213](https://github.com/tinkoff/taiga-ui/issues/2213))
  ([ce4c5d4](https://github.com/tinkoff/taiga-ui/commit/ce4c5d473688d193baec29bcccd7fdff6d819fba))

### Bug Fixes

- **addon-editor:** fix editing links ([#2228](https://github.com/tinkoff/taiga-ui/issues/2228))
  ([f8ffee0](https://github.com/tinkoff/taiga-ui/commit/f8ffee053462f6e9c1130b6814bd8cdb41a62a3b))
- **kit:** `InputSlider` props `[prefix]`/`[postfix]` + `[valueContent]` overlaps each other on blur
  ([#2225](https://github.com/tinkoff/taiga-ui/issues/2225))
  ([b75802e](https://github.com/tinkoff/taiga-ui/commit/b75802ec35347782de8ad2a650df92f2a12e6b77))

## [2.55.0](https://github.com/tinkoff/taiga-ui/compare/v2.54.1...v2.55.0) (2022-07-26)

### Features

- **addon-doc:** set fragment to url when copy link ([#2178](https://github.com/tinkoff/taiga-ui/issues/2178))
  ([17a469a](https://github.com/tinkoff/taiga-ui/commit/17a469a9bf13d9620f52f5b44849bc850d2b7849))
- **addon-table:** `TableFilters` add new module ([#2210](https://github.com/tinkoff/taiga-ui/issues/2210))
  ([8e31064](https://github.com/tinkoff/taiga-ui/commit/8e310641a1c52f4f74e76a70fce6c674fd084aef))
- **core:** add more customization for `font-size` in buttons ([#2188](https://github.com/tinkoff/taiga-ui/issues/2188))
  ([2538537](https://github.com/tinkoff/taiga-ui/commit/2538537c37dc1572b4cba9935e21c56352c6f619))
- **i18n:** add `Republic of Kosovo` code ([#2187](https://github.com/tinkoff/taiga-ui/issues/2187))
  ([75269aa](https://github.com/tinkoff/taiga-ui/commit/75269aa5acee8178738068393c653c4c41646086))
- **i18n:** add Chinese language
  ([9d65b46](https://github.com/tinkoff/taiga-ui/commit/9d65b468c950fb9a109a58ff3f49d355dbdc702e))
- **kit:** `Slider` new helper `tuiSliderThumbLabel` ([#2128](https://github.com/tinkoff/taiga-ui/issues/2128))
  ([664fc95](https://github.com/tinkoff/taiga-ui/commit/664fc9587fa35269b63363b177288ef955259afe))

### Bug Fixes

- **addon-commerce:** incorrect punctuation marks ([#2160](https://github.com/tinkoff/taiga-ui/issues/2160))
  ([97e51ca](https://github.com/tinkoff/taiga-ui/commit/97e51ca80ffd4922df8b57f69ddc1f1e97a280a2))
- **cdk, schematics:** add BrowserAnimationsModule before TuiRootModule
  ([#2173](https://github.com/tinkoff/taiga-ui/issues/2173))
  ([a17eace](https://github.com/tinkoff/taiga-ui/commit/a17eace1df4b1eee69d0d041953f3ee157bcaa25))
- **cdk:** right-hand side of 'instanceof' is not an object ([#2206](https://github.com/tinkoff/taiga-ui/issues/2206))
  ([6dc142c](https://github.com/tinkoff/taiga-ui/commit/6dc142cfe5c8f48cb3fd56fc73de8ff57440de3e))
- **core:** redundant width by `desktop-m-min` for alerts ([#2196](https://github.com/tinkoff/taiga-ui/issues/2196))
  ([d40e14d](https://github.com/tinkoff/taiga-ui/commit/d40e14dc46bbf60da39b54491691802649327ff4))
- **i18n:** translated some fields for `addon-editor` ([#2204](https://github.com/tinkoff/taiga-ui/issues/2204))
  ([948d3d5](https://github.com/tinkoff/taiga-ui/commit/948d3d52500d85af01bf54e52aba1a2436089286))
- **kit:** clamp activeIndex for `tabs-with-more` ([#2101](https://github.com/tinkoff/taiga-ui/issues/2101))
  ([15649f9](https://github.com/tinkoff/taiga-ui/commit/15649f9581db5df0b37e135145c42461f8adf672))

### [2.54.1](https://github.com/tinkoff/taiga-ui/compare/v2.54.0...v2.54.1) (2022-07-20)

### Bug Fixes

- **addon-editor:** add `font-size` entry point ([#2161](https://github.com/tinkoff/taiga-ui/issues/2161))
  ([2451d45](https://github.com/tinkoff/taiga-ui/commit/2451d454bdd3675f9b7ad79aac5c6cd606797b0d))
- **addon-mobile:** replaced `percentages` to `vh` for prevent regression
  ([#2162](https://github.com/tinkoff/taiga-ui/issues/2162))
  ([5af99eb](https://github.com/tinkoff/taiga-ui/commit/5af99ebc6680d37ed507882d8e78cb54353d667e))

## [2.54.0](https://github.com/tinkoff/taiga-ui/compare/v2.53.0...v2.54.0) (2022-07-19)

### Features

- **addon-editor:** support customization font-size ([#2133](https://github.com/tinkoff/taiga-ui/issues/2133))
  ([5760b45](https://github.com/tinkoff/taiga-ui/commit/5760b45916d4753f54db62d63c3663c73debe277))
- **core:** customization default text to button in dialog ([#2140](https://github.com/tinkoff/taiga-ui/issues/2140))
  ([003e41a](https://github.com/tinkoff/taiga-ui/commit/003e41a2b5055a63f3a5f88b0ac15716ca40a8dc))
- **kit:** `LineClamp` add `showHint` option add `overflowChange` output
  ([#2130](https://github.com/tinkoff/taiga-ui/issues/2130))
  ([293dc6a](https://github.com/tinkoff/taiga-ui/commit/293dc6adf1227f88f07c9a287355df5a25fcb75e))

### Bug Fixes

- **addon-editor:** support nested bullet list ([#2139](https://github.com/tinkoff/taiga-ui/issues/2139))
  ([07198f5](https://github.com/tinkoff/taiga-ui/commit/07198f51a938bf66b9668112331bdf8cc8804d4a))
- **addon-mobile:** close sheet when extended to full state ([#2116](https://github.com/tinkoff/taiga-ui/issues/2116))
  ([d040eb4](https://github.com/tinkoff/taiga-ui/commit/d040eb40dee01d117d3f276adc72213998828428))
- **core:** changed `vw/vh` to `percentage` for correct ensure viewport in safari
  ([#2135](https://github.com/tinkoff/taiga-ui/issues/2135))
  ([a25a63e](https://github.com/tinkoff/taiga-ui/commit/a25a63e9836bb37daf781109be314cea522fdebf))
- **i18n:** fix vietnamese ([#2126](https://github.com/tinkoff/taiga-ui/issues/2126))
  ([c8fce24](https://github.com/tinkoff/taiga-ui/commit/c8fce24c3db254f7c70acb6780282d859e9355e9))
- **kit:** `LineClamp` incorrect calculation of `overflown` ([#2136](https://github.com/tinkoff/taiga-ui/issues/2136))
  ([0609f65](https://github.com/tinkoff/taiga-ui/commit/0609f658b0991cb3b9cd6a8e07179289f57e4107))
- **kit:** `Slider` incorrect progress-filling after patching of `[(ngModel)]`-value
  ([#2123](https://github.com/tinkoff/taiga-ui/issues/2123))
  ([5e825c6](https://github.com/tinkoff/taiga-ui/commit/5e825c605252ebc0cc5b487a6de6213d737cee09))
- pin peer dependency range for `@ng-web-apis/*` ([#2151](https://github.com/tinkoff/taiga-ui/issues/2151))
  ([08583b7](https://github.com/tinkoff/taiga-ui/commit/08583b7ab09c779216dcd154912179f21a38c8ca))

## [2.53.0](https://github.com/tinkoff/taiga-ui/compare/v2.52.0...v2.53.0) (2022-07-11)

### Features

- **addon-doc:** new DI-token `TUI_DOC_SCROLL_BEHAVIOR` ([#2059](https://github.com/tinkoff/taiga-ui/issues/2059))
  ([a49b60f](https://github.com/tinkoff/taiga-ui/commit/a49b60f4e39960b829b407d7ed4f1da91f962241))

### Bug Fixes

- **addon-charts:** use `ng-container[ngTemplateOutlet]` instead of structural directive
  ([#2071](https://github.com/tinkoff/taiga-ui/issues/2071))
  ([c1d8b18](https://github.com/tinkoff/taiga-ui/commit/c1d8b187bb6ab101e98d67a5314d5e81d4bb504a))
- **addon-editor:** customize text color in dark/light mode ([#2088](https://github.com/tinkoff/taiga-ui/issues/2088))
  ([7c1d891](https://github.com/tinkoff/taiga-ui/commit/7c1d891ddfc807725f7bd0b4c712ad7760edfe52))
- **addon-editor:** improve ui/ux for font-size component ([#2094](https://github.com/tinkoff/taiga-ui/issues/2094))
  ([98797d8](https://github.com/tinkoff/taiga-ui/commit/98797d809d5e7f5b6c822d577afa3ec6498d12fe))
- **addon-editor:** support styles without paragraph for lists
  ([#2092](https://github.com/tinkoff/taiga-ui/issues/2092))
  ([a4d841a](https://github.com/tinkoff/taiga-ui/commit/a4d841a96b88d7ff7def73770e383bb00982a53a))
- **core:** `tuiLink` mustn't break inline model for anchors ([#2083](https://github.com/tinkoff/taiga-ui/issues/2083))
  ([eff9b8f](https://github.com/tinkoff/taiga-ui/commit/eff9b8f71bbd744378c256a8df8ff9eaa2775353))
- **core:** align to baseline value decoration postfix ([#2070](https://github.com/tinkoff/taiga-ui/issues/2070))
  ([4f1d4b7](https://github.com/tinkoff/taiga-ui/commit/4f1d4b7236943d1803cbe71a2f36ca4127af2aae))
- **kit:** `InputNumber` can't type minus using ios keyboard ([#2061](https://github.com/tinkoff/taiga-ui/issues/2061))
  ([4608b35](https://github.com/tinkoff/taiga-ui/commit/4608b35c22a7362439d7859f18541220ff923d5c))
- **kit:** `Tabs` redundant space after the last tab ([#2000](https://github.com/tinkoff/taiga-ui/issues/2000))
  ([bd8b847](https://github.com/tinkoff/taiga-ui/commit/bd8b8474261f3d6209fb896404e61d676db669a4))

## [2.52.0](https://github.com/tinkoff/taiga-ui/compare/v2.51.1...v2.52.0) (2022-07-05)

### Features

- **addon-doc:** new token `TUI_DOC_PAGE_LOADED` to fix anchor links (scroll to examples)
  ([#2031](https://github.com/tinkoff/taiga-ui/issues/2031))
  ([c43d7f5](https://github.com/tinkoff/taiga-ui/commit/c43d7f53d0109c519d8dbddcf3db5e488db58762))
- **addon-doc:** token `TUI_DOC_CODE_ACTIONS` + show required modules for controllers in examples
  ([#2013](https://github.com/tinkoff/taiga-ui/issues/2013))
  ([9606035](https://github.com/tinkoff/taiga-ui/commit/96060358bf1d1008dbfa9c4566b1e5f1a02a9e7d))

### Bug Fixes

- **core:** preserve whitespaces in postfix for value-decoration
  ([#2006](https://github.com/tinkoff/taiga-ui/issues/2006))
  ([c767c5d](https://github.com/tinkoff/taiga-ui/commit/c767c5dabd18c101279fb3c01778ed49fedd65f7))
- **kit:** `MultiSelect` inside `Group` border-radius problem ([#2050](https://github.com/tinkoff/taiga-ui/issues/2050))
  ([9858271](https://github.com/tinkoff/taiga-ui/commit/9858271ad5f865cd8c4a6d5f02257c56882596a7))
- **kit:** fix disableHover input in `AccordionItem` ([#2028](https://github.com/tinkoff/taiga-ui/issues/2028))
  ([4b8a7f8](https://github.com/tinkoff/taiga-ui/commit/4b8a7f85aac13a00095c0bcb7eca3c4de7db7b64))
- **kit:** sequences of white space are preserved for `inputTag`
  ([#2046](https://github.com/tinkoff/taiga-ui/issues/2046))
  ([253cabe](https://github.com/tinkoff/taiga-ui/commit/253cabedfc7688dbb99ba7e1a8459879768e980d))

### [2.51.1](https://github.com/tinkoff/taiga-ui/compare/v2.51.0...v2.51.1) (2022-06-28)

### Bug Fixes

- **core:** wrong detection of viewport for mobile device width
  ([6cd1203](https://github.com/tinkoff/taiga-ui/commit/6cd1203ec651237315dc8fa43e547d6541722004))

## [2.51.0](https://github.com/tinkoff/taiga-ui/compare/v2.50.2...v2.51.0) (2022-06-27)

### Bug Fixes

- **addon-editor:** dropdown shouldn't visible outside editor area
  ([#1934](https://github.com/tinkoff/taiga-ui/issues/1934))
  ([e773977](https://github.com/tinkoff/taiga-ui/commit/e7739776b7f38e3e83e70ab5269102e482b91416))
- **cdk:** `tuiOverscroll` fix preventing touch event on input range
  ([#1990](https://github.com/tinkoff/taiga-ui/issues/1990))
  ([ff2485f](https://github.com/tinkoff/taiga-ui/commit/ff2485fbc6529bba1fd2bbaae03a36562cbf0592))
- **cdk:** correct selection from textfield in firefox ([#1998](https://github.com/tinkoff/taiga-ui/issues/1998))
  ([dd72b82](https://github.com/tinkoff/taiga-ui/commit/dd72b82dc32f3ed2e9f205d8c649be65c7ccc330))
- **kit:** `LineClamp` very long word + `[linesLimit]=1` ([#1980](https://github.com/tinkoff/taiga-ui/issues/1980))
  ([70f500c](https://github.com/tinkoff/taiga-ui/commit/70f500c5d609c75a6b27d1d8071a7a2245652321))

### [2.50.2](https://github.com/tinkoff/taiga-ui/compare/v2.50.1...v2.50.2) (2022-06-22)

### Bug Fixes

- **core:** wrong handler which detect emulated desktop viewport
  ([#1987](https://github.com/tinkoff/taiga-ui/issues/1987))
  ([5d18148](https://github.com/tinkoff/taiga-ui/commit/5d18148fb2c5a0a786eb21b1030b4977540886e2))

### [2.50.1](https://github.com/tinkoff/taiga-ui/compare/v2.50.0...v2.50.1) (2022-06-22)

### Features

- **addon-chart:** `RingChart` use `ng-content` instead of input
  ([#1978](https://github.com/tinkoff/taiga-ui/issues/1978))
  ([da46ddc](https://github.com/tinkoff/taiga-ui/commit/da46ddcfd4431573a38a5368083332149ed09af5))

### Bug Fixes

- **addon-mobile:** fix overscroll for android ([#1977](https://github.com/tinkoff/taiga-ui/issues/1977))
  ([e354ded](https://github.com/tinkoff/taiga-ui/commit/e354ded6f833c16e02084b2530f35556d8dcbdca))
- **core:** `PrimitiveTextfield` fix prefix when aligned to the right
  ([#1969](https://github.com/tinkoff/taiga-ui/issues/1969))
  ([0520392](https://github.com/tinkoff/taiga-ui/commit/05203924f8aad9e72a11a3ddacf693d6be9c9e71))
- **core:** cross-browser viewport width for mobile ([#1979](https://github.com/tinkoff/taiga-ui/issues/1979))
  ([3226ad8](https://github.com/tinkoff/taiga-ui/commit/3226ad83a1beb59fa103f2016d9a6bb579439ce3))
- **kit:** `InputSlider` incorrect vertical alignment of slider
  ([#1967](https://github.com/tinkoff/taiga-ui/issues/1967))
  ([d37aae0](https://github.com/tinkoff/taiga-ui/commit/d37aae050e0c94ffeb9a3063d9960cf594b5cea0))

## [2.50.0](https://github.com/tinkoff/taiga-ui/compare/v2.49.2...v2.50.0) (2022-06-20)

### Features

- **addon-editor:** support new versions of prosemirror ([#1962](https://github.com/tinkoff/taiga-ui/issues/1962))
  ([66f2535](https://github.com/tinkoff/taiga-ui/commit/66f2535c6607a62127903e30e0b0ba81f582d04e))
- **addon-editor:** wrap tools to the new line when overflow ([#1958](https://github.com/tinkoff/taiga-ui/issues/1958))
  ([35cfe65](https://github.com/tinkoff/taiga-ui/commit/35cfe65e85d79f1e23e30487c3110e713ca65de2))
- **kit:** close `PdfViewer` with `Esc` key ([#1954](https://github.com/tinkoff/taiga-ui/issues/1954))
  ([d8a6bd5](https://github.com/tinkoff/taiga-ui/commit/d8a6bd53f197a0379f9016abc3d3253e0f54e02a))

### Bug Fixes

- **addon-commerce:** correct rounding for float values ([#1938](https://github.com/tinkoff/taiga-ui/issues/1938))
  ([8063372](https://github.com/tinkoff/taiga-ui/commit/80633725b6bb9dcb337bab80758b531ed3f789a5))
- **addon-mobile:** `Sheet` fix closing for tall content ([#1956](https://github.com/tinkoff/taiga-ui/issues/1956))
  ([f68d592](https://github.com/tinkoff/taiga-ui/commit/f68d592071722ab8d943bda1d1723c9cbcdcee7f))
- **cdk:** support ng-add for ng14 ([#1959](https://github.com/tinkoff/taiga-ui/issues/1959))
  ([515bc79](https://github.com/tinkoff/taiga-ui/commit/515bc79cfe0cb6f4be9e85b364070ed689d8b87a))
- **kit:** `InputSlider` property `[quantum]` does not properly work on blur
  ([#1957](https://github.com/tinkoff/taiga-ui/issues/1957))
  ([2270721](https://github.com/tinkoff/taiga-ui/commit/2270721eb92e3e76fcfdf1989ad4c7147ef341cf))
- **kit:** use correct mask for `RU`-phone number ([#1937](https://github.com/tinkoff/taiga-ui/issues/1937))
  ([8ec5090](https://github.com/tinkoff/taiga-ui/commit/8ec5090e70017de3e88ac7bc0e0e521879a12e5d))

### [2.49.2](https://github.com/tinkoff/taiga-ui/compare/v2.49.1...v2.49.2) (2022-06-17)

### Features

- **core:** `Dialog` add `auto` size ([#1931](https://github.com/tinkoff/taiga-ui/issues/1931))
  ([8510949](https://github.com/tinkoff/taiga-ui/commit/8510949d74df45c28f219cdc1de0202bfc1524fa))

### Bug Fixes

- **addon-table:** `Table` fix changing initial direction with server-side sorting
  ([#1935](https://github.com/tinkoff/taiga-ui/issues/1935))
  ([f9950c5](https://github.com/tinkoff/taiga-ui/commit/f9950c5be4047f2acf5d5fe06df37acb3fe47533))
- **core:** `tuiWrapper` fix icon appearance ([#1941](https://github.com/tinkoff/taiga-ui/issues/1941))
  ([2840da9](https://github.com/tinkoff/taiga-ui/commit/2840da98ea0f94a36355f342c3d538f495054e8a))
- **core:** removed CSS interface which unsupported in TS 3.9+
  ([#1940](https://github.com/tinkoff/taiga-ui/issues/1940))
  ([1bf0f0d](https://github.com/tinkoff/taiga-ui/commit/1bf0f0d52abcb6f8048094213d04f398d0456c4d))

### [2.49.1](https://github.com/tinkoff/taiga-ui/compare/v2.49.0...v2.49.1) (2022-06-16)

### Bug Fixes

- problem with invalid rxjs-types ([#1925](https://github.com/tinkoff/taiga-ui/issues/1925))
  ([51e1521](https://github.com/tinkoff/taiga-ui/commit/51e1521707a7b34b72a61522e58b03f0b09492f9))

## [2.49.0](https://github.com/tinkoff/taiga-ui/compare/v2.48.0...v2.49.0) (2022-06-14)

### Features

- **addon-editor:** support emoji data type for new prosemirror-model
  ([b590498](https://github.com/tinkoff/taiga-ui/commit/b5904984e3a65e4e1cb85b5e904df318b3f036a7))
- **cdk:** add `chromium, firefox, webkit` engine detection
  ([9fa5e1b](https://github.com/tinkoff/taiga-ui/commit/9fa5e1b1b9fc58f13c6b152d88b76b6f32dd5eff))
- **cdk:** constants `CHAR_HYPHEN` | `CHAR_EN_DASH` | `CHAR_EM_DASH` | `CHAR_PLUS`
  ([#1885](https://github.com/tinkoff/taiga-ui/issues/1885))
  ([97acb51](https://github.com/tinkoff/taiga-ui/commit/97acb5180c87a8feb54734531df10f72bb354219))
- **core:** use `TuiNumberFormatSettings` instead of deprecated `NumberFormatSettings`
  ([#1886](https://github.com/tinkoff/taiga-ui/issues/1886))
  ([bda8f5a](https://github.com/tinkoff/taiga-ui/commit/bda8f5a7bc664e7bd6ba4065dfabd69859a6e608))

### Bug Fixes

- **addon-doc:** broken `PAGE_SEE_ALSO` ([#1884](https://github.com/tinkoff/taiga-ui/issues/1884))
  ([802e9c1](https://github.com/tinkoff/taiga-ui/commit/802e9c16ab2b6ebe2b55035166c3cb448172bac8))
- **addon-editor:** upgrade prosemirror-model dependency for compat
  ([bf573c1](https://github.com/tinkoff/taiga-ui/commit/bf573c1a435ac5b9b0a769c8f6b1549fb8daaa43))

## [2.48.0](https://github.com/tinkoff/taiga-ui/compare/v2.47.0...v2.48.0) (2022-06-07)

### Features

- **addon-editor:** add selected content into details ([#1865](https://github.com/tinkoff/taiga-ui/issues/1865))
  ([3c7c53b](https://github.com/tinkoff/taiga-ui/commit/3c7c53b6a707718c9d4441f447991dd79b4f4bba))

### Bug Fixes

- **addon-editor:** fix cursor visibility in summary extension
  ([#1864](https://github.com/tinkoff/taiga-ui/issues/1864))
  ([b4ed2af](https://github.com/tinkoff/taiga-ui/commit/b4ed2af42bd4ec0b6e9634237e98abf519e17852))
- **cdk:** fix autofocus behavior in ios
  ([77cbe36](https://github.com/tinkoff/taiga-ui/commit/77cbe360d957a9e0ae3e25ae3c8d92d4bc1d4883))
- **kit:** `InputNumber` prefix is overlapped by value ([#1867](https://github.com/tinkoff/taiga-ui/issues/1867))
  ([b4d66d5](https://github.com/tinkoff/taiga-ui/commit/b4d66d5a0d51d0ff0b5e2f15758f30223fd02435))
- **kit:** use correct return type when passing an argument
  ([409aead](https://github.com/tinkoff/taiga-ui/commit/409aeadb6a47826616bb32778ff0a45209e7278d))

## [2.47.0](https://github.com/tinkoff/taiga-ui/compare/v2.46.0...v2.47.0) (2022-05-30)

### Features

- **addon-editor:** add details extension ([#1814](https://github.com/tinkoff/taiga-ui/issues/1814))
  ([8de315c](https://github.com/tinkoff/taiga-ui/commit/8de315cf2810d0716109e00519ec5bca275b4178))
- **addon-editor:** add preview action for images ([#1788](https://github.com/tinkoff/taiga-ui/issues/1788))
  ([2022df8](https://github.com/tinkoff/taiga-ui/commit/2022df839ef0312b1a27e79f81b5b19deb8959a2))
- **cdk:** add directive to render list with a delay ([#1795](https://github.com/tinkoff/taiga-ui/issues/1795))
  ([8d3be82](https://github.com/tinkoff/taiga-ui/commit/8d3be829f27bb3f8af2e44fddea958d9f1a48aba))
- **kit:** `Stepper` scroll internal scrollable area to active/focused step
  ([#1812](https://github.com/tinkoff/taiga-ui/issues/1812))
  ([f6717db](https://github.com/tinkoff/taiga-ui/commit/f6717dbee82b554e0418dda77ad7721c45de5f27))

### Bug Fixes

- **cdk:** handle navigator platform for detect iOS ([#1825](https://github.com/tinkoff/taiga-ui/issues/1825))
  ([2dbe60c](https://github.com/tinkoff/taiga-ui/commit/2dbe60c93411e75e327be501e7d834bf1dbc44d5))
- **core:** `DataList` fix padding around separator
  ([a107b8e](https://github.com/tinkoff/taiga-ui/commit/a107b8e7c8b3fd2fdf84bcd90989e98c6127b578))
- **core:** `DataList` missing paddings inside `Option` (multiline text problem)
  ([#1820](https://github.com/tinkoff/taiga-ui/issues/1820))
  ([e206921](https://github.com/tinkoff/taiga-ui/commit/e20692102f325ab7e33e0fa22b5a8c9549f28cff))
- **kit:** `InputRange` problem with range interactions on mobile devices
  ([#1811](https://github.com/tinkoff/taiga-ui/issues/1811))
  ([e49c1ae](https://github.com/tinkoff/taiga-ui/commit/e49c1aeef17c64b496b4b614cf535ec52608ba1a))
- **kit:** `InputSlider` changes focused `InputNumber`'s value on slider's interactions
  ([#1807](https://github.com/tinkoff/taiga-ui/issues/1807))
  ([3f94990](https://github.com/tinkoff/taiga-ui/commit/3f9499016ffb3a51ab3b2912cab9972ef8ba9e0d))
- **kit:** `Slider` blinking cursor in Firefox ([#1805](https://github.com/tinkoff/taiga-ui/issues/1805))
  ([c52cf47](https://github.com/tinkoff/taiga-ui/commit/c52cf4720c2b167006e2eb4e41a20efe71fc7912))

## [2.46.0](https://github.com/tinkoff/taiga-ui/compare/v2.45.0...v2.46.0) (2022-05-23)

### Features

- **addon-doc:** `coerceValue` supports arrays and key-value objects
  ([#1779](https://github.com/tinkoff/taiga-ui/issues/1779))
  ([7ae991e](https://github.com/tinkoff/taiga-ui/commit/7ae991ee17bb630ce16436a679402123cf66d573))
- **addon-table:** add token `TUI_TABLE_PAGINATION_OPTIONS` with property `sizeOptionContent`
  ([#1787](https://github.com/tinkoff/taiga-ui/issues/1787))
  ([af7a82b](https://github.com/tinkoff/taiga-ui/commit/af7a82b4436c81957c193cad6460a3614a81a266))
- **core:** `TUI_IS_MOBILE_RES` add new token ([#1799](https://github.com/tinkoff/taiga-ui/issues/1799))
  ([6ea6ff3](https://github.com/tinkoff/taiga-ui/commit/6ea6ff3f44dbe0a10c872047768a31912f83e87d))
- **kit:** `Avatar` add color customization with CSS vars ([#1797](https://github.com/tinkoff/taiga-ui/issues/1797))
  ([eb7c659](https://github.com/tinkoff/taiga-ui/commit/eb7c6597d5ec17fb3da56f4b9ca43ee02c4b1f73))

### Bug Fixes

- **addon-mobile:** `Ripple` broken styles in Shadow DOM ([#1790](https://github.com/tinkoff/taiga-ui/issues/1790))
  ([d604f3e](https://github.com/tinkoff/taiga-ui/commit/d604f3e617fcfe64f408c225beb95ab68dabc9aa))
- **addon-table:** `TablePagination` show checkmark for selected `[size]`
  ([#1780](https://github.com/tinkoff/taiga-ui/issues/1780))
  ([4a26fac](https://github.com/tinkoff/taiga-ui/commit/4a26facf57c1a55a82d6bf0fb24bace9611905e6))
- **cdk:** refactor autofill directive ([#1775](https://github.com/tinkoff/taiga-ui/issues/1775))
  ([8656053](https://github.com/tinkoff/taiga-ui/commit/8656053ac10e37e9fe447a79f50593f559460eda))
- **kit:** `ComboBox` throws `ExpressionChangedAfterItHasBeenCheckedError`
  ([#1772](https://github.com/tinkoff/taiga-ui/issues/1772))
  ([2e22f4f](https://github.com/tinkoff/taiga-ui/commit/2e22f4f50c8d8693346f27adb4080382c4dbf617))
- **kit:** `InputMonth` reopen calendar with year of the selected value
  ([#1773](https://github.com/tinkoff/taiga-ui/issues/1773))
  ([e67fd15](https://github.com/tinkoff/taiga-ui/commit/e67fd15f384775d980d6278a03942d382eb3a16a))
- **kit:** `Tag` has incorrect behavior of `text-overflow` in Safari
  ([#1792](https://github.com/tinkoff/taiga-ui/issues/1792))
  ([01f84d6](https://github.com/tinkoff/taiga-ui/commit/01f84d627e9fd6e9306971b610c47b1b3fa2a389))

## [2.45.0](https://github.com/tinkoff/taiga-ui/compare/v2.44.0...v2.45.0) (2022-05-16)

### Features

- **addon-mobile:** `Sheet` make top offset dynamic ([#1747](https://github.com/tinkoff/taiga-ui/issues/1747))
  ([d0c2d75](https://github.com/tinkoff/taiga-ui/commit/d0c2d75468e1ae9d88106889ad7cc506f01b249e))
  ([7e32b44](https://github.com/tinkoff/taiga-ui/commit/7e32b440a3ee5493dd5bc9fd561d8334fe5c58e4))
- **cdk:** add `valueOf` and `Symbol.toPrimitive` to `TuiDay`, `TuiMonth`, `TuiYear` and `TuiTime`
  ([#1756](https://github.com/tinkoff/taiga-ui/issues/1756))
  ([183b99b](https://github.com/tinkoff/taiga-ui/commit/183b99bb7fd3e2a3f45958ce33cf0e13cba573ae))
- **core:** `Lists` add triangle bullet list type ([#1727](https://github.com/tinkoff/taiga-ui/issues/1727))
  ([b189a67](https://github.com/tinkoff/taiga-ui/commit/b189a67829a9eeda60248275df665fe8e24716f0))
- **core:** `Lists` triangle bullet list type - made fixed size according design
  ([#1736](https://github.com/tinkoff/taiga-ui/issues/1736))
  ([503d855](https://github.com/tinkoff/taiga-ui/commit/503d855d8871a27b39bac4f038bcc7790828f2c3))
- **core:** support for custom processing of svg icons
  ([e881153](https://github.com/tinkoff/taiga-ui/commit/e881153e448ed889bf5e7cfa9d05012d1c8d104a))
- **kit:** `Action` make icon color customizable ([#1755](https://github.com/tinkoff/taiga-ui/issues/1755))
  ([599e5aa](https://github.com/tinkoff/taiga-ui/commit/599e5aa04f98bfad568ef5335c1edd0b25255519))
- **kit:** `TabsWithMore` optionally keep active tab inside More section
  ([#1682](https://github.com/tinkoff/taiga-ui/issues/1682))
  ([3646072](https://github.com/tinkoff/taiga-ui/commit/3646072bc6ce2793134dbea9db1955d46a58c617))

### Bug Fixes

- **addon-charts:** `LineChart` fix dot style ([#1745](https://github.com/tinkoff/taiga-ui/issues/1745))
  ([9e2f0f2](https://github.com/tinkoff/taiga-ui/commit/9e2f0f2e3027ee3fbe6725e98ae30c2b357af11e))
- **core:** `tui-slider-ticks-labels` error `Operation on an invalid type`
  ([#1759](https://github.com/tinkoff/taiga-ui/issues/1759))
  ([9c3521e](https://github.com/tinkoff/taiga-ui/commit/9c3521ef8ad42903358a3b7c72304ec75f9cecc5))
- **core:** correct filler display for size `S` and `M`
  ([41c4497](https://github.com/tinkoff/taiga-ui/commit/41c4497d1ce18e12d3c20df57339554a9c2f527a))
- **kit:** `ComboBox` don't clear when same value is entered ([#1739](https://github.com/tinkoff/taiga-ui/issues/1739))
  ([1f43e87](https://github.com/tinkoff/taiga-ui/commit/1f43e87e5fab6f1d31ad3c882ac06dd4da4c3909))
- **kit:** returns a full of stringified range when state is readonly
  ([56f5ba7](https://github.com/tinkoff/taiga-ui/commit/56f5ba7cc17c30486d0dd7ab7cab48089d21f3e1))

## [2.44.0](https://github.com/tinkoff/taiga-ui/compare/v2.43.0...v2.44.0) (2022-05-05)

### Features

- **addon-commerce:** use pipe instead getter for improve performance
  ([b037924](https://github.com/tinkoff/taiga-ui/commit/b03792423ec73bdb0f06e0d0a79951b4f5d85121))
- **cdk:** `Portal` add new directive ([#1688](https://github.com/tinkoff/taiga-ui/issues/1688))
  ([c70242a](https://github.com/tinkoff/taiga-ui/commit/c70242a1c451d7a878fa7687917cb5e46e411bb5))
- **cdk:** `TuiDay` add `currentUtc` static method
  ([93cdda0](https://github.com/tinkoff/taiga-ui/commit/93cdda0f71c37807789a76823abb9f78be1c2feb))
- **cdk:** add `TuiAlertContext` ([#1706](https://github.com/tinkoff/taiga-ui/issues/1706))
  ([64c2aed](https://github.com/tinkoff/taiga-ui/commit/64c2aedfc31ab4634415374db30131e0528ef2b3))
- **cdk:** use `unknown` instead `any` for `tuiDefaultProp`
  ([c5c081a](https://github.com/tinkoff/taiga-ui/commit/c5c081a50f14a2f77fe96ff9c8764aede0cd83a6))
- **testing:** new `tuiAddSnapshotPlugin` (for Cypress) ([#1683](https://github.com/tinkoff/taiga-ui/issues/1683))
  ([17658ab](https://github.com/tinkoff/taiga-ui/commit/17658ab460baf4a14079c2b47d98158bc7805a2b))

### Bug Fixes

- **addon-table:** cannot access `TuiSortByDirective` before initialization
  ([#1701](https://github.com/tinkoff/taiga-ui/issues/1701))
  ([6f91070](https://github.com/tinkoff/taiga-ui/commit/6f91070c1c7ef7ca4e39bd2008ba541180499400))
- **addon-commerce:** `InputCardGrouped` fix problem with in safari
  ([#1696](https://github.com/tinkoff/taiga-ui/issues/1696))
  ([9948640](https://github.com/tinkoff/taiga-ui/commit/994864091f1ec383a8d7efd1b356cdd9675960dd))
- **addon-commerce:** hide clear button when doesn't exist card number
  ([ccc1839](https://github.com/tinkoff/taiga-ui/commit/ccc18398da3551a5b86e41f28bd40a9e7f8ec625))
- **addon-editor:** reopen dropdown when clicked another link ([#1663](https://github.com/tinkoff/taiga-ui/issues/1663))
  ([b0e3f34](https://github.com/tinkoff/taiga-ui/commit/b0e3f34365b1411b2663e8b78dc5f999d09e51e8))
- **cdk:** correct assert for `svg` and document element
  ([eb2e745](https://github.com/tinkoff/taiga-ui/commit/eb2e745e0ca601b8320e98df4791f301b4edeec6))
- **core:** don't use `font-size` animation for safari
  ([1e4c030](https://github.com/tinkoff/taiga-ui/commit/1e4c03031196aaaae7392ea431ad2527d50eeb46))
- **kit:** `InputRange` problems with change detection for customValueContent
  ([#1675](https://github.com/tinkoff/taiga-ui/issues/1675))
  ([0c6ff68](https://github.com/tinkoff/taiga-ui/commit/0c6ff689898869ce52bd0714a85bfcdbc96046b3))

## [2.43.0](https://github.com/tinkoff/taiga-ui/compare/v2.42.0...v2.43.0) (2022-04-25)

### Features

- **addon-editor:** improved ux for links
  ([a0b30be](https://github.com/tinkoff/taiga-ui/commit/a0b30be9b3143b1568d53089ad941f3639a39588))
- **addon-editor:** select link before edit for improve ux
  ([8d93597](https://github.com/tinkoff/taiga-ui/commit/8d935973c4e2c3a48bac50b0cf525a050bdad151))
- **addon-table:** `SortBy` add directive for server-side sorting by column name
  ([#1659](https://github.com/tinkoff/taiga-ui/issues/1659))
  ([7e32b44](https://github.com/tinkoff/taiga-ui/commit/7e32b440a3ee5493dd5bc9fd561d8334fe5c58e4))
- **addon-table:** `TextArea` add support for interactive tables
  ([#1666](https://github.com/tinkoff/taiga-ui/issues/1666))
  ([3180600](https://github.com/tinkoff/taiga-ui/commit/3180600865916c3fa01651289a69536c025c7ca4))
- **cdk:** new util `tuiCoerceBooleanProperty`
  ([383269e](https://github.com/tinkoff/taiga-ui/commit/383269eb791f33b68e1a868dc5d6d80138893227))
- enable strict mode for compile templates
  ([4029f2f](https://github.com/tinkoff/taiga-ui/commit/4029f2fa711564e43db0db51db55291efdbfebc6))

### Bug Fixes

- **kit:** `InputTag` fix tag status when `Mode` is missing ([#1669](https://github.com/tinkoff/taiga-ui/issues/1669))
  ([dfcf799](https://github.com/tinkoff/taiga-ui/commit/dfcf799cc0f2a533865b452b20ce316468ed29f6))
- **kit:** `Slider` readonly state (mobile chrome bug) ([#1638](https://github.com/tinkoff/taiga-ui/issues/1638))
  ([0669a71](https://github.com/tinkoff/taiga-ui/commit/0669a716e902fda12cb14f5a42da23c836f01c1f))
- **kit:** dropdown content jumping and re-rendering multiselect after adding new tags
  ([#1657](https://github.com/tinkoff/taiga-ui/issues/1657))
  ([d4aabe6](https://github.com/tinkoff/taiga-ui/commit/d4aabe6bb166bee022344a45eed7a7406f8b9919)), closes
  [#1534](https://github.com/tinkoff/taiga-ui/issues/1534)
- **kit:** incorrect alignment of icons in multiselect
  ([470f187](https://github.com/tinkoff/taiga-ui/commit/470f187d48536ca5473054aef49356f20cb94c95)), closes
  [#1636](https://github.com/tinkoff/taiga-ui/issues/1636)

## [2.42.0](https://github.com/tinkoff/taiga-ui/compare/v2.41.1...v2.42.0) (2022-04-19)

### Bug Fixes

- **cdk:** `Zoom` invalid css-property name `touch-action` ([#1639](https://github.com/tinkoff/taiga-ui/issues/1639))
  ([e028867](https://github.com/tinkoff/taiga-ui/commit/e0288678bed5f0da3c23ac23bc7cefafc75a26cd))
  ([4109aca](https://github.com/tinkoff/taiga-ui/commit/4109aca9875328dad8850543fa4a789be0c8e655))
- **demo:** copy styles for compile `Less` files in stackblitz
  ([6dfa459](https://github.com/tinkoff/taiga-ui/commit/6dfa459ea95547c0ad09ff623086d8682596c9dd))
- **kit:** `Combobox` fix arrow in readonly state ([#1624](https://github.com/tinkoff/taiga-ui/issues/1624))
  ([1507a2a](https://github.com/tinkoff/taiga-ui/commit/1507a2a1733d36028eaec35b4104cde0db47e803))
- **kit:** `Pagination` & `Preview` show `undefined` for `title`
  ([#1642](https://github.com/tinkoff/taiga-ui/issues/1642))
  ([7158630](https://github.com/tinkoff/taiga-ui/commit/71586309a42c70f2674e55c02a94872b2abcf036))

### [2.41.1](https://github.com/tinkoff/taiga-ui/compare/v2.41.0.0...v2.41.1) (2022-04-12)

### Bug Fixes

- **core:** `TuiNotificationsModule` is not a class value to reference
  ([#1626](https://github.com/tinkoff/taiga-ui/issues/1626))
  ([4109aca](https://github.com/tinkoff/taiga-ui/commit/4109aca9875328dad8850543fa4a789be0c8e655))

## [2.41.0](https://github.com/tinkoff/taiga-ui/compare/v2.40.0...v2.41.0) (2022-04-11)

### Features

- **addon-mobile:** `MobileTabs` add directive, deprecate `TUI_MOBILE_AWARE` token
  ([#1615](https://github.com/tinkoff/taiga-ui/issues/1615))
  ([1921624](https://github.com/tinkoff/taiga-ui/commit/192162462b26533a4f8d38e3c9e27882d3cf1909))
- **cdk:** `Alerts` add infrastructure for custom notifications
  ([#1540](https://github.com/tinkoff/taiga-ui/issues/1540))
  ([3d54b67](https://github.com/tinkoff/taiga-ui/commit/3d54b6761ccf937ffd4ce94c3c2a106c1b2fd386))
- **kit:** `InputRange` refactor (use `InputNumber` inside) ([#1583](https://github.com/tinkoff/taiga-ui/issues/1583))
  ([fc0f27a](https://github.com/tinkoff/taiga-ui/commit/fc0f27a3ff4d0117dcb09e51fc628550bc2589cd))
- **kit:** `Range` use `Slider` inside ([#1538](https://github.com/tinkoff/taiga-ui/issues/1538))
  ([245c8d5](https://github.com/tinkoff/taiga-ui/commit/245c8d59a1fbdfbf3a9a97e66ca1c44bda8ea8b3))
- **kit:** `TabsWithMore` add input for custom dropdown content
  ([7a0db9d](https://github.com/tinkoff/taiga-ui/commit/7a0db9d2a16cf80a009b451c46edd8e1838ec426))
- **kit:** `TUI_AVATAR_OPTIONS` default options configuration for `Avatar`
  ([#1600](https://github.com/tinkoff/taiga-ui/issues/1600))
  ([ff4dc30](https://github.com/tinkoff/taiga-ui/commit/ff4dc309eddf4ecd42950f38418f1cd9c42be837))

### Bug Fixes

- **kit:** `InputFiles` fix styles ([#1619](https://github.com/tinkoff/taiga-ui/issues/1619))
  ([9b55ce3](https://github.com/tinkoff/taiga-ui/commit/9b55ce30ca32d2d8c82327d192fb1254d57f9265))
- **kit:** `keySteps` works if `Slider` has `min`-property !== 0
  ([c2af899](https://github.com/tinkoff/taiga-ui/commit/c2af899a0415937101c227de0dd7f8753fcbab7f))
- **kit:** provide default status when async pipe isn't emitted
  ([#1605](https://github.com/tinkoff/taiga-ui/issues/1605))
  ([46bda8b](https://github.com/tinkoff/taiga-ui/commit/46bda8b6e1cf7add5242cd526e63550ac5902518))

## [2.40.0](https://github.com/tinkoff/taiga-ui/compare/v2.39.0...v2.40.0) (2022-04-04)

### Features

- **addon-charts:** add index to hint context ([#1580](https://github.com/tinkoff/taiga-ui/issues/1580))
  ([5f11ccd](https://github.com/tinkoff/taiga-ui/commit/5f11ccd6b54c03fa58bd378bf77fde16f24c1cf2))
- **core:** `formatNumber` add `zeroPadding` flag ([#1584](https://github.com/tinkoff/taiga-ui/issues/1584))
  ([9b07aa5](https://github.com/tinkoff/taiga-ui/commit/9b07aa5fd6d5b628ba9e865143d0f8a5e871a3de))
- **hint:** add middle position of top and bottom directions of hints
  ([#1577](https://github.com/tinkoff/taiga-ui/issues/1577))
  ([0567a79](https://github.com/tinkoff/taiga-ui/commit/0567a79e677472aec25ac2322e053cbc01edc0ec))
- **kit:** `InputPhoneInternational` allow paste/drop value without code
  ([#1572](https://github.com/tinkoff/taiga-ui/issues/1572))
  ([7c419db](https://github.com/tinkoff/taiga-ui/commit/7c419dbbc26b050d2d61a2877e0cd293a6a13b3f))
- **kit:** `TUI_TAG_OPTIONS` default options configuration for `Tag`
  ([#1518](https://github.com/tinkoff/taiga-ui/issues/1518))
  ([9c32f00](https://github.com/tinkoff/taiga-ui/commit/9c32f00315e265c95e26c4c2567aeee1fe2cd650))

### Bug Fixes

- **addon-charts:** `LineChart` fix empty hint without `hintContent`
  ([#1574](https://github.com/tinkoff/taiga-ui/issues/1574))
  ([6f381d8](https://github.com/tinkoff/taiga-ui/commit/6f381d8eb51b4d3ff9639801d9e964f56e0a1cd2))
- bad colors in dialog when using dark theme ([#1565](https://github.com/tinkoff/taiga-ui/issues/1565))
  ([46e8f5e](https://github.com/tinkoff/taiga-ui/commit/46e8f5ea010d4b7d856d4f206339640df432ad58))
- **core:** compatible `TuiGroupModule` with `ViewEngine` ([#1589](https://github.com/tinkoff/taiga-ui/issues/1589))
  ([84620b8](https://github.com/tinkoff/taiga-ui/commit/84620b8e608d091804af99dfef8b3c301f4c84bf))
- **kit:** `InputNumber` apply caret fix for ios ([#1568](https://github.com/tinkoff/taiga-ui/issues/1568))
  ([a326da4](https://github.com/tinkoff/taiga-ui/commit/a326da4be2061990cba1d407ef723937cad4c150))
- **kit:** `Slider` incorrect behaviour for `min` !== 0 ([#1557](https://github.com/tinkoff/taiga-ui/issues/1557))
  ([68d1132](https://github.com/tinkoff/taiga-ui/commit/68d11326543bf2626a4332e96b6432efabc13db5))
- **kit:** `Slider` input-property `max` can be equal to zero ([#1587](https://github.com/tinkoff/taiga-ui/issues/1587))
  ([6c2b614](https://github.com/tinkoff/taiga-ui/commit/6c2b6142a5772e0ef2dceb832f9c791703ba568e))

## [2.39.0](https://github.com/tinkoff/taiga-ui/compare/v2.38.0...v2.39.0) (2022-03-28)

### Bug Fixes

- **addon-doc:** ability to highlight with first letter in safari
  ([#1550](https://github.com/tinkoff/taiga-ui/issues/1550))
  ([0d7d345](https://github.com/tinkoff/taiga-ui/commit/0d7d34597cec1a546189b574bd66f4239c05752a))
- **addon-tablebar:** fix adaptive container ([#1537](https://github.com/tinkoff/taiga-ui/issues/1537))
  ([5e5ffd8](https://github.com/tinkoff/taiga-ui/commit/5e5ffd8d72d552235d5f6404a9ec9c67ecebc7dd))
- **core:** fix textfield transition ([#1536](https://github.com/tinkoff/taiga-ui/issues/1536))
  ([1aa51ec](https://github.com/tinkoff/taiga-ui/commit/1aa51eca00c20b15112713dff52fb4886c1af379))
- **core:** hide placeholder without visible overflow ([#1551](https://github.com/tinkoff/taiga-ui/issues/1551))
  ([200c61f](https://github.com/tinkoff/taiga-ui/commit/200c61f258c138c9b7badfac653e3f1bd41a6ab8))
- **kit:** `Slider` distorted right border-radius ([#1548](https://github.com/tinkoff/taiga-ui/issues/1548))
  ([8f56200](https://github.com/tinkoff/taiga-ui/commit/8f562007103ba9b450a5076ed8e00dd12a0bf837))
- **kit:** `Slider` improve a11y for `keySteps` ([#1549](https://github.com/tinkoff/taiga-ui/issues/1549))
  ([791042b](https://github.com/tinkoff/taiga-ui/commit/791042b9ba9673a18228ae81c939d297b8d5c5a0))
- **kit:** correct handling of color theme in `input-tag` ([#1545](https://github.com/tinkoff/taiga-ui/issues/1545))
  ([258c979](https://github.com/tinkoff/taiga-ui/commit/258c9799d44addb055fd0d93b060083cf0613a1d))

## [2.38.0](https://github.com/tinkoff/taiga-ui/compare/v2.37.1...v2.38.0) (2022-03-21)

### Features

- **core:** `Wrapper` switch to directive and support CSS states
  ([#1515](https://github.com/tinkoff/taiga-ui/issues/1515))
  ([7de2823](https://github.com/tinkoff/taiga-ui/commit/7de2823572b64fa1a67be81332ca0586f7d6d320))

### Bug Fixes

- **core:** `PrimitiveTextfield` built-in icons inside `tuiTextfieldCustomContent`
  ([#1523](https://github.com/tinkoff/taiga-ui/issues/1523))
  ([c864a95](https://github.com/tinkoff/taiga-ui/commit/c864a95c68826d3aa489a4698ec4894f41366ab7))
- **kit:** `InputDateRange` fix initial months ([#1530](https://github.com/tinkoff/taiga-ui/issues/1530))
  ([677b875](https://github.com/tinkoff/taiga-ui/commit/677b875d95ed73740a41cd7d3d3cdf69bfc12c3b))

### [2.37.1](https://github.com/tinkoff/taiga-ui/compare/v2.37.0...v2.37.1) (2022-03-15)

### Bug Fixes

- **core:** fix broken import ([#1520](https://github.com/tinkoff/taiga-ui/issues/1520))
  ([ebf4ee2](https://github.com/tinkoff/taiga-ui/commit/ebf4ee2570bfe04be997812147e7a5638aa4378f))

## [2.37.0](https://github.com/tinkoff/taiga-ui/compare/v2.36.0...v2.37.0) (2022-03-14)

### Features

- **addon-editor:** new DI-token `TUI_EDITOR_OPTIONS` ([#1482](https://github.com/tinkoff/taiga-ui/issues/1482))
  ([f97781d](https://github.com/tinkoff/taiga-ui/commit/f97781daaec3fbcf6fbb2035317036de03429201))
- **addon-table:** `TableSort` add new pipe to externalize row iteration
  ([#1483](https://github.com/tinkoff/taiga-ui/issues/1483))
  ([c18670d](https://github.com/tinkoff/taiga-ui/commit/c18670d16879b54a848f4dac1a2cc579ec2cb2b3))
- **cdk:** add custom portals ([#1485](https://github.com/tinkoff/taiga-ui/issues/1485))
  ([8958424](https://github.com/tinkoff/taiga-ui/commit/8958424c632501c034fe2210c40fb2a21ef935c9))
- **core:** `PrimitiveTextfield` use CSS variables for font sizes of label
  ([#1494](https://github.com/tinkoff/taiga-ui/issues/1494))
  ([a23e777](https://github.com/tinkoff/taiga-ui/commit/a23e77724359125fba0495c66d5ffd133ff70f6b))
- **core:** add type inference to `appearance` for button ([#1511](https://github.com/tinkoff/taiga-ui/issues/1511))
  ([4e980dd](https://github.com/tinkoff/taiga-ui/commit/4e980ddf2713cc3d7b39bc84a9d6b52c2728c1b6))
- **core:** expose `TuiNotificationDefaultOptions` ([#1490](https://github.com/tinkoff/taiga-ui/issues/1490))
  ([bc1a75c](https://github.com/tinkoff/taiga-ui/commit/bc1a75ca18a95986481a718768b60d5e5f77f0d3))
- **core:** new mixin `tui-slider-ticks-labels` ([#1469](https://github.com/tinkoff/taiga-ui/issues/1469))
  ([61f3f2e](https://github.com/tinkoff/taiga-ui/commit/61f3f2e67825e044c3f4e0c4e9a34072f5a040aa))
- **kit:** `FieldErrorContent` add ability to work with function
  ([#1491](https://github.com/tinkoff/taiga-ui/issues/1491))
  ([01af383](https://github.com/tinkoff/taiga-ui/commit/01af38342e4eb8fb7a894c928d1932cf47cdb339))
- **kit:** `InputSlider` use new `Slider` inside ([#1475](https://github.com/tinkoff/taiga-ui/issues/1475))
  ([5fdb5b3](https://github.com/tinkoff/taiga-ui/commit/5fdb5b39dc5acd1c9cf48095b8948352f57107f1))
- **kit:** add `InputFiles`, `Files` components ([#1298](https://github.com/tinkoff/taiga-ui/issues/1298))
  ([fa06a9b](https://github.com/tinkoff/taiga-ui/commit/fa06a9b784c7fb952ff1920c99a7d40aa38c3d5c))

### Bug Fixes

- **cdk:** support autofocus for ios devices ([#1505](https://github.com/tinkoff/taiga-ui/issues/1505))
  ([ad565b6](https://github.com/tinkoff/taiga-ui/commit/ad565b6a24363ae02e7ed73017aafc96939e9c72))
- **core:** `Button` fix icon margins ([#1502](https://github.com/tinkoff/taiga-ui/issues/1502))
  ([2824920](https://github.com/tinkoff/taiga-ui/commit/282492033aff283da083881031f016b08b8e9cca))
- **core:** `InputNumber` backward compatibility for separators
  ([#1473](https://github.com/tinkoff/taiga-ui/issues/1473))
  ([976e2c2](https://github.com/tinkoff/taiga-ui/commit/976e2c253e637023ad46789991d0b03775911a37))
- **core:** `PrimitiveTextfield` long custom content overflow ([#1513](https://github.com/tinkoff/taiga-ui/issues/1513))
  ([d7e6b96](https://github.com/tinkoff/taiga-ui/commit/d7e6b96d40deeae990f14eb5faceee1c0d2a0d43))
- **kit:** `InputCount` fix extra space when using max property
  ([#1506](https://github.com/tinkoff/taiga-ui/issues/1506))
  ([33f2e19](https://github.com/tinkoff/taiga-ui/commit/33f2e19c688e4b4b84422eb5b518743fd831da0b))
- **kit:** `InputPhoneInternational` fix drop/paste handler ([#1472](https://github.com/tinkoff/taiga-ui/issues/1472))
  ([28bc548](https://github.com/tinkoff/taiga-ui/commit/28bc548420c203df5269e1d5474d46cd4b45db81))
- **kit:** correct display of a comma when opened dropdown ([#1509](https://github.com/tinkoff/taiga-ui/issues/1509))
  ([6864b89](https://github.com/tinkoff/taiga-ui/commit/6864b89b158362df4e342b1fe91b98933a356cda))
- **kit:** correct handling the `thousandSeparator` for `InputRange`
  ([#1484](https://github.com/tinkoff/taiga-ui/issues/1484))
  ([a075a54](https://github.com/tinkoff/taiga-ui/commit/a075a5424a773680be143039b4bc964714edbfaa))

## [2.36.0](https://github.com/tinkoff/taiga-ui/compare/v2.35.0...v2.36.0) (2022-02-28)

### Features

- **addon-editor:** add `box-shadow` for toolbar panel ([#1457](https://github.com/tinkoff/taiga-ui/issues/1457))
  ([1e1d26d](https://github.com/tinkoff/taiga-ui/commit/1e1d26d900cd123dddef7bcbc4bf97e64c3649f5))
- **cdk:** `TUI_IS_IOS` fix detecting iPad that pretend to be MacOS
  ([#1459](https://github.com/tinkoff/taiga-ui/issues/1459))
  ([6230118](https://github.com/tinkoff/taiga-ui/commit/6230118d701c43f15144a8d1356e4d502281891b))
- **core:** `Loader` allow configuration of default options ([#1447](https://github.com/tinkoff/taiga-ui/issues/1447))
  ([3ba41f2](https://github.com/tinkoff/taiga-ui/commit/3ba41f2f24c341755ac38a461f13156fe8b67200))
- **kit:** `TextArea` expose native element ([#1456](https://github.com/tinkoff/taiga-ui/issues/1456))
  ([e79f5db](https://github.com/tinkoff/taiga-ui/commit/e79f5dbaf92aec08e4fea6d9e78933f63ad249c5))
- **kit:** `TUI_SLIDER_OPTIONS` (make `Slider` more customizable)
  ([#1453](https://github.com/tinkoff/taiga-ui/issues/1453))
  ([d825332](https://github.com/tinkoff/taiga-ui/commit/d825332c05e182670f6f488958068af0207e2386))
- **kit:** new `SliderKeyStepsDirective` for `Slider` ([#1441](https://github.com/tinkoff/taiga-ui/issues/1441))
  ([d9b0d6e](https://github.com/tinkoff/taiga-ui/commit/d9b0d6eed910642e5adf62c509ede432807739e6))

### Bug Fixes

- **addon-editor:** set table without style inheritance ([#1455](https://github.com/tinkoff/taiga-ui/issues/1455))
  ([88c1f05](https://github.com/tinkoff/taiga-ui/commit/88c1f05894555359f42384b3481bc69c6e2b86d4))
- **core:** `PrimitiveTextfield` fix styles collision with Bootstrap
  ([#1458](https://github.com/tinkoff/taiga-ui/issues/1458))
  ([5135da1](https://github.com/tinkoff/taiga-ui/commit/5135da182bd27b2b87a2755f5c65ad78fd874964))
- **kit:** `ComboBox` fix initial `search` emit ([#1446](https://github.com/tinkoff/taiga-ui/issues/1446))
  ([07a354c](https://github.com/tinkoff/taiga-ui/commit/07a354c2e1997a441f351481869272c1764351f0))
- **kit:** `Slider` fix ticks position ([#1462](https://github.com/tinkoff/taiga-ui/issues/1462))
  ([20a5086](https://github.com/tinkoff/taiga-ui/commit/20a508607de29d4ae237c721e2c5a43c1f95a4fd))

## [2.35.0](https://github.com/tinkoff/taiga-ui/compare/v2.34.0...v2.35.0) (2022-02-21)

### Features

- **addon-commerce:** support options in money component ([#1434](https://github.com/tinkoff/taiga-ui/issues/1434))
  ([85bf60a](https://github.com/tinkoff/taiga-ui/commit/85bf60a66afc042fd4ea96de49e316a0b72f6fa7))
- **kit:** new pipe `HintErrorPipe` ([#1405](https://github.com/tinkoff/taiga-ui/issues/1405))
  ([71e7a96](https://github.com/tinkoff/taiga-ui/commit/71e7a969f3fd7eaa2a5015459fc5b4b7e34cc1d8))

### Bug Fixes

- **addon-editor:** add space after table created ([#1437](https://github.com/tinkoff/taiga-ui/issues/1437))
  ([b535a17](https://github.com/tinkoff/taiga-ui/commit/b535a171387f5c23a4abe28b36ecffd884d5bc12))
- **addon-editor:** prevent auto clicking on toolbar when editor is inside a label
  ([#1383](https://github.com/tinkoff/taiga-ui/issues/1383))
  ([0d61d60](https://github.com/tinkoff/taiga-ui/commit/0d61d60e9e13b44cc242a967080db113703014b6))
- **addon-mobile:** `Sheet` fix unnecessary calculations for overlay mode
  ([#1439](https://github.com/tinkoff/taiga-ui/issues/1439))
  ([44a77fc](https://github.com/tinkoff/taiga-ui/commit/44a77fcc5567123152c8b6068927c0cdd4d13989))
- **addon-mobile:** fix styles for disabled cell ([#1401](https://github.com/tinkoff/taiga-ui/issues/1401))
  ([79219b8](https://github.com/tinkoff/taiga-ui/commit/79219b8355c8ccee7a908131f8c60ffd9260d776))
- **addon-mobile:** support late rendering ([#1369](https://github.com/tinkoff/taiga-ui/issues/1369))
  ([2aee3cf](https://github.com/tinkoff/taiga-ui/commit/2aee3cfa6221ddcf18e902940483fab3204ed929))
- **cdk:** `Autofocus` wait for Angular animations to finish before focusing
  ([#1435](https://github.com/tinkoff/taiga-ui/issues/1435))
  ([8bfc6d7](https://github.com/tinkoff/taiga-ui/commit/8bfc6d7c5ca94ed855bfd339c6539b4dd78a41e1))
- **cdk:** `Dropdown` fix shaking during scroll ([#1416](https://github.com/tinkoff/taiga-ui/issues/1416))
  ([512a35e](https://github.com/tinkoff/taiga-ui/commit/512a35eb90f29ca28f3453fdeebdb8dcfd9829ab))
- **core:** `DescribedByDirective` fix hint visibility ([#1436](https://github.com/tinkoff/taiga-ui/issues/1436))
  ([518dd27](https://github.com/tinkoff/taiga-ui/commit/518dd27ee8cd76e2efe8e753de78bdd24933787d))
- **core:** fix form-header style ([#1407](https://github.com/tinkoff/taiga-ui/issues/1407))
  ([8e0a9af](https://github.com/tinkoff/taiga-ui/commit/8e0a9afbf9e135140530149a3fbedc6f0459c32e))
- **core:** provide fallback value for border-width ([#1402](https://github.com/tinkoff/taiga-ui/issues/1402))
  ([766e106](https://github.com/tinkoff/taiga-ui/commit/766e106b56226a2ae3fa522893e8127cb552166b))
- **kit:** `InputMonth` fix change detection in `Textfield` mode
  ([#1415](https://github.com/tinkoff/taiga-ui/issues/1415))
  ([010c1b4](https://github.com/tinkoff/taiga-ui/commit/010c1b41f52d0edb040c5f268d709a8df24a5b3e))
- **kit:** `LineClamp` prevent expression changed exception ([#1375](https://github.com/tinkoff/taiga-ui/issues/1375))
  ([2eca9a8](https://github.com/tinkoff/taiga-ui/commit/2eca9a85dc7b980e795b0d0c8e4d0f08c207e5a9))
- **kit:** `ProgressBar` color segments with dynamic progress width
  ([#1406](https://github.com/tinkoff/taiga-ui/issues/1406))
  ([0c079d6](https://github.com/tinkoff/taiga-ui/commit/0c079d6365abaf3862361f51f3af142bf7ddd5c7))
- **kit:** `Slider` work with `number` instead of `string` ([#1420](https://github.com/tinkoff/taiga-ui/issues/1420))
  ([368ded5](https://github.com/tinkoff/taiga-ui/commit/368ded59b16eb1abf37953f4e575ae25b08f0774))
- **kit:** correct icons' alignment in multi-select ([#1417](https://github.com/tinkoff/taiga-ui/issues/1417))
  ([9a6b126](https://github.com/tinkoff/taiga-ui/commit/9a6b126668e60a16976f9f3f09a6b517e32c3a89))
- **kit:** track openChange when clear value in multi-select ([#1408](https://github.com/tinkoff/taiga-ui/issues/1408))
  ([dfb047f](https://github.com/tinkoff/taiga-ui/commit/dfb047fee43eb11ddd6aa34f2c81379a6738c653))

## [2.34.0](https://github.com/tinkoff/taiga-ui/compare/v2.33.0...v2.34.0) (2022-02-14)

### Features

- **cdk:** `Pure` support function with no arguments ([#1374](https://github.com/tinkoff/taiga-ui/issues/1374))
  ([a12e31f](https://github.com/tinkoff/taiga-ui/commit/a12e31f5d4450d754b3373c79a913e2643217f4d))
- **cdk:** use `Exception` instead of throwing `Error` directly
  ([#1378](https://github.com/tinkoff/taiga-ui/issues/1378))
  ([41f193b](https://github.com/tinkoff/taiga-ui/commit/41f193b35105a2368216c658fd71583290ea974f))
- **kit:** add default options configuration helpers ([#1356](https://github.com/tinkoff/taiga-ui/issues/1356))
  ([2259182](https://github.com/tinkoff/taiga-ui/commit/2259182c77c95001533974031c3c8480ddb91f05))
- **kit:** `Slider` add new component and deprecate the old one
  ([#1222](https://github.com/tinkoff/taiga-ui/issues/1222))
  ([8ea7f0a](https://github.com/tinkoff/taiga-ui/commit/8ea7f0aed98ccdfce8490b8511aa8f3a3b3c4fc3))
- **kit:** `InputTag` optionally allow non-unique tags and custom separators
  ([#1366](https://github.com/tinkoff/taiga-ui/issues/1366))
  ([875d4a1](https://github.com/tinkoff/taiga-ui/commit/875d4a1a2073709a7c9cd31b347c7ba8c5580cf5))
- **kit:** default options configuration for `ComboBox`, `MultiSelect`, `Select` and `DataListWrapper`
  ([#1352](https://github.com/tinkoff/taiga-ui/issues/1352))
  ([04dc1ab](https://github.com/tinkoff/taiga-ui/commit/04dc1ab558e32b64612a76db5bfcd5a698e6d641))
- **kit:** `FieldError` add new pipe and deprecate `FieldError` component
  ([#1360](https://github.com/tinkoff/taiga-ui/issues/1360))
  ([447b5f2](https://github.com/tinkoff/taiga-ui/commit/447b5f2e12adab65bd12cbb7cfd0d9650ee6dcf8))

### Bug Fixes

- **addon-commerce:** `InputCardGroup` fix cleaning prefilled value
  ([#1359](https://github.com/tinkoff/taiga-ui/issues/1359))
  ([803cfed](https://github.com/tinkoff/taiga-ui/commit/803cfed9c888bd005ce3283eb9587320e894023a))
- **addon-mobile:** `MobileCalendar` fix disabled dates being pickable
  ([#1372](https://github.com/tinkoff/taiga-ui/issues/1372))
  ([3f0024e](https://github.com/tinkoff/taiga-ui/commit/3f0024e5390c972dba517d2549ff25f34bbf9ebe))
- **core:** fixed styles for form header ([#1347](https://github.com/tinkoff/taiga-ui/issues/1347))
  ([391a4ce](https://github.com/tinkoff/taiga-ui/commit/391a4cea671919ae992151cfb4694e607af523df))
- **kit:** `ComboBox` run stringify on string values too ([#1385](https://github.com/tinkoff/taiga-ui/issues/1385))
  ([0c66a21](https://github.com/tinkoff/taiga-ui/commit/0c66a215aec4b0abcc8ce62256c6d82f497fa2e9))
- **kit:** `MultiSelect` fix showing example text ([#1376](https://github.com/tinkoff/taiga-ui/issues/1376))
  ([fa12f99](https://github.com/tinkoff/taiga-ui/commit/fa12f999581fcce48548fbe1c6de8dc4ff387206))

## [2.33.0](https://github.com/tinkoff/taiga-ui/compare/v2.32.0...v2.33.0) (2022-02-08)

### Features

- **addon-commerce:** add mexican peso currency ([#1314](https://github.com/tinkoff/taiga-ui/issues/1314))
  ([fc179a1](https://github.com/tinkoff/taiga-ui/commit/fc179a126df447de19079a97ba7da941a0e46512))
- **addon-commerce:** add type inference for currency ([#1326](https://github.com/tinkoff/taiga-ui/issues/1326))
  ([06d2b51](https://github.com/tinkoff/taiga-ui/commit/06d2b51e5ed6d55ba55b06707fc2e9c3ad7d6bc1))
- **core:** `Textfield` add component to expose native input from controls
  ([#1316](https://github.com/tinkoff/taiga-ui/issues/1316))
  ([9881ea7](https://github.com/tinkoff/taiga-ui/commit/9881ea7d6626bd7f56f7b2e4f7c2ac29e8859229))
- **core:** add new css vars for elevated elements ([#1333](https://github.com/tinkoff/taiga-ui/issues/1333))
  ([d40cb17](https://github.com/tinkoff/taiga-ui/commit/d40cb177117d27c65ac752d8d74e9823cf522dff))

### Bug Fixes

- **core:** add `@taiga-ui/i18n` as dependency ([#1346](https://github.com/tinkoff/taiga-ui/issues/1346))
  ([08ea554](https://github.com/tinkoff/taiga-ui/commit/08ea5547e359b87fbf0ac03d4bf04b3589a4b1c1))
- **core:** `Hint` fix bubble position ([#1339](https://github.com/tinkoff/taiga-ui/issues/1339))
  ([4eff5a2](https://github.com/tinkoff/taiga-ui/commit/4eff5a2833801e1e78fc8bd66464d7ef2bf3f2e1))
- **core:** `Dropdown` prevent multiple `markForCheck` calls ([#1289](https://github.com/tinkoff/taiga-ui/issues/1289))
  ([70bd847](https://github.com/tinkoff/taiga-ui/commit/70bd847169c031ae70b613d79879cf971121ef8e))
- **kit:** `InputPhoneInternational` fix paste/drop with plus sign
  ([#1306](https://github.com/tinkoff/taiga-ui/issues/1306))
  ([d320109](https://github.com/tinkoff/taiga-ui/commit/d3201099b8f5897bf6949b7f79f00c2dcd856868))
- **kit:** `InputPhoneInternational` fix wrong model update ([#1309](https://github.com/tinkoff/taiga-ui/issues/1309))
  ([28b8312](https://github.com/tinkoff/taiga-ui/commit/28b831225d3ee6543b36eecbe2d7a7658bfb1ebc))
- **kit:** `Select` prevent content overflow cut ([#1340](https://github.com/tinkoff/taiga-ui/issues/1340))
  ([e05164f](https://github.com/tinkoff/taiga-ui/commit/e05164f376f25fedf30aa41f2e5b63f3e4b27dfd))
- **kit:** `InputTag` remove redundant space between tags ([#1341](https://github.com/tinkoff/taiga-ui/issues/1341))
  ([eb3ad4d](https://github.com/tinkoff/taiga-ui/commit/eb3ad4d92203a6a381412cf8efa7927e6bb71e9f))

## [2.32.0](https://github.com/tinkoff/taiga-ui/compare/v2.31.0...v2.32.0) (2022-01-31)

### Features

- **core:** default options configuration for `Hint` ([#1250](https://github.com/tinkoff/taiga-ui/issues/1250))
  ([1a58d36](https://github.com/tinkoff/taiga-ui/commit/1a58d3632e4def793c31c4912d4fd35031b6b4fa))
- **core:** default options configuration for `PrimitiveTextfield`
  ([#1249](https://github.com/tinkoff/taiga-ui/issues/1249))
  ([af77aaf](https://github.com/tinkoff/taiga-ui/commit/af77aaf9c2d7bd769f2557ad61e358f6d0413782))
- **kit:** add `TUI_ARROW_MODE` token ([#1243](https://github.com/tinkoff/taiga-ui/issues/1243))
  ([faa9087](https://github.com/tinkoff/taiga-ui/commit/faa908716895b65aa1d870d2ae72e6b9adc3e97e))
- **kit:** `InputTime` add configurable `maxValues` ([#1256](https://github.com/tinkoff/taiga-ui/issues/1256))
  ([d18d192](https://github.com/tinkoff/taiga-ui/commit/d18d1920432ba252085530af78f872907d93d33f))
- **kit:** default options configuration for `Arrow` ([#1251](https://github.com/tinkoff/taiga-ui/issues/1251))
  ([8b99faa](https://github.com/tinkoff/taiga-ui/commit/8b99faa6aa3021f964d10e2e53482765fb9f8dc0))
- **kit:** Use `TUI_APPEARANCE` injection token for `InputRange`, `InputSlider` and `InputCardGrouped`
  ([#1280](https://github.com/tinkoff/taiga-ui/issues/1280))
  ([43645c3](https://github.com/tinkoff/taiga-ui/commit/43645c363ccf02f84130601507b4f6da2d661b1c))

### Bug Fixes

- **addon-commerce:** `Money` remove empty space around currency
  ([#1248](https://github.com/tinkoff/taiga-ui/issues/1248))
  ([73118c5](https://github.com/tinkoff/taiga-ui/commit/73118c538f1c97846384f10fe2eb5022bd696277))
- **addon-doc:** use correct dependencies ([#1284](https://github.com/tinkoff/taiga-ui/issues/1284))
  ([ecb876d](https://github.com/tinkoff/taiga-ui/commit/ecb876d6a6409e086f3952af0365b3def16921e2))
- **addon-mobile:** `Sheet` fix initial position for iOS ([#1277](https://github.com/tinkoff/taiga-ui/issues/1277))
  ([878d48b](https://github.com/tinkoff/taiga-ui/commit/878d48bb39b4e461b3e97214733d3e995c4bffa1))
- **core:** `PrimitiveTextfield` hide placeholder with autocomplete
  ([#1265](https://github.com/tinkoff/taiga-ui/issues/1265))
  ([bf20787](https://github.com/tinkoff/taiga-ui/commit/bf20787ada2254bfe4307c67a9a32f8751123975))
- **kit:** `InputDate`, `InputDateRange`, `InputDateTime` fix cyrillic filler
  ([#1271](https://github.com/tinkoff/taiga-ui/issues/1271))
  ([b894373](https://github.com/tinkoff/taiga-ui/commit/b894373db83a1f7d0df929d3b3d82a2332e5bcbc))
- **kit:** `InputInline` fix expression changed error ([#1268](https://github.com/tinkoff/taiga-ui/issues/1268))
  ([9229ff2](https://github.com/tinkoff/taiga-ui/commit/9229ff203d76c8e808b5ed91109ce5b85639f925))

## [2.31.0](https://github.com/tinkoff/taiga-ui/compare/v2.29.0...v2.31.0) (2022-01-24)

### Features

- **icons:** expose `processIcons` utility ([#1102](https://github.com/tinkoff/taiga-ui/issues/1102))
  ([7e9f42b](https://github.com/tinkoff/taiga-ui/commit/7e9f42b816ea43c3978af9c4dd5b4dc2f545a75e))
- **kit:** `InputDate`, `InputDateRange`, `InputDateTime` add value transformer tokens
  ([#1184](https://github.com/tinkoff/taiga-ui/issues/1184))
  ([88a3b7e](https://github.com/tinkoff/taiga-ui/commit/88a3b7e9a65882d8defdecb083da8b1a152889ce))
- **kit:** `Rating` add new component ([#791](https://github.com/tinkoff/taiga-ui/issues/791))
  ([232b01c](https://github.com/tinkoff/taiga-ui/commit/232b01cbca086cd6034c2a915c8a85f46596fa52))
- **kit:** `TUI_COUNTRIES_MASKS` add new token
  ([2730c3d](https://github.com/tinkoff/taiga-ui/commit/2730c3ddf127c64958140761a37b7911c6701b24))

### Bug Fixes

- **addon-charts:** `LineChart` fix axis hints ([#1223](https://github.com/tinkoff/taiga-ui/issues/1223))
  ([f515914](https://github.com/tinkoff/taiga-ui/commit/f515914a5d87accbf2347c165a80d251cc4d8564))
- **addon-doc:** fix coercing value from query params ([#1234](https://github.com/tinkoff/taiga-ui/issues/1234))
  ([d6af595](https://github.com/tinkoff/taiga-ui/commit/d6af595917f49d7832d116c183c7011bd7e2e12e))
- **addon-tablebars:** fix mode support ([#1218](https://github.com/tinkoff/taiga-ui/issues/1218))
  ([c1743b4](https://github.com/tinkoff/taiga-ui/commit/c1743b433f7cc8e12c02587bc3fd231acb2667aa))
- **i18n:** add Italian to i18n index ([#1216](https://github.com/tinkoff/taiga-ui/issues/1216))
  ([54ba4f3](https://github.com/tinkoff/taiga-ui/commit/54ba4f38e6f9161d7e1de86808ffe35aa4935a40))
- **i18n:** fix German translation ([#1219](https://github.com/tinkoff/taiga-ui/issues/1219))
  ([b768574](https://github.com/tinkoff/taiga-ui/commit/b768574267dc7bb557496ea2481d04d996d4283c))
- **kit:** `CalendarMonth` fix incorrect state in range ([#1207](https://github.com/tinkoff/taiga-ui/issues/1207))
  ([9ead920](https://github.com/tinkoff/taiga-ui/commit/9ead920762a2b7dcfb35674b31910a18fc290584))
- **kit:** `InputNumber` fix max length ([#1233](https://github.com/tinkoff/taiga-ui/issues/1233))
  ([7b5c015](https://github.com/tinkoff/taiga-ui/commit/7b5c015c1678d2a0b8752c388f6484cdccb40609))
- **kit:** `InputSlider` fix decimal limit ([#1213](https://github.com/tinkoff/taiga-ui/issues/1213))
  ([06fc16b](https://github.com/tinkoff/taiga-ui/commit/06fc16baf4f30182345d02ed83ea7f81052ef068))
- **kit:** fix cursor pointer in controls with dropdowns ([#1208](https://github.com/tinkoff/taiga-ui/issues/1208))
  ([7374bb1](https://github.com/tinkoff/taiga-ui/commit/7374bb140ac1f9708cd208be762abaf67011d412))

## [2.30.0](https://github.com/tinkoff/taiga-ui/compare/v2.29.0...v2.30.0) (2022-01-17)

### Features

- **addon-doc:** `DocCode` support parsing markdown ([#1160](https://github.com/tinkoff/taiga-ui/issues/1160))
  ([3c6297b](https://github.com/tinkoff/taiga-ui/commit/3c6297bf8c7a0b495816cca81aeef5985c141a54))

### Bug Fixes

- **addon-preview:** `PreviewModule` add providers ([#1194](https://github.com/tinkoff/taiga-ui/issues/1194))
  ([f7a4ba9](https://github.com/tinkoff/taiga-ui/commit/f7a4ba9be559243059a1898c3d8a4e9677b81794))
- **core:** `formatNumber` fix for values when precision > 6 ([#1171](https://github.com/tinkoff/taiga-ui/issues/1171))
  ([d7f7183](https://github.com/tinkoff/taiga-ui/commit/d7f718314cdfa35e171a5650808dce369ccc2cb1))
- **core:** `Dialog` fix unnecessary scroll on mobile ([#1190](https://github.com/tinkoff/taiga-ui/issues/1190))
  ([e8303af](https://github.com/tinkoff/taiga-ui/commit/e8303af19af547e072123e0af26c8f947e52bb52))
- **kit:** `InputDate`, `InputDateRange`, `InputDateTime` fix filler with custom date-separator
  ([#1180](https://github.com/tinkoff/taiga-ui/issues/1180))
  ([723c9b3](https://github.com/tinkoff/taiga-ui/commit/723c9b35ef6d99442f0d223ee6152834664792e5))
- **kit:** `InputTag` fix broken layout with cleaner for all sizes
  ([#1186](https://github.com/tinkoff/taiga-ui/issues/1186))
  ([2cd678f](https://github.com/tinkoff/taiga-ui/commit/2cd678f74c5ec35092e7052b6cf0e9cb33ab8800))
- **kit:** `Tree` fix change detection in async children ([#1189](https://github.com/tinkoff/taiga-ui/issues/1189))
  ([2a215cf](https://github.com/tinkoff/taiga-ui/commit/2a215cf1d518f5ad1867abe468c400b7d95a9e3b))

## [2.29.0](https://github.com/tinkoff/taiga-ui/compare/v2.28.0...v2.29.0) (2021-12-28)

### Features

- **addon-doc:** `LegendItem` add checkbox support ([#1145](https://github.com/tinkoff/taiga-ui/issues/1145))
  ([140391b](https://github.com/tinkoff/taiga-ui/commit/140391bf3f3c517f461dff4276d3795bd9b84ef4))
- **addon-doc:** `PieChart`/`RingChart` add animations ([#1133](https://github.com/tinkoff/taiga-ui/issues/1133))
  ([1803970](https://github.com/tinkoff/taiga-ui/commit/1803970cd0cc6b8e3da86816d64cf82afbe0ed35))
- **kit:** `InputDate` add full support of `TUI_DATE_FORMAT` ([#1146](https://github.com/tinkoff/taiga-ui/issues/1146))
  ([52d6472](https://github.com/tinkoff/taiga-ui/commit/52d647257b71409a407e8c00cec85cfc93c64970))
- **kit:** `InputDateRange` add full support of `TUI_DATE_FORMAT`
  ([#1155](https://github.com/tinkoff/taiga-ui/issues/1155))
  ([f6c8d08](https://github.com/tinkoff/taiga-ui/commit/f6c8d080139bba3d55d8608311b9aca594aca4de))
- **kit:** `InputDateTime` add full support of `TUI_DATE_FORMAT`
  ([#1154](https://github.com/tinkoff/taiga-ui/issues/1154))
  ([6ea8dd2](https://github.com/tinkoff/taiga-ui/commit/6ea8dd2e122a9083aec133d1c0c37c90ddb4d0f9))

### Bug Fixes

- **addon-doc:** fix vertical scrollbar height for root content
  ([#1148](https://github.com/tinkoff/taiga-ui/issues/1148))
  ([128295a](https://github.com/tinkoff/taiga-ui/commit/128295a340c60f4181cd9f6abd3666cd8516cf49))
- **kit:** `InputPhoneInternation` fix countries ([#1147](https://github.com/tinkoff/taiga-ui/issues/1147))
  ([eb7829f](https://github.com/tinkoff/taiga-ui/commit/eb7829feb5c39b5b0236f59593567cf0b4fa145f))
- **kit:** `InputInline` fix hiding first character in safari ([#1138](https://github.com/tinkoff/taiga-ui/issues/1138))
  ([03cfda9](https://github.com/tinkoff/taiga-ui/commit/03cfda9a6a963c9de54b8375ac7f344628b1941d))

## [2.28.0](https://github.com/tinkoff/taiga-ui/compare/v2.27.1...v2.28.0) (2021-12-20)

### Features

- **addon-charts:** `ArcChart` add new component ([#1122](https://github.com/tinkoff/taiga-ui/issues/1122))
  ([0742c9f](https://github.com/tinkoff/taiga-ui/commit/0742c9f99bedd1b7d2a9100d0956d7e5d472169c))
- **cdk:** `TUI_TOUCH_SUPPORTED` add new token ([#1123](https://github.com/tinkoff/taiga-ui/issues/1123))
  ([2227a09](https://github.com/tinkoff/taiga-ui/commit/2227a093b3f3a33ac4e45fd891decbad082f5626))
- **core:** add source processor for svg component
  ([29701d5](https://github.com/tinkoff/taiga-ui/commit/29701d50c9b91a9eb0128611a86fb83b32923dc4))
- **kit:** `TUI_VALIDATION_ERRORS` add ability to work with Observable
  ([#1118](https://github.com/tinkoff/taiga-ui/issues/1118))
  ([f78f946](https://github.com/tinkoff/taiga-ui/commit/f78f946e2f75bb796e5b5d87f21b22e829129ff8))

### Bug Fixes

- **kit:** `MultiSelect` fix pseudoHovered and pseudoFocused ([#1125](https://github.com/tinkoff/taiga-ui/issues/1125))
  ([08326a5](https://github.com/tinkoff/taiga-ui/commit/08326a595c302e877cb8ae285a3b902da2555ca9))

### [2.27.1](https://github.com/tinkoff/taiga-ui/compare/v2.27.0...v2.27.1) (2021-12-15)

### Bug Fixes

- **core:** disable pointer events on value decorator ([#1113](https://github.com/tinkoff/taiga-ui/issues/1113))
  ([2623d1c](https://github.com/tinkoff/taiga-ui/commit/2623d1cbc6cc0e9a243352e0b34796f198da1ae8))

## [2.27.0](https://github.com/tinkoff/taiga-ui/compare/v2.25.0...v2.27.0) (2021-12-14)

### Features

- **addon-editor:** resizable images ([#959](https://github.com/tinkoff/taiga-ui/issues/959))
  ([4132e57](https://github.com/tinkoff/taiga-ui/commit/4132e579f0b2506f4fa790c40ceb109e806296ee))
- **addon-table:** update `Th` style ([#1087](https://github.com/tinkoff/taiga-ui/issues/1087))
  ([59830c6](https://github.com/tinkoff/taiga-ui/commit/59830c677ce0446332332855d7da0d77624f7edf))
- **cdk:** `CopyProcessor` add new directive to process value before it is copied
  ([#1094](https://github.com/tinkoff/taiga-ui/issues/1094))
  ([1768464](https://github.com/tinkoff/taiga-ui/commit/1768464cd102046ee8b8f4c9d9051f9e126a052b))
- **core:** add accent appearance ([#1098](https://github.com/tinkoff/taiga-ui/issues/1098))
  ([bf55bb1](https://github.com/tinkoff/taiga-ui/commit/bf55bb15a56620c24fb579a7bad5a70356e4728a))
- **kit:** `Accordion` add support for eager content ([#1081](https://github.com/tinkoff/taiga-ui/issues/1081))
  ([14f44ca](https://github.com/tinkoff/taiga-ui/commit/14f44caef5c393fe76aaf45dab3d7eb2579a1187))

### Bug Fixes

- **addon-editor:** improved type safety ([#1089](https://github.com/tinkoff/taiga-ui/issues/1089))
  ([9077e88](https://github.com/tinkoff/taiga-ui/commit/9077e885be3e789c52317c235a251f33795e0417))
- **addon-mobile:** `Sheet` fix closeable and swipe down ([#1073](https://github.com/tinkoff/taiga-ui/issues/1073))
  ([9870fb4](https://github.com/tinkoff/taiga-ui/commit/9870fb424237358c168f96e9db6263aa9e8d9bf9))
- **core:** `Button` add visual indication for clicks on mobile
  ([#1074](https://github.com/tinkoff/taiga-ui/issues/1074))
  ([143311f](https://github.com/tinkoff/taiga-ui/commit/143311f64b093a2064263473159d34f06158e9a3))
- **core:** fix expanding inputs based on content ([#1107](https://github.com/tinkoff/taiga-ui/issues/1107))
  ([72f15a2](https://github.com/tinkoff/taiga-ui/commit/72f15a23677d6dbc489ed1991f4d79c6e9b83716))
- **kit:** `Carousel` fix for iOS ([#1105](https://github.com/tinkoff/taiga-ui/issues/1105))
  ([6888347](https://github.com/tinkoff/taiga-ui/commit/6888347002138e98a708cb43a3a65279778e8fbf))
- **kit:** `Combobox` open dropdown on cleaner click ([#1078](https://github.com/tinkoff/taiga-ui/issues/1078))
  ([849f22d](https://github.com/tinkoff/taiga-ui/commit/849f22d0ddf17270eca60a9c03b4815c2953b2a6))
- **kit:** `InputInline` fix expression change error ([#1082](https://github.com/tinkoff/taiga-ui/issues/1082))
  ([8d7f615](https://github.com/tinkoff/taiga-ui/commit/8d7f615077c164ddcccb5a27344b04a7a2604acf))
- **kit:** `InputNumber` fix updating the value and limits at the same time
  ([#1076](https://github.com/tinkoff/taiga-ui/issues/1076))
  ([a9bae40](https://github.com/tinkoff/taiga-ui/commit/a9bae401c63fe8b12bf23614204ab461008d259a))
- **kit:** `PdfViewer` add `SafeResourceUrl` support ([#1090](https://github.com/tinkoff/taiga-ui/issues/1090))
  ([3b0cb71](https://github.com/tinkoff/taiga-ui/commit/3b0cb7173a09968a0f3a960aaf4f20c9ec0771a1))
- **kit:** cross browser support hiding placeholder ([#1099](https://github.com/tinkoff/taiga-ui/issues/1099))
  ([dd71659](https://github.com/tinkoff/taiga-ui/commit/dd71659249c8ede6d431908a868c751757352e94))

## [2.26.0](https://github.com/tinkoff/taiga-ui/compare/v2.25.0...v2.26.0) (2021-12-06)

### Features

- **addon-tablebars:** add adaptive for `TableBars` ([#1063](https://github.com/tinkoff/taiga-ui/issues/1063))
  ([6487074](https://github.com/tinkoff/taiga-ui/commit/6487074f00f6cb2b12b7341b71a918bfa8ad574c))
- **kit:** `Carousel` add new component ([#1044](https://github.com/tinkoff/taiga-ui/issues/1044))
  ([bb0740d](https://github.com/tinkoff/taiga-ui/commit/bb0740d682126b951d9b985b3ece9f235562eaf5))
- **kit:** `Highlight` add color customization ([#1064](https://github.com/tinkoff/taiga-ui/issues/1064))
  ([5a9d0b7](https://github.com/tinkoff/taiga-ui/commit/5a9d0b73444e2ae5b717d7db0010c7ab59079fba))

### Bug Fixes

- **addon-preview:** close preview on esc event ([#1057](https://github.com/tinkoff/taiga-ui/issues/1057))
  ([74f453c](https://github.com/tinkoff/taiga-ui/commit/74f453c381975f234f1207157d9a197dc6b21075))
- **addon-table:** fix arrow visibility in safari ([#1050](https://github.com/tinkoff/taiga-ui/issues/1050))
  ([1e0145c](https://github.com/tinkoff/taiga-ui/commit/1e0145cc14c7bfdafdb681f5f88044c402abd305))
- **core:** `Hint` fix positioning for small screens ([#1055](https://github.com/tinkoff/taiga-ui/issues/1055))
  ([31b0fb0](https://github.com/tinkoff/taiga-ui/commit/31b0fb0bbd85a01c279f58382459145eb0c0add9))

## [2.25.0](https://github.com/tinkoff/taiga-ui/compare/v2.23.0...v2.25.0) (2021-11-29)

### Features

- **addon-preview:** add new package ([#350](https://github.com/tinkoff/taiga-ui/issues/350))
  ([841be7e](https://github.com/tinkoff/taiga-ui/commit/841be7e96bc5a1f5676dcd0f6fd35945683698f7))
- **kit:** `PdfViewer` add new component ([#1032](https://github.com/tinkoff/taiga-ui/issues/1032))
  ([b953123](https://github.com/tinkoff/taiga-ui/commit/b953123103a2470d026981f0be2b102b9c90e48b))

## [2.24.0](https://github.com/tinkoff/taiga-ui/compare/v2.23.0...v2.24.0) (2021-11-22)

### Features

- **addon-doc:** support Promise content ([#821](https://github.com/tinkoff/taiga-ui/issues/821))
  ([459fc21](https://github.com/tinkoff/taiga-ui/commit/459fc21911da527cf7920df3d172301f95e3566d))
- **core:** `Button` allow configuration of default options ([#1026](https://github.com/tinkoff/taiga-ui/issues/1026))
  ([df2a8f5](https://github.com/tinkoff/taiga-ui/commit/df2a8f5a46752780617ec13295d68ad71927fabe))
- **core:** add support for virtual scroll in dropdowns ([#1018](https://github.com/tinkoff/taiga-ui/issues/1018))
  ([3ecb73b](https://github.com/tinkoff/taiga-ui/commit/3ecb73b161404d615ff3d5bac7cf13c9d2f17850))

### Bug Fixes

- **addon-commerce:** fix problem with autofill card in Safari
  ([#1024](https://github.com/tinkoff/taiga-ui/issues/1024))
  ([883fde6](https://github.com/tinkoff/taiga-ui/commit/883fde63290446c929788748c6b2a651f0bba138))
- **cdk:** `ActiveZone` fix for shadow DOM clicks ([#1028](https://github.com/tinkoff/taiga-ui/issues/1028))
  ([f2ee219](https://github.com/tinkoff/taiga-ui/commit/f2ee219f31806bdf724433c738c33ee5952cb8eb))
- **core** fix number mask bug with wrong position of thousand separator
  ([#985](https://github.com/tinkoff/taiga-ui/issues/985))
  ([9fb097c](https://github.com/tinkoff/taiga-ui/commit/9fb097c97cd0cd35ff7611912e380c0600fd12ad))

## [2.23.0](https://github.com/tinkoff/taiga-ui/compare/v2.22.0...v2.23.0) (2021-11-15)

### Features

- **addon-doc:** output visualization ([#994](https://github.com/tinkoff/taiga-ui/issues/994))
  ([835c8f1](https://github.com/tinkoff/taiga-ui/commit/835c8f1bdb53c103de5544293731c44a0d70ff17))
- **addon-mobile:** `MobileCalendar` add dark mode support ([#964](https://github.com/tinkoff/taiga-ui/issues/964))
  ([a0f230d](https://github.com/tinkoff/taiga-ui/commit/a0f230d24e6f1c005b19caca8ec7e7523f51a861))
- **kit:** `InputPassword` disable hint if text is empty string ([#981](https://github.com/tinkoff/taiga-ui/issues/981))
  ([f0407dd](https://github.com/tinkoff/taiga-ui/commit/f0407ddad111eff1e85136f8987106b850d9df46))
- **kit:** support direction: rtl for controls ([#983](https://github.com/tinkoff/taiga-ui/issues/983))
  ([c0b4b28](https://github.com/tinkoff/taiga-ui/commit/c0b4b28c9e7e5759fa451d922f4ff8ea9a97d83e))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` fix for long numbers and small screens
  ([#998](https://github.com/tinkoff/taiga-ui/issues/998))
  ([84078cc](https://github.com/tinkoff/taiga-ui/commit/84078ccf2b6699350572c90ac99bed9f0db10f66))
- **cdk:** `HoveredService` fix for touch devices ([#973](https://github.com/tinkoff/taiga-ui/issues/973))
  ([19e5136](https://github.com/tinkoff/taiga-ui/commit/19e513693a2c1da009f58057221a52224d51248d))
- **core:** `HostedDropdown` fix event propagation on esc ([#975](https://github.com/tinkoff/taiga-ui/issues/975))
  ([5daee4a](https://github.com/tinkoff/taiga-ui/commit/5daee4a9ce6b81a0c4a090c93bdcc3cf0f91f6f0))
- **kit:** `InputNumber` fix custom formatting ([#976](https://github.com/tinkoff/taiga-ui/issues/976))
  ([fcb4b34](https://github.com/tinkoff/taiga-ui/commit/fcb4b34650310e51c42da09f4fe6e341a829b706))
- **kit:** `MultiSelect` arrow icon overflow (by many tags) ([#982](https://github.com/tinkoff/taiga-ui/issues/982))
  ([0933adf](https://github.com/tinkoff/taiga-ui/commit/0933adfd9614631a9831d354560bd893b74f899d))

## [2.22.0](https://github.com/tinkoff/taiga-ui/compare/v2.21.0...v2.22.0) (2021-11-02)

### Features

- **addon-doc:** open sidebar on swipe ([#943](https://github.com/tinkoff/taiga-ui/issues/943))
  ([a8a4016](https://github.com/tinkoff/taiga-ui/commit/a8a40165ad1e14205fab7ab65a0b7ebac90caf81))
- **addon-editor:** `Editor[new]` dark mode support ([#947](https://github.com/tinkoff/taiga-ui/issues/947))
  ([3c2f814](https://github.com/tinkoff/taiga-ui/commit/3c2f8144b3f766866bb6d2d5d7da34ff4c2c1619))
- **cdk:** add `Zoom` directive ([#938](https://github.com/tinkoff/taiga-ui/issues/938))
  ([bbe762c](https://github.com/tinkoff/taiga-ui/commit/bbe762ca63730e01d355902b16f9e65afff20944))
- **core:** add old styles ([#957](https://github.com/tinkoff/taiga-ui/issues/957))
  ([89683cb](https://github.com/tinkoff/taiga-ui/commit/89683cbd48649bd8978078909cfa7bb2a0dab56c))
- **core,kit:** support Less 4+ ([#949](https://github.com/tinkoff/taiga-ui/issues/949))
  ([ca5f276](https://github.com/tinkoff/taiga-ui/commit/ca5f276233223de7d1da3dab75a8a8fd35cfbb45))
- **kit:** `Tree` add new component
  ([33f47b8](https://github.com/tinkoff/taiga-ui/commit/33f47b85f4ac97f8d2f9bb93685cb719f2907d4b))
- **kit:** `Badge` add "info" and "neutral" statuses ([#948](https://github.com/tinkoff/taiga-ui/issues/948))
  ([43d0f33](https://github.com/tinkoff/taiga-ui/commit/43d0f33f9ac7ed9ca042d27bcb5563d65981111e))

### Bug Fixes

- **addon-doc:** fix menu header ([#941](https://github.com/tinkoff/taiga-ui/issues/941))
  ([7168bb7](https://github.com/tinkoff/taiga-ui/commit/7168bb70d8a3e912a28e7c3bae0db8e6e6a14fcc))
- **addon-doc:** unexpected expanding subitems ([#935](https://github.com/tinkoff/taiga-ui/issues/935))
  ([2768d72](https://github.com/tinkoff/taiga-ui/commit/2768d729a47303e5d14ea3104b1a67505d9267dc))
- **core:** `SvgService` fix custom icons
  ([2cd27cf](https://github.com/tinkoff/taiga-ui/commit/2cd27cf84f18fcfd0ccd3a85c159468b8268af09))
- **core:** make hint part of current active zone ([#956](https://github.com/tinkoff/taiga-ui/issues/956))
  ([9ef7272](https://github.com/tinkoff/taiga-ui/commit/9ef727267bef116f58cd1f623c2ae41e217425eb))
- **kit:** `Select`, `ComboBox`, `MultiSelect` remove arrow icon if `disabled` or `readonly`
  ([#955](https://github.com/tinkoff/taiga-ui/issues/955))
  ([8eb4d1c](https://github.com/tinkoff/taiga-ui/commit/8eb4d1cb0b2f4791fe83efb6d50d7d7be42a9994))

## [2.21.0](https://github.com/tinkoff/taiga-ui/compare/v2.20.0...v2.21.0) (2021-10-25)

### Features

- **addon-editor:** `Editor[new]` add custom tools support ([#842](https://github.com/tinkoff/taiga-ui/issues/842))
  ([1422520](https://github.com/tinkoff/taiga-ui/commit/142252009a29e00ae4e92742abd12401109ef5a6))
- **cdk:** new directive `Pan` ([#922](https://github.com/tinkoff/taiga-ui/issues/922))
  ([d87996e](https://github.com/tinkoff/taiga-ui/commit/d87996e30516198e3b725b952c81cb3631fcb29a))
- **cdk:** new directive `Swipe` ([#914](https://github.com/tinkoff/taiga-ui/issues/914))
  ([fb7581b](https://github.com/tinkoff/taiga-ui/commit/fb7581bee1058d35533b7d801cbabc092406eb76))

### Bug Fixes

- **cdk:** `Autofill` get rid of an extra change detection cycle
  ([#908](https://github.com/tinkoff/taiga-ui/issues/908))
  ([bb051d5](https://github.com/tinkoff/taiga-ui/commit/bb051d5354fcd143c9505f70e6e756ba522f7a15))
- **core:** fix tui-mobile-only query ([#912](https://github.com/tinkoff/taiga-ui/issues/912))
  ([0457918](https://github.com/tinkoff/taiga-ui/commit/0457918945f7547359d3479d7cb6cc562645a331))

## [2.20.0](https://github.com/tinkoff/taiga-ui/compare/v2.19.0...v2.20.0) (2021-10-18)

### Features

- **addon-commerce:** support `PolymorpheusContent` in the `cardSrc` input parameter
  ([#866](https://github.com/tinkoff/taiga-ui/issues/866))
  ([353bb04](https://github.com/tinkoff/taiga-ui/commit/353bb04d604ebfface94a122d75f11f1cbce083e))
- **addon-mobile:** `Sheet` add new component ([#850](https://github.com/tinkoff/taiga-ui/issues/850))
  ([2707391](https://github.com/tinkoff/taiga-ui/commit/27073912e5056070926fe98507139c09ecc8c922))
- **cdk:** `Time` add conversion from Date method ([#877](https://github.com/tinkoff/taiga-ui/issues/877))
  ([7b47bcc](https://github.com/tinkoff/taiga-ui/commit/7b47bcc0aba6f59c7fa3993c00e29b53d242632f))
- **core:** add configuration of trailing zeroes ([#859](https://github.com/tinkoff/taiga-ui/issues/859))
  ([c765088](https://github.com/tinkoff/taiga-ui/commit/c7650887c5a044a83845c7bca7a32bb7c8119b50))
- **core:** update shadow color ([#895](https://github.com/tinkoff/taiga-ui/issues/895))
  ([26219e5](https://github.com/tinkoff/taiga-ui/commit/26219e5d59f30eafa6e5732a676cf09079becf97))
- **i18n:** add Polish support ([#828](https://github.com/tinkoff/taiga-ui/issues/828))
  ([8f8893e](https://github.com/tinkoff/taiga-ui/commit/8f8893e1c80545376a8f9c9091d35f9ba73723fe))
- **notification:** allow configuration of default options ([#636](https://github.com/tinkoff/taiga-ui/issues/636))
  ([d89e523](https://github.com/tinkoff/taiga-ui/commit/d89e523cda8d9e45f52926afe3f7a286c605dca0))

### Bug Fixes

- **addon-editor:** `Editor[new]` broken `ActiveZone` inside toolbar buttons
  ([#845](https://github.com/tinkoff/taiga-ui/issues/845))
  ([e682646](https://github.com/tinkoff/taiga-ui/commit/e682646c6b7202fc90628ac238aa132029b6a87f))
- **cdk:** fix component content recreating on context change ([#896](https://github.com/tinkoff/taiga-ui/issues/896))
  ([6932e9c](https://github.com/tinkoff/taiga-ui/commit/6932e9c5a05ea8865f91f1c494c01e38f68e1f63))
- **core:** fix neutral-bg color ([#893](https://github.com/tinkoff/taiga-ui/issues/893))
  ([d5a933c](https://github.com/tinkoff/taiga-ui/commit/d5a933c430988002553ccaeb8fa59c80f29b7b3a))
- **kit:** use proper screen keyboard on date components ([#878](https://github.com/tinkoff/taiga-ui/issues/878))
  ([218728a](https://github.com/tinkoff/taiga-ui/commit/218728a8463b0aff71015d8f3e72eb34b1f3caaf))
- **demo:** handle only one component/module per ts-file
  ([e0dcea0](https://github.com/tinkoff/taiga-ui/commit/e0dcea05fdfb457832243f17c41b5b4e26ad74c1))

## [2.19.0](https://github.com/tinkoff/taiga-ui/compare/v2.18.0...v2.19.0) (2021-10-04)

### Features

- **addon-commerce:** `InputCardGroup` make prefilled CVC readonly
  ([#812](https://github.com/tinkoff/taiga-ui/issues/812))
  ([ce5c4c5](https://github.com/tinkoff/taiga-ui/commit/ce5c4c511eb37bb793fd141fee9b1de7127414f3))
- **i18n:** add italian language ([#807](https://github.com/tinkoff/taiga-ui/issues/807))
  ([dc720fe](https://github.com/tinkoff/taiga-ui/commit/dc720fe90076da41647ad6515c0726df9c55a85c))
- **icons:** add new icons ([#820](https://github.com/tinkoff/taiga-ui/issues/820))
  ([65c3131](https://github.com/tinkoff/taiga-ui/commit/65c31317a5df36cce7bea3984a4baa385e213d84))

### Bug Fixes

- **addon-charts:** show hint on single point ([#806](https://github.com/tinkoff/taiga-ui/issues/806))
  ([475709e](https://github.com/tinkoff/taiga-ui/commit/475709e529993ce62f30b10d8dff37be5f95ab9a))
- **addon-mobile:** `MobileCalendar` fix styles ([#809](https://github.com/tinkoff/taiga-ui/issues/809))
  ([953cd3a](https://github.com/tinkoff/taiga-ui/commit/953cd3a79316e0f551bef827fdcbd437778caac7))
- **core:** `PrimitiveCalendar` red color for weekends (with custom `TUI_FIRST_DAY_OF_WEEK`)
  ([#795](https://github.com/tinkoff/taiga-ui/issues/795))
  ([81d0d21](https://github.com/tinkoff/taiga-ui/commit/81d0d21430f62c3204c289a8eca4b83e1e08a3a4))
- **core:** change min-height of `ScrollControls`'s bar to fix `TextArea`
  ([#664](https://github.com/tinkoff/taiga-ui/issues/664))
  ([313127f](https://github.com/tinkoff/taiga-ui/commit/313127f57bcd538521a81ee8d1f22682e0b15a0c))
- **core:** fix updating dynamic ng-content in `PrimitiveTextfield`
  ([#789](https://github.com/tinkoff/taiga-ui/issues/789))
  ([bfcaccd](https://github.com/tinkoff/taiga-ui/commit/bfcaccddfbfa80ca153501c6b4631d4c2555ed4f))
- **icons:** make icon size dependent on font size ([#792](https://github.com/tinkoff/taiga-ui/issues/792))
  ([cfaedf2](https://github.com/tinkoff/taiga-ui/commit/cfaedf2ab07739261636327a79f8ee0f2548ec24))
- **kit:** `InputDateRange` fix filler appearing on custom date ([#813](https://github.com/tinkoff/taiga-ui/issues/813))
  ([24f95ef](https://github.com/tinkoff/taiga-ui/commit/24f95efbc3032d8f2b4588f9874cd5f266ff25db))
- **kit:** `InputFile` trim whitespaces in accept list ([#786](https://github.com/tinkoff/taiga-ui/issues/786))
  ([a59b92e](https://github.com/tinkoff/taiga-ui/commit/a59b92e94bace51ace013a188b0bbc7e6b5b3b95))

## [2.18.0](https://github.com/tinkoff/taiga-ui/compare/v2.17.0...v2.18.0) (2021-09-27)

### Features

- **addon-doc:** support left menu items without sections ([#463](https://github.com/tinkoff/taiga-ui/issues/463))
  ([8f3e1cf](https://github.com/tinkoff/taiga-ui/commit/8f3e1cfcc64e00fb7a618704d685fb984e1b3cd0))
- **addon-editor:** add ability to color cells ([#766](https://github.com/tinkoff/taiga-ui/issues/766))
  ([c008bfe](https://github.com/tinkoff/taiga-ui/commit/c008bfed0cdbdcdc3b4a57d883ecf6439d9f62c0))
- **all:** add prefix t- to internal classes to avoid clashed ([#704](https://github.com/tinkoff/taiga-ui/issues/704))
  ([8522c88](https://github.com/tinkoff/taiga-ui/commit/8522c8859956bfcf133587d118e202b411c27c0e))
- **all:** preserve const enums [[#495](https://github.com/tinkoff/taiga-ui/issues/495)]
  ([6ac8e00](https://github.com/tinkoff/taiga-ui/commit/6ac8e004f0d6a22787bcc4c8ba6dcf1979079074))
- **core:** `Dialog` add directive for declarative dialogs ([#745](https://github.com/tinkoff/taiga-ui/issues/745))
  ([cbd1a90](https://github.com/tinkoff/taiga-ui/commit/cbd1a906c8fb62ce4c828548ab12d2be0e756c29))
- **kit:** `Stringify` add new pipe ([#775](https://github.com/tinkoff/taiga-ui/issues/775))
  ([39e4766](https://github.com/tinkoff/taiga-ui/commit/39e47660eb09995019fd01d73404ff58d8badf4d))

### Bug Fixes

- **addon-commerce:** fix card length check for unknown payment systems
  ([#728](https://github.com/tinkoff/taiga-ui/issues/728))
  ([271b3db](https://github.com/tinkoff/taiga-ui/commit/271b3db782182c4e3d9682c0d4a4921ee4160e4f))
- **demo:** add `Progress`, `DropdownContext`, `Editor` modules to stackblitz starter
  ([7515fcc](https://github.com/tinkoff/taiga-ui/commit/7515fcced13c87701c6988db111fe410754b58f2))
- **i18n:** fix russian i18n for editor ([#757](https://github.com/tinkoff/taiga-ui/issues/757))
  ([55dd5d6](https://github.com/tinkoff/taiga-ui/commit/55dd5d6ff6ec30ded00a828212984b40b292ffb2))
- **kit:** `BadgedContent` fix icons color ([#749](https://github.com/tinkoff/taiga-ui/issues/749))
  ([add85a4](https://github.com/tinkoff/taiga-ui/commit/add85a4e9f6365421567707ee30e4aac907db4d2))
- **kit:** `InputPhoneInternational` correction of disabled state
  ([0591eca](https://github.com/tinkoff/taiga-ui/commit/0591eca5d3bec3f5f2ddf9ade7cdaba52a4494c2))
- **kit:** `ProgressCircle` keeps css-property `r` while --prod build
  ([e60acf4](https://github.com/tinkoff/taiga-ui/commit/e60acf4776063ff325c4bf1080c74f78d771f152)), closes
  [issue#1021](https://github.com/tinkoff/issue/issues/1021)

## [2.17.0](https://github.com/tinkoff/taiga-ui/compare/v2.16.3...v2.17.0) (2021-09-20)

### Features

- **icons:** add new icons `tuiIconBellOff` ([#698](https://github.com/tinkoff/taiga-ui/issues/698))
  ([fd15a54](https://github.com/tinkoff/taiga-ui/commit/fd15a544ecc818e209718bdc6c5ced4bd34f9922))
- **kit:** new component `ProgressCircle` ([#697](https://github.com/tinkoff/taiga-ui/issues/697))
  ([094c14d](https://github.com/tinkoff/taiga-ui/commit/094c14d06c12fd87a17135e3cd6f23891ffa966f))
- **kit:** new component `ProgressSegmented` ([#714](https://github.com/tinkoff/taiga-ui/issues/714))
  ([66dceff](https://github.com/tinkoff/taiga-ui/commit/66dcefffbe4f86cfff788af26921fe87e493d9f3))

### Bug Fixes

- **core:** fix primitive-texfield template ([#715](https://github.com/tinkoff/taiga-ui/issues/715))
  ([eca780a](https://github.com/tinkoff/taiga-ui/commit/eca780a3baad5a67dcc2ae1af167302c1a50fa79))

### [2.16.3](https://github.com/tinkoff/taiga-ui/compare/v2.16.2...v2.16.3) (2021-09-15)

### Bug Fixes

- **core:** fix primitive-texfield padding ([#695](https://github.com/tinkoff/taiga-ui/issues/695))
  ([fc7ae56](https://github.com/tinkoff/taiga-ui/commit/fc7ae56b89bfa2e39b9f95467fea5857989ade62))

### [2.16.2](https://github.com/tinkoff/taiga-ui/compare/v2.16.1...v2.16.2) (2021-09-14)

### Bug Fixes

- **core:** autofill border color
  ([e80c8ed](https://github.com/tinkoff/taiga-ui/commit/e80c8ed3707fe152383aaa434c4700647d479ce6))

### [2.16.1](https://github.com/tinkoff/taiga-ui/compare/v2.16.0...v2.16.1) (2021-09-14)

### Features

- **core:** update media breakpoints ([#678](https://github.com/tinkoff/taiga-ui/issues/678))
  ([db84b43](https://github.com/tinkoff/taiga-ui/commit/db84b4362d4bead3ca2e915993f9d42d91aff5bc))

### Bug Fixes

- **addon-mobile:** fix user-select for contenteditable ([#689](https://github.com/tinkoff/taiga-ui/issues/689))
  ([381365d](https://github.com/tinkoff/taiga-ui/commit/381365d6b42aa4f94ef90bef7ee6649e28f42d9f))

## [2.16.0](https://github.com/tinkoff/taiga-ui/compare/v2.15.0...v2.16.0) (2021-09-13)

### Features

- **addon-doc:** add polymorpheus to heading and description of examples
  ([#677](https://github.com/tinkoff/taiga-ui/issues/677))
  ([02bc696](https://github.com/tinkoff/taiga-ui/commit/02bc6965ad9b7b9165f2d9f6aa1d27bd4c1ca5b0))
- **addon-editor:** add new `Editor` component ([#583](https://github.com/tinkoff/taiga-ui/issues/583))
  ([ba602df](https://github.com/tinkoff/taiga-ui/commit/ba602df0946aaba5f1b14b5f7cefe0b7742e47de))
- **kit:** `InputCount` allow configuration of default options ([#675](https://github.com/tinkoff/taiga-ui/issues/675))
  ([fab225b](https://github.com/tinkoff/taiga-ui/commit/fab225bac43a6ad39c50c256c94fe5503e994755))
- **kit:** new attribute component `ProgressBar` ([#665](https://github.com/tinkoff/taiga-ui/issues/665))
  ([780b120](https://github.com/tinkoff/taiga-ui/commit/780b1201a468e0801b42796a6b6f447243dfb46f))
- **core:** `TUI_NUMBER_FORMAT` token to configure decimals and thousand symbols in number formatting
  ([9748ba4](https://github.com/tinkoff/taiga-ui/commit/9748ba46ff99aa7f7c01d0abc02cd07f894312bc))

### Bug Fixes

- **core:** fix Firefox input issue with caret outside visible area
  ([#612](https://github.com/tinkoff/taiga-ui/issues/612))
  ([ecf6b25](https://github.com/tinkoff/taiga-ui/commit/ecf6b25ee096c37e9073981fd6bcdc47d480f462))
- **kit:** `MultiSelect` fix dropdown when wrapped in label ([#685](https://github.com/tinkoff/taiga-ui/issues/685))
  ([a63b04d](https://github.com/tinkoff/taiga-ui/commit/a63b04d2d1c24065926f37a1b564ca4f50a8b9c6))

## [2.15.0](https://github.com/tinkoff/taiga-ui/compare/v2.14.0...v2.15.0) (2021-09-06)

### Features

- **addon-commerce:** `InputCardGroup` add ability to use `DataList`
  ([#660](https://github.com/tinkoff/taiga-ui/issues/660))
  ([771b94b](https://github.com/tinkoff/taiga-ui/commit/771b94b2daee1c522e5f92ccf34714c309bd3958))
- **demo:** new documentation page `Testing` ([#661](https://github.com/tinkoff/taiga-ui/issues/661))
  ([93de6fc](https://github.com/tinkoff/taiga-ui/commit/93de6fc65716e7089653c21133ff02d582fd2be5))
- **kit:** switch to angular `i18nPlural` pipe ([#628](https://github.com/tinkoff/taiga-ui/issues/628))
  ([a19f53a](https://github.com/tinkoff/taiga-ui/commit/a19f53a1d0a8fdd94c8314faf3af566c043609eb))
- **kit:** `Toggle` allow configuring default options ([#635](https://github.com/tinkoff/taiga-ui/issues/635))
  ([945e2f4](https://github.com/tinkoff/taiga-ui/commit/945e2f4d1148808e78f8a73a7dc7404d26ab72e8))
- **i18n:** add portuguese language ([#642](https://github.com/tinkoff/taiga-ui/issues/642))
  ([e360f34](https://github.com/tinkoff/taiga-ui/commit/e360f3495db8727cef90f2aedeae5f887c82a817))

### Bug Fixes

- **addon-commerce:** fix card icons ([#647](https://github.com/tinkoff/taiga-ui/issues/647))
  ([8682755](https://github.com/tinkoff/taiga-ui/commit/8682755f301997bcc022a2d016a49d01d471cb6e))
- **addon-doc:** fix overlapping by sticky header while using anchor links
  ([8f03714](https://github.com/tinkoff/taiga-ui/commit/8f037141d235613d441aed3cf65d2915851e6b67))
- **addon-mobile:** `Sidebar` fix change detection triggered from inside
  ([3a1f08d](https://github.com/tinkoff/taiga-ui/commit/3a1f08db6e776247c18bfc6eac083b9502150a61))
- **addon-table:** `TablePagination` fix button titles ([#657](https://github.com/tinkoff/taiga-ui/issues/657))
  ([11521dd](https://github.com/tinkoff/taiga-ui/commit/11521dddd676b49a024dff22538c35faf4ca6f8e))
- **cdk:** `TUI_DIALOG_CLOSES_ON_BACK` feature toggle token ([#658](https://github.com/tinkoff/taiga-ui/issues/658))
  ([db4debe](https://github.com/tinkoff/taiga-ui/commit/db4debed99728a3ba7241d803c3772112ffdb2be))
- **core:** hide extra scrollbar on IOS ([#629](https://github.com/tinkoff/taiga-ui/issues/629))
  ([c4e6648](https://github.com/tinkoff/taiga-ui/commit/c4e664832858662708a755a1d4df8495589cf298))
- **core:** space around notification alert ([#655](https://github.com/tinkoff/taiga-ui/issues/655))
  ([b7c3ae3](https://github.com/tinkoff/taiga-ui/commit/b7c3ae342f937fc138afa5e6940e079371e33945))
- **kit:** `InputCount` controllers (+/-) overlapping ([#555](https://github.com/tinkoff/taiga-ui/issues/555))
  ([0999a22](https://github.com/tinkoff/taiga-ui/commit/0999a222aef2ade834d7a53fb414cdd78aaccb55))
- **kit:** `InputDateTime` apply min/max time restrictions if date was changed via calendar
  ([#649](https://github.com/tinkoff/taiga-ui/issues/649))
  ([6998794](https://github.com/tinkoff/taiga-ui/commit/699879480afd8a7441460fb421ce692f41c2c350)), closes
  [#645](https://github.com/tinkoff/taiga-ui/issues/645)
- **kit:** fix extra characters highlight in `TextArea` with hint
  ([#640](https://github.com/tinkoff/taiga-ui/issues/640))
  ([e3be14e](https://github.com/tinkoff/taiga-ui/commit/e3be14e200646feac0ee309468952f5e71057a06))
- **shematics:** install `@types/dompurify` when "add sanitizer" option is selected
  ([#659](https://github.com/tinkoff/taiga-ui/issues/659))
  ([463c565](https://github.com/tinkoff/taiga-ui/commit/463c565bdacb1c72b81056754f151dc83e22bc90))

## [2.14.0](https://github.com/tinkoff/taiga-ui/compare/v2.13.1...v2.14.0) (2021-08-13)

### Features

- **cdk:** `For` add new directive ([#615](https://github.com/tinkoff/taiga-ui/issues/615))
  ([6165f85](https://github.com/tinkoff/taiga-ui/commit/6165f8591dd7dd9d8b52a26677e58fa329b96488))
- **demo:** disable animation if app is running under Cypress (via `TUI_ANIMATIONS_DURATION`)
  ([#572](https://github.com/tinkoff/taiga-ui/issues/572))
  ([165a3d3](https://github.com/tinkoff/taiga-ui/commit/165a3d31d3154887f9251720f740ffcbb439fdb3))
- **i18n:** add Spanish translations for countries ([#600](https://github.com/tinkoff/taiga-ui/issues/600))
  ([2ed269f](https://github.com/tinkoff/taiga-ui/commit/2ed269f170eb7add37c23eb74fb9182c289cbbbf))
- **kit:** `DropdownContext` add new directive ([#527](https://github.com/tinkoff/taiga-ui/issues/527))
  ([89bbfcb](https://github.com/tinkoff/taiga-ui/commit/89bbfcb29e81e2fb8cd7521951a5a6f2b760e9de))
- **kit:** `InputDateTime` upgrade `min`, `max` inputs (add time constraints)
  ([#617](https://github.com/tinkoff/taiga-ui/issues/617))
  ([7b2a9df](https://github.com/tinkoff/taiga-ui/commit/7b2a9dfef722e109c56bbe9c4bc6e099edf27067))
- **kit:** `InputPhoneInternational` add `countryIsoCode` output
  ([#577](https://github.com/tinkoff/taiga-ui/issues/577))
  ([f60d185](https://github.com/tinkoff/taiga-ui/commit/f60d18576025c6209fa1bf91add7702e9a75b34b))
- **kit:** `InputPhoneInternational` add label support ([#607](https://github.com/tinkoff/taiga-ui/issues/607))
  ([07829a8](https://github.com/tinkoff/taiga-ui/commit/07829a8ce5089dd17ba5458a4c879f48d8274690))
- **kit:** `MultiSelect`, `InputTag` add size `s` ([#561](https://github.com/tinkoff/taiga-ui/issues/561))
  ([cb621f5](https://github.com/tinkoff/taiga-ui/commit/cb621f589c3b23470629123af14d51822a7d7a29))
- **kit:** `TextArea` extra characters highlight ([#593](https://github.com/tinkoff/taiga-ui/issues/593))
  ([45b647e](https://github.com/tinkoff/taiga-ui/commit/45b647e93ddd3fa97cf6872b53ab7892ed2745ea))
- **kit:** i18n token `TUI_DATE_TEXTS` inside `InputDateTime`, `InputDate`, `InputDateRange`
  ([#552](https://github.com/tinkoff/taiga-ui/issues/552))
  ([354d495](https://github.com/tinkoff/taiga-ui/commit/354d495fa3cd326ad58c3c3bc8f6e0545d81744d))
- **schematics:** add ability to use ng add ([#520](https://github.com/tinkoff/taiga-ui/issues/520))
  ([8134d06](https://github.com/tinkoff/taiga-ui/commit/8134d060519280286faa41695149f10cb9953724))

### Bug Fixes

- **addon-commerce:** `InputCardGroup` fix dynamic localization ([#613](https://github.com/tinkoff/taiga-ui/issues/613))
  ([5902f28](https://github.com/tinkoff/taiga-ui/commit/5902f285867fbd7c1c4414cc92ff2125c5316637))
- **cdk:** `ActiveZone` fix for shadow DOM ([#587](https://github.com/tinkoff/taiga-ui/issues/587))
  ([d872a53](https://github.com/tinkoff/taiga-ui/commit/d872a533b5ffb703b165604f1d9846eafac12aa8))
- **cdk:** `ActiveZone` ignore focus loss due to disable ([#595](https://github.com/tinkoff/taiga-ui/issues/595))
  ([181e79a](https://github.com/tinkoff/taiga-ui/commit/181e79a16410e49d83be1d2cb7f9ecb0206513d5))
- **cdk:** `DialogHost` disable closing dialog on browser `Back` inside iframe
  ([#588](https://github.com/tinkoff/taiga-ui/issues/588))
  ([39b44df](https://github.com/tinkoff/taiga-ui/commit/39b44df9a3329eeb91b58d811937207abcad6b50))
- **cdk:** `MediaDirective` fix freezes in mobile safari ([#570](https://github.com/tinkoff/taiga-ui/issues/570))
  ([1acad96](https://github.com/tinkoff/taiga-ui/commit/1acad961ce47e4d3b437f3f39f6263dd8d7019c1))
- **cdk:** make `markControlAsTouchedAndValidate` work with empty `FormArray` and `FormGroup`
  ([#586](https://github.com/tinkoff/taiga-ui/issues/586))
  ([715dde8](https://github.com/tinkoff/taiga-ui/commit/715dde802ac7fad5b66543619837f303e88526a1))
- **core:** `Button` fix expression changed for `showLoader` ([#598](https://github.com/tinkoff/taiga-ui/issues/598))
  ([902ea7e](https://github.com/tinkoff/taiga-ui/commit/902ea7e760e7a1c63be1e7e5e7dd48f46b6dbb4b))
- **core:** `InputPhone` fix cleaner [#508](https://github.com/tinkoff/taiga-ui/issues/508)
  ([#519](https://github.com/tinkoff/taiga-ui/issues/519))
  ([cd4b974](https://github.com/tinkoff/taiga-ui/commit/cd4b974e4e276ae56cc35967bca4c505cfaf589c))
- **core:** fix autofill colors in dark theme ([#605](https://github.com/tinkoff/taiga-ui/issues/605))
  ([a285032](https://github.com/tinkoff/taiga-ui/commit/a285032fbcccac92a8f9d2f803effb5e71037ad7))
- **kit:** `FieldError` fix change detection for OnPush nesting ([#564](https://github.com/tinkoff/taiga-ui/issues/564))
  ([b258dfb](https://github.com/tinkoff/taiga-ui/commit/b258dfb4c7687a3838e8f44a6a4c3ace79d8dafa))
- **kit:** `InputDateTime` fix losing unfinished input on the first blur
  ([#551](https://github.com/tinkoff/taiga-ui/issues/551))
  ([28514f6](https://github.com/tinkoff/taiga-ui/commit/28514f6b0ff0aa8d418c46d0d759b5108c18fd3e))
- **kit:** `Toggle` fix loader position ([#599](https://github.com/tinkoff/taiga-ui/issues/599))
  ([3deade0](https://github.com/tinkoff/taiga-ui/commit/3deade01edd3b2416606d4193c5487336f0bc7e9))

### [2.13.1](https://github.com/tinkoff/taiga-ui/compare/v2.13.0...v2.13.1) (2021-07-20)

### Features

- **i18n:** add Vietnamese translation ([#562](https://github.com/tinkoff/taiga-ui/issues/562))
  ([a7ee3c8](https://github.com/tinkoff/taiga-ui/commit/a7ee3c809b7118446517a37dbdb94d3e3998dd03))

### Bug Fixes

- **cdk:** `getClipboardDataText` return text/plain format as fallback
  ([#568](https://github.com/tinkoff/taiga-ui/issues/568))
  ([0615e20](https://github.com/tinkoff/taiga-ui/commit/0615e20519d909b5b429d36c4e5cb4177eaddddd))
- **cdk:** fix dropdowns in ShadowDom inside iframe ([#565](https://github.com/tinkoff/taiga-ui/issues/565))
  ([d48efa1](https://github.com/tinkoff/taiga-ui/commit/d48efa1913cab9574326834571486030b2db8e25))
- **kit:** `Breadcrumbs` fix dynamic items ([#560](https://github.com/tinkoff/taiga-ui/issues/560))
  ([ab18533](https://github.com/tinkoff/taiga-ui/commit/ab18533f9c65a4553d5bb7df078dc3a8085dcb9d))

## [2.13.0](https://github.com/tinkoff/taiga-ui/compare/v2.12.0...v2.13.0) (2021-07-13)

### Features

- **addon-commerce:** `InputCardGrouped` change text based on screen size
  ([#542](https://github.com/tinkoff/taiga-ui/issues/542))
  ([099158b](https://github.com/tinkoff/taiga-ui/commit/099158b52ed7e3dedece56d76334aa94d9dc7f23))
- **cdk:** close dialog on back button ([#486](https://github.com/tinkoff/taiga-ui/issues/486))
  ([d685a88](https://github.com/tinkoff/taiga-ui/commit/d685a88a2c1ba537991836fe51c89c939e379473))
- **i18n:** add Dutch translation for countries ([#516](https://github.com/tinkoff/taiga-ui/issues/516))
  ([a0ddd50](https://github.com/tinkoff/taiga-ui/commit/a0ddd50bcd2fb0073c84a431fadc2586c9da5eae))
- **i18n:** add french translation for countries ([#538](https://github.com/tinkoff/taiga-ui/issues/538))
  ([b6a6e4d](https://github.com/tinkoff/taiga-ui/commit/b6a6e4dd28192bac37d5eabd9bbd10b1a64ba985))
- **kit:** `InputPhoneInternational` autoselect country code on paste and drop events
  ([#532](https://github.com/tinkoff/taiga-ui/issues/532))
  ([7b381d6](https://github.com/tinkoff/taiga-ui/commit/7b381d63309dc53a76cd502470dd552c3ff80ef2))
- **kit:** `StringifyContent` add pipe
  ([d86a5a0](https://github.com/tinkoff/taiga-ui/commit/d86a5a09aedaef27cf8b3932a8f98f0fd3fc36de))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` prevent scrolling ([#529](https://github.com/tinkoff/taiga-ui/issues/529))
  ([bbf3f68](https://github.com/tinkoff/taiga-ui/commit/bbf3f685bfc1e96d35e17699f6a46bb924a1936b))
- **cdk:** `ActiveZone` properly handle parent element removal ([#545](https://github.com/tinkoff/taiga-ui/issues/545))
  ([f03d577](https://github.com/tinkoff/taiga-ui/commit/f03d5774f472280aad2b2de087cd179b8a622241))
- **core:** change the typography of headings ([#534](https://github.com/tinkoff/taiga-ui/issues/534))
  ([14afad6](https://github.com/tinkoff/taiga-ui/commit/14afad6bf342b9fe70f50a956f34967708b3d793))
- **kit:** `CheckboxLabeled`, `RadioLabeled` fix night theme color
  ([#539](https://github.com/tinkoff/taiga-ui/issues/539))
  ([b61472b](https://github.com/tinkoff/taiga-ui/commit/b61472baf71f280fb9910ce73bb97e47512f755e))
- **kit:** `FilterByInput` disable filtering on strict match ([#543](https://github.com/tinkoff/taiga-ui/issues/543))
  ([1382d60](https://github.com/tinkoff/taiga-ui/commit/1382d604572120195f0f4729f6b0c26acab6ee4f))
- **kit:** `InputCount` fix buttons size ([#537](https://github.com/tinkoff/taiga-ui/issues/537))
  ([60e7ab7](https://github.com/tinkoff/taiga-ui/commit/60e7ab77618432f08395f68e41a5b8d8651b9474))
- **kit:** `TabsWithMore` fix flickering for certain width ([#548](https://github.com/tinkoff/taiga-ui/issues/548))
  ([6f53f27](https://github.com/tinkoff/taiga-ui/commit/6f53f27111302dcf4b41871380e60399f1b47b74))

## [2.12.0](https://github.com/tinkoff/taiga-ui/compare/v2.11.2...v2.12.0) (2021-06-29)

### Features

- **addon-doc:** sync navigation panel link with opened page ([#254](https://github.com/tinkoff/taiga-ui/issues/254))
  ([cfc9d85](https://github.com/tinkoff/taiga-ui/commit/cfc9d85e6030243f992912e121d966735e339e5d))
- **all:** switch to rem units ([#488](https://github.com/tinkoff/taiga-ui/issues/488))
  ([800da63](https://github.com/tinkoff/taiga-ui/commit/800da63e2f546e581db9eb08dcc2e84c2fd1cf66))
- **core:** `TUI_FIRST_DAY_OF_WEEK` add a new token to customize calendar
  ([4299acb](https://github.com/tinkoff/taiga-ui/commit/4299acb89876e9e86daff23797ae776223b72f9c))
- **i18n:** Add french localisation ([#489](https://github.com/tinkoff/taiga-ui/issues/489))
  ([fd7a987](https://github.com/tinkoff/taiga-ui/commit/fd7a9870b0292e4dfb9916f104eb725459e25d3b))
- **kit:** `CalendarRange` add `value` input and output ([#507](https://github.com/tinkoff/taiga-ui/issues/507))
  ([f51431c](https://github.com/tinkoff/taiga-ui/commit/f51431ce813f666ea1a5b932a1c59543cfb2e8bf))
- **kit:** `FilterByInput` support `null` and 2D arrays ([#511](https://github.com/tinkoff/taiga-ui/issues/511))
  ([3c9d2b4](https://github.com/tinkoff/taiga-ui/commit/3c9d2b4c2966e0943c414a190a03078d34f88409))
- **kit:** `InputTime` add configuration token ([#487](https://github.com/tinkoff/taiga-ui/issues/487))
  ([ae8c0f2](https://github.com/tinkoff/taiga-ui/commit/ae8c0f2f9bf205abf1d0f198fe6bfdc3cfe3c18d))
- **kit:** `MultiSelect` support 2d arrays in `HideSelected` pipe
  ([#504](https://github.com/tinkoff/taiga-ui/issues/504))
  ([663c497](https://github.com/tinkoff/taiga-ui/commit/663c4973dee7afb62904e4e2a37b952d14b65a77))

### Bug Fixes

- **cdk:** opening many different types dialogs together ([#503](https://github.com/tinkoff/taiga-ui/issues/503))
  ([390e718](https://github.com/tinkoff/taiga-ui/commit/390e7188115595adba7af46b32d21562b979b339))
- **core:** `Checkbox` fix icon transition from indeterminate to false state
  ([#502](https://github.com/tinkoff/taiga-ui/issues/502))
  ([1e12d78](https://github.com/tinkoff/taiga-ui/commit/1e12d78e29d2cc85a7a2d93fb6c4d943e3ccb955))
- **core:** `Link` fix mode ([#501](https://github.com/tinkoff/taiga-ui/issues/501))
  ([890b7cd](https://github.com/tinkoff/taiga-ui/commit/890b7cd9f01ff23762cb8cf46e9335eee9c6f93e))

### [2.11.2](https://github.com/tinkoff/taiga-ui/compare/v2.11.1...v2.11.2) (2021-06-10)

### Features

- **kit:** `filterByInputWith` add new pipe to filter with custom stringify
  ([#479](https://github.com/tinkoff/taiga-ui/issues/479))
  ([996e8af](https://github.com/tinkoff/taiga-ui/commit/996e8afe863860b68ad583516bb539a4115b5b71))

### Bug Fixes

- **core:** `Dropdown` fix animation retrigger in submenu ([#466](https://github.com/tinkoff/taiga-ui/issues/466))
  ([dabb336](https://github.com/tinkoff/taiga-ui/commit/dabb3362c334d5761473c6ffaef5cc2be5f1f974))
- **kit:** `ComboBox` fix caret outside of visible area upon selection
  ([#477](https://github.com/tinkoff/taiga-ui/issues/477))
  ([a79def4](https://github.com/tinkoff/taiga-ui/commit/a79def419c0bab412fd5ebdafcb3b83644cfe7ff))

### [2.11.1](https://github.com/tinkoff/taiga-ui/compare/v2.11.0...v2.11.1) (2021-06-08)

### Bug Fixes

- **kit:** `Tabs` fix provider issue for standalone tab ([#470](https://github.com/tinkoff/taiga-ui/issues/470))
  ([3699c09](https://github.com/tinkoff/taiga-ui/commit/3699c093b364dff06514ad6aca804bcfd6dec983))

## [2.11.0](https://github.com/tinkoff/taiga-ui/compare/v2.10.1...v2.11.0) (2021-06-07)

### Features

- **addon-charts:** implement new CSS vars to color charts ([#464](https://github.com/tinkoff/taiga-ui/issues/464))
  ([0d96ece](https://github.com/tinkoff/taiga-ui/commit/0d96ecef44d6410e7aeb8cbd92cbe5e15b2e81d9))
- **addon-doc:** allow strings as logo img url
  ([2b4c516](https://github.com/tinkoff/taiga-ui/commit/2b4c51698d0ddbf931737903a3b6aa613d72988c))
- **all:** switch from string enums to string join types for inputs
  ([#455](https://github.com/tinkoff/taiga-ui/issues/455))
  ([f5630fc](https://github.com/tinkoff/taiga-ui/commit/f5630fc23d414ef8338062c3a3595b8dd61bde84))
- **core:** `NotificationService` make `autoClose` timeout configurable
  ([#441](https://github.com/tinkoff/taiga-ui/issues/441))
  ([bd6e74b](https://github.com/tinkoff/taiga-ui/commit/bd6e74b6708dccd0f2a9dc3bf94b2c4b6b78b968))
- **core:** `Tooltip` tapping on mobile does not focus inputs ([#453](https://github.com/tinkoff/taiga-ui/issues/453))
  ([d9511e9](https://github.com/tinkoff/taiga-ui/commit/d9511e95b5b19abc55043c85e67c140924ff4e4f))
- **kit:** `Slider`, `Range` add `quantum` property ([#445](https://github.com/tinkoff/taiga-ui/issues/445))
  ([4034983](https://github.com/tinkoff/taiga-ui/commit/4034983d8e229022c4411736a57d721c38806ce3))
- **kit:** `TextArea` add multiline placeholder support ([#456](https://github.com/tinkoff/taiga-ui/issues/456))
  ([06325bd](https://github.com/tinkoff/taiga-ui/commit/06325bdc0dea6012d4563e2865efe50a5760568a))

### Bug Fixes

- **cdk:** `ActiveZone` wait for `focusout` event after `mousedown`
  ([d11da1f](https://github.com/tinkoff/taiga-ui/commit/d11da1f78126e088cc7f6ee43f37de6e62d2a359))
- **cdk:** `Validator` update validity state on destroy ([#461](https://github.com/tinkoff/taiga-ui/issues/461))
  ([37caf0d](https://github.com/tinkoff/taiga-ui/commit/37caf0df65cd15719f351332d03332ff949fc147))
- **core:** `Calendar` remove jumps due to limits
  ([adf08a8](https://github.com/tinkoff/taiga-ui/commit/adf08a89ce13b8cb2e88be82abfbf096a79f80dc))
- **kit:** `LazyLoading` clear background after load event ([#467](https://github.com/tinkoff/taiga-ui/issues/467))
  ([54a4334](https://github.com/tinkoff/taiga-ui/commit/54a4334d23862fbd07b47b7918a806cb2c1e272a))
- **kit:** `Select`, `ComboBox`, `MultiSelect` cut overflown items with ellipsis
  ([#446](https://github.com/tinkoff/taiga-ui/issues/446))
  ([5a39ec8](https://github.com/tinkoff/taiga-ui/commit/5a39ec880b4193142fbca7e305f45cd4d940d92f))
- **kit:** `TextArea` properly react to night mode ([#465](https://github.com/tinkoff/taiga-ui/issues/465))
  ([3e60e98](https://github.com/tinkoff/taiga-ui/commit/3e60e98625365b38395bae1382238496fc7ccf3e))
- **kit:** `Tabs` fix `activeItemIndex` when `routerLink` tab is removed
  ([#452](https://github.com/tinkoff/taiga-ui/issues/452))
  ([075772b](https://github.com/tinkoff/taiga-ui/commit/075772b41475ee7d99d242ce69f9a565365e8a9d))

### [2.10.1](https://github.com/tinkoff/taiga-ui/compare/v2.10.0...v2.10.1) (2021-05-26)

### Bug Fixes

- **kit:** fix broken imports ([#439](https://github.com/tinkoff/taiga-ui/issues/439))
  ([46eacf8](https://github.com/tinkoff/taiga-ui/commit/46eacf833d6d7bed2d0dfd717f81c15e0c77a8de))

## [2.10.0](https://github.com/tinkoff/taiga-ui/compare/v2.9.1...v2.10.0) (2021-05-25)

### Features

- **core:** `Dialog` add default template for primitive content ([#409](https://github.com/tinkoff/taiga-ui/issues/409))
  ([4fd1ee3](https://github.com/tinkoff/taiga-ui/commit/4fd1ee3c51e4004ad5e7e3f227d7e41e530c80b3))
- **core:** `Notifications` keep open if hovered ([#420](https://github.com/tinkoff/taiga-ui/issues/420))
  ([adfb865](https://github.com/tinkoff/taiga-ui/commit/adfb8655c7ffc852d7741c3f5144068ccc22996f))
- **core:** switch skeleton animation to opacity to improve performance
  ([#402](https://github.com/tinkoff/taiga-ui/issues/402))
  ([787208b](https://github.com/tinkoff/taiga-ui/commit/787208b4d71ed48736ec955205959fe1999060ad))
- **kit:** `Breadcrumbs` implement new API exposing the links ([#412](https://github.com/tinkoff/taiga-ui/issues/412))
  ([31ae7e7](https://github.com/tinkoff/taiga-ui/commit/31ae7e72775be7e3293da3107e3588290a83fee5))
- **kit:** `FieldError` support plain strings errors ([#259](https://github.com/tinkoff/taiga-ui/issues/259))
  ([6801143](https://github.com/tinkoff/taiga-ui/commit/680114338dc97b0559469530fcabc701130732bf))
- **kit:** `FilterByInput` add new pipe ([#425](https://github.com/tinkoff/taiga-ui/issues/425))
  ([edfa580](https://github.com/tinkoff/taiga-ui/commit/edfa5808a6fea43b260f04c4e275e9fc4be1dc11))
- **kit:** `InputPassword` add default configuration through DI token
  ([#369](https://github.com/tinkoff/taiga-ui/issues/369))
  ([f98d8f3](https://github.com/tinkoff/taiga-ui/commit/f98d8f3459c55ef907d27c8b5160ee5e12775eaa))

### Bug Fixes

- **addon-charts:** `BarChart` fix height in collapsed mode ([#428](https://github.com/tinkoff/taiga-ui/issues/428))
  ([1f7c137](https://github.com/tinkoff/taiga-ui/commit/1f7c137bb9e861d1af08d0da39ac342778ed14c8))
- **addon-commerce:** `InputCard` react to `readOnly` ([#434](https://github.com/tinkoff/taiga-ui/issues/434))
  ([b1771a4](https://github.com/tinkoff/taiga-ui/commit/b1771a44cc06c689644d1db53cdd91728590f184))
- **addon-table:** `defaultSorter` properly sort strings ([#427](https://github.com/tinkoff/taiga-ui/issues/427))
  ([ff43170](https://github.com/tinkoff/taiga-ui/commit/ff4317034df547c82cea0e0afec74a0e6325e9ad))
- **core:** `Link` fix disabled appearance when used on buttons ([#422](https://github.com/tinkoff/taiga-ui/issues/422))
  ([68172aa](https://github.com/tinkoff/taiga-ui/commit/68172aa6c3ca8da1b54e533ee77859b8396b88bb))
- **kit:** `CheckboxBlock` fix styles inside `Accordion` ([#423](https://github.com/tinkoff/taiga-ui/issues/423))
  ([11b4539](https://github.com/tinkoff/taiga-ui/commit/11b453999a403cde375b0d9abf6d185d816c9239))
- **kit:** `InputPhone` fix opening dropdown in readOnly
  ([a73ff80](https://github.com/tinkoff/taiga-ui/commit/a73ff804e4def48061b7df0e57bccce99749cdea))
- **kit:** `Slider`, `Range` fix spilling over limits with keyboard
  ([#408](https://github.com/tinkoff/taiga-ui/issues/408))
  ([581f8bb](https://github.com/tinkoff/taiga-ui/commit/581f8bbe896a579719692ee446543cd56a9083e5))
- **kit:** `Tabs` fix colors for `tuiMode="onLight"` ([#411](https://github.com/tinkoff/taiga-ui/issues/411))
  ([23c3ce8](https://github.com/tinkoff/taiga-ui/commit/23c3ce8f5dc5baac5da10ff29a0bf924691cfee6))

### [2.9.1](https://github.com/tinkoff/taiga-ui/compare/v2.9.0...v2.9.1) (2021-05-15)

### Bug Fixes

- **all:** fix duplication of private imports for Webpack 5 ([#399](https://github.com/tinkoff/taiga-ui/issues/399))
  ([bb89b2d](https://github.com/tinkoff/taiga-ui/commit/bb89b2d70f2da108f2f7bc5daeba93323bc4a68c))

## [2.9.0](https://github.com/tinkoff/taiga-ui/compare/v2.8.2...v2.9.0) (2021-05-14)

### Features

- **core:** `Scrollbar` handle click on bar to scroll to that position
  ([#368](https://github.com/tinkoff/taiga-ui/issues/368))
  ([f792d0c](https://github.com/tinkoff/taiga-ui/commit/f792d0c48bc59c305e30747baa1c96847b8c7f3c))
- **core:** `TUI_ANIMATIONS_DURATION` add a new token ([#374](https://github.com/tinkoff/taiga-ui/issues/374))
  ([988440c](https://github.com/tinkoff/taiga-ui/commit/988440c57b09a827f0fc5386a426432a791bc54c))
- **core, kit:** add show delay / hide delay for all tooltips and hints
  ([#379](https://github.com/tinkoff/taiga-ui/issues/379))
  ([660b5a1](https://github.com/tinkoff/taiga-ui/commit/660b5a12657b297865994033f7afb13677116d89))
- **i18n:** improve translations in Spanish ([#389](https://github.com/tinkoff/taiga-ui/issues/389))
  ([af7eb3c](https://github.com/tinkoff/taiga-ui/commit/af7eb3c47b5dd37edaaed0816a8af30602f4a6ef))
- **kit:** `Badge` allow custom content ([#387](https://github.com/tinkoff/taiga-ui/issues/387))
  ([3107b53](https://github.com/tinkoff/taiga-ui/commit/3107b5383102f5c9f89124d57d9fd9c1e3eb0c42))

### Bug Fixes

- **addon-charts:** `Axes` add mode support ([#319](https://github.com/tinkoff/taiga-ui/issues/319))
  ([8f20801](https://github.com/tinkoff/taiga-ui/commit/8f208010fc9dfeabfad769eb7f2d95615605e78c))
- **cdk:** fix issues with Angular 12 and newer TypeScript ([#395](https://github.com/tinkoff/taiga-ui/issues/395))
  ([01f5a48](https://github.com/tinkoff/taiga-ui/commit/01f5a48ac8de7d616c3e3f4b8da517c0e0aaf8b2))
- **core:** rename watched controller typo TUI_TEXTIFELD_WATCHED_CONTROLLER -> TUI_TEXTFIELD_WATCHED_CONTROLLER
  ([#396](https://github.com/tinkoff/taiga-ui/issues/396))
  ([a8adb4a](https://github.com/tinkoff/taiga-ui/commit/a8adb4ae4702e80d98acc80cc19df5282395aaf3))
- **kit:** `InputDateTime` update native value on day click ([#378](https://github.com/tinkoff/taiga-ui/issues/378))
  ([ad43348](https://github.com/tinkoff/taiga-ui/commit/ad43348bc2bdbc6516c1748a3c13258f38675a1a))

### [2.8.2](https://github.com/tinkoff/taiga-ui/compare/v2.8.1...v2.8.2) (2021-05-04)

### Bug Fixes

- **cdk:** fix components emitting initial `blur` ([#370](https://github.com/tinkoff/taiga-ui/issues/370))
  ([36f722b](https://github.com/tinkoff/taiga-ui/commit/36f722b19818335f66e2847e1c0aa1f392950be1))

### [2.8.1](https://github.com/tinkoff/taiga-ui/compare/v2.8.0...v2.8.1) (2021-04-30)

### Bug Fixes

- **core:** `PrimitiveTextfield` fix growing wider than container
  ([#364](https://github.com/tinkoff/taiga-ui/issues/364))
  ([e64fe49](https://github.com/tinkoff/taiga-ui/commit/e64fe4931f22430a4edc260d74a4e5862903e6d5))

## [2.8.0](https://github.com/tinkoff/taiga-ui/compare/v2.7.0...v2.8.0) (2021-04-29)

### Features

- **addon-editor:** `Toolbar` add `ColorPicker` ([#335](https://github.com/tinkoff/taiga-ui/issues/335))
  ([67dfd6f](https://github.com/tinkoff/taiga-ui/commit/67dfd6f9ea7b74864cc57aabc9be7aab8759a0f0))
- **kit:** `DropdownHover` add new directive ([#361](https://github.com/tinkoff/taiga-ui/pull/361))
- **kit:** `TabsWithMore` always show the active tab ([#345](https://github.com/tinkoff/taiga-ui/issues/345))
  ([c437871](https://github.com/tinkoff/taiga-ui/commit/c4378719b1a30c8b1ca65671ee2542dbae13c076))

### Bug Fixes

- **addon-editor:** `Editor` fix scroll jumping on edits ([#323](https://github.com/tinkoff/taiga-ui/issues/323))
  ([c4a1e13](https://github.com/tinkoff/taiga-ui/commit/c4a1e13cde7bc6f758b36b4e4989b47714d26a2f))
- **addon-editor:** `Editor` fix scrollbar dragging ([#333](https://github.com/tinkoff/taiga-ui/issues/333))
  ([a01227e](https://github.com/tinkoff/taiga-ui/commit/a01227e55d5c41b6dff082d963b2d975247f4a95))
- **addon-editor:** open links in a new tab ([#328](https://github.com/tinkoff/taiga-ui/issues/328))
  ([222863f](https://github.com/tinkoff/taiga-ui/commit/222863f965d950d3b28c99a95603e06bfcd95b33))
- **cdk:** `ActiveZone` fix emitting `false` on element removal in Chrome
  ([#362](https://github.com/tinkoff/taiga-ui/issues/362))
  ([a424417](https://github.com/tinkoff/taiga-ui/commit/a4244177906cb897fc47e8c65c5c1ff41dfbdadc))
- **cdk:** `ScrollService` fix `NullInjectorError` ([#355](https://github.com/tinkoff/taiga-ui/issues/355))
  ([c6db6d1](https://github.com/tinkoff/taiga-ui/commit/c6db6d197a382cc1f6f33ee9d4d1bba4b9d580c4))
- **cdk:** use passive event listeners ([#344](https://github.com/tinkoff/taiga-ui/issues/344))
  ([dbc1188](https://github.com/tinkoff/taiga-ui/commit/dbc1188defa13cd0e5eae219372d3255fccb3f3d))
- **core:** `Scrollbar` fix content sticky beyond container height
  ([#348](https://github.com/tinkoff/taiga-ui/issues/348))
  ([173213f](https://github.com/tinkoff/taiga-ui/commit/173213fa013c73ea38e2afbc16c5ba3f3996bae3))
- **core:** fix issues with components being used inside `ControlValueAccessor`
  ([#346](https://github.com/tinkoff/taiga-ui/issues/346))
  ([e90a0f7](https://github.com/tinkoff/taiga-ui/commit/e90a0f7f78a58e997b5645631eb6d94fd8416cef))
- **kit:** `InputCount` correct work with negative values ([#337](https://github.com/tinkoff/taiga-ui/issues/337))
  ([82ceda8](https://github.com/tinkoff/taiga-ui/commit/82ceda86cd7bbfbc15f18b767df7d25d5295e523))
- **kit:** `InputDateTime` fix changing date ([#322](https://github.com/tinkoff/taiga-ui/issues/322))
  ([3cafe28](https://github.com/tinkoff/taiga-ui/commit/3cafe28cffb1a9c14b4942ad24408043a891c9ec))
- **kit:** `InputTime` open dropdown by click ([#322](https://github.com/tinkoff/taiga-ui/issues/322))
  ([3cafe28](https://github.com/tinkoff/taiga-ui/commit/3cafe28cffb1a9c14b4942ad24408043a891c9ec))
- **kit:** `InputFile` do not reset loading files on new file selection
  ([#356](https://github.com/tinkoff/taiga-ui/issues/356))
  ([bc01ace](https://github.com/tinkoff/taiga-ui/commit/bc01aceeb3e3d403a15ba6f8f7544ab4257011e2))
- **kit:** `InputNumber` fix caret for zeroes in decimal part ([#318](https://github.com/tinkoff/taiga-ui/issues/318))
  ([1b1dd68](https://github.com/tinkoff/taiga-ui/commit/1b1dd68e60786433cc815cf7f586b2131278a586))
- **kit:** `InputTag` fix scrolling with arrows ([#334](https://github.com/tinkoff/taiga-ui/issues/334))
  ([436bcaa](https://github.com/tinkoff/taiga-ui/commit/436bcaa4fc71d3a1727c3ffa579665404d815eb1))
- **kit:** fix iOS device detection ([#320](https://github.com/tinkoff/taiga-ui/issues/320))
  ([6e90cad](https://github.com/tinkoff/taiga-ui/commit/6e90cad33d6eae1a592765fa71f85fb7d8ce0396))

## [2.7.0](https://github.com/tinkoff/taiga-ui/compare/v2.6.2...v2.7.0) (2021-03-29)

### Features

- **addon-mobile:** `Sidebar` add `autoWidth` option ([#299](https://github.com/tinkoff/taiga-ui/issues/299))
  ([73f593b](https://github.com/tinkoff/taiga-ui/commit/73f593b0e370dba57b4da1756631e77e7b64115f))
- **core:** `NightThemeService` add new service ([#226](https://github.com/tinkoff/taiga-ui/issues/226))
  ([bd85236](https://github.com/tinkoff/taiga-ui/commit/bd8523666579048e54ba34cec48f56022f566478))
- **core:** `NotificationsService` add `hasIcon` option ([#274](https://github.com/tinkoff/taiga-ui/issues/274))
  ([0519af6](https://github.com/tinkoff/taiga-ui/commit/0519af62b8af5dc1df21f52311db318457c97216))
- **demo:** Improve documentation (descriptions, unexpected behavior etc.)
  ([#284](https://github.com/tinkoff/taiga-ui/issues/284))
  ([96638d0](https://github.com/tinkoff/taiga-ui/commit/96638d09693bdd023a2a931d6698d04f36ee09f5))
- **demo:** added link to source code and fixed routing ([#273](https://github.com/tinkoff/taiga-ui/issues/273))
  ([99ede5a](https://github.com/tinkoff/taiga-ui/commit/99ede5a3b52f9686adf8b97191d58c8abeb5290f))
- **kit:** `Tabs` update scroll position on active index change ([#268](https://github.com/tinkoff/taiga-ui/issues/268))
  ([a753a5e](https://github.com/tinkoff/taiga-ui/commit/a753a5e8f7a5fddf1496ac190897a922e48c49f9))

### Bug Fixes

- **addon-doc:** fix import package ([#291](https://github.com/tinkoff/taiga-ui/issues/291))
  ([cdabcd1](https://github.com/tinkoff/taiga-ui/commit/cdabcd1d4f8e33b51d472ee94476165a13a99fa4))
- **addon-editor:** fix font & highlight displayed colors ([#311](https://github.com/tinkoff/taiga-ui/issues/311))
  ([6375d65](https://github.com/tinkoff/taiga-ui/commit/6375d656aa2cbeef0d8d6f0cee9599e9d76da712))
- **addon-table:** `Table` fix dual borders ([#277](https://github.com/tinkoff/taiga-ui/issues/277))
  ([52534fc](https://github.com/tinkoff/taiga-ui/commit/52534fcec5ee0786b1d78648b04110c042dbfa69))
- **cdk:** `ActiveZone` stay in zone if focused element removed ([#304](https://github.com/tinkoff/taiga-ui/issues/304))
  ([30cb717](https://github.com/tinkoff/taiga-ui/commit/30cb717f087393b7aa0eabb7c4605ecf078cd081))
- **cdk:** `FocusTrap` fix ExpressionChanged error ([#304](https://github.com/tinkoff/taiga-ui/issues/304))
  ([30cb717](https://github.com/tinkoff/taiga-ui/commit/30cb717f087393b7aa0eabb7c4605ecf078cd081))
- **kit:** `HoveredService` fix for iOS 12 ([#303](https://github.com/tinkoff/taiga-ui/issues/303))
  ([3cbf8f2](https://github.com/tinkoff/taiga-ui/commit/3cbf8f2b07c9c3ec616e8f0b8fe97f2358faed37))
- **kit:** `InputTag` error icon layout ([#296](https://github.com/tinkoff/taiga-ui/issues/296))
  ([75c2baa](https://github.com/tinkoff/taiga-ui/commit/75c2baa5f17366bfa70e5cfd6a99e1dbf9f2bdd9))
- **kit:** `InputRange` prevent emitting same value on blur ([#298](https://github.com/tinkoff/taiga-ui/issues/298))
  ([685cc00](https://github.com/tinkoff/taiga-ui/commit/685cc006b6649ed14a297ee4d94559e5180bd1b4))
- **kit:** `InputRange` prevent from focusing input field on mobile devices
  ([#280](https://github.com/tinkoff/taiga-ui/issues/280))
  ([c8cf497](https://github.com/tinkoff/taiga-ui/commit/c8cf49785683d969371f3ee1152482e6ba8ae2d0))
- **kit:** `Tabs` fix extra change detection ticks ([#314](https://github.com/tinkoff/taiga-ui/issues/314))
  ([0f36a06](https://github.com/tinkoff/taiga-ui/commit/0f36a066fb2c0dc1a679c789527a8c912423460c))
- **kit:** `TextArea` fix `m` size styles ([#302](https://github.com/tinkoff/taiga-ui/issues/302))
  ([39850ef](https://github.com/tinkoff/taiga-ui/commit/39850ef68caa1a8a63ee15f31562305b72d65191))
- **kit:** `InputPassword` fix change detection issue ([#300](https://github.com/tinkoff/taiga-ui/issues/300))
  ([a32a9dd](https://github.com/tinkoff/taiga-ui/commit/a32a9dd5a82b2672686aadd4b42c542b9c2e3607))
- **kit:** `InputCount` prevent buttons from focusing input field on mobile
  ([#272](https://github.com/tinkoff/taiga-ui/issues/272))
  ([17f8d47](https://github.com/tinkoff/taiga-ui/commit/17f8d47fa3bcf5d1c00e790daaa7fd9a428db328))

### [2.6.2](https://github.com/tinkoff/taiga-ui/compare/v2.6.1...v2.6.2) (2021-03-04)

### Features

- **cdk:** add `isSafari` util
  ([e616b53](https://github.com/tinkoff/taiga-ui/commit/e616b53f9535416b960486dd2c7b6e615a9e14ce))
- **core:** `TUI_ASSERT_ENABLED` add new token to allow enabling assertions in prod mode
  ([39af6cb](https://github.com/tinkoff/taiga-ui/commit/39af6cb58687d0edfa398da8525d71fcf391f444))
- **kit:** `Radio` add customization through token ([#264](https://github.com/tinkoff/taiga-ui/issues/264))
  ([1a6d574](https://github.com/tinkoff/taiga-ui/commit/1a6d57447de0118e87e96848f96d8db4f3dc5b64))

### Bug Fixes

- **addon-table:** fix not drawing default cells
  ([61cd807](https://github.com/tinkoff/taiga-ui/commit/61cd8071f8c631f737dd554cfff373da30ccf95a))
- **core:** `Loader` fix form freezing in Safari ([#266](https://github.com/tinkoff/taiga-ui/issues/266))
  ([0c7330c](https://github.com/tinkoff/taiga-ui/commit/0c7330ce0e8d4a3d16dce06d8689f75ce3a96dff))
- **kit:** `InputNumber` fix all problems with caret in Safari
  ([b4930c9](https://github.com/tinkoff/taiga-ui/commit/b4930c9d59b915b51a0c6aa705f2cff78b9170f3))
- **kit:** `InputCount` fix wrong button height for customized height
  ([#216](https://github.com/tinkoff/taiga-ui/issues/216))
  ([4c39f7a](https://github.com/tinkoff/taiga-ui/commit/4c39f7a27dd81c59352cdc3af46114d2ff3184cf))
- **kit:** fix loader in toggle size m ([#261](https://github.com/tinkoff/taiga-ui/issues/261))
  ([a1eeaa4](https://github.com/tinkoff/taiga-ui/commit/a1eeaa417a2aa3b6b68ba32b524eed17d6f2f144))

### [2.6.1](https://github.com/tinkoff/taiga-ui/compare/v2.6.0...v2.6.1) (2021-02-26)

### Bug Fixes

- **addon-table:** fix incorrect style minification
  ([c00cf1b](https://github.com/tinkoff/taiga-ui/commit/c00cf1b5bfe61fabba137ab8d41c719a0bf96451))
- **core:** fix underline pseudo link ([#246](https://github.com/tinkoff/taiga-ui/issues/246))
  ([bca9201](https://github.com/tinkoff/taiga-ui/commit/bca9201ffd30463da0b24a70aece4a1f2ac01f5b))

## [2.6.0](https://github.com/tinkoff/taiga-ui/compare/v2.5.0...v2.6.0) (2021-02-25)

### Features

- **addon-doc:** add "Edit on Online IDE" button support
  ([5cae178](https://github.com/tinkoff/taiga-ui/commit/5cae178da83d0ab825afa5354d5f3805b02600ad))
- **addon-table:** `Table` add new module
  ([9ac0243](https://github.com/tinkoff/taiga-ui/commit/9ac024368168fc19af0a8bb903b7c80d97ef7171))
- **i18n:** add Ukrainian support ([#231](https://github.com/tinkoff/taiga-ui/issues/231))
  ([38b292b](https://github.com/tinkoff/taiga-ui/commit/38b292b2d19ca5d19bb603979f26758ce4d11b09))

### Bug Fixes

- **core:** `Dialog` fix closing non-dismissible dialog by clicking on border
  ([#240](https://github.com/tinkoff/taiga-ui/issues/240))
  ([516dc74](https://github.com/tinkoff/taiga-ui/commit/516dc74a09267024b7154ebad46d36402d3d6625))
- **core:** `Link` properly handle various modes ([#241](https://github.com/tinkoff/taiga-ui/issues/241))
  ([9197895](https://github.com/tinkoff/taiga-ui/commit/919789593d9553f278bee7b1e0552a0665a6c1ef))

## [2.5.0](https://github.com/tinkoff/taiga-ui/compare/v2.4.0...v2.5.0) (2021-02-08)

### Features

- **addon-commerce:** add UAH currency ([#214](https://github.com/tinkoff/taiga-ui/issues/214))
  ([54f64a6](https://github.com/tinkoff/taiga-ui/commit/54f64a6490fb6f3d259a0cd49c7477eb4e0e359c))
- **common:** added CSS custom properties for fonts ([#201](https://github.com/tinkoff/taiga-ui/issues/201))
  ([c9d527c](https://github.com/tinkoff/taiga-ui/commit/c9d527c0fb518b68a3f483b1d878c14221c90ef6))
- **core:** `Dialog` add `page` size for a fullscreen dialog without any padding
  ([#213](https://github.com/tinkoff/taiga-ui/issues/213))
  ([523eaf9](https://github.com/tinkoff/taiga-ui/commit/523eaf909246509c7fa9e1baec1f58ca20c19986))
- **core:** `PrimitiveCheckbox` full customization through DI ([#209](https://github.com/tinkoff/taiga-ui/issues/209))
  ([78e87b5](https://github.com/tinkoff/taiga-ui/commit/78e87b5df496de3d73fbaa4d55c16a0dbb9d0a07))
- **i18n:** add Dutch with 100% support ([#206](https://github.com/tinkoff/taiga-ui/issues/206))
  ([41c0554](https://github.com/tinkoff/taiga-ui/commit/41c055470494ed90a8090582e4cf19f18e639efe))
- **i18n:** add Turkish with 100% support ([#200](https://github.com/tinkoff/taiga-ui/issues/200))
  ([a4de9d9](https://github.com/tinkoff/taiga-ui/commit/a4de9d983edd6fa453019be6c424f496d8d882fd))
- **kit:** allow configuration of default checkbox options ([#139](https://github.com/tinkoff/taiga-ui/issues/139))
  ([a977e6e](https://github.com/tinkoff/taiga-ui/commit/a977e6e65e048e0a053a89ed37698fa68ca2037f))

### Bug Fixes

- **core:** `Svg` fix custom icons processing ([#212](https://github.com/tinkoff/taiga-ui/issues/212))
  ([76ec2d8](https://github.com/tinkoff/taiga-ui/commit/76ec2d8ead0e3ac326203d9c4984ee25656aa039))
- **core:** dialog not closing due to transparent border, closes [#148](https://github.com/tinkoff/taiga-ui/issues/148)
  ([#190](https://github.com/tinkoff/taiga-ui/issues/190))
  ([c791da7](https://github.com/tinkoff/taiga-ui/commit/c791da71f79b59b4f0feb5cc40be38d25943e972))
- **i18n:** correct inconsistencies in English translations ([#207](https://github.com/tinkoff/taiga-ui/issues/207))
  ([977d7bd](https://github.com/tinkoff/taiga-ui/commit/977d7bd965630062bd9a2cefa565102332faf4bc))
- **kit:** `Tabs` clicking on external links will not update active index
  ([#218](https://github.com/tinkoff/taiga-ui/issues/218))
  ([4fee5a3](https://github.com/tinkoff/taiga-ui/commit/4fee5a386d58ba7a2d44263ebec4013ee93acb14))

## [2.4.0](https://github.com/tinkoff/taiga-ui/compare/v2.3.0...v2.4.0) (2021-02-02)

### Features

- **core:** add scss mixin support ([#165](https://github.com/tinkoff/taiga-ui/issues/165))
  ([865bbaa](https://github.com/tinkoff/taiga-ui/commit/865bbaafb5cac5587dd3ffc20eacfa2283329b10))
- **i18n:** Add German with 100% support ([#198](https://github.com/tinkoff/taiga-ui/issues/198))
  ([54f1284](https://github.com/tinkoff/taiga-ui/commit/54f12843e3521543cb39effea64c66e9440de1c9))
- **i18n:** add Spanish with 100% support ([#191](https://github.com/tinkoff/taiga-ui/issues/191))
  ([6f9a19e](https://github.com/tinkoff/taiga-ui/commit/6f9a19e7cdee34445cdfe26584a91bd7bcd64291))
- **kit:** use lazy loading strategy in avatar component ([#185](https://github.com/tinkoff/taiga-ui/issues/185))
  ([d6ea803](https://github.com/tinkoff/taiga-ui/commit/d6ea8032a11a546e7c65474d9991da46030e7e08))

### Bug Fixes

- **button:** fix button loader size for XL ([#174](https://github.com/tinkoff/taiga-ui/issues/174))
  ([f9929fe](https://github.com/tinkoff/taiga-ui/commit/f9929fef2d73cbf829f8d9f53150316d04c739ca))
- **cdk:** fix isFirefox check ([#158](https://github.com/tinkoff/taiga-ui/issues/158))
  ([8e9c7a4](https://github.com/tinkoff/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))
- **core:** `Button` fix margin for right aligned icons ([#173](https://github.com/tinkoff/taiga-ui/issues/173))
  ([a3f9ed5](https://github.com/tinkoff/taiga-ui/commit/a3f9ed5a4ab6b650130c16616bb8f20e78d8d718))

## [2.3.0](https://github.com/tinkoff/taiga-ui/compare/v2.2.1...v2.3.0) (2021-01-29)

### Features

- **core:** add `ThemeNight` component ([#167](https://github.com/tinkoff/taiga-ui/issues/167))
  ([a953be7](https://github.com/tinkoff/taiga-ui/commit/a953be715ac1c624bf4b2b1d12631715fd376234))
- **demo:** add `Wrapper` customization page ([#153](https://github.com/tinkoff/taiga-ui/issues/153))
  ([eef8382](https://github.com/tinkoff/taiga-ui/commit/eef83822593c20f8de8c398ed1e4e705578d11bf))
- **demo:** add guide on using different icon set ([#157](https://github.com/tinkoff/taiga-ui/issues/157))
  ([b35a891](https://github.com/tinkoff/taiga-ui/commit/b35a89181cb59e6ae5f80a54d52ea266490152c1))
- **demo:** add page on custom dialogs ([#159](https://github.com/tinkoff/taiga-ui/issues/159))
  ([13e17a1](https://github.com/tinkoff/taiga-ui/commit/13e17a13c0e2a805984425f19ad04b6979abdfb0))
- **format:** number formatting supports custom thousands separator
  ([#145](https://github.com/tinkoff/taiga-ui/issues/145))
  ([a8c0743](https://github.com/tinkoff/taiga-ui/commit/a8c0743dae7ad432576d1e6f567943a28e7c8a37))

### Bug Fixes

- **cdk:** fix isFirefox check ([#158](https://github.com/tinkoff/taiga-ui/issues/158))
  ([8e9c7a4](https://github.com/tinkoff/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))
- **core:** `Svg` properly use Angular `Sanitizer` ([#170](https://github.com/tinkoff/taiga-ui/issues/170))
  ([249392d](https://github.com/tinkoff/taiga-ui/commit/249392d2727c7af1d0da404ae0f2619a08847857))
- **core:** fix new CSS vars for height name mismatch ([#149](https://github.com/tinkoff/taiga-ui/issues/149))
  ([aa7c961](https://github.com/tinkoff/taiga-ui/commit/aa7c9617ed42b767a118e2c145e2ba6bc4cb54d8))

### [2.2.1](https://github.com/tinkoff/taiga-ui/compare/v2.2.0...v2.2.1) (2021-01-22)

### Bug Fixes

- **highlight:** change background color to selection ([#137](https://github.com/tinkoff/taiga-ui/issues/137))
  ([7f60e25](https://github.com/tinkoff/taiga-ui/commit/7f60e25b2f4b0ef4bf00eaac99892067801316cc))

## [2.2.0](https://github.com/tinkoff/taiga-ui/compare/v2.1.3...v2.2.0) (2021-01-22)

### ⚠ BREAKING CHANGES

- **kit:** `UnfinishedValidator` now has no default message
- **cdk, core:** `MonthPipe` import it from @taiga-ui/core library and use with async pipe

### Features

- **cdk, core:** `MonthPipe` move from cdk to core, add i18n
  ([59474d2](https://github.com/tinkoff/taiga-ui/commit/59474d2d4eceea34a744a9c2034a0081bff260fb))
- **demo:** add page for `Sidebar` directive ([#125](https://github.com/tinkoff/taiga-ui/issues/125))
  ([bea427e](https://github.com/tinkoff/taiga-ui/commit/bea427e1d88e6275ee87bf40d53a03a562b3952b))
- **i18n:** add i18n package
  ([523d5de](https://github.com/tinkoff/taiga-ui/commit/523d5dec3f76a23bda81cb873bd9c5201ce665d5))
- **i18n:** add russian language
  ([71dab5c](https://github.com/tinkoff/taiga-ui/commit/71dab5c8ed6d18e6cddee52121e2354db8c56fee))
- **kit:** add tokens to customize `Checkbox`, `Radio` and `InputTag`
  ([#124](https://github.com/tinkoff/taiga-ui/issues/124))
  ([94e8b00](https://github.com/tinkoff/taiga-ui/commit/94e8b00a32b01e81108e8c74c7a9601d6179abf7))
- **kit:** allow setting mask directly on `Input`, `InputInline` and `InputCopy`
  ([#122](https://github.com/tinkoff/taiga-ui/issues/122))
  ([173cd8f](https://github.com/tinkoff/taiga-ui/commit/173cd8ffc1f0d123915eb916f93b46cb04c08e68))

### Bug Fixes

- **cdk:** `Media` fix stuttering in Safari ([#129](https://github.com/tinkoff/taiga-ui/issues/129))
  ([43afe21](https://github.com/tinkoff/taiga-ui/commit/43afe21e912f65e50da211de5e47354cac026ec2))
- **kit:** `TabsWithMore` fix freezing on resize loop ([#121](https://github.com/tinkoff/taiga-ui/issues/121))
  ([b87737a](https://github.com/tinkoff/taiga-ui/commit/b87737ae2d98a266fa37e367caac003ab45e9a76))

### [2.1.3](https://github.com/tinkoff/taiga-ui/compare/v2.1.2...v2.1.3) (2021-01-19)

### Features

- **cdk:** add `uniqBy` utility method ([#108](https://github.com/tinkoff/taiga-ui/issues/108))
  ([2fe83be](https://github.com/tinkoff/taiga-ui/commit/2fe83be88c5db38eccf25d8d1a28f94b4cd3714a))
- **let:** improve type checking for tuiLet ([#98](https://github.com/tinkoff/taiga-ui/issues/98))
  ([5cff8ae](https://github.com/tinkoff/taiga-ui/commit/5cff8ae205b6d4711bf44e0576603edf9ab88730))

### Bug Fixes

- **core:** add lost body-l-2 global text class ([#106](https://github.com/tinkoff/taiga-ui/issues/106))
  ([d296243](https://github.com/tinkoff/taiga-ui/commit/d296243350269a4984bf1cd81275c71b064ffc3e))
- **core:** add will-change for smooth transition ([#99](https://github.com/tinkoff/taiga-ui/issues/99))
  ([35e2bf4](https://github.com/tinkoff/taiga-ui/commit/35e2bf48253487218c71aa0eb258ec28bf20b583)), closes
  [#90](https://github.com/tinkoff/taiga-ui/issues/90)
- **icons:** fix broken flags ([#96](https://github.com/tinkoff/taiga-ui/issues/96))
  ([37d2e61](https://github.com/tinkoff/taiga-ui/commit/37d2e6101546e493cd6eec2ea47de8e2adac20d9))
- **kit:** `DataListWrapper` fix `emptyContent` not working ([#89](https://github.com/tinkoff/taiga-ui/issues/89))
  ([f90d96f](https://github.com/tinkoff/taiga-ui/commit/f90d96fe5ef96fef6498c8bdb662b1cbcbb84176))
- **kit:** `InputDate` fix mobile calendar ([#104](https://github.com/tinkoff/taiga-ui/issues/104))
  ([0fd20e5](https://github.com/tinkoff/taiga-ui/commit/0fd20e58a3c22763b94881541a8e21b9bb2b39e0)), closes
  [#100](https://github.com/tinkoff/taiga-ui/issues/100)
- **kit:** `Select` fix template for falsy values ([#118](https://github.com/tinkoff/taiga-ui/issues/118))
  ([c718e1f](https://github.com/tinkoff/taiga-ui/commit/c718e1fe6a2462f9dd9ae7a4c88d444796f589b7))

### [2.1.2](https://github.com/tinkoff/taiga-ui/compare/v2.1.1...v2.1.2) (2021-01-12)

### Bug Fixes

- **core:** textfield style fix wrapper .transition mixin
  ([12206ea](https://github.com/tinkoff/taiga-ui/commit/12206ead01d35f88928aa574a32a4f27965116b2))

### [2.1.1](https://github.com/tinkoff/taiga-ui/compare/v2.1.0...v2.1.1) (2021-01-12)

### Bug Fixes

- **core:** fix theme less import syntax for StackBlitz ([#86](https://github.com/tinkoff/taiga-ui/issues/86))
  ([3b6d874](https://github.com/tinkoff/taiga-ui/commit/3b6d87447bf99e67b38cb6962a88a7b752475ee8))

## [2.1.0](https://github.com/tinkoff/taiga-ui/compare/v2.0.1...v2.1.0) (2021-01-11)

### Features

- **cdk:** `Media` add `playbackRate` input ([#83](https://github.com/tinkoff/taiga-ui/issues/83))
  ([5351762](https://github.com/tinkoff/taiga-ui/commit/5351762299835c2e99777bb62a37e2a1cc217913))

### [2.0.1](https://github.com/tinkoff/taiga-ui/compare/v2.0.0...v2.0.1) (2021-01-11)

### Features

- **core:** enable `window` scrolling instead of `tui-root`
  ([#80](https://github.com/tinkoff/taiga-ui/commit/0190a8fb1aeb26870402f288f8ee933e36228e25))
- **demo:** fix play/pause icons, add eur and gbp currency ([#77](https://github.com/tinkoff/taiga-ui/issues/77))
  ([360a3b1](https://github.com/tinkoff/taiga-ui/commit/360a3b1b2ab9ae4743bbcd693ac7df01fd7e3726))

### Bug Fixes

- **addon-doc:** fix demo component on mobile ([#79](https://github.com/tinkoff/taiga-ui/issues/79))
  ([7676d84](https://github.com/tinkoff/taiga-ui/commit/7676d84513525f464303ec45e9ed07ddde55183a))
- **all:** fix .less relative paths for better IDE and StackBlitz support
  ([#81](https://github.com/tinkoff/taiga-ui/issues/81))
  ([f061dcd](https://github.com/tinkoff/taiga-ui/commit/f061dcd8dbff4ef0fe902260981be8bdf3ee8714))
- **doc:** prevent tabs underline above sidebar in Safari
  ([4ed25de](https://github.com/tinkoff/taiga-ui/commit/4ed25de66a78f8280c3865be9d588d0d813ddffa))

## [2.0.0](https://github.com/tinkoff/taiga-ui/compare/v1.6.5...v2.0.0) (2020-12-29)

### Features

- **addon-doc:** add header ([#58](https://github.com/tinkoff/taiga-ui/issues/58))
  ([1f2abd4](https://github.com/tinkoff/taiga-ui/commit/1f2abd4358a442c9e4dbd1e5106d3081119f2c33))
- **demo:** add SSR support ([#64](https://github.com/tinkoff/taiga-ui/issues/64))
  ([aaf0786](https://github.com/tinkoff/taiga-ui/commit/aaf07864b63697c7205cdaeab656a19195d394f4))
- **demo:** translate into eng ([#51](https://github.com/tinkoff/taiga-ui/issues/51))
  ([04f9994](https://github.com/tinkoff/taiga-ui/commit/04f9994ae759fe3ca854cbf96e44cb0ebf8a30a8)), closes
  [#69](https://github.com/tinkoff/taiga-ui/issues/69) [#68](https://github.com/tinkoff/taiga-ui/issues/68)
- **icons:** add editor and color picker icons
  ([170f9a0](https://github.com/tinkoff/taiga-ui/commit/170f9a00fcd26abd8ef96b4dfcfc4dd4507707b0))

### Bug Fixes

- **cdk:** `DialogHost` fix overlay above dialog issue
  ([3e16ec8](https://github.com/tinkoff/taiga-ui/commit/3e16ec838457198753b8ee6830893ada50236b30))
- **cdk:** `tuiZoneOptimized` fix re-entering the zone ([#66](https://github.com/tinkoff/taiga-ui/issues/66))
  ([6c5667c](https://github.com/tinkoff/taiga-ui/commit/6c5667cd75aa15530b5aed35fc0281df58966941))
- **core:** `PrimitiveTextfield` fix value content selecting
  ([6c85668](https://github.com/tinkoff/taiga-ui/commit/6c85668903e796ce4d0af22d9396ac96864798d5))
- **core:** fix less style strings in font weight
  ([404b01f](https://github.com/tinkoff/taiga-ui/commit/404b01f00a72383888afa456665a0c7295201abb))
- **doc:** `Page` fix package input name
  ([bdc32a7](https://github.com/tinkoff/taiga-ui/commit/bdc32a72457663e59f0c10b06011c949d4791ea6))

### [1.6.5](https://github.com/tinkoff/taiga-ui/compare/v1.6.4...v1.6.5) (2020-12-11)

### [1.6.4](https://github.com/tinkoff/taiga-ui/compare/v1.6.3...v1.6.4) (2020-12-09)

### [1.6.3](https://github.com/tinkoff/taiga-ui/compare/v1.6.2...v1.6.3) (2020-12-08)

### Bug Fixes

- **addon-commerce:** `InputCVC` fix font issue ([#54](https://github.com/tinkoff/taiga-ui/issues/54))
  ([bf3a4bd](https://github.com/tinkoff/taiga-ui/commit/bf3a4bd64b05c9796b7ded57566215c374283b74))

### [1.6.2](https://github.com/tinkoff/taiga-ui/compare/v1.6.1...v1.6.2) (2020-12-08)

### Features

- **cdk:** `mustBePresent` add new operator ([#53](https://github.com/tinkoff/taiga-ui/issues/53))
  ([0f12ac5](https://github.com/tinkoff/taiga-ui/commit/0f12ac5b972529c4cbef8f0ff53ce7f75c59f3d2))
- **core:** move theme related styles into separate export ([#50](https://github.com/tinkoff/taiga-ui/issues/50))
  ([c240274](https://github.com/tinkoff/taiga-ui/commit/c240274104a7460c416e818876913920b5ddd53f))
- **kit:** `InputFile` add mode support ([#52](https://github.com/tinkoff/taiga-ui/issues/52))
  ([dacf719](https://github.com/tinkoff/taiga-ui/commit/dacf719721a3097325542903d55a266fc57166a2))

### [1.6.1](https://github.com/tinkoff/taiga-ui/compare/v1.6.0...v1.6.1) (2020-12-04)

### Features

- **all:** i18n for packages ([#49](https://github.com/tinkoff/taiga-ui/issues/49))
  ([020fb59](https://github.com/tinkoff/taiga-ui/commit/020fb59b12959c0dfbda19db167bf9cc7f621f90))
- **core:** `TableMode` add new directive, remove `tuiTable` from `Mode`
  ([#48](https://github.com/tinkoff/taiga-ui/issues/48))
  ([60da86f](https://github.com/tinkoff/taiga-ui/commit/60da86f6f6e344dc802180c91132c41821b475b3))
- **kit:** refactor `Badge` and `BadgedContent` to use colors directly
  ([#46](https://github.com/tinkoff/taiga-ui/issues/46))
  ([1961b9a](https://github.com/tinkoff/taiga-ui/commit/1961b9a05ca6454d75c692fb1684dd85bb56de86))

### Bug Fixes

- **core, addon-mobile:** include styles as library asset ([#47](https://github.com/tinkoff/taiga-ui/issues/47))
  ([f4797ec](https://github.com/tinkoff/taiga-ui/commit/f4797ec9ac09e9c442aece8258bd8b54272c9cbf))

## [1.6.0](https://github.com/tinkoff/taiga-ui/compare/v1.5.2...v1.6.0) (2020-12-02)

### Features

- **core, kit, addons, demo, tools:** add packages
  ([854b544](https://github.com/tinkoff/taiga-ui/commit/854b544e87a8916703ecdb8624757b602b3e9a40))

### [1.5.2](https://github.com/tinkoff/taiga-ui/compare/v1.5.1...v1.5.2) (2020-11-25)

### [1.5.1](https://github.com/tinkoff/taiga-ui/compare/v1.5.0...v1.5.1) (2020-11-25)

## [1.5.0](https://github.com/tinkoff/taiga-ui/compare/v1.4.0...v1.5.0) (2020-11-24)

### Features

- **cdk:** i18n for date fillers ([#43](https://github.com/tinkoff/taiga-ui/issues/43))
  ([a5011ba](https://github.com/tinkoff/taiga-ui/commit/a5011bad8ec585d517b384785e434c85c20385d9))

## [1.4.0](https://github.com/tinkoff/taiga-ui/compare/v1.3.0...v1.4.0) (2020-11-23)

### Bug Fixes

- **cdk:** `FocusTrap` blur manually to prevent ExpressionChanged error
  ([#40](https://github.com/tinkoff/taiga-ui/issues/40))
  ([339df70](https://github.com/tinkoff/taiga-ui/commit/339df706b34a2ab38614b55d13bdfc62bfb7482c))
- **cdk:** fix types in dist and remove metadata emit
  ([d92c0fa](https://github.com/tinkoff/taiga-ui/commit/d92c0fa1310fdcce63214fd59fe63be5cc47d90d))
- **cdk:** rename `TUI_IDENTITY_MATCHER` to `TUI_DEFAULT_IDENTITY_MATCHER` to align to other constants
  ([#38](https://github.com/tinkoff/taiga-ui/issues/38))
  ([3a9f2db](https://github.com/tinkoff/taiga-ui/commit/3a9f2dbac044619c229de6f2c4e9ecdd678988ee))

## [1.3.0](https://github.com/tinkoff/taiga-ui/compare/v1.2.1...v1.3.0) (2020-11-18)

### Features

- **cdk:** remove `TuiValidation`; `AbstractControl` works with `pseudoInvalid`
  boolean([#37](https://github.com/tinkoff/taiga-ui/issues/37))
  ([ff8c921](https://github.com/tinkoff/taiga-ui/commit/ff8c92164939f180aa4b47afadef1a808e14569f))

### [1.2.1](https://github.com/tinkoff/taiga-ui/compare/v1.2.0...v1.2.1) (2020-11-16)

## [1.2.0](https://github.com/tinkoff/taiga-ui/compare/v1.1.0...v1.2.0) (2020-11-13)

### Features

- **cdk:** `TUI_IDENTITY_MATCHER` consider two empty arrays equal ([#34](https://github.com/tinkoff/taiga-ui/issues/34))
  ([e17c08d](https://github.com/tinkoff/taiga-ui/commit/e17c08d7eb209c6b389b4dc07a32ff9e792d70af))
- **cdk:** add @ng-web-apis/mutation-observer ([#32](https://github.com/tinkoff/taiga-ui/issues/32))
  ([7459c70](https://github.com/tinkoff/taiga-ui/commit/7459c70f272b464cd95959a7f66f039194d874ce))
- **cdk:** remove preventScroll polyfill ([#21](https://github.com/tinkoff/taiga-ui/issues/21))
  ([68db75a](https://github.com/tinkoff/taiga-ui/commit/68db75adc7bb3d7eea37709963e89a3ab2152f1e))
- **observables:** `stopPropagation` add operator
  ([d930e9d](https://github.com/tinkoff/taiga-ui/commit/d930e9dcc0255c154089d1baceb4fe0a28e74604))

### Bug Fixes

- **cdk:** `Control` fix typing ([#36](https://github.com/tinkoff/taiga-ui/issues/36))
  ([7e1c91e](https://github.com/tinkoff/taiga-ui/commit/7e1c91e539ec81426eb4519080679016757c3a50))
- **cdk:** `Time` fix currentLocal at 0:00 ([#16](https://github.com/tinkoff/taiga-ui/issues/16))
  ([3f7786c](https://github.com/tinkoff/taiga-ui/commit/3f7786c62281c8c3c438b869afc7d317d0abba84))
- **observables:** `pressedObservable` ignore synthetic events
  ([28e6a04](https://github.com/tinkoff/taiga-ui/commit/28e6a045dbcb0c57b2afac44c5b4e784182cf3e9))

## 1.1.0 (2020-09-26)

### Features

- **cdk:** `Dialogs` add ability to create multiple custom dialogs ([#8](https://github.com/tinkoff/taiga-ui/issues/8))
  ([7f18bfb](https://github.com/tinkoff/taiga-ui/commit/7f18bfbb92199a7efcaeaa033dd0df86cb94974f))
- **cdk:** `Pure` add access to `this` ([#6](https://github.com/tinkoff/taiga-ui/issues/6))
  ([4cf9e16](https://github.com/tinkoff/taiga-ui/commit/4cf9e161f415a151bb2522cec3793650041d7e7c))
