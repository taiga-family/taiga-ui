"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const command_1 = require("../models/command");
const color_1 = require("../utilities/color");
function pickOne(of) {
    return of[Math.floor(Math.random() * of.length)];
}
class AwesomeCommand extends command_1.Command {
    async run() {
        const phrase = pickOne([
            `You're on it, there's nothing for me to do!`,
            `Let's take a look... nope, it's all good!`,
            `You're doing fine.`,
            `You're already doing great.`,
            `Nothing to do; already awesome. Exiting.`,
            `Error 418: As Awesome As Can Get.`,
            `I spy with my little eye a great developer!`,
            `Noop... already awesome.`,
        ]);
        this.logger.info(color_1.colors.green(phrase));
    }
}
exports.AwesomeCommand = AwesomeCommand;
