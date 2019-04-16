"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Paige Mabbitt
    Date:  4.11.19   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.onload = function () {
      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();
      //calculate order cost
      calcOrder();
      //Run calc order whenever the options are changed
      orderForm.elements.model.onchange = calcOrder;
      orderForm.elements.qty.onchange = calcOrder;
      var planOptions = document.querySelectorAll('input[name="protection"]')
      for (let i = 0; i < planOptions.length; i++) {
            planOptions[i].onclick = calcOrder;

      }
}

function calcOrder() {
      //calculate initial cost
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty.options[qIndex].value;

      //initial cost = model cost x quantity
      var initialCost = mCost * quantity;
      orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

      //retrieve protection plan option button value
      var pCost = document.querySelector('input[name = "protection"]:checked').value * quantity;
      orderForm.elements.protectionCost.value = formatNumber(pCost, 2);

      //calculate subtotal
      orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);

      //calculate tax
      var salesTax = 0.05 * (initialCost + pCost);
      orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

      //calculate total
      var totalCost = initialCost + pCost + salesTax;
      orderForm.elements.totalCost.value = formatUSCurrency(totalCost, 2);

      //store order details
      orderForm.elements.modelName.value = orderForm.elements.model.options[mIndex].text;
      orderForm.elements.protectionName.value = document.querySelector('input[name ="protection"]:checked').nextSibling.nodeValue;
}

function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      })
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-us', {
            style: "currency",
            currency: "USD"
      })
}