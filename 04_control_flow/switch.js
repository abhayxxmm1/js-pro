// बोहत ज्यादा check करणा होता है तो if else लिखते लिखते परेशान हो जाते है  


/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */


const month = "march"

switch (month) {
    case "jan":
        console.log("january");
        
        break; // control flow ko break kar deta hai
    case "feb":
        console.log("feb");
        
        break;
    case "march":
        console.log("march");
        
        break; // jha pe bhi case match ho hogaya sara ka sara code run karta hai except default
    case "april":
        console.log("april");
        
        break;

    default:
        console.log("default case match");
        
        break;
}