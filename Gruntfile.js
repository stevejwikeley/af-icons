module.exports = function (grunt) {

    "use strict";

    // this saves us having to load each plugin individually
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        watch: {
            icons: {
                files: "src/*.svg",
                tasks: "build"
            }
        },

        webfont: {
            dev: {
                src: "src/*.svg",
                dest: "build/",
                options: {
                    font: 'HSBCIcon-Font',
                    engine: "node",
                    hashes: false,
                    relativeFontPath: '/fonts/',
                    codepoints: {
                        'download' : 0xF000,
                        'edit' : 0xf001,
                        'delete' : 0xf002,
                        'privacy' : 0xf003,
                        'print' : 0xf004,
                        'phone' : 0xf005,
                        'message' : 0xf006,
                        'search' : 0xf007,
                        'banking' : 0xf008,
                        'pay' : 0xf009,
                        'agree' : 0xf00a,
                        'menu' : 0xf00b,
                        'view-all' : 0xf00c,
                        'transfers' : 0xf00d,
                        'switch' : 0xf00e,
                        'refresh' : 0xf010,
                        'home' : 0xf011,
                        'help' : 0xf012,
                        'favourite' : 0xf013,
                        'passcode' : 0xf014,
                        'video' : 0xf015,
                        'chat' : 0xf016,
                        'alert' : 0xf017,
                        'fast-track' : 0xf018,
                        'location' : 0xf019,
                        'error' : 0xf01a,
                        'online' : 0xf01b,
                        'user' : 0xf01c,
                        'articles' : 0xf01d,
                        'book' : 0xf01e,
                        'accounts' : 0xf021,
                        'share' : 0xf022,
                        'information' : 0xf023,
                        'investment' : 0xf024,
                        'expand' : 0xf025,
                        'rewards' : 0xf026,
                        'producs-services' : 0xf027,
                        'calendar' : 0xf028,
                        'clock' : 0xf029,
                        'security-lock' : 0xf02a,
                        'insurance' : 0xf02b,
                        'log-off' : 0xf02c,
                        'settings' : 0xf02d,
                        'market' : 0xf02e,
                        'rates' : 0xf02f,
                        'list' : 0xf030,
                        'add' : 0xf031,
                        'mobile' : 0xf032,
                        'devices' : 0xf033,
                        'reply' : 0xf034,
                        'wireless' : 0xf035,
                        'global' : 0xf037,
                        'insight' : 0xf038,
                        'pie-chart' : 0xf039,
                        'in-branch' : 0xf03a,
                        'presentation' : 0xf03b,
                        'portfolio' : 0xf03c,
                        'warning' : 0xf03d,
                        'education' : 0xf03e,
                        'new' : 0xf040,
                        'report' : 0xf041,
                        'assets' : 0xf042,
                        'multiple-users' : 0xf043,
                        'dashboard' : 0xf044,
                        'pin' : 0xf045,
                        'tasks' : 0xf047,
                        'confirm' : 0xf048,
                        'plus-minus' : 0xf049,
                        'camera' : 0xf04a,
                        'save' : 0xf04b,
                        'survey' : 0xf04c,
                        'client-upload' : 0xf04d,
                        'client-download' : 0xf04e,
                        'compose' : 0xf050,
                        'newspaper' : 0xf051,
                        'circle-error' : 0xf052,
                        'circle-info' : 0xf053,
                        'circle-confirmation' : 0xf054,
                        'chevron-down' : 0xf055,
                        'chevron-up' : 0xf056,
                        'chevron-right' : 0xf057,
                        'chevron-left' : 0xf058,
                        'bullet' : 0xf059,
                        'circle-help' : 0xf060,
                        'barcode' : 0xf061,
                        'back' : 0xf062,
                        'warning-outline' : 0xf063,
                        'tablet' : 0xf064,
                        'bin' : 0xf065,
                        'upload' : 0xf066,
                        'circle-delete' : 0xf067,
                        'backspace' : 0xf068,
                        'more' : 0xf070,
                        'circle-fill-information' : 0xf073,
                        'circle-fill-anchor-down' : 0xf074,
                        'circle-fill-anchor-up' : 0xf07a,
                        'anchor-down' : 0xf075, 
                        'anchor-up' : 0xf07b,
                        'minimize' : 0xf07c,
                        'stock-up' : 0xf071,
                        'stock-down' : 0xf072,
                        'corporate' : 0xf083,
                        'borrowing' : 0xf084,
                        'travel' : 0xf078,
                        'health' : 0xf079,
                        'shopping' : 0xf080,
                        'food-dining' : 0xf081,
                        'shopping-cart' : 0xf082
                    },
                    templateOptions: {
                        classPrefix: "icon-"
                    }
                }
            },
            
        },

        notify: {
            notify_hooks: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 5,
                }
            },
            build: {
                options: {
                    title: "Is is a bird is it a plane?",
                    message: "No its a HSBC icon Font"
                }
            }
        }
    });

    // List of available tasks
    grunt.registerTask("default", []);
    grunt.registerTask("build", ["webfont", "notify:build"]);

};
