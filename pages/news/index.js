import Link from 'next/link'

function NewsPage() {
  return (
    <div>
      <h1>NewsPage</h1>
      <ul>
        <Link href="/news/4">
          <a><li>News 4</li></a>
        </Link>
        <Link href="/news/9">
          <a><li>News 9</li></a>
        </Link>
      </ul>         
    </div>
  )
}

export default NewsPage