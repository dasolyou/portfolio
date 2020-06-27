var body = document.querySelector('.js_work2');
var table = document.createElement('table');
var trs = [];
var tds = [];
var turn = 'X';
var result = document.createElement('div');

var callback = function(event){
    console.log(event.target); //칸
    console.log(event.target.parentNode); //줄
    console.log(event.target.parentNode.parentNode); //테이블

    var wtr = trs.indexOf(event.target.parentNode);
    var wtd = tds[wtr].indexOf(event.target);

    if(tds[wtr][wtd].textContent !== ''){ //칸이 이미 채워져 있는가?
        console.log('빈칸아닙니다');
    } else{
        console.log('빈칸입니다');
        tds[wtr][wtd].textContent = turn;
        // 세칸 다 채워졌나?
        var full = false;
        // 가로줄 검사
        if(
            tds[wtr][0].textContent === turn && 
            tds[wtr][1].textContent === turn && 
            tds[wtr][2].textContent === turn
        ){
            full = true;
        }
        // 세로줄 검사
        if(
            tds[0][wtd].textContent === turn && 
            tds[1][wtd].textContent === turn && 
            tds[2][wtd].textContent === turn
        ){
            full = true;
        }
        // 대각선 검사
        if(wtr - wtd === 0){ // 대각선 검사 필요한 경우
            if(
                tds[0][0].textContent === turn && 
                tds[1][1].textContent === turn && 
                tds[2][2].textContent === turn
            ){
                full = true;
            }
        }
        if(Math.abs(wtr - wtd) === 2){ // 대각선 검사 필요한 경우
            if(
                tds[0][2].textContent === turn && 
                tds[1][1].textContent === turn && 
                tds[2][0].textContent === turn
            ){
                full = true;
            }
        }

        // 다 찼으면
        if(full) {
            result.textContent = turn + '님의 승리!';
            // 초기화
            turn = 'X';
            tds.forEach(function(tr){
                tr.forEach(function(칸){
                    칸.textContent = '';
                });
            });
        } else { // 다 안 찼으면
            if(turn ==='X'){
                turn = 'O';
            } else{
                turn = 'X';
            }
        }
    }
};


for (var i = 1; i<= 3; i += 1){
    var tr = document.createElement('tr');
    trs.push(tr);
    tds.push([]);
    for (var j = 1; j <= 3; j += 1){
        var td = document.createElement('td');
        td.addEventListener('click', callback);
        tds[i - 1].push(td);
        tr.appendChild(td);
    };
    table.appendChild(tr);
}
result.classList.add('result');
body.appendChild(table);
body.appendChild(result);