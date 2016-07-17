// JavaScript Document
$(document).keydown(function(e){
	switch(e.keyCode){
		case 74:
			if(board[3][0] == 1){
				runtime();
				cleartext();
				movedown();
			}else{
				gameover();
			}
			break;
		case 75:
			if(board[3][1] == 1){
				runtime();
				cleartext();
				movedown();
			}else{
				gameover();
			}
			break;		
		case 76:
			if(board[3][2] == 1){
				runtime();
				cleartext();
				movedown();
			}else{
				gameover();
			}
			break;		
	}
	
});

function runtime(){
	time += 0.001;
	clearTimeout(id);
	id = setTimeout(runtime, 1);
	var index = time.toString().indexOf(".");
	var length = index + 4;
	$('#time').text(time.toString().substr(0,length)+ "秒");
}
function cleartext(){
	$("#black-box-3-0").text("");
	$("#black-box-3-1").text("");
	$("#black-box-3-2").text("");
}
//function movedown(){
//	for(var i = 3; i > 0; i--){
//		for(var j = 0; j < 3; j++){
//			var blackBox = $("#black-box-" + i + "-" + j); 
//			if(board[i-1][j] == 1){
//				blackBox.css("background-color", "#000");
//				board[i][j] = 1; 
//			}else{
//				blackBox.css("background-color", "#fff");
//				board[i][j] = 0; 
//			}
//		}
//	}
//	
//	var randy = parseInt(Math.floor(Math.random() * 3));
//	if(board[1][randy] == 1){
//		randy = parseInt(Math.floor(Math.random() * 3));	
//	}
//	for(var j = 0; j < 3; j++){
//		var blackBox = $("#black-box-" + i + "-" + j); 
//		if(randy == j){
//			blackBox.css("background-color", "#000");
//			board[0][j] = 1; 				
//		}else{
//			blackBox.css("background-color", "#fff");
//			board[0][j] = 0;				
//		}
//	}
//}
function movedown(){
    //遍历12个黑块,倒序遍历
    for(var i=3;i>=0;i--){
        for(var j=2;j>=0;j--){
            if(board[i][j] == 1){
                if(i==3){
                    //将当前的黑块的颜色改变成白色
                    $("#black-box-" + i + "-" + j).css("background-color","#fff");
                    board[i][j] = 0;
                }else{
                    //将当前的黑块的颜色改变成白色
                    $("#black-box-" + i + "-" + j).css("background-color","#fff");
                    board[i][j] = 0;
                    //将当前的黑块下一行同一列的黑块颜色改变成黑色
                    $("#black-box-" + (i + 1) + "-" + j).css("background-color","#000");
                    board[i+1][j] = 1;
                }
            }
        }
    }
    //第一行重新随机一个黑块的位置
    var randy = parseInt(Math.floor(Math.random() * 3));
    var block = $("#black-box-" + 0 + "-" + randy);
	while(board[1][randy]==1 && board[2][randy]==1 && board[3][randy]==1){
		randy = parseInt(Math.floor(Math.random() * 3));
	}
    block.css("background-color","#000");
    board[0][randy] = 1;

    score += 1;
}
function gameover(){
	clearTimeout(id);
	var index = time.toString().indexOf(".");
	var length = index + 4;
	$('#container').append($("<div id = 'gameover'><p>本次用时</p><span id = 'overtime'>"+ time.toString().substr(0,length) + "秒</span><a href='javascript:restartgame();' id = 'restart'>Restart</a></div>"));
	$('#gameover').css("background-color","rgba(0,0,0,0.3)");
}
function restartgame(){
	$("#gameover").remove();
	$('#time').html("<span>0.000秒</span>");
	$('.black-box').remove();
	score = 0;
	init();
}