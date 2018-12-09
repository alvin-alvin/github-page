import React from 'react';
import AgeCard from './Age'
import EducationCard from './Education'
import ExperienceCard from './Experience'
import PoopCard from './Poop'
import DefaultCard from './Default'
import {RESPONSE_LIST} from '../../../helper/ResponseList'
import { getTheme } from '../../../helper/Theme';


export default function ({ title }) {

  let styles = getTheme()

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
        return DefaultCard(RESPONSE_LIST[categories.toUpperCase()])
    }

  }

  return (
    <div style={styles.RESULT_CARD_WRAPPER}>
      <div style={styles.RESULT_CARD_HEADER}>
        <span style={styles.RESULT_CARD_TITLE}>Alvin Tanurwijaya</span>
        <span style={styles.RESULT_CARD_CATEGORY}> / {title}</span>
      </div>
      <div style={{ padding: 16 }}>
        {renderCard(title)}
      </div>
    </div>
  )
}
