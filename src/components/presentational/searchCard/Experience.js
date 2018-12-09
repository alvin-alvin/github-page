import React, { Component } from 'react';
import { getTheme } from '../../../helper/Theme';

export default function ExperienceCard() {
  const list = [
    {
      id: 1,
      periode: 'Mar 2018 - Sekarang',
      company: 'Ralali.com',
      job_role: 'React Native Developer'
    },
    {
      id: 2,
      periode: 'Apr 2017 - Sep 2017',
      company: 'Maven Mobile',
      job_role: 'Parttime Android Developer'
    },
    {
      id: 3,
      periode: 'Apr 2017 - Sep 2017',
      company: 'ITEI Apps (paid project)',
      job_role: 'Fullstack Developer & UI Designer'
    }
  ]

  let styles = getTheme()
  return (
    <div>

      {list.map((item) => {
        return (
          <div style={{ display: 'flex' }}>
            <div style={styles.BULLETING} />

            <div key={item.id} style={{ marginBottom: 16, display: 'inline-block' }}>
              <span style={{ ...styles.DEFAULT_TEXT_COLOR, fontSize: 18 }}>{item.periode}</span>
              <br />
              <span style={{ ...styles.DEFAULT_TEXT_COLOR,fontSize: 14 }}>{item.company}</span>
              <br />
              <span style={{ ...styles.SEMI_DARK_TEXT_COLOR ,fontSize: 14}}>{item.job_role}</span>
            </div>
          </div>
        )
      })}

    </div>
  )
}