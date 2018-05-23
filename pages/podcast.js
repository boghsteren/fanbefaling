import React from 'react'
import {
  Segment,
  Image,
  Grid,
  Header,
  Divider,
  Container
} from 'semantic-ui-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import client from '../services/contentful'
import Head from 'next/head'
import Nav from '../components/nav'
import '../style.css'

export const Podcast = props => {
  return (
    <div>
      <Head
        title={`${props.podcast.fields.titel} - Fanbefaling`}
        url={`fanbefaling.dk/podcast/${props.podcast.fields.url}`}
        description={`${props.podcast.fields
          .blurb} - Fanbefalings anbefaling af ${props.podcast.fields.titel}`}
        ogImage={props.podcast.fields.billede.fields.file.url}
      />
      <div style={{ margin: '30px' }}>
        <Grid divided stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Link passHref href={props.podcast.fields.link}>
                <Image
                  src={props.podcast.fields.billede.fields.file.url}
                  size='large'
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <Header size='huge'>
                    {props.podcast.fields.titel}
                  </Header>
                  <Header size='huge' sub>
                    <ReactMarkdown>
                      {props.podcast.fields.blurb}
                    </ReactMarkdown>
                  </Header>
                </div>
                <div>
                  <Link
                    prefetch
                    as={`/udbyder/${props.podcast.fields.udbyder.fields.url}`}
                    href={`/udbyder?id=${props.podcast.fields.udbyder.fields
                      .url}`}
                    key={props.podcast.fields.udbyder.fields.url}
                    passHref
                  >
                    <Image
                      size='tiny'
                      src={
                        props.podcast.fields.udbyder.fields.billede.fields.file
                          .url
                      }
                    />
                  </Link>
                </div>
              </div>
              <Divider />
              <ReactMarkdown>
                {props.podcast.fields.beskrivelse}
              </ReactMarkdown>
              <Divider />
              <Header sub size='large'>
                Hvor skal man starte?
              </Header>
              <ReactMarkdown>
                {props.podcast.fields.startsted}
              </ReactMarkdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '30px'
            }}
          >
            <Header centered>
              {`Andre podcasts om `}
              {props.podcast.fields.kategori.fields.titel}
            </Header>
          </div>
          <Grid>
            <Grid.Row>
              <Image.Group size='small'>
                {props.podcasts.map(podcast => {
                  return (
                    podcast.fields.kategori.sys.id[0] ===
                      props.podcast.fields.kategori.sys.id[0] &&
                    podcast.sys.id !== props.podcast.sys.id &&
                    <Link
                      prefetch
                      passHref
                      as={`/podcast/${podcast.fields.url}`}
                      href={`/podcast?id=${podcast.fields.url}`}
                    >
                      <Image
                        className='linkimage'
                        bordered
                        src={podcast.fields.billede.fields.file.url}
                      />
                    </Link>
                  )
                })}
              </Image.Group>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}

Podcast.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await client.getEntries({
    content_type: 'podcast'
  })
  return {
    podcast: res.items.filter(item => item.fields.url === id)[0]
  }
}

export default Podcast
