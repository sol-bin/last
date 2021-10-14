
      $(function(){
        $('.partner_info').click(function(){
         var img = $(this).find('img');//여러개의 partner_info중에서 하나만 하기 위해서 this를 씀
         var img_src = img.attr('data_img');//attr은 태그들을 찾아주는 것이다 ''속에 잇는 값을 기억을 해 주는 것이다.
         var img_alt = img.attr('alt') //이미지의 설명을 찾는것
         var img_title = img.attr('title')//그림설명을 할 자리를 만듬 var에
            $('#modal').show();//열기
            $('#modal img').attr('src',img_src);//attr('src','')이렇게해서 값을 두개 넣어주면 앞에껀 기억을해서 뒤에꺼로 바꾸어줌
            $('#modal .txt').text(img_alt);//글씨가 들어가는 메소드(태그를 계속 추가 하고싶으면 어팬드)위에 기억하는 img_alt를 넣음
            $('#modal .txt_title').text(img_title);//4번 
        })

        $('#modal').click(function(){
            $('#modal').hide();//닫기
            //갤러리나 이미지에 사용하면 좋음 
        })

    })//end


////nav
$(function(){
    var sta = 1;
   $('.btn_all').click(function(){
   //   $(this).toggleClass('on')//.toggleClass 은 제이쿼리가 3.0 이상만 작동됨 단순디자인 변경 할 때만 사용한다 on/off 식으로 변경 할 때만 사용
     if (sta == 1) {//지금 상태가 1이면 addclass를 붙여준다
       $(this).addClass('on');
       $('.box').fadeIn();//방금 클릭한 것도 열어주고 박스창도 보여라
       sta = 2;//모양이 바뀌었을 때
     }else {
         $(this).removeClass('on');
         $('.box').fadeOut();
         sta = 1;//원래버전
     }//else
     $('.box').click(function(){
         $('.box').hide();
     })
   }) //btn_all
})//jq end

      
