$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input[name=item]');
      var time = $('form input[name=time]');
      var todo = {item: item.val(), time: time.val()};
      //console.log(item.val());

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
          $('#textInput')[0].reset();
          var ul = document.getElementById('hangouts');
          var li = document.createElement('li');
          li.appendChild(document.createTextNode("There's an event: "));
          li.appendChild(document.createTextNode(data.item));
          li.appendChild(document.createTextNode(" at "));
          li.appendChild(document.createTextNode(data.time));
          ul.appendChild(li);
        }
      });

      return false;

  });

  $('#hangouts').on('click', 'li', function(){
      $(this).attr('id', 'deleteMe');
      var item = $(this).text().replace(/ /g, "-");
      console.log(item);
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
          $('#deleteMe').remove();
        }
      });
  });

});
