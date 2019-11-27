function hatsToRats() {
    var html = document.querySelector('html');
    var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      node.nodeValue = node.nodeValue.replace(/The search engine that doesn't track you./, 'The search engine that doesn\'t track you...')
      node.nodeValue = node.nodeValue.replace(/Help Spread DuckDuckGo!/, 'Honk!')
      
    }
}

setTimeout(
  function() { 
    document.querySelectorAll('.logo_homepage')[1].style.backgroundImage = 'url(\'https://i.imgur.com/0sPnEXE.png\')' 
  }, 1)

hatsToRats()