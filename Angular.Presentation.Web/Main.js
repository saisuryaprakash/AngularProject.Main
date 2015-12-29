
debugger;
require.config({
    
    baseUrl: "",
    
    // alias libraries paths.  Must set 'angular'
    // Aliases and paths of modules

    paths: {
        'angular-app' : 'app/angular-app',
        'angular' : 'lib/Angular/angular',
        'angular-ui-router' : 'lib/Angular-ui-router/angular-ui-router.min',
        'angularAMD': 'lib/AngularAMD/angularAMD.min',
        'angular-route' : 'lib/Angular/angular-route.min',
                    
    },

   
    // Add angular modules that does not support AMD out of the box, put it in a shim
    // Modules and their dependent modules

    shim: {
        'angularAMD':['angular'],
        'angular-ui-router': ['angular'],
        'angular-app': ['angular'],
        'angular-route' : ['angular'],
        
    },

    // kick start application
    deps:['angular-app']

   
});