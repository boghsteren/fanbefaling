import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import '../style.css'
import {
  Container,
  Segment,
  Item,
  Image,
  Header,
  Divider,
  Transition
} from 'semantic-ui-react'
import client from '../services/contentful'

const Index = props =>
  <Transition transitionOnMount duration='500' animation='fade'>
    <div>
      <Head title='Forside - Fanbefaling' />
      <Image bordered src='../static/fanbefaling_banner.png' fluid />
      <div
        style={{ margin: '30px', display: 'flex', justifyContent: 'center' }}
      >
        <Header textAlign='center' size='large'>
          Fanbefaling giver dig en lille, men nøje udvalgt samling podcasts.
        </Header>
      </div>
      <Divider />
      <Header size='large' textAlign='center'>
        Det jeg hører lige nu
      </Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {props.podcasts.map(podcast => {
          return (
            podcast.fields.featured === true &&
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              key={podcast.fields.titel}
            >
              <Divider hidden />
              <Link
                prefetch
                passHref
                as={`/podcast/${podcast.fields.url}`}
                href={`/podcast?id=${podcast.fields.url}`}
                key={podcast.fields.url}
              >
                <Image
                  centered
                  className='linkimage'
                  size='small'
                  src={podcast.fields.billede.fields.file.url}
                />
              </Link>
              <Header size='large' sub textAlign='center'>
                {podcast.fields.blurb}
              </Header>
              <Divider hidden />
            </div>
          )
        })}
      </div>
      <Divider />
      <Header textAlign='center'>Genrer</Header>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {props.genrer.map(genre => {
          return (
            <div key={genre.fields.titel} style={{ margin: '10px' }}>
              <Link
                prefetch
                passHref
                as={`/genre/${genre.fields.url}`}
                href={`/genre?id=${genre.fields.url}`}
                key={genre.fields.url}
              >
                <Image
                  className='genreitem'
                  src={genre.fields.billede.fields.file.url}
                  size='small'
                  label={{
                    attached: 'bottom',
                    content: `${genre.fields.titel}`
                  }}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  </Transition>

export default Index
