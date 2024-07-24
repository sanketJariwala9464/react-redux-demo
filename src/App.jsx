import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'
import DefaultLayout from './layouts/default'

function App() {
  return (
    <div>
      <DefaultLayout>
        <Suspense fallback={<p>Loading...</p>}>
          {useRoutes(router)}
        </Suspense>
      </DefaultLayout>
    </div>
  )
}

export default App
