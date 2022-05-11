import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function newMeetupPage() {
  const onAddMeetup = () => {
    
  }
  return (
    <NewMeetupForm onAddMeetup={onAddMeetup} />
  )
}

export default newMeetupPage