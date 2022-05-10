import { useRouter } from 'next/router'

function Detailpage() {
  const router = useRouter()
  const { newsId } = router.query

  return (
    <div>Detailpage {newsId}</div>
  )
}

export default Detailpage 