// JavaScript Document
var board = new Array();
var id = 0;
var time = 0.000;
var score = 0;
$(function(){
	init();
})
function init(){
	for(var i = 0; i < 4; i++){
		board[i] = new Array();
		for(var j = 0; j < 3; j++){
			$('#container').append($("<div class = 'black-box' id = 'black-box-" + i + "-" + j + "'></div>"));
			var blackBox = $("#black-box-" + i + "-" + j);
			blackBox.css("top", getTop(i));
			blackBox.css("left", getLeft(j));
			board[i][j] = 0;
		}
	}
	for(var i = 0; i < 4; i++){
		var randy = parseInt(Math.floor(Math.random() * 3));
		while(i > 0 && board[i-1][randy] == 1){
			randy = parseInt(Math.floor(Math.random() * 3));
		}
		
		var blackBox = $("#black-box-" + i + "-" + randy); 
		blackBox.css("background-color", "#000");
		board[i][randy] = 1; 
	}
	 $("#black-box-3-0").text("按J开始");
	 $("#black-box-3-1").text("按K开始");
	 $("#black-box-3-2").text("按L开始");
}

function getTop(y){
	return y * 100;
}
function getLeft(x){
	return x * 100;
}