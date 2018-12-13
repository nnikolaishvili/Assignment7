var $sk = $('.snowflake');

for(var x = 0; x < 250; x++){
  var $clone = $sk.clone();
  var time = rn(4000,800);
  var delay = rn(6000,800);
  
  setFlake($clone);
  $clone.css({
      'animation-duration' : time + 'ms',
      'animation-delay' : delay + 'ms',
    		  'visibility' : 'visible'
    }).appendTo('body');
  $clone.on("animationiteration webkitAnimationIteration mozAnimationIteration MSAnimationIteration", animationEnd);
}

function setFlake(element){
  element.css({
      'left': rn(99) + '%'
  });
};

function animationEnd(event){
  setFlake($(event.target));
}

function rn(n1,n2){
  if(n1 === undefined) n1 = 100;
  if(n2 === undefined) n2 = 1;
  return Math.floor((Math.random() * n1) + n2);
}