import React, { Component } from 'react';

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
  return (
    <div>

      {list.map((item) => {
        return (
          <div style={{ display: 'flex' }}>
            <div style={{ marginTop:2, marginRight:8, display: 'inline-block', borderRadius: 8, width: 16, height: 16, background: '#606060' }} />

            <div key={item.id} style={{ marginBottom: 16, display: 'inline-block' }}>
              <span style={{ fontSize: 18, color: 'black' }}>{item.periode}</span>
              <br />
              <span style={{ fontSize: 14, color: 'black' }}>{item.company}</span>
              <br />
              <span style={{ fontSize: 14, color: '#606060' }}>{item.job_role}</span>
            </div>
          </div>
        )
      })}

    </div>
  )
}