'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
//var storeLocation = ['pikePlace', 'seaTac', 'seattleCenter', 'capitolHill','alki'];
var storeList = [];
var cookiesTable = document.getElementById('cookies');
function Store(storeLocation, minCustomerPH, maxCustomerPH, averageCookiesPCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomerPH = minCustomerPH;
  this.maxCustomerPH = maxCustomerPH;
  this.averageCookiesPCustomer = averageCookiesPCustomer;
  this.totalCustomerPH = [];
  this.totalSoldPH = [];
  this.totalDaySales = 0;
  storeList.push(this);
}

Store.prototype.rndmcustomerPH = function() {
  for (var i = 0; i < hours.length; i++){
    this.totalCustomerPH.push(Math.floor(Math.random() * (this.maxCustomerPH - this.minCustomerPH+1)) + this.minCustomerPH);
  }
};
Store.prototype.calcSalesPH = function(){
  this.rndmcustomerPH();
  for (var i = 0; i < this.totalCustomerPH.length; i++){
    var hourlySales = this.totalCustomerPH[i] * Math.ceil(this.averageCookiesPCustomer);
    this.totalSoldPH.push(hourlySales);
    this.totalDaySales += hourlySales;
  }
};
Store.prototype.calcTotalDaySales = function(){
  this.calcSalesPH();
  for ( var k = 0; k < this.totalSoldPH.length; k++){
    this.totalDaySales += this.totalSoldPH[k];
    //console.log(this.totalCustomerPH[k], 'customers from inside loop' );
  }
};
Store.prototype.render = function(){
  this.calcTotalDaySales();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement ('td');


  tdEl.textContent=this.storeLocation;
  trEl.appendChild(tdEl);
  for( var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalSoldPH[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDaySales;
  trEl.appendChild(tdEl);
  cookiesTable.append(trEl);


};

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = 'Store Location';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total Day Sales';
  trEl.appendChild(thEl);

  cookiesTable.append(trEl);

}
function cookieRows() {
  makeHeaderRow();
  for (var i = 0; i< storeList.length; i++){
    storeList[i].render();
  }
}



new Store('Pike Place',23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


cookieRows();



/*var ulEl = document.getElementById('pikep');
  for (var i = 0; i < this.totalSoldPH.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + Math.floor(this.totalSoldPH[i]) + ' cookies';
    ulEl.appendChild(liEl);

  }
  //this.calcTotalDaySales();
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDaySales;
	ulEl.appendChild(liEl);
*/
/*
function makeHeaderRow(){

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild('thEl');

  thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Tail Size';
  trEl.appendChild(thEl);

  catTable.append(trEl);
}
function cookieRows()
//makeHeaderRow() /// here or below
{	for (var i = 0; i< storeList.length; i++){
  storeList[i].render();
}
}
//makeHeaderRow()
cookieRows();


var storeSeaTac = {
  minCustomerPH: 3,
  maxCustomerPH: 24,
  averageCookiesPCustomer: 1.2,
  totalCustomerPH :[],
  totalSoldPH:[],
  totalDaySales:0,


  rndmcustomerPH: function() {
    for (var i = 0; i < hours.length; i++){
      this.totalCustomerPH.push(Math.floor(Math.random() * (this.maxCustomerPH - this.minCustomerPH+1)) + this.minCustomerPH);
      console.log(i);
    }
  },

  calcSalesPH: function(){
    this.rndmcustomerPH();
    console.log('cutomers ' + this.totalCustomerPH);
    for (var j = 0; j < this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j] * this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    console.log('sales ' + this.totalSoldPH);
    for ( var k = 0; k < this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];

    }
  },
  render: function(){
    var ulEl = document.getElementById('seataca');
    for (var l = 0; l < this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l]) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + Math.round(this.totalDaySales);
    ulEl.appendChild(liEl);
  }
};
storeSeaTac.calcTotalDaySales();
console.log(storeSeaTac.totalDaySales);
storeSeaTac.render();

var storeSeattleCenter = {
  minCustomerPH: 11,
  maxCustomerPH: 38,
  averageCookiesPCustomer: 3.7,
  totalCustomerPH :[],
  totalSoldPH:[],
  totalDaySales:0,


  rndmcustomerPH: function() {
    for (var i = 0; i < hours.length; i++){
      this.totalCustomerPH.push(Math.floor(Math.random() * (this.maxCustomerPH - this.minCustomerPH+1)) + this.minCustomerPH);
      console.log(i);
    }
  },

  calcSalesPH: function(){
    this.rndmcustomerPH();
    console.log(this.totalCustomerPH);
    for (var j = 0; j < this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j] * this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    for ( var k = 0; k < this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];

    }
  },
  render: function(){
    var ulEl = document.getElementById('seattlec');
    for (var l = 0; l < this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l]) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + Math.round(this.totalDaySales);
    ulEl.appendChild(liEl);
  }
};

storeSeattleCenter.calcTotalDaySales();
console.log(storeSeattleCenter.totalDaySales);
storeSeattleCenter.render();

var storeCapitolHill = {
  minCustomerPH: 20,
  maxCustomerPH: 38,
  averageCookiesPCustomer: 3.7,
  totalCustomerPH :[],
  totalSoldPH:[],
  totalDaySales:0,


  rndmcustomerPH: function() {
    for (var i = 0; i < hours.length; i++){
      this.totalCustomerPH.push(Math.floor(Math.random() * (this.maxCustomerPH - this.minCustomerPH+1)) + this.minCustomerPH);
      console.log(i);
    }
  },

  calcSalesPH: function(){
    this.rndmcustomerPH();
    console.log(this.totalCustomerPH);
    for (var j = 0; j < this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j] * this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    for ( var k = 0; k < this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];
    }
  },

  render: function(){
    var ulEl = document.getElementById('capitolh');
    for (var l = 0; l < this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l]) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + Math.round(this.totalDaySales);
    ulEl.appendChild(liEl);
  }
};
storeCapitolHill.calcTotalDaySales();
console.log(storeCapitolHill.totalDaySales);
storeCapitolHill.render();



var storeAlki = {
  minCustomerPH: 2,
  maxCustomerPH: 16,
  averageCookiesPCustomer: 4.6,
  totalCustomerPH :[],
  totalSoldPH:[],
  totalDaySales:0,


  rndmcustomerPH: function() {
    for (var i = 0; i < hours.length; i++){
      this.totalCustomerPH.push(Math.floor(Math.random() * (this.maxCustomerPH - this.minCustomerPH+1)) + this.minCustomerPH);
      console.log(i);
    }
  },

  calcSalesPH: function(){
    this.rndmcustomerPH();
    console.log(this.totalCustomerPH);
    for (var j = 0; j < this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j] * this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    for ( var k = 0; k < this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];
    }
  },

  render: function(){
    var ulEl = document.getElementById('alki');
    for (var l = 0; l < this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l]) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + Math.round(this.totalDaySales);
    ulEl.appendChild(liEl);
  }
};
storeAlki.calcTotalDaySales();
console.log(storeAlki.totalDaySales);
storeAlki.render();
*/
