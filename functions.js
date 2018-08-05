$(document).on('mousemove',function(e){
      basket.css('left',e.pageX);

});

function collision_detection($div1,$div2){
    var x1=$div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1 ;
    var r1 = x1 + w1 ;

    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2 ;
    var r2 = x2 + w2 ;

    if( b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;

}

function show_bullseye(egg_var){
  bullseye_num = egg_var.attr('data-bullseye');
  $('#bullseye'+bullseye_num).show();
  setTimeout(function(){
    $('#bullseye'+bullseye_num).hide();          
},500);

}

function egg_down(egg_var){
    if(egg_hits_ground(egg_var) || egg_hits_basket(egg_var)){
        egg_var.css('top',egg_initial_pos);
    }

    egg_current_pos = parseInt(egg_var.css('top'));
   
    egg_var.css('top',egg_current_pos + 2);
}

function egg_hits_ground(egg){
    if(collision_detection(egg,floor)){   
        show_bullseye(egg);  
        life--;
        life_span.text(life);
        return true;
    }
    return false;
}

function egg_hits_basket(egg){
    if(collision_detection(egg,basket)){
        egg_top=parseInt(egg.css('top'));
        if(egg_top < basket_top){
            cur_score++;
            score.text(cur_score);
            return true;
        }
        
    }
    return false;

}