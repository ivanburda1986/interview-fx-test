// Load server FXPairs
export async function loadServerFXPairs(){
    const response = await fetch ('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343');
    const fxPairs = await response.json();
    if(response.ok){
        console.log(fxPairs);
        return fxPairs;
    } else{
        //Propagate the error to the redux store and have an error message in the up popping up if the store receives an error
        console.log(response.status, response.statusText);
    }
}