import React from 'react';

let Like = (props) => <i onClick={props.job} 
  className={`cp fa ${props.liked ? 'fa-heart':'fa-heart-o'}`} />;


export default Like;