import React from 'react'

export default ({ dark, width, height }) => (
  <div>
    <div
      id="code-sponsor-widget"
      style={{
        backgroundColor: '#2d2d2d',
        width,
        height,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    />
    <script
      type="text/javascript"
      src={`https://app.codesponsor.io/scripts/O6JC6ZWFGnkPaSiGV6rGzA?theme=${dark
        ? 'dark'
        : 'light'}&width=${width}&height=${height}`}
    />
  </div>
)
