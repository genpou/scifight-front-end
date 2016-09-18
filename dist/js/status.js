function setStatusSize(){
    console.log('Set Size of status icon');
    var status = document.getElementsByClassName('battle-status');
    var maxSize=0;

    for (var i=0;i<status.length-1;i++){
        if (parseFloat(getComputedStyle(status.item(i)).width) > maxSize) {
            maxSize=(parseFloat(getComputedStyle(status.item(i)).width));
            console.log('123');
        }
    }
    for (var i=0;i<status.length-1;i++){
            status.item(i).style.width=maxSize+'px';
        }       
    
}