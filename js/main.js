document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML= Math.floor((lbs/0.0022046)*100)/100;
    document.getElementById('kgOutput').innerHTML= Math.floor((lbs/2.2046)*100)/100;
    document.getElementById('ozOutput').innerHTML= Math.floor((lbs * 16)*100)/100;
});
