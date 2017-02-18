(function(){
	"use strict";
	
	var summaryText;
	
	window.onload = function(){
		sendGetRequest(loadSummaries, "detailGet.php?","title=testGroups");
		
		var details = $("tabs");
		details.onchange = changeTab;
	};
	
	function changeTab(){
		var tabs = document.querySelectorAll("label");
		var screen = $("details");
		//alert(summaryText.faq);
		
		for(var i = 0; i < tabs.length; i++){
			if(tabs[i].querySelector("input").checked){
				tabs[i].querySelector("div").style.backgroundColor = "grey";
				screen.innerHTML = summaryText[i];
			} else {
				tabs[i].querySelector("div").style.backgroundColor = "white";
			}
		}
	}
	
	function loadSummaries(){
		summaryText = JSON.parse(this.responseText);
		changeTab();
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