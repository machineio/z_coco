materialAdmin

    .controller('homeCtrl',['$scope', '$window', '$filter', '$sce', 'ngTableParams', 'tableService', function($scope, $window, $filter, $sce, ngTableParams, tableService){
        var data = tableService.data;

        var ctx = document.getElementById("myChart");
        var ctx2 = document.getElementById("myChart2");
        
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Campaign 1", "Campaign 2", "Campaign 3"],
                datasets: [
                    {
                        label: 'Outgoing',
                        data: [100, 20000, 3000],
                        backgroundColor: '#e6e6e6',
                        borderColor: '#FFFFFF',
                        borderWidth: 1
                    },
                    {
                        label: 'Sended',
                        data: [23000, 2500, 5000],
                        backgroundColor: '#8BC34A',
                        borderColor: '#4CAF50',
                        borderWidth: 1
                    },
                    {
                        label: 'Dropped',
                        data: [500, 4, 0],
                        backgroundColor: '#F44336',
                        borderColor: '#FFFFFF',
                        borderWidth: 1
                    }
                ],
            },
            options: {
                // scales: {
                //     yAxes: [{
                //         ticks: {
                //             beginAtZero: false
                //         }
                //     }]
                // }
            }
        });

        var myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ["Campaign 1", "Campaign 2", "Campaign 3"],
                datasets: [
                    {
                        label: 'Outgoing',
                        data: [100, 20000, 3000],
                        backgroundColor: '#e6e6e6',
                        borderColor: '#FFFFFF',
                        borderWidth: 1
                    },
                    {
                        label: 'Sended',
                        data: [23000, 2500, 5000],
                        backgroundColor: '#8BC34A',
                        borderColor: '#4CAF50',
                        borderWidth: 1
                    },
                    {
                        label: 'Dropped',
                        data: [500, 4, 0],
                        backgroundColor: '#F44336',
                        borderColor: '#FFFFFF',
                        borderWidth: 1
                    }
                ],
            },
            options: {
                // scales: {
                //     yAxes: [{
                //         ticks: {
                //             beginAtZero: false
                //         }
                //     }]
                // }
            }
        });
        $scope.onSelect = function(argStart, argEnd) {            
            var modalInstance  = $modal.open({
                templateUrl: 'addEvent.html',
                controller: 'addeventCtrl',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    calendarData: function() {
                        var x = [argStart, argEnd];
                        return x;
                    }
                }
            });
        }
        // $scope.searchText = '';
        $scope.tabs = [
            {
                title:'To-Do',
                src: 'template/home/toDoTab.html',
                type: 'todo',
                filters: [
                    'All',
                    'Now',
                    'Overdue',
                    'Done'
                ]
            },
            {
                title:'Leads',
                src: 'template/home/leadsTab.html',
                type: 'leads',
                filters: [
                    'All',
                    'Active',
                    'Delete'
                ]
            },
            {
                title:'Campaigns',
                src: 'template/home/campaignsTab.html',
                type: 'campaigns',
                filters: [
                    'Connected',
                    'All',
                    'Inbound',
                    'Outbound',
                ]
            },
            {
                title:'Calendar',
                src: 'template/home/calendarTab.html',
                type: 'calendar',
                filters: [
                    'Connected',
                    'All',
                    'Inbound',
                    'Outbound',
                ]
            },
            // },
            // {
            //     title:'Settings',
            //     content:'Praesent turpis. Phasellus magna. Fusce vulputate eleifend sapien. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
            // }
        ];

        $scope.runContent =function(type){
            switch(type){
                case 'todo':
                    console.log('YEAHHHHHH!!!!',type);
                    break;

                case 'leads':
                    console.log('YEAHHHHHH!!!!',type);
                    break;

                case 'campaigns':
                    console.log('YEAHHHHHH!!!!',type);
                    break;

                default:
                    console.log('SHIIIIIIIIIIIIITTTTTTTTTTTT!!!!!!!');

            }
        };

        $scope.tableSorting = new ngTableParams({
            page: 1,            // show first page
            count: 10,           // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
    
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        })
    }])