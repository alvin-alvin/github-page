import React, { Component } from 'react';
import styles from './styles'
import AgeCard from './Age'
import EducationCard from './Education'
import ExperienceCard from './Experience'
import PoopCard from './Poop'


export default function ({ title }) {

  function renderCard(categories) {
    switch (title) {
      case 'umur':
        return <AgeCard />
      case 'experience':
        return <ExperienceCard />
      case 'kuliah':
        return <EducationCard />
      case 'poo':
        return <PoopCard />
      default:
        return null
    }

  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.headerWrapper}>
        <span style={styles.title}>Alvin Tanurwijaya</span>
        <span style={styles.category}> / {title}</span>
      </div>
      <div style={{ padding: 16 }}>
        {renderCard(title)}
      </div>
    </div>
  )
}
