import React from 'react'
import {
  Segment,
  Container,
  Image,
  Header,
  Divider,
  Label,
  Grid
} from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import client from '../services/contentful'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import '../style.css'

export const Genre = props => {
  return (
    <div>
      <Head
        title={`${props.genre.fields.titel} podcasts - Fanbefaling`}
        url={`fanbefaling.dk/genre/${props.genre.fields.url}`}
        description={`Find de fedeste podcasts om ${props.genre.fields
          .titel} hos Fanbefaling.`}
        ogImage={props.genre.fields.billede.fields.file.url}
      />
      <Divider hidden />
      <div style={{ margin: '30px' }}>
        <Grid divided columns={2} stackable>
          <Grid.Column width={5}>
            <Header size='huge'>
              {`Podcasts om
              ${props.genre.fields.titel}`}
            </Header>
            <Divider />
            <Image
              size='large'
              verticalAlign='top'
              float='left'
              src={props.genre.fields.billede.fields.file.url}
            />
            <Divider />
            {props.genre.fields.beskrivelse &&
              <ReactMarkdown>
                {props.genre.fields.beskrivelse}
              </ReactMarkdown>}
          </Grid.Column>
          <Grid.Column width={11}>
            <Image.Group size='small'>
              {props.podcasts.map(podcast => {
                return (
                  podcast.fields.kategori.fields.titel ===
                    props.genre.fields.titel &&
                    <Link
                      prefetch
                      passHref
                      as={`/podcast/${podcast.fields.url}`}
                      href={`/podcast?id=${podcast.fields.url}`}
                      key={podcast.fields.url}
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
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

Genre.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await client.getEntries({
    'fields.url': id,
    content_type: 'kategori'
  })
  return {
    genre: res.items[0]
  }
}

export default Genre
