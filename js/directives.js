materialAdmin

    .directive('homeCalendar', function($compile){
        return {
            restrict: 'A',
            scope: {
                select: '&',
                actionLinks: '=',
            },
            link: function(scope, element, attrs) {
                
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

                //Generate the Calendar
                element.fullCalendar({
                    contentHeight: 'auto',
                    header: {
                        right: 'today',
                        center: 'prev, title, next',
                        left: ''
                    },

                    theme: true, //Do not remove this as it ruin the design
                    selectable: true,
                    selectHelper: true,
                    defaultDate: new Date(),
                    editable: true,

                    //Add Events
                    events: [
                        {
                            title: 'Hangout with friends',
                            start: new Date(y, m, 1),
                            allDay: true,
                            className: 'bgm-cyan'
                        },
                    ],

                    //On Day Select
                    select: function(start, end, allDay) {
                        scope.select({
                            start: start, 
                            end: end
                        });
                    }
                });
                
                  
                //Add action links in calendar header
                element.find('.fc-toolbar').append($compile(scope.actionLinks)(scope));
            }
        }
    })

    //Change Calendar Views
    .directive('calendarView', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function(){
                    element.fullCalendar('changeView', attrs.calendarView);  
                })
            }
        }
    })