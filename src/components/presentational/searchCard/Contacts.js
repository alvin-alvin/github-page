import React from 'react';
import { getTheme } from '../../../helper/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function ContactsCard() {
  const list = [
    {
      id: 1,
      icon: ['fab','instagram'],
      account: '@tanurwijaya',
      link: 'https://www.instagram.com/tanurwijaya/'
    },
    {
      id: 2,
      icon: ['fab','dribbble'],
      account: 'tanurwijaya',
      link: 'https://dribbble.com/tanurwijaya'
    },
    {
      id: 3,
      icon: ['fab','github'],
      account: 'tanurwijaya',
      link: 'https://github.com/tanurwijaya'
    },
    {
      id: 4,
      icon: 'envelope',
      account: 'alvin@tanurwijaya.com',
      link: 'mailto:alvin@tanurwijaya.com'
    },
  ]

  let styles = getTheme()
  return (
    <div>

      {list.map((item) => {
        return (
          <div style={{ display: 'flex', alignItems:'center', marginBottom:16 }}>
            <FontAwesomeIcon icon={item.icon} color="white" />

            <div key={item.id} style={{ display: 'inline-block', marginLeft:8 }}>
            <a href={item.link} style={{ textDecoration: 'none', color: 'black' }}>
              <span style={{ ...styles.DEFAULT_TEXT_COLOR, fontSize: 14 }}>{item.account}</span>
            </a>
            </div>
          </div>
        )
      })}

    </div>
  )
}