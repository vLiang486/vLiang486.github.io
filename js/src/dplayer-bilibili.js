function dplayerbilibili(av){
  document.write('<div id="dplayer'+ av +'" class="dplayer" style="margin-bottom: 20px;"></div>');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
              var response = JSON.parse(xhr.responseText);
              var dp1 = new DPlayer({
                element: document.getElementById('dplayer'+ av),                       // Optional, player element
                autoplay: false,                                                   // Optional, autoplay video, not supported by mobile browsers
                theme: '#FADFA3',                                                  // Optional, theme color, default: #b7daff
                loop: true,                                                        // Optional, loop play music, default: true
                lang: 'zh',                                                        // Optional, language, `zh` for Chinese, `en` for English, default: Navigator language
                screenshot: false,                                                  // Optional, enable screenshot function, default: false, NOTICE: if set it to true, video and video poster must enable Cross-Origin
                hotkey: true,                                                      // Optional, binding hot key, including left right and Space, default: true
                preload: 'auto',                                                   // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
                video: {                                                           // Required, video info
                    url: response.video.durl.backup_url.url[0],                                         // Required, video url
                    // pic: 'http://i1.hdslb.com/bfs/archive/1c90451ef09d208042de82ea76d280c30768a6f4.jpg'
                },
                danmaku: {                                                         // Optional, showing danmaku, ignore this option to hide danmaku
                  id: av,                                        // Required, danmaku id, NOTICE: it must be unique, can not use these in your new player: `https://api.prprpr.me/dplayer/list`
                  api: 'https://api.prprpr.me/dplayer/',                             // Required, danmaku api
                  token: 'tokendemo',                                            // Optional, danmaku token for api
                  maximum: 1000,                                                 // Optional, maximum quantity of danmaku
                    addition: ['https://api.prprpr.me/dplayer/bilibili?aid='+ av]   // Optional, additional danmaku, see: `Bilibili 弹幕支持`
                }
              });
          }
          else {
              console.log('Request was unsuccessful: ' + xhr.status);
          }
      }
  };
  xhr.open('get', 'https://api.prprpr.me/dplayer/video/bilibili?aid='+ av, true);
  xhr.send(null);
}
