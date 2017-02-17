(function(){
	"use strict";
	
	window.onload = function(){
		$("Comparison").style.display = "none";
		
		$("backButton").onclick = switchViews;
		$("CompareButton").onclick = switchViews;
		
	};
	
	function switchViews(){
		
		if($("options").style.display != "none"){
			$("options").style.display = "none";
			$("Comparison").style.display = "block";
		} else {
			$("options").style.display = "block";
			$("Comparison").style.display = "none";
		}
	}
	
	// appends a new tag to a DOM object based off of its id. User can choose an elementTag
	// inner text, class, and id for the tag they are appending. 
	function appendAnObject(makeParent, elementTag, innerText, classTag, idTag){
		var tag = document.createElement(elementTag);
		tag.innerHTML = innerText;
		if(classTag){
			tag.classList.add(classTag);
		}
		if(idTag){
			tag.id = idTag;
		}
		makeParent.appendChild(tag);
		return tag;
	}
	
	// returns an element by the id given
	function $(id){
		return document.getElementById(id);
	}
	
	// sends a XML get request based on the url and parameters given
	// attaches a function to the onload function
	function sendGetRequest(functionName, url, params){
		var request  = new XMLHttpRequest();
		request.onload = functionName;
		request.open("GET", url + params, true);
		request.send();
	}
})();