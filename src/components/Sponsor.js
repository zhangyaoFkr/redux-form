import React from 'react'

const Sponsor = ({ dark, width, height }) => (
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

Sponsor.defaultProps = {
  width: 250,
  height: 250
}

export default Sponsor
