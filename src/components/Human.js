import React from 'react'

function Human({humanName}) {
    if(humanName === 'dog'){
        throw new Error('Not A Human')
    }
  return (
    <div>
        {humanName}
    </div>
  )
}

export default Human