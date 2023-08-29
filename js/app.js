function app() {
    let massa = parseInt(document.getElementById('massa').value)
    let hight = parseInt(document.getElementById('hight').value)
    let result = massa / (hight/100)**2
    result = result.toFixed(2)
        if (result < 16.5){
        document.getElementById('result').innerText = `ваш индекс ${result} - Выраженный дефицит массы`            
        }
        if (result >= 16.5 && result <= 18.49){
        document.getElementById('result').innerText = `ваш индекс ${result} - Недостаточная (дефицит) масса тела)`
        }
        if (result >= 18.5 && result <= 24.99){
        document.getElementById('result').innerText = `ваш индекс ${result} - Норма`
        }
        if (result >= 25 && result <= 29.99){
            document.getElementById('result').innerText = `ваш индекс ${result} - Избыточная масса тела (предожирение)`
            }
        if (result >= 30 && result <= 34.99){
            document.getElementById('result').innerText = `ваш индекс ${result} - Ожирение первой степени`
            }
        if (result >= 35 && result <= 39.99){
            document.getElementById('result').innerText = `ваш индекс ${result} - Ожирение второй степени`
            }
        if (result >= 35){
            document.getElementById('result').innerText = `ваш индекс ${result} - Ожирение третьей степени (морбидное)`
            }
            
    
}    