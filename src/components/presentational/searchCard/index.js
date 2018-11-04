import React, { Component } from 'react';
import styles from './styles'
import AgeCard from './Age'
import EducationCard from './Education'
import ExperienceCard from './Experience'


export default function ({ title }) {

  function renderCard(categories){
    if(title === 'umur'){
      return(
          <AgeCard/>
      )
    }else if(title === 'experience'){
      return(
        <ExperienceCard/>
      )
    }
    else{
      return(
        null
      )
    }
    
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.headerWrapper}>
        <span style={styles.title}>Alvin Tanurwijaya</span>
        <span style={styles.category}> / {title}</span>
      </div>
      <div style={{padding:16}}>
      {renderCard(title)}
      </div>
    </div>
  )
}
