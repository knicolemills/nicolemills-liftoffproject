import { 
  Avatar,
  Container,
  Grid,
  Paper,
  Typography 
} from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pet Profile Page</title>
        <meta name="description" content="Profile page for pet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
        <Container>
          <Grid container spacing={2} >
            <Grid item xs={2} >
              <Paper>
                <Avatar />
                <Typography>
                  Pet Name
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={10} >
              <Paper>
                Body
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Home
