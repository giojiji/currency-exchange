
function calculate(){
    var GELUSD = 2.8956
    var USDGEL = (1 / GELUSD).toFixed(4)
    var GELEUR = 2.8950
    var EURGEL = (1 / GELEUR).toFixed(4)
    var GELGBR = 3.3482
    var GBRGEL = (1 / GELGBR).toFixed(4)
    var USDEUR = 1.0259
    var EURUSD = (1 / USDEUR).toFixed(4)
    var USDGBR = 1.1920
    var GBRUSD = (1 / USDGBR).toFixed(4)
    var EURGBR = 1.2053
    var GBREUR = (1 / EURGBR).toFixed(4)
    
    var list = document.getElementById('list');
    var curr1 = list.options[list.selectedIndex];
    var list1 = document.getElementById('list1');
    var curr2 = list1.options[list1.selectedIndex];
    var value1 = document.getElementById("value1").value
    var value2 = document.getElementById("value2").value
    
    // GEL
    if(curr1.value == "GEL" && curr2.value == "GEL"){
    document.getElementById("value2").value = value1 * 1
    document.getElementById("test").innerHTML = "1 GEL = " + 1 + " GEL"
    document.getElementById("test2").innerHTML = "გთხოვთ აირჩიოთ განსხვავებული ვალუტა"}
    if(curr1.value == "GEL" && curr2.value == "USD"){
    document.getElementById("value2").value = (value1 / GELUSD).toFixed(4)
    document.getElementById("test").innerHTML = "1 GEL = " + USDGEL + " USD"
    document.getElementById("test2").innerHTML = "1 USD = " + GELUSD + " GEL"}
    if(curr1.value == "GEL" && curr2.value == "EUR"){
    document.getElementById("value2").value = (value1 / GELEUR).toFixed(4)
    document.getElementById("test").innerHTML = "1 GEL = " + EURGEL + " EUR"
    document.getElementById("test2").innerHTML = "1 EUR = " + GELEUR + " GEL"}
    if (curr1.value == "GEL" && curr2.value == "GBR"){
    document.getElementById("value2").value = (value1 / GELGBR).toFixed(4)
    document.getElementById("test").innerHTML = "1 GEL = " + GBRGEL + " GBR"
    document.getElementById("test2").innerHTML = "1 GBR = " + GELGBR + " GEL"}
    
    
    
    
    // USD
    if (curr1.value == "USD" && curr2.value == "USD"){
    document.getElementById("value2").value = value1 * 1
    document.getElementById("test").innerHTML = "1 USD = " + 1 + " USD"
    document.getElementById("test2").innerHTML = "გთხოვთ აირჩიოთ განსხვავებული ვალუტა"}
    if(curr1.value == "USD" && curr2.value == "GEL"){
    document.getElementById("value2").value = (value1 * GELUSD).toFixed(4)
    document.getElementById("test").innerHTML = "1 USD = " + GELUSD + " GEL"
    document.getElementById("test2").innerHTML = "1 GEL = " + USDGEL + " USD"}
    if(curr1.value == "USD" && curr2.value == "EUR"){
    document.getElementById("value2").value = (value1 / USDEUR).toFixed(4)
    document.getElementById("test2").innerHTML = "1 EUR = " + USDEUR + " USD"
    document.getElementById("test").innerHTML = "1 USD = " + EURUSD + " EUR"}
    if (curr1.value == "USD" && curr2.value == "GBR"){
    document.getElementById("value2").value = (value1 / USDGBR).toFixed(4)
    document.getElementById("test").innerHTML = "1 USD = " + GBRUSD + " GBR"
    document.getElementById("test2").innerHTML = "1 GBR = " + USDGBR + " USD"
    }
    
    
    
    
    // EUR
    if (curr1.value == "EUR" && curr2.value == "EUR"){
    document.getElementById("value2").value = value1 * 1
    document.getElementById("test").innerHTML = "1 EUR = " + 1 + " EUR"
    document.getElementById("test2").innerHTML = "გთხოვთ აირჩიოთ განსხვავებული ვალუტა"}
    if(curr1.value == "EUR" && curr2.value == "GEL"){
    document.getElementById("value2").value = (value1 * GELEUR).toFixed(4)
    document.getElementById("test").innerHTML = "1 EUR = " + GELEUR + " GEL"
    document.getElementById("test2").innerHTML = "1 GEL = " + EURGEL + " EUR"}
    if(curr1.value == "EUR" && curr2.value == "USD"){
    document.getElementById("value2").value = (value1 * USDEUR).toFixed(4)
    document.getElementById("test").innerHTML = "1 EUR = " + USDEUR + " USD"
    document.getElementById("test2").innerHTML = "1 USD = " + EURUSD + " EUR"}
    if (curr1.value == "EUR" && curr2.value == "GBR"){
    document.getElementById("value2").value = (value1 / EURGBR).toFixed(4)
    document.getElementById("test").innerHTML = "1 EUR = " + GBREUR + " GBR"
    document.getElementById("test2").innerHTML = "1 GBR = " + EURGBR + " EUR"
    }
    
    
    
    
    // GBR
    if (curr1.value == "GBR" && curr2.value == "GBR"){
    document.getElementById("value2").value = value1 * 1
    document.getElementById("test").innerHTML = "1 GBR = " + 1 + " GBR"
    document.getElementById("test2").innerHTML = "გთხოვთ აირჩიოთ განსხვავებული ვალუტა"}
    if(curr1.value == "GBR" && curr2.value == "GEL"){
    document.getElementById("value2").value = (value1 * GELGBR).toFixed(4)
    document.getElementById("test").innerHTML = "1 GBR = " + GELGBR + " GEL"
    document.getElementById("test2").innerHTML = "1 GEL = " + GBRGEL + " GBR"}
    if(curr1.value == "GBR" && curr2.value == "USD"){
    document.getElementById("value2").value = (value1 * USDGBR).toFixed(4)
    document.getElementById("test").innerHTML = "1 GBR = " + USDGBR + " USD"
    document.getElementById("test2").innerHTML = "1 USD = " + GBRUSD + " GBR"}
    if (curr1.value == "GBR" && curr2.value == "EUR"){
    document.getElementById("value2").value = (value1 * EURGBR).toFixed(4)
    document.getElementById("test").innerHTML = "1 GBR = " + EURGBR + " EUR"
    document.getElementById("test2").innerHTML = "1 EUR = " + GBREUR + " GBR"}
    }