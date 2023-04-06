function preload(){
    classifier = ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas = createCanvas(800,400)
    canvas.mouseReleased(classifyCanvas)
    background("#fff")
}

function draw(){
    strokeWeight(5)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classifyCanvas(){
 classifier.classify(canvas, gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        var result = results[0].label
        document.getElementById("nome").innerHTML = "desenho detectado: " + result
        var porcentagem = results[0].confidence
        porcentagem = floor(porcentagem * 100)
        document.getElementById("presisao").innerHTML = "precisão: " + porcentagem + "%"
    }
}

function limpar(){
    background("#fff")
}