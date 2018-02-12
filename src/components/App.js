import React from 'react'
import Header from './Header'
import SignUp from './SignUp'
import UploadImage from './UploadImage'
import { Button } from 'semantic-ui-react'

const App = () => (
  <div>
    <Header currentUser="user"/>
    <SignUp />
    <UploadImage />
  </div>
)

export default App
