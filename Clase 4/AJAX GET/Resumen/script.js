var req = new XMLHttpRequest();
function Ajax(url,method,func)
{
    req.open(method,url,true);
    req.onreadystatechange = func;
    req.send(null);
}
function load()
{
    Ajax("http://localhost/clasesProg3/Tp/php/mostrar.php","GET",testState);
    function testState(){
        if(req.readyState == 4 && req.status == 200)
            document.getElementById('miDiv').innerHTML = req.responseText+"pagina";
        else
             document.getElementById('miDiv').innerHTML = "Cargando";
    }
}