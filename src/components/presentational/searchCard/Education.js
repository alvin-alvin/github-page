import React from 'react'
import { getTheme } from '../../../helper/Theme'

export default function EducationCard() {

  let styles = getTheme()
  return (
    <div>
      <span style={{...styles.DEFAULT_TEXT_COLOR,margin:0,marginBottom:16,fontSize:24}}>Univarsitas Bina Nusantara</span>
      <br/>
      <div style={{marginTop:8}}/>
      <span style={{...styles.DEFAULT_TEXT_COLOR,fontSize:14}} >Mobile Application and Technology</span>
      <br/>
      <span style={{...styles.DEFAULT_TEXT_COLOR,fontSize:14}} >2015 - Sekarang</span>
    </div>
  )
}