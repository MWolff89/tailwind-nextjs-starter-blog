// public/VoiceflowScript.js

;(function (d, t) {
  var v = d.createElement(t),
    s = d.getElementsByTagName(t)[0]
  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: '656d9c2464443900062f1ea3' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
    })
  }
  v.src = 'https://cdn.voiceflow.com/widget/bundle.mjs'
  v.type = 'text/javascript'
  s.parentNode.insertBefore(v, s)
})(document, 'script')
