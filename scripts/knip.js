#!/usr/bin/env node

/**
 * Helper script to run knip while temporarily excluding problematic demo projects
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DEMO_PLAYWRIGHT_PKG = 'projects/demo-playwright/package.json';
const DEMO_CYPRESS_PKG = 'projects/demo-cypress/package.json';
const DEMO_PLAYWRIGHT_PKG_BAK = 'projects/demo-playwright/package.json.bak';
const DEMO_CYPRESS_PKG_BAK = 'projects/demo-cypress/package.json.bak';

function movePackageJsons() {
    if (fs.existsSync(DEMO_PLAYWRIGHT_PKG)) {
        fs.renameSync(DEMO_PLAYWRIGHT_PKG, DEMO_PLAYWRIGHT_PKG_BAK);
    }
    if (fs.existsSync(DEMO_CYPRESS_PKG)) {
        fs.renameSync(DEMO_CYPRESS_PKG, DEMO_CYPRESS_PKG_BAK);
    }
}

function restorePackageJsons() {
    if (fs.existsSync(DEMO_PLAYWRIGHT_PKG_BAK)) {
        fs.renameSync(DEMO_PLAYWRIGHT_PKG_BAK, DEMO_PLAYWRIGHT_PKG);
    }
    if (fs.existsSync(DEMO_CYPRESS_PKG_BAK)) {
        fs.renameSync(DEMO_CYPRESS_PKG_BAK, DEMO_CYPRESS_PKG);
    }
}

function runKnip() {
    const args = process.argv.slice(2);
    const knipCommand = args.length > 0 ? `npx knip ${args.join(' ')}` : 'npx knip --production';
    
    try {
        movePackageJsons();
        console.log('🔍 Running knip to find dead code...\n');
        execSync(knipCommand, { stdio: 'inherit' });
    } catch (error) {
        console.error('Error running knip:', error.message);
        process.exit(1);
    } finally {
        restorePackageJsons();
    }
}

runKnip();