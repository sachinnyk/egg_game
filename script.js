$(function(){
   let the_game = function(){
   egg_down(egg1);
   egg_down(egg2);
   egg_down(egg3);
   if(life > 0){
   let anim_id=requestAnimationFrame(the_game);
   }
   else{
       cancelAnimationFrame(anim_id);
   }
   };
   let anim_id= requestAnimationFrame(the_game);
});

