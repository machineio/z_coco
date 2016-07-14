materialAdmin
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");


        $stateProvider
        
        //------------------------------
        // HOME
        //------------------------------

            .state ('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/fullcalendar/dist/fullcalendar.min.css',
                                ]
                            },
                            {
                                name: 'vendors',
                                insertBefore: '#app-level-js',
                                files: [
                                    'vendors/sparklines/jquery.sparkline.min.js',
                                    'vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                                    'vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js'
                                ]
                            }
                        ])
                    }
                }
            })


        //------------------------------
        // PROFILE
        //------------------------------
            .state ('profile', {
                url: '/profile',
                templateUrl: 'views/profile.html',
                controller: 'profileCtrl',
            })

            .state ('profile.about', {
                url: '/about',
                templateUrl: 'template/profile/profile-about.html'
            })
        
            .state ('profile.account', {
                url: '/account',
                templateUrl: 'template/profile/profile-account.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('profile.emails', {
                url: '/emails',
                templateUrl: 'template/profile/profile-emails.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
            .state ('profile.orgs', {
                url: '/orgs',
                templateUrl: 'template/profile/profile-orgs.html'
            })


        //------------------------------
        // Tasks
        //------------------------------
            .state('tasks', {
                url: '/tasks',
                templateUrl: 'views/tasks.html',
                controller: 'tasksCtrl'
            })

            .state ('tasks.all', {
                url: '/all',
                templateUrl: 'template/tasks/tasks-all.html',
            })

            .state ('tasks.export', {
                url: '/export',
                templateUrl: 'template/tasks/tasks-export.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/nouislider/jquery.nouislider.css',
                                    'vendors/farbtastic/farbtastic.css',
                                    'vendors/bower_components/summernote/dist/summernote.css',
                                    'vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                                    'vendors/bower_components/chosen/chosen.min.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/input-mask/input-mask.min.js',
                                    'vendors/bower_components/nouislider/jquery.nouislider.min.js',
                                    'vendors/bower_components/moment/min/moment.min.js',
                                    'vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                                    'vendors/bower_components/summernote/dist/summernote.min.js',
                                    'vendors/fileinput/fileinput.min.js',
                                    'vendors/bower_components/chosen/chosen.jquery.js',
                                    'vendors/bower_components/angular-chosen-localytics/chosen.js',
                                    'vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('tasks.new', {
                url: '/new',
                templateUrl: 'template/tasks/tasks-new.html'
            })


        //------------------------------
        // ADMIN
        //------------------------------
            .state ('admin', {
                url: '/admin',
                templateUrl: 'views/common.html'
            })

            //------------------------------
            // ADMIN - USERS
            //------------------------------

                .state ('admin.users', {
                    url: '/users',
                    templateUrl: 'template/admin/users/admin-users.html',
                    controller: 'adminUsersCtrl'
                })

                .state ('admin.users.all', {
                    url: '/all',
                    templateUrl: 'template/admin/users/admin-users-all.html'
                })

                .state ('admin.users.agents', {
                    url: '/agents',
                    templateUrl: 'template/admin/users/admin-users-agents.html'
                })

                .state ('admin.users.scrubbers', {
                    url: '/scrubbers',
                    templateUrl: 'template/admin/users/admin-users-scrubbers.html'
                })

                .state ('admin.users.supervisors', {
                    url: '/supervisors',
                    templateUrl: 'template/admin/users/admin-users-supervisors.html'
                })

                .state ('admin.users.admins', {
                    url: '/admins',
                    templateUrl: 'template/admin/users/admin-users-admins.html'
                })

            //------------------------------
            // ADMIN - ORGANIZATIONS
            //------------------------------

                .state ('admin.orgs', {
                    url: '/orgs',
                    templateUrl: 'template/admin/orgs/admin-orgs.html',
                    controller: 'adminOrgsCtrl'
                })

                .state ('admin.orgs.all', {
                    url: '/all',
                    templateUrl: 'template/admin/orgs/admin-orgs-all.html'
                })

                .state ('admin.orgs.create', {
                    url: '/create',
                    templateUrl: 'template/admin/orgs/admin-orgs-create.html'
                })

            //------------------------------
            // ADMIN - LEADS
            //------------------------------
                .state('admin.leads', {
                    url: '/leads',
                    templateUrl: 'template/admin/leads/admin-leads.html',
                    controller: 'adminLeadsCtrl'
                })

                .state ('admin.leads.all', {
                    url: '/all',
                    templateUrl: 'template/admin/leads/admin-leads-all.html',
                })

                .state ('admin.leads.import', {
                    url: '/import',
                    templateUrl: 'template/admin/leads/admin-leads-import.html',
                })

                .state ('admin.leads.contactdir', {
                    url: '/contactdir',
                    templateUrl: 'template/admin/leads/admin-leads-contactdir.html',
                })

                .state ('admin.leads.new', {
                    url: '/new',
                    templateUrl: 'template/admin/leads/admin-leads-new.html',
                })

            //------------------------------
            // ADMIN - CAMPAIGNS
            //------------------------------
                .state('admin.campaigns', {
                    url: '/campaigns',
                    templateUrl: 'template/admin/campaigns/admin-campaigns.html',
                    controller: 'adminCampaignsCtrl'
                })

                .state ('admin.campaigns.all', {
                    url: '/all',
                    templateUrl: 'template/admin/campaigns/admin-campaigns-all.html',
                })

                .state ('admin.campaigns.inbound', {
                    url: '/inbound',
                    templateUrl: 'template/admin/campaigns/admin-campaigns-inbound.html',
                })

                .state ('admin.campaigns.outbound', {
                    url: '/outbount',
                    templateUrl: 'template/admin/campaigns/admin-campaigns-outbound.html',
                })

                .state ('admin.campaigns.queries', {
                    url: '/queries',
                    templateUrl: 'template/admin/campaigns/admin-campaigns-queries.html',
                })



        //------------------------------
        // SUPERVISOR
        //------------------------------
            .state ('supervisor', {
                url: '/supervisor',
                templateUrl: 'views/common.html'
            })

            //------------------------------
            // SUPERVISOR - MONITORS
            //------------------------------
                .state ('supervisor.monitor', {
                    url: '/monitor',
                    templateUrl: 'template/supervisor/monitor/supervisor-monitor.html',
                    controller: 'supervisorMonitorCtrl'
                })

                .state ('supervisor.monitor.all', {
                    url: '/all',
                    templateUrl: 'template/supervisor/monitor/supervisor-monitor-all.html'
                })

                .state ('supervisor.monitor.new', {
                    url: '/new',
                    templateUrl: 'template/supervisor/monitor/supervisor-monitor-new.html'
                })

                .state ('supervisor.monitor.export', {
                    url: '/export',
                    templateUrl: 'template/supervisor/monitor/supervisor-monitor-export.html'
                })

            //------------------------------
            // SUPERVISOR - RECORDINGS
            //------------------------------
                .state ('supervisor.recordings', {
                    url: '/recordings',
                    templateUrl: 'template/supervisor/recordings/supervisor-recordings.html',
                    controller: 'supervisorRecordingsCtrl'
                })

                .state ('supervisor.recordings.all', {
                    url: '/all',
                    templateUrl: 'template/supervisor/recordings/supervisor-recordings-all.html'
                })

                .state ('supervisor.recordings.new', {
                    url: '/new',
                    templateUrl: 'template/supervisor/recordings/supervisor-recordings-new.html'
                })

                .state ('supervisor.recordings.export', {
                    url: '/export',
                    templateUrl: 'template/supervisor/recordings/supervisor-recordings-export.html'
                })

            //------------------------------
            // SUPERVISOR - REPORTS
            //------------------------------
                .state ('supervisor.reports', {
                    url: '/reports',
                    templateUrl: 'template/supervisor/reports/supervisor-reports.html',
                    controller: 'supervisorReportsCtrl'
                })

                .state ('supervisor.reports.details', {
                    url: '/details',
                    templateUrl: 'template/supervisor/reports/supervisor-reports-details.html'
                })

                .state ('supervisor.reports.frequency', {
                    url: '/frequency',
                    templateUrl: 'template/supervisor/reports/supervisor-reports-frequency.html'
                })

                .state ('supervisor.reports.summaries', {
                    url: '/summaries',
                    templateUrl: 'template/supervisor/reports/supervisor-reports-summaries.html'
                })


            //------------------------------
            // HEADERS
            //------------------------------
            .state ('headers', {
                url: '/headers',
                templateUrl: 'views/common-2.html'
            })

            .state('headers.textual-menu', {
                url: '/textual-menu',
                templateUrl: 'views/textual-menu.html'
            })

            .state('headers.image-logo', {
                url: '/image-logo',
                templateUrl: 'views/image-logo.html'
            })

            .state('headers.mainmenu-on-top', {
                url: '/mainmenu-on-top',
                templateUrl: 'views/mainmenu-on-top.html'
            })


            //------------------------------
            // TYPOGRAPHY
            //------------------------------
        
            .state ('typography', {
                url: '/typography',
                templateUrl: 'views/typography.html'
            })


            //------------------------------
            // WIDGETS
            //------------------------------
        
            .state ('widgets', {
                url: '/widgets',
                templateUrl: 'views/common.html'
            })

            .state ('widgets.widgets', {
                url: '/widgets',
                templateUrl: 'views/widgets.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/mediaelement/build/mediaelementplayer.css',
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('widgets.widget-templates', {
                url: '/widget-templates',
                templateUrl: 'views/widget-templates.html',
            })


            //------------------------------
            // TABLES
            //------------------------------
        
            .state ('tables', {
                url: '/tables',
                templateUrl: 'views/common.html'
            })
            
            .state ('tables.tables', {
                url: '/tables',
                templateUrl: 'views/tables.html'
            })
            
            .state ('tables.data-table', {
                url: '/data-table',
                templateUrl: 'views/data-table.html'
            })

        
            //------------------------------
            // FORMS
            //------------------------------
            .state ('form', {
                url: '/form',
                templateUrl: 'views/common.html'
            })

            .state ('form.basic-form-elements', {
                url: '/basic-form-elements',
                templateUrl: 'views/form-elements.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('form.form-components', {
                url: '/form-components',
                templateUrl: 'views/form-components.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/nouislider/jquery.nouislider.css',
                                    'vendors/farbtastic/farbtastic.css',
                                    'vendors/bower_components/summernote/dist/summernote.css',
                                    'vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                                    'vendors/bower_components/chosen/chosen.min.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/input-mask/input-mask.min.js',
                                    'vendors/bower_components/nouislider/jquery.nouislider.min.js',
                                    'vendors/bower_components/moment/min/moment.min.js',
                                    'vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                                    'vendors/bower_components/summernote/dist/summernote.min.js',
                                    'vendors/fileinput/fileinput.min.js',
                                    'vendors/bower_components/chosen/chosen.jquery.js',
                                    'vendors/bower_components/angular-chosen-localytics/chosen.js',
                                    'vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
            .state ('form.form-examples', {
                url: '/form-examples',
                templateUrl: 'views/form-examples.html'
            })
        
            .state ('form.form-validations', {
                url: '/form-validations',
                templateUrl: 'views/form-validations.html'
            })
        
            
            //------------------------------
            // USER INTERFACE
            //------------------------------
        
            .state ('user-interface', {
                url: '/user-interface',
                templateUrl: 'views/common.html'
            })
        
            .state ('user-interface.ui-bootstrap', {
                url: '/ui-bootstrap',
                templateUrl: 'views/ui-bootstrap.html'
            })

            .state ('user-interface.colors', {
                url: '/colors',
                templateUrl: 'views/colors.html'
            })

            .state ('user-interface.animations', {
                url: '/animations',
                templateUrl: 'views/animations.html'
            })
        
            .state ('user-interface.box-shadow', {
                url: '/box-shadow',
                templateUrl: 'views/box-shadow.html'
            })
        
            .state ('user-interface.buttons', {
                url: '/buttons',
                templateUrl: 'views/buttons.html'
            })
        
            .state ('user-interface.icons', {
                url: '/icons',
                templateUrl: 'views/icons.html'
            })
        
            .state ('user-interface.alerts', {
                url: '/alerts',
                templateUrl: 'views/alerts.html'
            })

            .state ('user-interface.preloaders', {
                url: '/preloaders',
                templateUrl: 'views/preloaders.html'
            })

            .state ('user-interface.notifications-dialogs', {
                url: '/notifications-dialogs',
                templateUrl: 'views/notification-dialog.html'
            })
        
            .state ('user-interface.media', {
                url: '/media',
                templateUrl: 'views/media.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/mediaelement/build/mediaelementplayer.css',
                                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
            .state ('user-interface.other-components', {
                url: '/other-components',
                templateUrl: 'views/other-components.html'
            })
            
        
            //------------------------------
            // CHARTS
            //------------------------------
            
            .state ('charts', {
                url: '/charts',
                templateUrl: 'views/common.html'
            })

            .state ('charts.flot-charts', {
                url: '/flot-charts',
                templateUrl: 'views/flot-charts.html',
            })

            .state ('charts.other-charts', {
                url: '/other-charts',
                templateUrl: 'views/other-charts.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/sparklines/jquery.sparkline.min.js',
                                    'vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                                ]
                            }
                        ])
                    }
                }
            })
        
        
            //------------------------------
            // CALENDAR
            //------------------------------
            
            .state ('calendar', {
                url: '/calendar',
                templateUrl: 'views/calendar.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/fullcalendar/dist/fullcalendar.min.css',
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/moment/min/moment.min.js',
                                    'vendors/bower_components/fullcalendar/dist/fullcalendar.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
        
            //------------------------------
            // PHOTO GALLERY
            //------------------------------
            
             .state ('photo-gallery', {
                url: '/photo-gallery',
                templateUrl: 'views/common.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            //Default
        
            .state ('photo-gallery.photos', {
                url: '/photos',
                templateUrl: 'views/photos.html'
            })
        
            //Timeline
    
            .state ('photo-gallery.timeline', {
                url: '/timeline',
                templateUrl: 'views/photo-timeline.html'
            })
        
        
            //------------------------------
            // GENERIC CLASSES
            //------------------------------
            
            .state ('generic-classes', {
                url: '/generic-classes',
                templateUrl: 'views/generic-classes.html'
            })
        
            
            //------------------------------
            // PAGES
            //------------------------------
            
            .state ('pages', {
                url: '/pages',
                templateUrl: 'views/common.html'
            })
            
        
            //Profile
        
            // .state ('pages.profile', {
            //     url: '/profile',
            //     templateUrl: 'views/profile.html'
            // })
        
        
            //-------------------------------
        
            .state ('pages.listview', {
                url: '/listview',
                templateUrl: 'views/list-view.html'
            })
        
            .state ('pages.messages', {
                url: '/messages',
                templateUrl: 'views/messages.html'
            })
        
            .state ('pages.pricing-table', {
                url: '/pricing-table',
                templateUrl: 'views/pricing-table.html'
            })
        
            .state ('pages.contacts', {
                url: '/contacts',
                templateUrl: 'views/contacts.html'
            })
        
            .state ('pages.invoice', {
                url: '/invoice',
                templateUrl: 'views/invoice.html'
            })
                                
            .state ('pages.wall', {
                url: '/wall',
                templateUrl: 'views/wall.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/autosize/dist/autosize.min.js',
                                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
            
            //------------------------------
            // BREADCRUMB DEMO
            //------------------------------
            .state ('breadcrumb-demo', {
                url: '/breadcrumb-demo',
                templateUrl: 'views/breadcrumb-demo.html'
            })
    });
