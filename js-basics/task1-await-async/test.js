function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if (dogWalked == true){
                resolve("You walk the dog!");
            }
            else{
                reject("You didn't walk the dog");
            }
        }, 1500);
    })
}

function cleanKithen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if (kitchenCleaned == true){
                resolve("You cleaned the kitchen!");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 1500);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if (kitchenCleaned == true){
                resolve("You took out all the trash!");
            }
            else{
                reject("You didn't take out thash!");
            }
        }, 1500);
    })
}

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKithenResult = await cleanKithen();
        console.log(cleanKithenResult);
    
        const trashTakenCareOf = await takeOutTrash();
        console.log(trashTakenCareOf);
    
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();