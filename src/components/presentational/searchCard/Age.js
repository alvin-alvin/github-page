import React, { Component } from 'react';

export default function AgeCard(){
    return(
        <div style={{flex:1, flexDirection:'column'}}>
        <div style={{}}>
        <span style={{fontSize:24,color:'black'}}>21 Tahun</span>
            <br/>
            <span style={{fontSize:18, color:'#606060'}}>Palembang, 10 September 1997</span>
        </div>

        <div>
            <img style={{height:100, width:100, background:'red'}}/>
        </div>
            
        </div>
    )
}