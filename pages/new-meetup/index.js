import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Layout from '../../components/layout/Layout'

function newMeetupPage() {
  const onAddMeetup = () => {

  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </Layout>
    
  )
}

export default newMeetupPage