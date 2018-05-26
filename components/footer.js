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
          <a>Privatliv</a>
        </Link>
      </div>
      <div>
        <Divider hidden />
      </div>
    </div>
  </Transition>

export default Footer
