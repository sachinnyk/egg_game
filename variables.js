    var basket=$('#basket'),
    eggs =$("#eggs"),
    container=$('#container'),
    score=$('#score'),
    life_span=$('#life'),
    egg1=$('#egg1'),
    egg2=$('#egg2'),
    egg3=$('#egg3'),
    basket_height=basket.height(),
    container_height=container.height(),
    eggs=$('.egg'),
    eggs_height=eggs.height(),
    egg_initial_pos=parseInt(eggs.css('top')),
    max_speed=15,
    score_updated=false,
    basket_top=container_height -basket_height,
    life=15,
    floor = $('#floor'),
    egg_current_pos=0,
    score=0;
    life_span.text(life);