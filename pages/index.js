import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

console.log('hello there')

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    return { title: data.title }
  }

  render() {
    return (
        <div>
            <p>hello there how are you</p>
            <p>{this.props.title}</p>
            <p>Click <Link href="/about"><a>here</a></Link> to read more</p>
        </div>
    )
  }
}