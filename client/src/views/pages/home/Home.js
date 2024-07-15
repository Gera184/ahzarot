import React from 'react'
import Title from '../../../components/title/Title'
import { Form } from '../../../components/form/Form'

export const Home = ({ homeData, direction }) => {
  return (
    <div className="home_wrapper">
      <Title titleData={homeData.home} />
      <Form formData={homeData.home.form} direction={direction} />
    </div>
  )
}
