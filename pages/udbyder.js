import React from 'react'
import {
  Segment,
  Container,
  Image,
  Header,
  Divider,
  Label,
  Grid,
  Transition
} from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import client from '../services/contentful'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import '../style.css'

export const Udbyder = props => {
  return (
    <Transition transitionOnMount duration='500' animation='fade'>
      <div>
        <Head
          title={`${props.udbyder.fields.navn} pocasts - Fanbefaling`}
          url={`fanbefaling.dk/udbyder/${props.udbyder.fields.url}`}
          description={`Find de fedeste podcasts fra ${props.udbyder.fields
            .titel} hos Fanbefaling`}
          ogImage={props.udbyder.fields.billede.fields.file.url}
        />
        <Divider hidden />
        <div style={{ margin: '30px' }}>
          <Grid divided columns={2} stackable>
            <Grid.Column width={5}>
              <Header size='huge'>
                {`Podcasts fra ${props.udbyder.fields.navn}`}
              </Header>
              <Divider />
              <Image
                size='large'
                verticalAlign='top'
                float='left'
                src={props.udbyder.fields.billede.fields.file.url}
              />
              <Divider />
              {props.udbyder.fields.beskrivelse &&
                <ReactMarkdown>
                  {props.udbyder.fields.beskrivelse}
                </ReactMarkdown>}
            </Grid.Column>
            <Grid.Column width={11}>
              <Image.Group size='small'>
                {props.podcasts.map(podcast => {
                  return (
                    podcast.fields.udbyder.sys.id === props.udbyder.sys.id &&
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
    </Transition>
  )
}

Udbyder.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await client.getEntries({
    'fields.url': id,
    content_type: 'udbyder'
  })
  return {
    udbyder: res.items[0]
  }
}

export default Udbyder
