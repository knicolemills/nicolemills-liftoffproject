import { 
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography 
  } from '@mui/material'
  import type { NextPage } from 'next'
  import Head from 'next/head'
  import Link from 'next/link'
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
            <Box display="flex" justifyContent="center">
              <Paper
                  style={{
                    maxWidth: '500px'
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    p={4}
                  >
                    <Typography variant="h4">
                      Welcome to PetBook
                    </Typography>
                    <Box pt={2} style={{
                      width: '100%',
                    }}>
                      <TextField
                        fullWidth
                        label="Email"
                      />
                    </Box>
                    <Box pt={2} pb={2} style={{
                      width: '100%',
                    }}>
                      <TextField
                        fullWidth
                        label="Password"
                      />
                    </Box>
                    <Link href="profile">
                      <Button
                        variant="contained"
                      >
                        Login
                      </Button>
                    </Link>
                  </Box>
                </Paper>
            </Box>
          </Container>
        </main>
      </div>
    )
  }
  
  export default Home
  