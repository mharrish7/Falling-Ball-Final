var ball = document.querySelector('.ball');

var ap = false;
var dp = false;
var gravity = 0.5;
var up = false;
var active = true;
var score = 0;
var name;

var a1;
var a2;
var a3;
var a4;
var ups = 1;
var re = 0;
var hearts = 3;

const nlevl = new Audio('sounds/correct.wav');
const lost = new Audio('sounds/wrong.wav');
const newhigh = new Audio('sounds/next.wav');


document.querySelector('.over').style.display = 'none';

var j = ups + 1;

document.querySelector('#lead').style.display = 'none';


document.querySelector('.but').addEventListener('click', function () {
    hearts = 3 + re;
    a1 = setInterval(move, 1);
    a4 = setInterval(moveup, 10);
    a2 = setInterval(checkinter, 1);
    score = 0;
    a3 = setInterval(setplat, 1000 * 2.5);

    setInterval(heartcheck, 1);
    name = document.querySelector('#name').value;
    this.style.display = 'none';
    this.disabled = true;

    document.querySelector('#name').style.display = 'none';
    document.querySelector('#nameh').innerHTML = "Welcome " + name;


})

document.addEventListener('keypress', function (e) {
    if (e.key == 'a') {
        ap = true;

    }
    if (e.key == 'd') {
        dp = true;
    }
    if (e.key == 'w') {
        up = true;
    }
})

document.addEventListener('keyup', function (e) {
    if (e.key == 'a') {
        ap = false;
    }
    if (e.key == 'd') {
        dp = false;
    }
    if (e.key == 'w') {
        up = false;
    }

})


var friction = 0.6;
var speed = 0;
var jumps = 0;
var gravity = 0.05 * ups;

function move() {
    if (ap && dp || !ap && !dp) {
        speed *= friction;
    }
    if (ap) {
        speed--;
    }
    if (dp) {
        speed++;
    }
    if (up) {
        if (jumps == 0) {
            jumps = 2;
        }
    }
    jumps -= gravity;
    if (jumps < -3) {
        jumps = -3;
    }
    moves();
}

var maxspeed = 5;

function moves() {
    if (speed > 0 && speed > maxspeed) {
        speed = maxspeed;
    } else if (speed < 0 && speed < (-maxspeed)) {
        speed = -maxspeed;
    }

    var left = parseInt(window.getComputedStyle(ball).getPropertyValue('left'));
    var top = parseInt(window.getComputedStyle(ball).getPropertyValue('top'));
    ball.style.left = left + speed + "px";
    ball.style.top = top - jumps + "px";

}


var heartlist = [];

var plat = document.createElement('div');
plat.style.top = "35rem";
plat.style.position = "absolute";
plat.style.left = "45rem";
plat.style.backgroundColor = "red";
plat.style.width = "15rem";
plat.style.height = "2rem";

var platlist = [];
platlist.push(plat);

document.querySelector('body').appendChild(plat);


var ph = [];
var plist = [];
var pp = [];
var ps = []
var slist = [];
var spikelist = [];
var pspike = [];
var fraglist = [];



