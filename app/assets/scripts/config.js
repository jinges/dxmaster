
var HOST =  'http://121.43.178.199:8080/dx';//'';//
var openId = 'xxxxxxxx';

var api = {
	dates:  HOST+'/wx/getOrderDate.do?openId='+ openId, 
	cities: HOST+'/wx/getCities.do?openId='+ openId,
	areas: HOST+'/wx/getAreas.do?openId='+ openId,
	storeList: HOST+'/wx/getStoreList.do?openId='+ openId,
	sendCode: HOST+'/wx/sendValiCade.do?openId='+ openId,
	valiMobile: HOST+'/wx/valiMobile.do?openId='+ openId,
    order: HOST+'/wx/editOrder.do?openId='+ openId,
    myOrder: HOST+'/wx/getMyOrderList.do?openId='+ openId,
    cancelOrder: HOST+'/wx/cancelOrder.do?openId='+ openId
}
