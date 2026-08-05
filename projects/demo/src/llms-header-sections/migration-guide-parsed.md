# Migration Guide

> **Guide to update Taiga UI v{CURRENT_MAJOR} -> v{NEXT_MAJOR}**

### Before you update

Use Node.js LTS, NPM v10 or higher.

    

    Update Taiga UI version to
    
        latest v{{ tuiMajor - 1 }}.
    

    

    Update Angular version to v19 or higher.

    

    Ensure Prettier’s endOfLine option is set to auto for fix some issues with end of line after migration.
### Updating

Run migration schematics

    

    
        Review all changed code lines. Some of them contain new code comments (something like
        `// TODO: (Taiga UI migration)`
        ). In most cases these comments contain instructions how to manually migrate some deleted entities by new
        alternative.
    

    

    
        You can find out that your codebase now contains some imports from
        `[&#64;taiga-ui/legacy](https://github.com/taiga-family/taiga-ui/tree/main/projects/legacy)`
        . This package is a transitional state for many outdated entities before their full removal. Everything you find
        inside this package in the {{ tuiMajor }}th major release will be removed in the {{ tuiMajor + 1 }}th one. So,
        you can just continue to use them for a while. However, some of those components already have modern
        alternatives – they will be marked by comment with
        `&#64;deprecated`
        tag (most IDEs displays the such entities as stricken-through). We strongly recommend to replace them by new
        alternatives as soon as possible!
**Examples:**

### Troubleshooting

**After running the migration schematics, I have a large amount of TypeScript errors
            TS6133: &lt;entityName&gt; is declared but its value is never read.
        
    
    
        
            We don't include any code formatting in our schematics on purpose. Otherwise, it will drastically slow down
            the overall process of schematics execution. So, use well-optimized prettier/eslint rules and power of your
            IDEs .

            If you are WebStorm user.
                Just make right click on the root folder with the codebase of your recently migrated application. Choose
                
                    "Optimize imports"
                
                from the context menu. It will automatically remove all unused imports across all the files in that
                folder.

            If you are Visual Studio Code user.**
            Use an
            [Folder source actions](https://marketplace.visualstudio.com/items?itemName=bierner.folder-source-actions)
            extension to trigger built-in
            [Organize Imports](https://code.visualstudio.com/docs/languages/javascript#_organize-imports)
            action in all files recursively in the root folder with the codebase of your recently migrated application.
        
    

    **I use Yarn or cannot get rid of
            legacy-peer-deps
            and I need a workaround. Or, I ran
            npm install
            and got
            Could not resolve dependency
            (for
            ng-web-apis
            ,
            maskito
            ,
            ng-polymorpheus
            or
            ng-event-plugins
            packages)
        
    
    
        
            Taiga UI depends on many other
            
                Taiga Family packages
            
            .
            

            
            Yarn and NPM with enabled
            legacy-peer-deps
            config do not automatically install transitive peer dependencies. It means that you should manage them
            manually**
            . Explore
            `package.json`
            of every used Taiga UI package. Find their
            `peerDependencies`
            and ensure that they are installed and their versions are compatible with constraints from Taiga libraries.
        
    

    
        

        
            I ran
            `nx migrate --run-migrations`
            and got
            `Cannot find module 'ts-morph'`
            error, but my project uses NPM without
            `legacy-peer-deps`
        
    
    
        
            Nx 
        
    

    
        

        
            Migration fails with
            `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`
        
    
    
        
            
                Migration schematics recursively traverse every file and directory. This operation can be
                memory-intensive. If you encounter this error, try increasing the memory limit for the Node.js process.
            

            
                For example:
                The syntax for defining environment variables varies by OS and shell!
                    
                    The command below is for Unix-based systems and Nx CLI.

                
            

            If the problem persists –
                
                    report the issue

        
    

    
        

        
            I still have some problems with running the basic version of
            `ng update`
            /
            `ng migrate`
            command, I need an approach to execute all schematics manually
        
    
    
        
            
                
                    Manually update all Taiga UI's packages to
                    `v{{ tuiMajor }}`
                    (i.e. just change versions inside your
                    `package.json`
                    by yourself without any console commands and then run
                    `npm install`
                    ).
                
                
                    Check that
                    `node_modules/&#64;taiga-ui/cdk/package.json`
                    contains the {{ tuiMajor }}th major version
                
                
                    Execute:
                    
                    or
**Examples:**
