// Q.1 Write a function that makes a fetch request to get inventory.json.

const fetch = require('node-fetch');

async function fetchFile(filePath){
    let data = await  fetch(filePath)
    data = await data.json()
    console.log(data)
    
}
// start the http server on port 8080
// fetchFile("http://127.0.0.1:8080/inventory.json")


const data = [{
    price: {
        currency: "USD",
        denomination: {
            dollar: 28,
            cents: 18
        }
    },
},
{
    price: {
        currency: "AUSD",
        denomination: {
            dollar: 42,
            cents: 12
        }
    }
}, {
    price: {
        currency: "INR",
        denomination: {
            rupee: 35,
            paise: 33
        }
    }
},{
    price: {
        currency: "STERLING POUND",
        denomination: {
            pound: 12,
        }
    }
}];


// Q.2 
//     Filter data having main denomination (dollar, pound, rupee) less than 30.
function lessPriceData(){
    let newData = data.reduce((curr, pre) => {
        if(pre['price']['denomination']['dollar']<30 ||
        pre['price']['denomination']['pound']<30 || 
        pre['price']['denomination']['rupee']<30){
            curr.push(pre['price'])
        }
        return curr
    },[])
    console.log(newData)
}
// lessPriceData()



function lessPriceDataUsingFilter(){
    let newData = data.filter((ele) => {
        if(ele['price']['denomination']['dollar']<30 ||
         ele['price']['denomination']['pound']<30 || 
         ele['price']['denomination']['rupee']<30){
            return ele['price']
        }  
    })
    console.log(newData)
}

// lessPriceDataUsingFilter()



// Q3. 
//     use Map to get all the denominations from each data.

function fetDenomination(){
    let denomination = data.map((ele) => ele['price']['denomination'])
    console.log(denomination)
}

// fetDenomination()



// Q4. 
//     Copy data into another object.
//     Make sure no references of data is copied.

function copyWithoutRefrence(){
    let clonedata = JSON.parse(JSON.stringify(data))
    console.log(clonedata)
}

// copyWithoutRefrence()



// Q5.
//     use Map & also reduce to get just currency and denomination from each data.

function getCurrencyUsingReduce(){
    let currAndDeno = data.reduce((curr, pre) => {
        curr.push(pre['price'])
        return curr;
    },[])

    console.log(currAndDeno)
}

// getCurrencyUsingReduce()


function getCurrencyUsingMap(){
    let DenoAndCurr = data.map((ele) => ele['price'])
    console.log(DenoAndCurr)
}

// getCurrencyUsingMap()
