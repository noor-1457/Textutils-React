import React from 'react'

function Alert(props) {
  return (
<div>
  <div style={{height:'50px'}}>
 {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}</strong> {props.alert.msg}

</div>}
</div>
</div>
)
}

export default Alert