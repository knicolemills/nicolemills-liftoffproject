import { 
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography 
} from '@mui/material'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
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
  );
}

export default Home
