import Head from './head'
import Link from 'next/link'
import {
  Header,
  Menu,
  Dropdown,
  Container,
  MenuHeader,
  Divider,
  Transition
} from 'semantic-ui-react'
import client from '../services/contentful'

const Footer = props =>
  <Transition transitionOnMount duration='1000'>
    <div>
      <div>
        <Divider />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link prefetch href='/privatliv'>
          <a style={{ margin: '20px' }}>Læs vores privatlivspolitik</a>
        </Link>
        <a href='http://www.episodefriis.dk' style={{ margin: '20px' }}>
          Find fede tv-serier hos episodeFriis
        </a>
      </div>
      <div />
    </div>
  </Transition>

export default Footer
