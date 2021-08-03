$(function(){

  //onepage scroll & button active
  const arrTopVal=[];
  arrTopVal[0]=$('.main-slides').offset().top;
  arrTopVal[1]=$('.d-story').offset().top;
  arrTopVal[2]=$('.community').offset().top;
  arrTopVal[3]=$('.reference').offset().top;

  console.log('arrTopVal=', arrTopVal);
    
  const $mnu=$('header > nav > .gnb > li > a');
    const $pagination=$('.main-slides > .pagination > li > a ');
    const $slides=$('.main-slides > .slides-container > li ');
    let nowIdx=0;
    const $btnPlay=$('.main-slides > .slides-container ~ span.play');
    const $btnPause=$(' .main-slides > .slides-container ~ span.pause');
    let intervalKey;
    const $notice=$('.community > dl > dt > a');
    const $fnb=$('footer > .copyright >  nav > .fnb > li > a');

const moveFn=function(idx){
  
  $('html,body').animate({scrollTop:arrTopVal[idx]-100}); }

  $mnu.on('click',function(evt){
    evt.preventDefault();
    const nowIdx=$mnu.index(this);
    moveFn(nowIdx);

    $(this).parent().addClass('on').siblings().removeClass('on');
  });

  // end of onepage scroll & button active

  //main-slide 

    const fadeFn=function(){
      $slides.filter('.on').stop().fadeOut(2000).removeClass('on');
      $slides.eq(nowIdx).stop().fadeIn(2000).addClass('on');
      $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        }

    $pagination.on('click',function(evt){
      evt.preventDefault();

    nowIdx=$pagination.index(this);
    fadeFn();
     
  });

  $btnPlay.on('click',function(){
    clearInterval(intervalKey);

    intervalKey=setInterval(function(){

      if(nowIdx<3){
        nowIdx++;

      }else{
        nowIdx=0;
      }

      fadeFn();
      
    },3000);
  });

    $btnPause.on('click',function(){
      clearInterval(intervalKey);
    });

    const autoPlay=function(){
      intervalKey=setInterval(function(){

        if(nowIdx<3){
          nowIdx++;
  
        }else{
          nowIdx=0;
        }
  
        fadeFn();
        
      },3000);
      
    }
 // end of main-slide 

 // window load event

    $(window).on('load',function(){
      autoPlay();     
       
      });

      $(window).on('load',function(){
        $('html,body').animate({scrollTop:arrTopVal[0]});
        $mnu.eq(0).parent().addClass('on');
    });

    // end of window load event
    
    // community-notice

    $notice.on('click',function(evt){
      evt.preventDefault();
      $(this).parent().toggleClass('on').next().stop().slideToggle();
    });

    // end of community-notice

    //fnb click evt

    $fnb.on('click',function(evt){
      evt.preventDefault();
    });

  });
