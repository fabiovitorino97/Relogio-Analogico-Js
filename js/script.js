// Função para atualizar o relógio
function updateClock() {
    const now = new Date();
    const hours = now.getHours() || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calcular os ângulos para as mãos das horas, minutos e segundos
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;
  
    // Rotacionar as mãos do relógio com base nos ângulos calculados
    updateHand("#hourLine", hourAngle, hours);
    updateHand("#minuteLine", minuteAngle, minutes);
    updateHand("#secondLine", secondAngle, seconds);
  }
  
  // Atualizar o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Chamada inicial para exibir o relógio imediatamente
  updateClock();
  
   // Função para atualizar uma mão do relógio (hora, minuto, segundo)
  // Função para atualizar uma mão do relógio (hora, minuto, segundo)
function updateHand(handSelector, angle, value, divisions) {
    // Selecionar a mão do relógio e os números associados
    const hand = $(handSelector);
    const numbers = hand.children(".clock_number");
  
    // Rotacionar a mão do relógio
    hand.css("transform", `rotate(${angle}deg)`);
  
    // Calcular o ângulo entre os números
    const angleBetweenNumbers = 360 / divisions;
  
    // Atualizar todos os números associados à mão do relógio
    numbers.each(function (index) {
      const numberAngle = -angle + index * angleBetweenNumbers;
      
      // Corrigir a inclinação dos números
      const correctionAngle = 90;
      const finalNumberAngle = numberAngle + correctionAngle;
  
      $(this).css("transform", `rotate(${finalNumberAngle}deg)`).html(value);
    });
  }
  // Função para mudar a cor do relógio de acordo com a escolha do usuário
  function changeClockColor() {
    const selectedColor = $("#colorSelect").val();
    $("#clock, .hour-line, .minute-line, .second-line, .clock_number").css("color", "#" + selectedColor);
    $("#clock").css("border-color", "#" + selectedColor);
  }
  