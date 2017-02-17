/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var pomoapikey = document.getElementById('pomoapikey');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'pomoapikey')
  ])
  .spread(function(savedPomoapikey){
    if(savedPomoapikey){
      pomoapikey.value = savedPomoapikey;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'private', 'pomoapikey', pomoapikey.value)
  .then(function(){
    t.closePopup();
  })
})
