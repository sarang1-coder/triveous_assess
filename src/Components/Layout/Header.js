import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const auth = getAuth()
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: '2.5rem',
            fontFamily:'Roboto',
            fontWeight: 'bold',
          }}
        >
          NEWS 20
        </Typography>

        <Button color="inherit" onClick={handleSignOut}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
