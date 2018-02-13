'use strict';

var hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var storePike = {
  minCustomerPH: 23,
  maxCustomerPH: 65,
  averageCookiesPCustomer: 6.3,
  totalCustomerPH :[],
  totalSoldPH:[],
  totalDaySales:0,
  
	
  rndmcustomerPH: function() {
    for (var i=0; i< hours.length; i++){
      this.totalCustomerPH.push(Math.floor(Math.random() * (this.maxCustomerPH - this.minCustomerPH+1)) + this.minCustomerPH);
      console.log(i);
    }
  },

  calcSalesPH: function(){
    this.rndmcustomerPH();
    console.log(this.totalCustomerPH);
    for (var j=0; j< this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j]*this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    for ( var k=0; k< this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];
     
    }
  }
};
storePike.calcTotalDaySales();
console.log(storePike.totalDaySales);



/*var storeSeaTac = {
    minCustPH: 3,
    maxCustPH: 24,
    avrgCookiesPCust: 1.2,
};

var storeSeattleCenter = {
    minCustPH: 11,
    maxCustPH: 38,
    avrgCookiesPCust: 3.7,
}

var storeCapitolHill = {
    minCustPH: 20,
    maxCustPH: 38,
    avrgCookiesPCust: 3.7,
};

var storeAlki = {
    minCustPH: 2,
    maxCustPH: 16,
    avrgCookiesPCust: 4.6,
}*/