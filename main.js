const checkboxes = document.querySelectorAll('.container input[type="checkbox"]');

let lastChecked;

// function that performs the operation
function handleCheck(e) {

    // if they had the shift key down and 
    //they are all checking.
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween!');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));