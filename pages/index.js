import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Meetup 1',
    image: 'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
    address: 'Meetup Address 1'
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    image: 'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
    address: 'Meetup Address 2'
  },
  {
    id: 'm3',
    title: 'Meetup 3',
    image: 'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
    address: 'Meetup Address 3'
  },
]


function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS}/>
    </Layout>
  )
}

export default HomePage