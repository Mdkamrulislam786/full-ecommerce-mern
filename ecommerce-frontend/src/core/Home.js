import React from 'react'
import Layout from './Layout'
import  {API} from '../config'
const Home = () => {
    return (
        <Layout title="Home page" description="Node React Ecom app" >
          <p>{API}</p>
        </Layout>
    )
}

export default Home
