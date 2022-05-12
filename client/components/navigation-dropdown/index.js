import React from 'react'

import Navigation from '../navigation'

import styles from './navigation-dropdown.module.css'

const NavigationDropdown = (props) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.sidebar}>
        <Navigation type={props.type} />
      </div>
    </div>
  )
}

export default NavigationDropdown
