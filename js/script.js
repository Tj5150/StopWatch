$(document).ready(function(){
  let interval;
  let ms=0;
  let started = false;
  let sec = 0
  let min = 0
  let hour = 0

  function stop(){
        clearInterval(interval)
    
    }
    $('.start').on("mousedown",loop);
    function loop() {
        if(!started) {
            interval = setInterval(function(){
            ms++;
            $('.countbox').text(`${hour}:${min}:${sec}:${ms}`);
            
            if(ms>=1000){
                sec++;
                ms = 0;
            }

            if(sec>=60){
                min++;
                sec = 0;
            }

            if(min>=60){
                hour++;
                min = 0;
            }
            },1)
            $('.start').html('Stop');
            $('.pause').html('Pause');
            started = true;
        } else {
            clearInterval(interval);
            $('.start').html('Start');
            $('.pause').html('Clear');
            started = false;
        }
    }
    $('.pause').on('mousedown', end)
    if(started==true){
        $('.start').on("mousedown",stop);
        $('start').text('stop')
        started= false;
        }
  
    
    function clear(){
        if(!started){
            ms=0;
            sec=0
            min=0
            hour=0
            $('.countbox').text('.00ms');
        }else {
            // clearInterval(interval)
            }
    }

    function pause(){
         $('.lap').text(`${hour}:${min}:${sec}:${ms}`);
    
        }

    function end(){
        clear()
        pause()
    }

})