function setplat() {

    var plat = document.createElement('div');
    plat.style.top = 40 + "rem";
    plat.style.position = "absolute";
    var ran = Math.floor(Math.random() * 7);
    plat.style.left = 10 * (ran + 1) + "rem";
    plat.style.backgroundColor = "red";
    plat.style.width = "15rem";
    plat.style.height = "2rem";
    plat.style.zIndex = "0";

    platlist.push(plat);
    plat.setAttribute('class', 'plate');
    document.querySelector('body').appendChild(plat);


    var rr = Math.floor(Math.random() * 3);
    

    var r5 = Math.floor(Math.random() * 15);
    if (r5 == 0) {
        plat.classList.add('blink');
        console.log('sss');
    }

    var r2 = Math.floor(Math.random() * 15);
    if (r2 == 0 && heartlist.length == 0) {
        console.log('h');
        var heartimg = document.createElement('div');
        heartimg.setAttribute('class', 'hearty');
        heartimg.style.width = '2rem';
        heartimg.style.height = '2rem';
        heartimg.style.fontSize = '2rem';
        heartimg.innerHTML = "💗";
        heartimg.style.top = 37 + "rem";
        heartimg.style.position = "absolute";
        heartimg.style.left = 10 * (ran + 1) + 6 + "rem";
        document.querySelector('body').appendChild(heartimg);
        heartlist.push(heartimg);
        ph.push(plat);
    }
    var r2 = Math.floor(Math.random() * 15);
    if (r2 == 0 && plist.length == 0) {
        console.log('h');
        var pimg = document.createElement('div');
        pimg.setAttribute('class', 'pow');
        pimg.style.width = '2rem';
        pimg.style.height = '2rem';
        pimg.style.fontSize = '2rem';
        pimg.innerHTML = "👟";
        pimg.style.top = 37 + "rem";
        pimg.style.position = "absolute";
        pimg.style.left = 10 * (ran + 1) + 6 + "rem";
        document.querySelector('body').appendChild(pimg);
        plist.push(pimg);
        pp.push(plat);
    }
    var r3 = Math.floor(Math.random() * 15);
    if (r3 == 0 && slist.length == 0) {
        console.log('h');
        var pimg = document.createElement('div');
        pimg.setAttribute('class', 'time');
        pimg.style.width = '2rem';
        pimg.style.height = '2rem';
        pimg.style.fontSize = '2rem';
        pimg.innerHTML = "⌛";
        pimg.style.top = 37 + "rem";
        pimg.style.position = "absolute";
        pimg.style.left = 10 * (ran + 1) + 6 + "rem";
        document.querySelector('body').appendChild(pimg);
        slist.push(pimg);
        ps.push(plat);
    }
    var r6 = Math.floor(Math.random() * 15);
    if(score >= 700){
        r6 = Math.floor(Math.random() * 5);
    }
    if(score >= 1000){
        r6 = Math.floor(Math.random() * 2);

    }
    if (r6 == 0 && spikelist.length == 0 && score >= 500) {
        console.log('h');
        var spimg = document.createElement('div');
        spimg.setAttribute('class', 'spiky');
        spimg.style.width = '2rem';
        spimg.style.height = '2rem';
        spimg.style.fontSize = '2rem';
        spimg.innerHTML = '<table> <tr> <td> <img src="singlespikefinal.png" alt="" class = "pspike"></td><td> <img src="singlespikefinal.png" alt="" class = "pspike"></td><td> <img src="singlespikefinal.png" alt="" class = "pspike"></td> <td> <img src="singlespikefinal.png" alt="" class = "pspike"> </td> <td> <img src="singlespikefinal.png" alt="" class = "pspike"> </td> <td> <img src="singlespikefinal.png" alt="" class = "pspike"> </td> </tr> </table>';
        spimg.style.top = 37 + - 1 + "rem";
        spimg.style.position = "absolute";
        spimg.style.left = 10 * (ran + 1) + "rem";
        document.querySelector('body').appendChild(spimg);
        spikelist.push(spimg);
        pspike.push(plat);
        rr = 0;
    }
    var r7 = Math.floor(Math.random() * 15);
    if(score >= 700){
        r7 = Math.floor(Math.random() * 5);
    }
    if(score >= 1000){
        r7 = Math.floor(Math.random() * 2);
    }
    if (r7 == 0 && spikelist.length == 0 && score >= 500) {
        console.log('h');
        fraglist.push(plat);
        plat.classList.add('fragile');
        rr = 0;
        console.log('frag');
    }

    if (rr == 0) {
        var plat = document.createElement('div');
        plat.style.top = 40 + "rem";
        plat.style.position = "absolute";
        var ran = Math.floor(Math.random() * 7);
        plat.style.left = 10 * (ran + 1) + "rem";
        plat.style.backgroundColor = "red";
        plat.style.width = "15rem";
        plat.style.height = "2rem";
        platlist.push(plat);
        plat.setAttribute('class', 'plate');
        document.querySelector('body').appendChild(plat);

    }



}

