.service('paths',function () {
	var baseUrl = '';//http://fxswap.cn'; //'';//'http://192.168.31.211:8080';//
	var urls = {
		login: '/mp/login.do',
		order: '/mp/queryOrderByPage.do',
		editOrder: '/mp/queryOrderByPage.do',

		supplier: '/mp/getSupplerList.do',
		updateSupplierStatus: '/mp/updateSupplerStatus.do',
		supplierinf: '/mp/getSupplerInfo.do',
		addSupplier: '/mp/addSuppler.do',
		editSupplier: '/mp/editSuppler.do',

		store: '/mp/getStoreList.do',
		updateStoreStatus: '/mp/updateStoreStatus.do',
		storeinf: '/mp/getStoreInfo.do',
		editStore: '/mp/editStore.do',

		channel: '/mp/getChannels.do',
		editChannel: '/mp/addChannel.do',

		withdrawalList:'/mp/withdrawList.do',
		withdrawal: '/mp/withdraw.do',

		city: '/common/getCities.do',
		area: '/common/getAreas.do',


		spLogin: '/sp/login.do',
		vettingOrders: '/sp/queryOrderByPage.do',
		vettingOrder: '/sp/queryOrderByPage.do',
		vetting: '/sp/reviewedOrder.do',
		spOrders: '/sp/queryOrderByPage.do',
		spOrder: '/sp/queryOrderByPage.do',
		upload: '/sp/uploadRate.do',
		download: '/sp/downloadTemplat.do'
	}
	for (var i in urls) {
		this[i] = baseUrl+urls[i];
	}
})