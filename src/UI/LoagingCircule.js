import React from 'react'
import styleClass from './LoadingCircule.module.css';

const LoagingCircule = () => {
  return (
    <div className={styleClass.loadingContainer}>
        <div className={styleClass.loader}>
            <div></div>
        </div>
    </div>
  )
}

export default LoagingCircule