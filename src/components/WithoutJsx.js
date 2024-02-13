import React from 'react'

function WithoutJsx() {
return React.createElement('div', null, React.createElement('h1', {id: 'demo'}, 'This is without JSX'))
}

export default WithoutJsx