function checkinter() {
    for (p of platlist) {
        check2(p);
    }

}


var current;

var power = 0;

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('#lead').style.display = 'none';
    led = 0;
    document.querySelector('#name').style.display = 'inline';
    document.querySelector('.but').style.display = 'inline';
    document.querySelector('.but').disabled = false;
    document.querySelector('#nameh').innerHTML = "Enter your name : ";
})

var led = 0;

function check2(p) {

    if (parseInt(window.getComputedStyle(ball).getPropertyValue('top')) <= 10 || parseInt(window.getComputedStyle(ball).getPropertyValue('top')) >= 45 * 16) {

        if (hearts <= 0) {
            console.log('gameover');
            lost.play();
            re = 1;

            document.querySelector('.over').style.display = 'block';
            setTimeout(function () {
                document.querySelector('.over').style.display = 'none';
                if (led == 0) {
                    var keys = Object.keys(localStorage);

                    if (keys.includes(name)) {
                        var value = parseInt(localStorage.getItem(name));
                        if (score > value) {
                            localStorage.setItem(name, String(score));
                            newhigh.play();
                            alert('new personal high score!')
                            
                        }
                    } else {
                        localStorage.setItem(name, String(score));
                        newhigh.play();
                        alert('new personal high score!')


                    }

                    var keys = Object.keys(localStorage);
                    var scorest = [];
                    for (i of keys) {
                        scorest.push([parseInt(localStorage.getItem(i)), i]);
                    }

                    function sortFunction(a, b) {
                        if (a[0] === b[0]) {
                            return 0;
                        } else {
                            return (a[0] < b[0]) ? -1 : 1;
                        }
                    }
                    document.getElementById('lo').innerHTML = "";
                    scorest.sort(sortFunction);
                    scorest.reverse();
                    if(score > scorest[0]){
                        alert('New highscore!');
                    }
                    console.log(scorest);
                    for (i of scorest) {
                        var li = document.createElement('li');
                        var text = document.createTextNode(i[1] + "  -  " + String(i[0]));
                        if (i[1] == name) {
                            li.style.backgroundColor = 'white';
                            li.style.color = '#250d3f';
                        }

                        li.appendChild(text);
                        document.getElementById('lo').appendChild(li);

                    }
                    document.querySelector('#lead').style.display = 'block';
                    led = 1;
                }
            }, 2000);

            for (p of platlist) {
                p.style.opacity = "0%";
                p.style.top = "0px";
                p.style.display = 'none';

                platlist.shift();
            }
            for (h of heartlist) {
                h.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                heartlist.shift();
                ph.shift();
            }
            for (p of plist) {
                p.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                plist.shift();
                pp.shift();
            }
            for (p of slist) {
                p.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                slist.shift();
                ps.shift();
            }
            for (p of spikelist) {
                p.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                spikelist.shift();
                pspike.shift();
            }

            clearInterval(a1);
            clearInterval(a2);
            clearInterval(a3);
            clearInterval(a4);



            // if (led == 0) {
            //     var keys = Object.keys(localStorage);

            //     if (keys.includes(name)) {
            //         var value = parseInt(localStorage.getItem(name));
            //         if (score > value) {
            //             localStorage.setItem(name, String(score));
            //         }
            //     } else {
            //         localStorage.setItem(name, String(score));
            //     }

            //     var keys = Object.keys(localStorage);
            //     var scorest = [];
            //     for (i of keys) {
            //         scorest.push([parseInt(localStorage.getItem(i)), i]);
            //     }

            //     function sortFunction(a, b) {
            //         if (a[0] === b[0]) {
            //             return 0;
            //         } else {
            //             return (a[0] < b[0]) ? -1 : 1;
            //         }
            //     }
            //     document.getElementById('lo').innerHTML = "";
            //     scorest.sort(sortFunction);
            //     scorest.reverse();
            //     console.log(scorest);
            //     for (i of scorest) {
            //         var li = document.createElement('li');
            //         var text = document.createTextNode(i[1] + "  -  " + String(i[0]));

            //         li.appendChild(text);
            //         document.getElementById('lo').appendChild(li);

            //     }
            //     document.querySelector('#lead').style.display = 'block';
            //     led = 1;
            // }


        } else {
            hearts -= 1;

            document.querySelector('.heart').innerHTML = "💗 : " + hearts;
            ball.style.top = '20%';
            ball.style.left = '50%';
            ball.style.right = '50%';
            console.log(hearts);
            for (p of platlist) {
                p.style.opacity = "0%";
                p.style.top = "0px";
                p.style.display = 'none';

                platlist.shift();
            }
            for (h of heartlist) {
                h.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                heartlist.shift();
                ph.shift();
            }
            for (p of plist) {
                p.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                plist.shift();
                pp.shift();
            }
            for (p of slist) {
                p.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                slist.shift();
                ps.shift();
            }
            for (p of spikelist) {
                p.style.opacity = '0%';
                p.style.top = "0px";
                p.style.display = 'none';

                spikelist.shift();
                pspike.shift();
            }


            console.log(platlist);

            var plat = document.createElement('div');
            plat.style.top = "35rem";
            plat.style.position = "absolute";
            plat.style.left = "45rem";
            plat.style.backgroundColor = "red";
            plat.style.width = "15rem";
            plat.style.height = "2rem";
            plat.setAttribute('class', 'plate');

            platlist.push(plat);
            jumps = 0;
            speed = 0;

            document.querySelector('body').appendChild(plat);
            console.log('s');
            gravity = 0.05;
            setTimeout(function () {
                gravity = 0.05 * ups;
            }, 2000);
            for (d of document.querySelectorAll('.plate')) {
                d.style.opacity = "0%";
                d.style.top = "0rem";
            }
            var plat = document.createElement('div');
            plat.style.top = 40 + "rem";
            plat.style.position = "absolute";
            var ran = Math.floor(Math.random() * 7);
            plat.style.left = 10 * (ran + 1) + "rem";
            plat.style.backgroundColor = "red";
            plat.style.width = "15rem";
            plat.style.height = "2rem";
            plat.style.zIndex = "0";
        
            platlist.push(plat);
            plat.setAttribute('class', 'plate');
            document.querySelector('body').appendChild(plat);


        }

    }

    if (parseInt(window.getComputedStyle(ball).getPropertyValue('left')) >= parseInt(window.getComputedStyle(p).getPropertyValue('left')) + 15 * 16) {
        // console.log(1);
        return false;
    }
    if (parseInt(window.getComputedStyle(ball).getPropertyValue('left')) + 2 * 16 <= parseInt(window.getComputedStyle(p).getPropertyValue('left'))) {
        // console.log(2);
        return false;
    }
    if (parseInt(window.getComputedStyle(ball).getPropertyValue('top')) >= parseInt(window.getComputedStyle(p).getPropertyValue('top')) + 2 * 16) {
        // console.log(3);
        return false;
    }
    if (parseInt(window.getComputedStyle(ball).getPropertyValue('top')) + 2 * 16 <= parseInt(window.getComputedStyle(p).getPropertyValue('top'))) {
        // console.log(4);
        return false;
    } else {
        jumps = j;
        current = p;
    }
}


