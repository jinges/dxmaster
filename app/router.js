.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('/', {
		url: '/',
		templateUrl: 'components/index/index.html',
		controller: 'indexCtrl',
		data: {pageTitle: '首页'}
	})
	.state('login', {
		url: '/login',
		templateUrl: 'components/login/login.html',
		controller: 'loginCtrl',
		params: {'from': null, '_toParams': null},
		data: {pageTitle: '登录'}
	})
	.state('orders', {
		url: '/orders',
		templateUrl: 'components/order/orders.html',
		controller: 'orderCtrl',
		data: { pageTitle: '订单列表'}
	})
	.state('vorders', {
		url: '/vorders',
		templateUrl: 'components/order/vorders.html',
		controller: 'orderCtrl',
		data: { pageTitle: '待审订单列表'}
	})
	.state('order', {
		url: '/order/:orderId',
		templateUrl: 'components/order/order.html',
		controller: 'orderCtrl',
		data: { pageTitle: '订单详情'}
	})
	.state('supplier', {
		url: '/supplier',
		templateUrl: 'components/supplier/supplier.html',
		controller: 'supplierCtrl',
		data: { pageTitle: '供应商列表'}
	})
	.state('editsupplier', {
		url: '/editsupplier/:id',
		templateUrl: 'components/supplier/editsupplier.html',
		controller: 'supplierCtrl',
		data: { pageTitle: '编辑供应商'}
	})
	.state('store', {
		url: '/store/:sid',
		templateUrl: 'components/store/store.html',
		controller: 'storeCtrl',
		data: { pageTitle: '门店列表'}
	})
	.state('editstore', {
		url: '/editstore/:sid/:id',
		templateUrl: 'components/store/editstore.html',
		controller: 'storeCtrl',
		data: { pageTitle: '编辑门店'}
	})
	.state('channel', {
		url: '/channel',
		templateUrl: 'components/channel/channel.html',
		controller: 'channelCtrl',
		data: { pageTitle: '渠道列表'}
	})
	.state('editchannel', {
		url: '/editchannel',
		templateUrl: 'components/channel/editchannel.html',
		controller: 'channelCtrl',
		data: { pageTitle: '编辑渠道'}
	})
	.state('rebate', {
		url: '/rebate',
		templateUrl: 'components/rebate/rebate.html',
		controller: 'rebateCtrl',
		data: { pageTitle: '返佣列表'}
	})
	.state('withdrawal', {
		url: '/withdrawal',
		templateUrl: 'components/rebate/withdrawal.html',
		controller: 'rebateCtrl',
		data: { pageTitle: '提现列表'}
	})

	//代理商
	.state('splogin', {
		url: '/sp/login',
		templateUrl: 'components/sp/login/login.html',
		controller: 'sploginCtrl',
		params: {'from': null, '_toParams': null},
		data: {pageTitle: '登录'}
	})
	.state('vettingorders', {
		url: '/sp/orders',
		templateUrl: 'components/sp/vetting/orders.html',
		controller: 'vettingOrdersCtrl',
		data: { pageTitle: '审核订单列表'}
	})
	.state('vettingorder', {
		url: '/sp/order/:orderId',
		templateUrl: 'components/sp/vetting/order.html',
		controller: 'vettingOrdersCtrl',
		data: { pageTitle: '审核订单'}
	})

	.state('sporders', {
		url: '/sp/sporders',
		templateUrl: 'components/sp/order/orders.html',
		controller: 'sporderCtrl',
		data: { pageTitle: '订单管理'}
	})
	.state('sporder', {
		url: '/sp/sporder/:orderId',
		templateUrl: 'components/sp/order/order.html',
		controller: 'sporderCtrl',
		data: { pageTitle: '订单管理'}
	})

	.state('rate', {
		url: '/sp/rate',
		templateUrl: 'components/sp/rate/rate.html',
		controller: 'rateCtrl',
		data: { pageTitle: '汇率管理'}
	})

	// $urlRouterProvider.otherwise('/');
}])