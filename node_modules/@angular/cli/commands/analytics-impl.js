"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const analytics_1 = require("../models/analytics");
const command_1 = require("../models/command");
const analytics_2 = require("./analytics");
class AnalyticsCommand extends command_1.Command {
    async run(options) {
        // Our parser does not support positional enums (won't report invalid parameters). Do the
        // validation manually.
        // TODO(hansl): fix parser to better support positionals. This would be a breaking change.
        if (options.settingOrProject === undefined) {
            if (options['--']) {
                // The user passed positional arguments but they didn't validate.
                this.logger.error(`Argument ${JSON.stringify(options['--'][0])} is invalid.`);
                this.logger.error(`Please provide one of the following value: on, off, ci or project.`);
                return 1;
            }
            else {
                // No argument were passed.
                await this.printHelp(options);
                return 2;
            }
        }
        else if (options.settingOrProject == analytics_2.SettingOrProject.Project
            && options.projectSetting === undefined) {
            this.logger.error(`Argument ${JSON.stringify(options.settingOrProject)} requires a second `
                + `argument of one of the following value: on, off.`);
            return 2;
        }
        try {
            switch (options.settingOrProject) {
                case analytics_2.SettingOrProject.Off:
                    analytics_1.setAnalyticsConfig('global', false);
                    break;
                case analytics_2.SettingOrProject.On:
                    analytics_1.setAnalyticsConfig('global', true);
                    break;
                case analytics_2.SettingOrProject.Ci:
                    analytics_1.setAnalyticsConfig('global', 'ci');
                    break;
                case analytics_2.SettingOrProject.Project:
                    switch (options.projectSetting) {
                        case analytics_2.ProjectSetting.Off:
                            analytics_1.setAnalyticsConfig('local', false);
                            break;
                        case analytics_2.ProjectSetting.On:
                            analytics_1.setAnalyticsConfig('local', true);
                            break;
                        case analytics_2.ProjectSetting.Prompt:
                            await analytics_1.promptProjectAnalytics(true);
                            break;
                        default:
                            await this.printHelp(options);
                            return 3;
                    }
                    break;
                case analytics_2.SettingOrProject.Prompt:
                    await analytics_1.promptGlobalAnalytics(true);
                    break;
                default:
                    await this.printHelp(options);
                    return 4;
            }
        }
        catch (err) {
            this.logger.fatal(err.message);
            return 1;
        }
        return 0;
    }
}
exports.AnalyticsCommand = AnalyticsCommand;
