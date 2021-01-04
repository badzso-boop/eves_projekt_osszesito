function setup()
{
    let i = 255;
    let j = 255;
    let k = 255;
    var element = document.body;
    var element2 = document.getElementById('szin');

    function bg() 
    {
        element.style.backgroundColor = `rgba(${i}, ${j}, ${k}, 0.8)`;
        i-=5;
        if(i <= 183)
            i=255;
        j-=5;
        if(j <= 0)
            j=255;
        setTimeout(bg, 80);
    }

    bg();
}