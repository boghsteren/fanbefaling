import Head from './head'
import Link from 'next/link'
import {
  Header,
  Menu,
  Dropdown,
  Container,
  MenuHeader,
  Divider
} from 'semantic-ui-react'
import client from '../services/contentful'

const Footer = props =>
  <div>
    <div>
      <Divider hidden />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link href='/privatliv'>
        <a>Privatliv</a>
      </Link>
    </div>
    <div>
      <Divider hidden />
    </div>
  </div>

export default Footer
