import React from 'react'
import Link from 'next/link'

export default () => (
    <div>
        <p>Welcome to About!</p>
        <p>Click <Link href="/index"><a>here</a></Link> to go to index</p>
    </div>
)