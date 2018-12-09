import React, { Component } from 'react';
import { getTheme } from '../../../helper/Theme';

export default function DefaultCard(text) {
  let styles = getTheme()
  return (
    <div style={{display:'flex', flex: 1}}>
        <span style={styles.DEFAULT_CARD_TEXT}>{text}</span>
    </div>
  )
}