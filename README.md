<div align="center">

# <img src="projects/demo/src/assets/images/taiga.svg" alt="taiga ui logo" width="36px"> Taiga UI

[![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk.svg)](https://npmjs.com/package/@taiga-ui/cdk)
[![codecov](https://codecov.io/gh/taiga-family/taiga-ui/branch/main/graphs/badge.svg)](https://app.codecov.io/gh/taiga-family/taiga-ui/tree/main/projects)
[![All packages CI](https://github.com/taiga-family/taiga-ui/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/taiga-family/taiga-ui/actions/workflows/build.yml)
[![Deploy](https://github.com/taiga-family/taiga-ui/actions/workflows/deploy-gh-pages.yml/badge.svg?branch=main)](https://github.com/taiga-family/taiga-ui/actions/workflows/deploy-gh-pages.yml)
[![Downloads per month](https://img.shields.io/npm/dm/@taiga-ui/cdk?color=dark-green)](https://www.npmjs.com/package/@taiga-ui/cdk)
[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)
[![Renovate](https://img.shields.io/badge/renovate-configured-green?logo=renovatebot)](https://docs.renovatebot.com/)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Ftaiga-family%2Ftaiga-ui&label=Visitors&countColor=%232ccce4&style=plastic&labelStyle=lower)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Ftaiga-family%2Ftaiga-ui)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/y/taiga-family/taiga-ui)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[Website](https://taiga-ui.dev) • [Documentation](https://taiga-ui.dev/getting-started) • [Core team](#core-team)

</div>

**Taiga UI** is fully-treeshakable Angular UI Kit consisting of multiple base libraries and several add-ons.

It is based on [ng-polymorpheus](https://github.com/taiga-family/ng-polymorpheus) dynamic content approach and uses
[Web APIs for Angular](https://github.com/ng-web-apis) for required browser APIs.

## Why Taiga UI

🧩 **Modular and fully-treeshakable.** We harnessed the power of Secondary Entry Points mechanism. You can import even
just one entity from our library and be sure that there is no redundant code in your bundle

🧙 **Agnostic**. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects
to let you focus on your project features

🦋 **Customizable**. We use CSS custom properties for all our styling and provide easy methods to customize all UI
components with dark theme out of the box

🛠 **Well engineered**. We are not afraid to use DI to the max. All our components use `OnPush`, and the whole project
is developed with `strict` TypeScript mode

📦 **It's big!** We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it isn't over yet 🚀

🏗 **Maintained!** The library started as an internal product in our company. It is used by 50+ projects in production
now, and it is here to stay.

Read more about Taiga UI main features in
[this article](https://angular.love/taiga-ui-is-a-new-angular-ui-kit-that-you-should-try) on angular.love

## Version compatibility

| Taiga UI | Angular              | Supported              | Latest version                                                                                     |
| -------- | -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `5.x.y`  | `^19.0.0` - `latest` | ⚠️ Release candidate   | ![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk/next?label=%40taiga-ui%2Fcdk%20~%20v5)   |
| `4.x.y`  | `^16.0.0` - `latest` | ✅ Current             | ![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk/latest?label=%40taiga-ui%2Fcdk%20~%20v4) |
| `3.x.y`  | `^12.0.0` - `latest` | ⚠️ No longer supported | ![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk/v3-lts?label=%40taiga-ui%2Fcdk%20~%20v3) |
| `2.x.y`  | `^9.0.0` - `^15.0.0` | ⚠️ No longer supported | ![v2](https://img.shields.io/npm/v/@taiga-ui/cdk/v2-lts?label=%40taiga-ui%2Fcdk%20~%20v2)          |

## Versions In This Repository

- [main](https://github.com/taiga-family/taiga-ui/commits/main) - This is all of the current work, which is against v5
- Previous major versions – [2.x](https://github.com/taiga-family/taiga-ui/tree/v2.x),
  [3.x](https://github.com/taiga-family/taiga-ui/tree/v3.x), [4.x](https://github.com/taiga-family/taiga-ui/tree/v4.x)
  and etc.

## How to start

See our [Getting started](https://taiga-ui.dev/getting-started) page to start working with Taiga UI

You can also use our [StackBlitz starter](https://taiga-ui.dev/stackblitz) to create a quick sample with Taiga UI

🎨 Figma available only for 2.x and 3.x versions [here](https://www.figma.com/community/file/1220308188005380608). Next
version of Figma library is in progress for the latest version of Taiga UI.

## Community

💡 Your ideas are very welcome in GitHub issues or discussions

🗨 For English live chat join [#taiga-ui](https://discord.gg/zrB2EdJjEy) channel in official Angular discord

💬 For Russian live chat join [taiga_ui](https://t.me/taiga_ui) Telegram group

## Core team

<table>
    <tr>
       <td align="center">
            <a href="https://twitter.com/waterplea"
                ><img
                    src="https://github.com/waterplea.png?size=200"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Alex Inkin"
                /><br /><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alex&nbsp;Inkin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/waterplea"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a href="https://github.com/waterplea" title="Github"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/waterplea"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
        <td align="center">
            <a href="https://twitter.com/marsibarsi"
                ><img
                    src="https://github.com/marsibarsi.png?size=200"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Roman Sedov"
                /><br /><b>&nbsp;Roman&nbsp;Sedov&nbsp;</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/marsibarsi"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a
                    href="https://github.com/marsibarsi"
                    title="GitHub"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/marsibarsi"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
        <td align="center">
            <a href="https://github.com/vladimirpotekhin"
                ><img
                    src="https://github.com/vladimirpotekhin.png?size=200"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Vladimir Potekhin"
                /><br /><b>Vladimir&nbsp;Potekhin</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/v_potekhin"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a
                    href="https://github.com/vladimirpotekhin"
                    title="GitHub"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/v_potekhin"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/nsbarsukov/"
                ><img
                    src="https://github.com/nsbarsukov.png?size=200"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Nikita Barsukov"
                /><br /><b>Nikita&nbsp;Barsukov</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/nsbarsukov"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a
                    href="https://github.com/nsbarsukov"
                    title="GitHub"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/nsbarsukov"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td> 
        <td align="center">
            <a href="https://github.com/splincode"
                ><img
                    src="https://github.com/splincode.png?size=200"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="Maksim Ivanov"
                /><br /><b>Maksim&nbsp;Ivanov</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/splincodewd"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a
                    href="https://github.com/splincode"
                    title="GitHub"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/splincode"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
        <td align="center">
            <a href="https://github.com/mdlufy"
                ><img
                    src="https://github.com/mdlufy.png?size=200"
                    width="100"
                    style="margin-bottom: -4px; border-radius: 8px;"
                    alt="German Panov"
                /><br /><b>German&nbsp;Panov</b></a
            >
            <div style="margin-top: 4px">
                <a
                    href="https://twitter.com/mdlufy_"
                    title="Twitter"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/twitter.svg"
                /></a>
                <a
                    href="https://github.com/mdlufy"
                    title="GitHub"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg"
                /></a>
                <a
                    href="https://t.me/mdlufy"
                    title="Telegram"
                    ><img
                        width="16"
                        src="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/send.svg"
                /></a>
            </div>
        </td>
    </tr>
</table>

## Contributors

See our [CONTRIBUTING.md](/CONTRIBUTING.md) guide. Try to [make pull request](https://github.dev/taiga-family/taiga-ui)
online from Web IDE.

<a href="https://github.com/taiga-family/taiga-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=taiga-family/taiga-ui" />
</a>

## Stars 🌟

[![Popular](https://starchart.cc/taiga-family/taiga-ui.svg?variant=adaptive)](https://starchart.cc/taiga-family/taiga-ui)

## License

🆓 Feel free to use our library in your commercial and private applications

All Taiga UI packages are covered by [Apache 2.0](/LICENSE)

Read more about this license [here](https://choosealicense.com/licenses/apache-2.0/)
