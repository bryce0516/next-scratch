import { Metadata } from 'next';
import React from 'react'

type Props = {}


export const metadata: Metadata = {
  title: {
    absolute: "Absolute Profile Page",
  },
};
const Profile = (props: Props) => {
  return (
    <div> this is Profile</div>
  )
}

export default Profile