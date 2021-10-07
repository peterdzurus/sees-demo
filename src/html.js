import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function (i, s, o, r, g, v, a, m) {
            g = v ? g + '?v=' + v : g; i['BrandEmbassy'] = r;
            i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }; i[r].l = +new Date();
            a = s.createElement(o); m = s.getElementsByTagName(o)[0]; a.async = 1;
            a.src = g + '?' + Math.round(Date.now() / 1000 / 3600); m.parentNode.insertBefore(a, m)
            }) (window, document, 'script', 'brandembassy', 'https://livechat-static.brandembassy.com/4/chat.js');
          
            brandembassy('init', 7299, 'chat_9b5788b9-8071-41c6-aba2-aa6eeaddb378');
            brandembassy('setWindowWidth', '340px');
            brandembassy('setWindowHeight', '60%');
            
              `,
        }}
      />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
