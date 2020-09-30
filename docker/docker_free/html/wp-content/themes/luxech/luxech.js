/*
 * フッターに 追加したい Javascript 等を以下に記述してください。
 * ( To add Javascript in the footer, please write down here. )
 */
// スクロールリビール フェードイン（自己紹介）の実装 8/14
  ScrollReveal().reveal('.scrollfeadin',{ 
    duration: 2000, // アニメーションの完了にかかる時間
    // delay: 200, //アニメーションの遅延
    viewFactor: 0.8, // 0~1,どれくらい見えたら実行するか
    // reset: true   // 何回もアニメーション表示するか
  });
  // スクロールリビール ゆっくり下から上（お仕事部分）の実装 8/14
  ScrollReveal().reveal('.slowup-feadin',{ 
    duration: 2000, // アニメーションの完了にかかる時間
    delay: 200, //アニメーションの遅延
    origin: 'bottom', //アニメーションの基点
    distance: '150px', //アニメーションの距離
    opacity: 0, //アニメーション開始時の透明度
    viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
    // reset: true   // 何回もアニメーション表示するか
  });
   // スクロールリビール 早く下から上（ホームページ&デザイン）の実装 8/14
  ScrollReveal().reveal('.up-feadin',{ 
    duration: 2000, // アニメーションの完了にかかる時間
    // delay: 500, //アニメーションの遅延
    origin: 'bottom', //アニメーションの基点
    distance: '200px', //アニメーションの距離
    viewFactor: 0.7, // 0~1,どれくらい見えたら実行するか
    // reset: true   // 何回もアニメーション表示するか
  });




  // canvas背景ドットアニメーション
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    
    window.onload = function() {
        var canvasWrap = document.querySelector('#canvas-wrap');
        var canvas = document.querySelector('#canvas-container');
        var ctx = canvas.getContext('2d');
    
        var center = {};    // Canvas中央
        var dots = [];      // パーティクル配列
        var density = 10;  //パーティクルの数
        var colors = ['#a7a7a7', '#a7a7a7'];
        var baseSize = 80;   // 大きさ
        var baseSpeed = 20; // スピード
    
    
        var Dot = function () {
            this.size = Math.floor( Math.random() * 100 ) + baseSize; //大きさ
            this.color = colors[~~(Math.random() * 2)]; //色
            this.speed = this.size / baseSpeed; // 大きさによって速度変更
            this.pos = {   // 位置
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            };
            var rot = Math.random() * 360;  // ランダムな角度
            var angle = rot * Math.PI / 180;
            this.vec = {    // 移動方向
                x: Math.cos(angle),
                y: Math.sin(angle)
            };
        };
    
    
        Dot.prototype = {
            update: function() {
                this.draw();
    
                this.pos.x += this.vec.x;
                this.pos.y += this.vec.y;
    
                // 画面外に出たら反対へ再配置
                if(this.pos.x > canvas.width + 10) {
                    this.pos.x = -5;
                } else if(this.pos.x < 0 - 10) {
                    this.pos.x = canvas.width + 5;
                } else if(this.pos.y > canvas.height + 10) {
                    this.pos.y = -5;
                } else if(this.pos.y < 0 - 10) {
                    this.pos.y = canvas.height + 5;
                }
            },
    
            draw: function() {
                ctx.strokeStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI, false);
                ctx.lineWidth = 2;   //線の太さ
                ctx.stroke();
            }
        };
    
        function update() {
            requestAnimFrame(update);
            // 描画をクリアー
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
            for (var i = 0; i < density; i++) {
                dots[i].update();
            }
        }
    
        function init() {
            // canvasにコンテンツサイズをセット
            canvas.setAttribute("width", canvasWrap.offsetWidth);
            canvas.setAttribute("height", canvasWrap.offsetHeight);
    
            // canvas中央をセット
            center.x = canvas.width / 2;
            center.y = canvas.height / 2;
    
            // densityの数だけパーティクルを生成
            for (var i = 0; i < density; i++) {
                dots.push(new Dot());
            }
    
            update();
        }
        init();
    }
    
    
    Resources