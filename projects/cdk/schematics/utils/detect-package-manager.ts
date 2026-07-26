import {type Tree} from '@angular-devkit/schematics';

export type PackageManager = 'npm' | 'pnpm' | 'yarn';

export function detectPackageManager(tree: Tree): PackageManager {
    const packageJson = tree.read('package.json')?.toString();
    const pkg = packageJson ? JSON.parse(packageJson) : {};
    const packageManagerField: string = pkg.packageManager ?? '';

    const managers: Array<{name: PackageManager; lock: string}> = [
        {name: 'pnpm', lock: 'pnpm-lock.yaml'},
        {name: 'yarn', lock: 'yarn.lock'},
        {name: 'npm', lock: 'package-lock.json'},
    ];

    return (
        managers.find(({name}) => packageManagerField.startsWith(name))?.name ??
        managers.find(({lock}) => tree.exists(lock))?.name ??
        'npm'
    );
}
