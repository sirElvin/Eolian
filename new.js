$(document).ready(function() {
    var $messages = $('.messages-content'),
      d, m,
      i = 0;
  
    function updateScrollbar() {
      $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
      });
    }
  
    function setDate() {
      d = new Date();
      if (m !== d.getMinutes()) {
        m = d.getMinutes();
        var $lastMessage = $('.message').last();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($lastMessage);
        $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($lastMessage);
        $('<div class="checkmark-read">&check;</div>').appendTo($lastMessage);
      }
    }
  
    function insertMessage() {
      var msg = $('.message-input').val();
      if ($.trim(msg) === '') {
        return false;
      }
      $('<div class="message message-personal">' + msg + '</div>').appendTo($('.messages-content')).addClass('new');
      setDate();
      $('.message-input').val(null);
      updateScrollbar();
      setTimeout(function() {
        fakeMessage();
      }, 1000 + (Math.random() * 20) * 100);
    }
  
    $('.message-submit').click(function() {
      insertMessage();
    });
  
    $(window).on('keydown', function(e) {
      if (e.which === 13) {
        insertMessage();
        return false;
      }
    });
  
    var Fake = [
      'Hi there, I\'m Jesse and you?',
      'Nice to meet you',
      ':)'
    ];
  
    function fakeMessage() {
      if ($('.message-input').val() !== '') {
        return false;
      }
      $('<div class="message loading new"><figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure><span></span></div>').appendTo($('.messages-content'));
      updateScrollbar();
  
      setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.messages-content')).addClass('new');
        setDate();
        updateScrollbar();
        i++;
      }, 1000 + (Math.random() * 20) * 100);
    }
  
    $('.button').click(function() {
      $('.menu .items span').toggleClass('active');
      $('.menu .button').toggleClass('active');
    });
  
    // Initialize scrollbar after content is loaded
    $messages.mCustomScrollbar();
    setTimeout(function() {
      fakeMessage();
    }, 100);
  });
  