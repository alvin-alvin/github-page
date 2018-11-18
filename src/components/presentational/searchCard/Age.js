import React, { Component } from 'react';

export default function AgeCard() {
  return (
    <div style={{display:'flex', flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
      <div style={{}}>
        <span style={{ fontSize: 21, color: 'black' }}>21 Tahun</span>
        <br />
        <span style={{ fontSize: 16, color: '#606060' }}>Palembang, 10 September 1997</span>
      </div>

      <div style={{}}>
        <img style={{ height: 100, width: 100, background: 'red' }} />
      </div>

    </div>
  )
}