var flag = 0;

function moveup() {
    for (p of platlist) {
        var top = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        if (top <= 10) {
            p.classList.remove('blink');
            platlist.shift();
            p.style.opacity = "0%";
            p.style.display = 'none';
            score += 15;
            if (score >= 200 && score <= 500 && flag != 1) {
                nlevl.play();
                clearInterval(a3);
                clearInterval(a4);
                a4 = setInterval(moveup, 7);
                a3 = setInterval(setplat, 1000 * 2);
                flag = 1;
            }
            else if (score >= 500 && score <= 1000 && flag != 2) {
                clearInterval(a3);
                nlevl.play();
                clearInterval(a4);
                a4 = setInterval(moveup, 5);
                a3 = setInterval(setplat, 1000 * 1.5);
                flag = 2;
            }
            if (score >= 1000 && flag != 3) {
                clearInterval(a3);
                nlevl.play();
                clearInterval(a4);
                a4 = setInterval(moveup, 1);
                a3 = setInterval(setplat, 1000 * 1);
                flag = 3;
            }

            document.querySelector('.score').innerHTML = "🔥 : " + score;
        }
        p.style.top = top - ups  + "px";
    }
    for (p of heartlist) {
        var top = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        if (top <= 10) {
            heartlist.shift();
            p.style.opacity = "0%";
            p.style.display = 'none';
        }
        p.style.top = top - ups  + "px";
    }

    for (p of plist) {
        var top = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        if (top <= 10) {
            plist.shift();
            p.style.opacity = "0%";
            p.style.display = 'none';

        }
        p.style.top = top - ups  + "px";
    }
    for (p of slist) {
        var top = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        if (top <= 10) {
            slist.shift();
            p.style.opacity = "0%";
            p.style.display = 'none';

        }
        p.style.top = top - ups  + "px";
    }
    for (p of spikelist) {
        var top = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        if (top <= 10) {
            spikelist.shift();
            p.style.opacity = "0%";
            p.style.display = 'none';

        }
        p.style.top = top - ups  + "px";
    }
}


