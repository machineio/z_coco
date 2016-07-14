materialAdmin
	
	.controller('homeCtrl',['$scope', '$window', '$filter', '$sce', 'ngTableParams', 'tableService', function($scope, $window, $filter, $sce, ngTableParams, tableService){
		var data = tableService.data;
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
	}]);