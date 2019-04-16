(function(){
	const canvas=document.getElementById("tetris");
	const TetrisBuild=canvas.getContext("2d");
	TetrisBuild.scale(20,20);
	let makeBoard=function(w,h){
		const field=[];
		while(h--){
			field.push(new Array(w).fill(0));
		}
		return field;
	};
	let makeShape=function(type){
		if(type==="t"){
			return [
				[0,0,0],
				[5,5,5],
				[0,5,0]
			];
		}
		else if(type==="o"){
			return [
				[7,7],
				[7,7]
			];
		}
		else if(type==="l"){
			return [
				[0,4,0],
				[0,4,0],
				[0,4,4]
			];
		}
		else if(type==="j"){
			return [
				[0,1,0],
				[0,1,0],
				[1,1,0]
			];
		}
		else if(type==="i"){
			return [
				[0,2,0,0],
				[0,2,0,0],
				[0,2,0,0],
				[0,2,0,0]
			];
		}
		else if(type==="s"){
			return [
				[0,3,3],
				[3,3,0],
				[0,0,0]
			];
		}
		else if(type==="z"){
			return [
				[6,6,0],
				[0,6,6],
				[0,0,0]
			];
		}
	};
	let points=function(){
		let rowCount=1;
		outer:for(let y=area.length-1;y>0;--y){
			for(let x=0;x<area[y].length;++x){
				if(area[y][x]===0){
					continue outer;
				}
			}
			const row=area.splice(y,1)[0].fill(0);
			area.unshift(row);
			++y;
			player.score+=rowCount*100;
			rowCount*=2;
		}
	}
	let collide=function(area,player){
		const [m,o]=[player.field,player.pos];
		for(let y=0;y<m.length;++y){
			for(let x=0;x<m[y].length;++x){
				if(m[y][x]!==0&&(area[y+o.y]&&area[y+o.y][x+o.x])!==0){
					return true;
				}
			}
		}
		return false;
	};
	let Draw=function(field,offset){
		field.forEach((row,y)=>{
			row.forEach((value,x)=>{
				if(value!==0){
					let imgTag=document.createElement("IMG");
					imgTag.src=Pictures[value];
					TetrisBuild.drawImage(imgTag,x+offset.x,y+offset.y,1,1);
				}
			});
		});
	};
	let merge=function(area,player){
		player.field.forEach((row,y)=>{
			row.forEach((value,x)=>{
				if(value!==0){
					area[y+player.pos.y][x+player.pos.x]=value;
				}
			});
		});
	};
	let rotate=function(field,dir){
		for(let y=0;y<field.length;++y){
			for(let x=0;x<y;++x){
				[
					field[x][y],
					field[y][x]
				]=[
					field[y][x],
					field[x][y],
				]
			}
		}
		if(dir>0){
			field.forEach(row=>row.reverse());
		}
		else{
			field.reverse();
		}
	};
	let playerReset=function(){
		const Shapes="ijlostz";
		player.field=makeShape(Shapes[Math.floor(Math.random()*Shapes.length)]);
		player.pos.y=0;
		player.pos.x=(Math.floor(area[0].length/2))-(Math.floor(player.field[0].length/2));
		if(collide(area,player)){
			area.forEach(row=>row.fill(0));
			player.score=0;
			gameRun=false;
		}
	};
	let playerDrop=function(){
		player.pos.y++;
		if(collide(area,player)){
			player.pos.y--;
			merge(area,player);
			points();
			playerReset();
			updateScore();
		}
	};
	let playerMove=function(dir){
		player.pos.x+=dir;
		if(collide(area,player)){
			player.pos.x-=dir;
		}
	};
	let playerRotate=function(dir){
		const pos=player.pos.x;
		let offset=1;
		rotate(player.field,dir);
		while(collide(area,player)){
			player.pos.x+=offset;
			offset=-(offset+(offset>0?1:-1));
			if(offset>player.field[0].length){
				rotate(player.field,-dir);
				player.pos.x=pos;
				return;
			}
		}
	};
	let draw=function(){
		TetrisBuild.clearRect(0,0,canvas.width,canvas.height);
		TetrisBuild.fillStyle="#000000";
		TetrisBuild.fillRect(0,0,canvas.width,canvas.height);
		updateScore();
		Draw(area,{x:0,y:0});
		Draw(player.field,player.pos);
	};
	let dropInter=100;
	let time=0;
	let update=function(){
		time++;
		if(time>=dropInter){
			playerDrop();
			time=0;
		}
		draw();
	};
	let updateScore=function(){
		TetrisBuild.font="bold 1px Comic Sans MS";
		TetrisBuild.fillStyle="#ffffff";
		TetrisBuild.textAlign="left";
		TetrisBuild.textBaseline="top";
		TetrisBuild.fillText("Score:"+player.score,0.2,0);
	};
	let gameOver=function(){
		clearInterval(gameLoop);
		TetrisBuild.font="2px Comic Sans MS";
		TetrisBuild.fillStyle="#ffffff";
		TetrisBuild.textAlign="center";
		TetrisBuild.textBaseline="middle";
		TetrisBuild.fillText("Game Over",(canvas.width/20)/2,(canvas.width/20)/2);
		document.getElementById("start_game").disabled=false;
	};
	const Pictures=[
		null,
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg=="
	];
	const area=makeBoard(12,20);
	const player={
		pos:{
			x:0,
			y:0
		},
		Field:null,
		score:0
	};
	const move=1;
	let gameLoop;
	let gameRun=false;
	playerReset();
	draw();
	gameOver();
	document.addEventListener('keydown',function(e){
		if(e.keyCode===37){
			playerMove(-move);
		}
		else if(e.keyCode===39){
			playerMove(+move);
		}
		else if(e.keyCode===40){
			console.log(player.pos);
			if(gameRun){
				playerDrop();
			}
		}
		else if(e.keyCode===38){
			playerRotate(-move);
		}
	});
	document.getElementById("start_game").onclick=function(){
		gameRun=true;
		playerReset();
		console.log(player.pos);
		gameLoop=setInterval(function(){
			if(gameRun){
				update();
			}
			else{
				gameOver();
			}
		},10);
		this.disabled=true;
	};
})();
