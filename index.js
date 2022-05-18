// Code your solution in this file!


function distanceFromHqInBlocks(pickUp) {
    if (pickUp>42) {
        return (pickUp-42)
    } else if (42>pickUp) {
        return (42-pickUp)
    }
}
    

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start-destination)*264)
    } else if (destination > start) {
        return ((destination - start) * 264)
    }
}

function calculatesFarePrice(start, destination) {
const distInFeet = distanceTravelledInFeet(start, destination)
    if (distInFeet <= 400) {
        return 0
     } else if (distInFeet > 400 && distInFeet <= 2000) {
         return .02 * (distInFeet - 400) 
    } else if (distInFeet > 2000 && distInFeet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
       

      


}

// function calculatesFarePrice(start, destination) {
//     if (distanceTravelledInFeet(start, destination) <= 400) {
//         return 0
//     } else if (distanceTravelledInFeet(start, destination) >= 401 && distanceTravelledInFeet(start, destination) <= 2000) {
//         return 2*
//     }