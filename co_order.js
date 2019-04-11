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
}

function calcOrder() {
      //calculate initial cost
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty.options[qIndex].value;

      //initial cost = model cost x quantity
      var initialCost = mCost * quantity;
      orderForm.elements.initialCost.value = initialCost;

      //retrieve protection plan option button value
      var pCost = document.querySelector('input[name = "protection"]:checked').value;
      orderForm.elements.protectionCost.value = pCost;

      //calculate subtotal

      //calculate tax

      //calculate total
}