import React from 'react';
import { getTheme } from '../../../helper/Theme';

export default function AgeCard() {
  let styles = getTheme()
  let current = new Date()
  let birth = new Date('10 September 1997')
  let years = 1000 * 60*60*24*365
  return (
    <div style={{display:'flex', flex: 1, flexDirection: 'column', justifyContent:'space-between'}}>

    <img
        alt={'alvin'}
        style={{ height: 'auto', width: 160}}
        src={require("../../../assets/image/alvin2.png")}
        />

      <div style={{}}>
        <span style={{...styles.DEFAULT_TEXT_COLOR, fontSize: 21}}>{Math.round((current-birth)/years)} Tahun</span>
        <br />
        <span style={{...styles.SEMI_DARK_TEXT_COLOR ,fontSize: 16 }}>Palembang, 10 September 1997</span>
      </div>

    </div>
  )
}