//コース配列の定義
var maze = [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
];

//グローバル変数の定義
var key;
var mx = 1;
var my = 0;
const gx = 18;
const gy = 13;

//キー入力（押下されたキーを取得）
document.addEventListener("keydown", (e) => {
    key = e.key;
    e.preventDefault();
    move();
});

//canvasに描画
function draw(ctx) {
    //色を指定
    ctx.fillStyle = "skyblue"; //塗りつぶしの色を赤に指定

    for (i = 0; i < 14; i++) {
        for (j = 0; j < 20; j++) {
            if (maze[i][j] == 1) {
                ctx.fillRect((50 * j), (50 * i), 50, 50);
            } else if (maze[i][j] == 2) {
                draw_goal(ctx);
            } else if (i == my && j == mx) {
                draw_chara(ctx);
            }
        }
    }
    check();
}

function draw_chara(ctx) {
    //chara画像の読み込み
    const chara = new Image();
    chara.src = "Image/man50.png";
    //chara画像の描画
    chara.onload = () => {
        ctx.drawImage(chara, (50 * mx), (50 * my));
    }
}

function draw_bl(ctx) {
    //chara画像の読み込み
    const bl = new Image();
    bl.src = "Image/bl50.png";
    //四角形（塗りつぶし）
    bl.onload = () => {
        ctx.drawImage(bl, (50 * j), (50 * i));
    }
}

function draw_goal(ctx) {
    //goal画像の読み込み
    const goal = new Image();
    goal.src = "Image/goal.PNG";
    //goal画像の描画
    goal.onload = () => {
        ctx.drawImage(goal, (50 * gx), (50 * gy));
    }
}

function move() {
    //コンテキストを生成
    var cvs = document.getElementById("cvs1");
    var ctx = cvs.getContext("2d");

    //画像の削除
    ctx.clearRect((50 * mx), (50 * my), 50, 50);

    if (key == "ArrowUp" && maze[my - 1][mx] != 1) {
        my--;
    }
    if (key == "ArrowDown" && maze[my + 1][mx] != 1) {
        my++;
    }
    if (key == "ArrowLeft" && maze[my][mx - 1] != 1) {
        mx--;
    }
    if (key == "ArrowRight" && maze[my][mx + 1] != 1) {
        mx++;
    }

    draw(ctx);
}

function check() {
    if (maze[my][mx] == 2) {
        location.reload();
        alert("ゴールしました。\nおめでとうございます！！！");
    }
}


window.addEventListener("DOMContentLoaded", function() {
    //コンテキストを生成
    var cvs = document.getElementById("cvs1");
    var ctx = cvs.getContext("2d");
    draw(ctx);
});