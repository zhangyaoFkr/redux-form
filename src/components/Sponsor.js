import React from 'react'

export default ({ theme } = { theme: 'light' }) => (
  <div>
    <div id="code-sponsor-widget" style={{ textAlign: 'center' }} />
    <script
      type="text/javascript"
      src={`https://app.codesponsor.io/scripts/O6JC6ZWFGnkPaSiGV6rGzA?theme=${theme}`}
    />
  </div>
)
