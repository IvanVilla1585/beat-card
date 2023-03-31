import { useState, useCallback } from 'react'
import { AppBar, Container, Grid, Typography, TextField, Button } from '@mui/material'

import calculateContribution from './calculateContribution'

function App() {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  const onChange = useCallback((event) => {
    setValue(event.target.value)
    const fileReader = new FileReader()

    fileReader.onload = function (event) {
      const content = event.target.result
      const result = calculateContribution(content)

      setMessage(result)
    }

   fileReader.readAsText(event.target.files[0])
  }, [setValue, setMessage])

  const onClick = (event) => {
    event.preventDefault()
    setValue('')
    setMessage('')
  }

  return (
    <Container component='section'>
      <AppBar position='static' sx={{ height: '50px' }}>
        <Typography component='h1' align='center' sx={{ height: '50px', lineHeight: '50px' }}>
          Beat Card
        </Typography>
      </AppBar>
      <Grid container direction='column'>
        <Grid container>
          <Grid item sx={{ margin: '20px 0'}} xs={8}>
              <TextField
                type='file'
                size="small"
                value={value}
                variant="outlined"
                onChange={onChange}
                inputProps={{ accept: '.txt' }}
              />
          </Grid>
          <Grid item sx={{ margin: '20px 0'}} xs={4}>
              <Button
                onClick={onClick}
                variant='contained'
              >
                Clear
              </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center'>
            {message}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
