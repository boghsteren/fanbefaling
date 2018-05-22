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
      <Header textAlign='center'>
        Fanbefaling.dk giver dig en lille, men nøje udvalgt samling podcasts.
      </Header>
    </div>
  </div>

export default Index
