import React, { Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'
import AllQuote from './pages/AllQuote'
// import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'
import QuoteDetails from './pages/QuoteDetails'

const NewQuote = React.lazy(() => import('./pages/NewQuote'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails></QuoteDetails>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App
