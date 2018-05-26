import Head from './head'
import Link from 'next/link'
import {
  Header,
  Menu,
  Dropdown,
  Container,
  MenuHeader,
  Transition
} from 'semantic-ui-react'
import client from '../services/contentful'
import '../style.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import { withRouter } from 'next/router'

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Nav = props =>
  <Transition transitionOnMount duration='300' animation='fade'>
    <nav>
      <Menu size='large' pointing secondary>
        <Link href='/'>
          <Menu.Item fitted name='FANBEFALING' style={{ fontWeight: 'bold' }} />
        </Link>
        <Dropdown item text='Genrer'>
          <Dropdown.Menu>
            {props.genrer.map(genre => {
              return (
                <Link
                  prefetch
                  as={`/genre/${genre.fields.url}`}
                  href={`/genre?id=${genre.fields.url}`}
                  key={genre.fields.url}
                >
                  <Dropdown.Item>
                    {genre.fields.titel}
                  </Dropdown.Item>
                </Link>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='show-for-desktop' item text='Udbydere'>
          <Dropdown.Menu className='show-for-desktop'>
            {props.udbydere.map(udbyder => {
              return (
                <Link
                  prefetch
                  as={`/udbyder/${udbyder.fields.url}`}
                  href={`/udbyder?id=${udbyder.fields.url}`}
                  key={udbyder.fields.url}
                >
                  <Dropdown.Item>
                    {udbyder.fields.navn}
                  </Dropdown.Item>
                </Link>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </nav>
  </Transition>

export default withRouter(Nav)
