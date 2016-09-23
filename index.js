function load(){
	var text = document.findViewById("logo")

	text.onkeyup = function(){
	var callcount = 0;
	    var action = function(){
	        alert('changed');
	    }
	    var delayAction = function(action, time){
	        var expectcallcount = callcount;
	        var delay = function(){
	            if(callcount == expectcallcount){
	                action();
	            }
	        }
	        setTimeout(delay, time);
	    }
	    return function(eventtrigger){
	        ++callcount;
	        delayAction(action, 1200);
	    }
	}();
}