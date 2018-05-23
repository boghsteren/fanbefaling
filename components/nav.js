import Head from './head'
import Link from 'next/link'
import {
  Header,
  Menu,
  Dropdown,
  Container,
  MenuHeader
} from 'semantic-ui-react'
import client from '../services/contentful'
import '../style.css'

const Nav = props =>
  <nav>
    <Menu size='large' pointing secondary>
      <Menu.Item
        fitted
        name='FANBEFALING'
        style={{ fontWeight: 'bold' }}
        href='/'
      />
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

export default Nav
