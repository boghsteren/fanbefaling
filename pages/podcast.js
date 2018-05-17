import React from 'react'
import { Segment } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import client from '../services/contentful'
import Head from 'next/head'

export const Podcast = props => {
  return (
    <div>
      <Head />
      <Segment>
        {props.podcast.titel}
      </Segment>
    </div>
  )
}

Podcast.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await client.getEntries({
    'fields.url': id,
    content_type: 'podcast'
  })

  return { podcast: res.items[0] }
}

export default Podcast
