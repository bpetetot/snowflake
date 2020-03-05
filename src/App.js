import React from 'react'

import { ReactComponent as SnowflakeLogo } from './snowflake.svg'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <SnowflakeLogo
            className="mx-auto h-12 w-auto text-indigo-600"
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  )
}

export default App