function cups() {
    ups = 1;
}


function heartcheck() {
    for (p of ph) {
        if (current == p) {
            hearts = hearts + 1;
            document.querySelector('.heart').innerHTML = "💗 : " + hearts;
            var ind = ph.indexOf(p);
            var he = heartlist[ind];
            if (he == undefined) {
                ph = ph.slice(ph.indexOf(p) + 1);
                document.querySelector('.hearty').opacity = '0';

            } else {
                he.style.display = 'none';
                heartlist.slice(ind);
                ph = ph.slice(ph.indexOf(p) + 1);
            }

        }
    }
    for (p of pp) {
        if (current == p) {
            power = power + 1;
            j = j + 1;
            if (j > 3) {
                j = 3;
            }
            var ind = pp.indexOf(p);
            var he = plist[ind];
            if (he == undefined) {
                pp = pp.slice(pp.indexOf(p) + 1);
                document.querySelector('.pow').opacity = '0';

            } else {
                he.style.display = 'none';
                plist.slice(ind);
                pp = pp.slice(pp.indexOf(p) + 1);
            }
        }
    }
    for (p of ps) {
        if (current == p) {
            ups = 2;
            setTimeout(cups, 2000);
            var ind = ps.indexOf(p);
            var he = slist[ind];
            if (he == undefined) {
                ps = ps.slice(ps.indexOf(p) + 1);
                document.querySelector('.time').opacity = '0';

            } else {
                he.style.display = 'none';
                slist.slice(ind);
                ps = ps.slice(ps.indexOf(p) + 1);
            }
        }
    }
    for (p of pspike) {
        if (current == p) {
            ball.style.top = '0rem';
            var ind = pspike.indexOf(p);
            var he = spikelist[ind];
            if (he == undefined) {
                pspike = pspike.slice(pspike.indexOf(p) + 1);
                document.querySelector('.spiky').opacity = '0';

            } else {
                he.style.display = 'none';
                spikelist.slice(ind);
                pspike = pspike.slice(pspike.indexOf(p) + 1);
            }
        }
    }
    for (p of fraglist) {
        if (current == p) {
            var ind = fraglist.indexOf(p);
            var ind2 = platlist.indexOf(p);
            console.log(ind,ind2);
            var he = fraglist[ind];
            if (he == undefined) {
                console.log('some error');

            } else {
                console.log(platlist.length);
                fraglist = fraglist.splice(ind,1);
                
                p.style.display = 'none';
                console.log(platlist.length);
                p.style.left = '0rem';
            }
        }
    }
}

