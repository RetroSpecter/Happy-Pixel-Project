(function(){
	"use strict";
	
	window.onload = function(){
		$("Comparison").style.display = "none";
		
		$("backButton").onclick = switchViews;
		$("CompareButton").onclick = switchViews;
		
		var addButtons = document.querySelectorAll(".addToComparison");
		for(var i = 0; i < addButtons.length; i++){
			addButtons[i].onclick = addChoice;
		}
	};
	
	function addChoice(){
		var comparisonBars = document.querySelectorAll(".choice");
		for(var i = 0; i < comparisonBars.length;i++){
			if(comparisonBars[i].querySelector("p") == null){
				appendAnObject(comparisonBars[i], "p", this.classList[1]);
				var clearButton = appendAnObject(comparisonBars[i], "div", "X", "clearChoice");
				clearButton.onclick = clearChoice;
				
				break;
			}
		}
	}
	
	function clearChoice(){
		this.parentElement.innerHTML = "";
	}
	
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