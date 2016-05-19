var isApp = false;

if (parent.isApp && parent.isApp == true) {
	/* RECEIVING MSG WITHIN IFRAME */
    function listener(event) {
        document.write (event.data);
        console.log(JSON.parse(event.data));
    }

    if (window.addEventListener){       
      addEventListener("message", listener, false)      
    } else {        
      attachEvent("onmessage", listener)        
    }
}