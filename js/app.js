'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
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
    for (var j=0; j< this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j]*this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    for ( var k=0; k< this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];
    }
  },

  render: function(){
    var ulEl = document.getElementById('pikep');
    for (var l = 0; l<this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l]) + ' cookies';
      ulEl.appendChild(liEl);

    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + Math.round(this.totalDaySales);
    ulEl.appendChild(liEl);
  }
};
storePike.calcTotalDaySales();
console.log(storePike.totalDaySales);
storePike.render();



var storeSeaTac = {
  minCustomerPH: 3,
  maxCustomerPH: 24,
  averageCookiesPCustomer: 1.2,
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
    console.log('cutomers ' + this.totalCustomerPH);
    for (var j=0; j< this.totalCustomerPH.length; j++){
      this.totalSoldPH.push(this.totalCustomerPH[j]*this.averageCookiesPCustomer);
    }
  },
  calcTotalDaySales: function(){
    this.calcSalesPH();
    console.log('sales ' + this.totalSoldPH)
    for ( var k=0; k< this.totalSoldPH.length; k++){
      this.totalDaySales += this.totalSoldPH[k];

    }
  },
  render: function(){
    var ulEl = document.getElementById('seataca');
    for (var l = 0; l<this.totalSoldPH.length; l++){
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
  },
  render: function(){
    var ulEl = document.getElementById('seattlec');
    for (var l = 0; l<this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l])  + ' cookies';
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
  },

  render: function(){
    var ulEl = document.getElementById('capitolh');
    for (var l = 0; l<this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l])  + ' cookies';
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
  },

  render: function(){
    var ulEl = document.getElementById('alki');
    for (var l = 0; l<this.totalSoldPH.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + Math.round(this.totalSoldPH[l])  + ' cookies';
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
