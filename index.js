
function timSoNguyenDuongNhoNhat() {
    var tong = 0;
    var n = 0;

    for (var i = 0; i < 10000; i++) {
        if (tong < 10000) {
            tong+= i;
            n = i;
        } else {
            break;
        }
    }
    var eleHtmlResult1 = document.getElementById('result1');

    eleHtmlResult1.innerHTML = `Số nguyên dương nhỏ nhất là: ${n}`
}

function tinhTong() {
    var numX = document.getElementById('txtX').value * 1;
    var numN = document.getElementById('txtN').value * 1;

    var result = 0;
    for (var i = 0; i < numN; i++) {
        result += Math.pow(numX, numN - i);  
    }
    var eleResult = document.getElementById('result2')

    eleResult.innerHTML = `Kết quả là: ${result}`
}

function tinhGiaiThua() {
    var valueNum = document.getElementById('txtNum').value * 1;
    var resultGiaiThua = 1;

    for (var i = 0; i < valueNum; i++) {
        resultGiaiThua = resultGiaiThua * (valueNum -i)
    }
    var eleResult = document.getElementById('result3')

    eleResult.innerHTML = `Kết quả là: ${resultGiaiThua}`
}

function createDiv() {
    var result = '';

    for (var i = 0; i <= 10; i++) {
        if (i%2 == 0) {
            result += `<div class="alert bg-danger mt-2">Div chẵn ${i}</div>`
        } else {
            result += `<div class="alert bg-warning mt-2">Div lẻ ${i}</div>`
        }
    }
    var eleHtmlResult = document.getElementById('result4')

    eleHtmlResult.innerHTML = result
}