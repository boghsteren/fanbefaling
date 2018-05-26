import App, { Container } from 'next/app'
import React from 'react'
import client from '../services/contentful'
import Nav from '../components/nav'
import Cookiebanner from '../components/cookiebanner'
import Footer from '../components/footer'
import Head from '../components/head'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    const genrer = await client.getEntries({
      content_type: 'kategori',
      order: 'fields.titel'
    })
    const udbydere = await client.getEntries({
      content_type: 'udbyder',
      order: 'fields.navn'
    })
    const podcasts = await client.getEntries({
      content_type: 'podcast'
    })
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, genrer, podcasts, udbydere }
  }

  render () {
    const { Component, pageProps, genrer, podcasts, udbydere } = this.props
    return (
      <Container>
        <Head />
        <Nav genrer={genrer.items} udbydere={udbydere.items} />
        <Component
          {...pageProps}
          podcasts={podcasts.items}
          genrer={genrer.items}
        />
        <Cookiebanner />
        <Footer />
      </Container>
    )
  }
}
