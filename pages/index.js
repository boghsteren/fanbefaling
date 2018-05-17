import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import '../style.css'
import { Segment } from 'semantic-ui-react'
import client from '../services/contentful'

export const Index = props =>
  <div>
    <Head title='Home' />
    <Nav />
    <Segment style={{ margin: '10px' }}>
      {props.podcasts.map(podcast => {
        return (
          <div id={podcast.fields.url}>
            <Link href={`/podcast/${podcast.fields.url}`}>
              <a>
                {podcast.fields.titel}
              </a>
            </Link>
          </div>
        )
      })}
    </Segment>
  </div>

Index.getInitialProps = async function () {
  const res = await client.getEntries({
    content_type: 'podcast'
  })

  return { podcasts: res.items }
}

export default Index
