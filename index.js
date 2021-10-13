// Code your solution in this file!
function distanceFromHqInBlocks(street1) {
    let hq = 42;
   if (street1 > hq) {
   return street1 - hq;
    } else {
        return hq - street1;
    }
}
// distanceFromHqInBlocks(43);

function distanceFromHqInFeet(street2) {
    // distanceFromHqInBlocks(street2);
    let difference = distanceFromHqInBlocks(street2);
    let distance = 264; 
    return difference * distance;
}

function distanceTravelledInFeet(street, hq) {
    if (street > hq) {
        return (street - hq)*264;
    } else {
        return (hq - street)*264;
    }
}

function calculatesFarePrice(street3, street4) {

    
    if (Math.abs(street3 - street4) * 264 <= 400) {
    return 0;}
     else if (Math.abs(street3 - street4) * 264< 1600) {
    return Math.abs((street3 - street4) * 264 - 400) * .02
    }

    else if (Math.abs(street3 - street4) * 264 <= 2400) {
        return 25
    }
    else if ((Math.abs(street3 - street4) * 264 - 400) >= 2100) {
        return 'cannot travel that far'
        }
    }