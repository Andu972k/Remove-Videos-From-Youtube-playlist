//Paste the following into dev-tools when the browser is at the playlist, which should have its videos removed.
//Before the script removes all videos refresh the browser, so that the script does not click on a wrong button.
//Remove the last few vidoes manually.
setInterval( function() {
    document.querySelectorAll('#button')[31].click();
    const optionElement = document.querySelectorAll('.style-scope ytd-menu-service-item-renderer');
    for (let index = 0; index < optionElement.length; index++) {
        if (optionElement[index].textContent.includes('Remove from')) {
            document.querySelectorAll('.style-scope ytd-menu-service-item-renderer')[index].click();
        } 
    }  
}, 1000)
