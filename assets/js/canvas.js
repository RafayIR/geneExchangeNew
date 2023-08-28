
// CANVAS PROGRESS BAR ON PROFILE PLUS

function drawProgressBar(progressData) {
    const canvas = document.getElementById('progressCanvas');
    const ctx = canvas.getContext('2d');
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const totalWidth = canvas.width;
    const totalSegments = progressData.length;
  
    let x = 0;
  
    progressData.forEach(segment => {
      const { color, value } = segment;
      const segmentWidth = (totalWidth * value) / 100;
  
      ctx.fillStyle = color;
      ctx.fillRect(x, 0, segmentWidth, canvas.height);
  
      ctx.fillStyle = '#fff';
      ctx.font = '13px Arial';
      const text = value + '%';
      const textWidth = ctx.measureText(text).width;
      const textX = x + (segmentWidth - textWidth) / 2;
      const textY = canvas.height / 2 + 5; // Adjust the vertical position as needed
      ctx.fillText(text, textX, textY);
  
      x += segmentWidth;
    });
  }
  
  const progressData = [
    { color: '#20c997', value: 55 },
    { color: '#fe0000', value: 25 },
    { color: '#f78a06', value: 15 },
  ];
  
  drawProgressBar(progressData);