import Link from 'next/link'

export default () => (
  <div className="menu">
    <style jsx>{`
      .menu {
        border-bottom: #eee 1px solid;
        padding: 10px;
      }
      .menu a {
        margin-right: 10px;
      }
      .menu a:link,
      .menu a:visited {
        color: gray;
      }
      .menu a:hover,
      .menu a:active {
        color: #444;
      }
    `}</style>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
  </div>
)
