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
  Divider
} from 'semantic-ui-react'
import client from '../services/contentful'

const Index = props =>
  <div>
    <Head title='Forside - Fanbefaling' />
    <Image bordered src='../static/fanbefaling_banner.png' fluid />
    <div style={{ margin: '30px', display: 'flex', justifyContent: 'center' }}>
      <Header textAlign='center' size='large'>
        Fanbefaling giver dig en lille, men nøje udvalgt samling podcasts.
      </Header>
    </div>
    <Divider />
    <Header size='large' textAlign='center'>
      Det jeg hører lige nu
    </Header>
    <div>
      {props.podcasts.map(podcast => {
        return (
          podcast.fields.featured === true &&
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '30px'
            }}
          >
            <div>
              <Divider />
              <Image
                centered
                className='linkimage'
                size='small'
                src={podcast.fields.billede.fields.file.url}
              />
              <Header size='large' sub textAlign='center'>
                {podcast.fields.blurb}
              </Header>
            </div>
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
          <div style={{ margin: '10px' }}>
            <Link
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
                  content: `${genre.fields.titel}`,
                  textAlign: 'center'
                }}
              />
            </Link>
          </div>
        )
      })}
    </div>
  </div>

export default Index
