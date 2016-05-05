import React from 'react'

type Props = {
  user: Object
}

const ProfilePage = (props: Props) => {
  const { user } = props
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default ProfilePage
