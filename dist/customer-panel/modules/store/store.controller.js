angular.module("storeModule",["storeServiceModule"]).controller("storeCtrl",["$scope",function(a){a.sorting={sorting:"ALL"},a.setSortkey=function(e,r){r.array.length&&(a.sorting.sorting=e)},a.categoryAlphabet={ALL:{enable:!1,array:[]},"#":{enable:!1,array:[]},A:{enable:!1,array:[]},B:{enable:!1,array:[]},C:{enable:!1,array:[]},D:{enable:!1,array:[]},E:{enable:!1,array:[]},F:{enable:!1,array:[]},G:{enable:!1,array:[]},H:{enable:!1,array:[]},I:{enable:!1,array:[]},J:{enable:!1,array:[]},K:{enable:!1,array:[]},L:{enable:!1,array:[]},M:{enable:!1,array:[]},N:{enable:!1,array:[]},O:{enable:!1,array:[]},P:{enable:!1,array:[]},Q:{enable:!1,array:[]},R:{enable:!1,array:[]},S:{enable:!1,array:[]},T:{enable:!1,array:[]},U:{enable:!1,array:[]},V:{enable:!1,array:[]},W:{enable:!1,array:[]},X:{enable:!1,array:[]},Y:{enable:!1,array:[]},Z:{enable:!1,array:[]}},a.categories=[{name:"Flipkart",url:"/flipkart-coupons",count:12},{name:"SnapDeal",url:"/Snapdeal-coupons",count:12},{name:"Amazon",url:"/amazon-coupons",count:13},{name:"99Stores",url:"/99store-coupons",count:40},{name:"33Store Name",url:"/99store-coupons",count:40},{name:"232 Deals",url:"/99store-coupons",count:40}],a.categoryAlphabet.ALL.array=a.categories,angular.forEach(a.categories,function(e){parseInt(e.name.charAt(0))?-1==a.categoryAlphabet["#"].array.indexOf(e)&&(a.categoryAlphabet["#"].enable=!0,a.categoryAlphabet["#"].array.push(e)):-1==a.categoryAlphabet[e.name.charAt(0)].array.indexOf(e)&&(a.categoryAlphabet[e.name.charAt(0)].enable=!0,a.categoryAlphabet[e.name.charAt(0)].array.push(e))})}]);