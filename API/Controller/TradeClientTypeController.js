var convert = require('xml-js');
var fetch = require('node-fetch');
const util = require('util');     

exports.clientTypeHistory = function (err, res) {
    let url = 'http://www.tsetmc.com/tsev2/data/clienttype.aspx?i=63133680859553150';
    var x = '';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch( url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => process(contents,res))
        .catch(console.log("Can’t acces " + url + " response. Blocked browser?"))

    var process = function (returnData) {
        // var document = require('html-element').document;
        // var el = document.createElement('html');
        // el.innerHTML = returnData;
       

        // var t = el.getElementsByTagName("table")[0];
       try {
        //console.log(returnData);
        var ss = String(returnData,res);
        var arr = ss.split(';');
       }
       catch(error
       ){console.log(error);}

        var clientTypeArray = [];
        var detailsArr = [];

        for (let index = 0; index < 20; index++) {
            const element =String(arr[index]);
            if(element != 'undefined')
            {
             
            detailsArr = element.split(',');
            console.log(JSON.stringify(detailsArr));
            clientTypeArray.push({'date': detailsArr[0],'personBuyCount': detailsArr[1],'legalBuyCount': detailsArr[2],'personSellCount': detailsArr[3],'legalSellCount': detailsArr[4],'personBuyVolume': detailsArr[5],'legalBuyVolume': detailsArr[6],'personSellVolume': detailsArr[7],'legalSellVolume' : detailsArr[8]});
            }

        }

      console.log(clientTypeArray);
      res.json( clientTypeArray);


    }
   
   
};