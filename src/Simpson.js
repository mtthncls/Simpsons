import React from 'react'

const Avatar = props => (
    <div>
        <img src={props.image} />
        <h4>{props.firstName}</h4>
        <h3>{props.lastName.toUpperCase()}</h3>
    </div>
)

export default Avatar