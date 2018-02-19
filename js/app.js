'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var storeList = [];
var allStoreHourlySales =[];
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
  // i can test within constructor this.totalCustomerPH();
  //this.totalSoldPH();
  //console.log('NEw cookie stand create for ' +this.storeLocation);
  //this.totalSoldPH[0]  getting to specific item in the array
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
/*Store.prototype.calcTotalDaySales = function(){
  this.calcSalesPH();
  for ( var i = 0; i < this.totalSoldPH.length; i++){
    this.totalDaySales += this.totalSoldPH[i];
    //console.log(this.totalCustomerPH[k], 'customers from inside loop' );
  }
};  */

Store.prototype.render = function(){
  this.calcSalesPH();
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
  //cookiesTable.append(trEl);
  var totalsRow = document.getElementById('totals-row');

document.querySelector("table tr:first-child");

  if (totalsRow != null) {
    cookiesTable.insertBefore(trEl, totalsRow);
    allStoreHourlySales = [];
    cookiesTable.removeChild(totalsRow);
    footerRow();
  } else {
    cookiesTable.append(trEl);
  }
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
  for (var i = 0; i < storeList.length; i++){
    storeList[i].render();
  }
}


function footerRow (){
  var grandTotal = 0;
  var totalsRow = document.createElement('tr');
  totalsRow.id = 'totals-row';
  var firstCol = document.createElement('td');
  firstCol.textContent = 'Totals';
  totalsRow.appendChild(firstCol);

  for (var hour = 0; hour < hours.length; hour++){
    var hourlyTotal = 0;
    for (var storeNo = 0; storeNo < storeList.length; storeNo++){
      hourlyTotal += storeList[storeNo].totalSoldPH[hour];
    }
    grandTotal += hourlyTotal;
    var middleCol = document.createElement('td');
    middleCol.textContent = hourlyTotal;
    allStoreHourlySales.push(hourlyTotal);
    totalsRow.appendChild(middleCol);
    cookiesTable.appendChild(totalsRow);
  }
  var lastCol = document.createElement('td');
  lastCol.textContent = grandTotal;
  totalsRow.appendChild(lastCol);

  /*for (var k = 0; k <storeList.length; k++){
    
    // var tdEl = document.createElement('td');
    // tdEl.textContent = Store.allStoreHourlySales[i];
    // trEl.appendChild(tdEl);
    // Store.allStoreHourlySales[i].render();
    
  }
*/
}

function main() {
  new Store('Pike Place',23, 65, 6.3);
  new Store('SeaTac Airport', 3, 24, 1.2);
  new Store('Seattle Center', 11, 38, 3.7);
  new Store('Capitol Hill', 20, 38, 2.3);
  new Store('Alki', 2, 16, 4.6);
  
  
  cookieRows();
  
  var storeDataForm = document.getElementById('storeData-form');

  footerRow();
  storeDataForm.addEventListener('submit', handleDataSubmit);
}



function handleDataSubmit(event){

  event.preventDefault();
  var where = event.target.where.value; //setting values from input
  var min = parseInt(event.target.min.value);//convert string to numbers
  var max = parseInt(event.target.max.value);
  var average = Number(event.target.average.value);

  if (!where || !min || !max || !average){// if input is empty then alert
    return alert('Empty fields!');
  }


  /* CREATE FUNCTION FOR ADDING TO TABLE

  function newElement( elementTYpe, content, parent){
    var newEl = document.createElement(elementType);
    newEl.assign
    newEl.textContent = content;
    parent.appendChild.(newEl);

  }

  call after row creating
  /*for (var i = 0; i< storeList.length, i++){
		if (where === storeList[i].storeLocation){

			//reassign new values
			storeList[i].minCustomerPH.= min;
			storeList[i].maxCustomerPH.= max;
			storeList[i].averageCustomerPH.= average;



			storeList[i].totalCustomerPH= [];
			storeList[i].totalDaySales= 0;
			storeList[i].totalSoldPH=[];


			storeList[i].calcookiesperhour();
			clearForm();
			storeList[i].renderTable;
			return;


		}
	}
	clear
Store.renderTable = function(){
	Store.theTable.innerHTML=' ';


}

*/
//otherwise:
  event.target.reset(); //clean old values from min,max, ave and location field
  var newStore = new Store(where, min, max, average);//create new store
  newStore.render();//add new store to the table
  
}
main();




















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
