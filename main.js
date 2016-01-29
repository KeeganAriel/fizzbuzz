
function output(message) {
    $('ol').append('<li>' + message + '</li>');
}

function divisable(number, divisor) {
    if (number%divisor===0) {
        return true;
    }
    
    else {
        return false;
    }
}

$(document).ready(function() {

for (var i=1; i<=100; i=i+1){
    if (divisable(i,3) && divisable(i,5)) {
        output('fizzbuzz');
    }
    
    else if (divisable(i,5)) {
        output('buzz');
    }
    
    else if (divisable(i,3)) {
        output('fizz');
    }

    else if (divisable(i,7)) {
        output('pazz');
    }

    else {
        output(i);}
}

});
