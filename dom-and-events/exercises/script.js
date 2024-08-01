function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    
    // Put your code for the exercises here.

    //change the status report text when the liftoff button is clicked
    button.addEventListener('click', () => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    //change the background color when the mouse is over the abort mission button
    missionAbort.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'red';
    });

    //reset the background color when the mouse leaves the abort mission button
    missionAbort.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '';
    });

    //show confirmation dialog when the abort mission button is clicked
    missionAbort.addEventListener('click', () => {
        const confirmAbort = confirm('Are you sure you want to abort the mission?');
        if(confirmAbort) {
            statusReport.innerHTML = 'Mission aborted! Space shuttle returning home.';
        }
    });



}

window.addEventListener("load", init);
