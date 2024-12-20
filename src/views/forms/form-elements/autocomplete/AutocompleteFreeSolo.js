// ** MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// ** Data
import { top100Films } from '@fake-db/autocomplete'

function AutocompleteFreeSolo() {
  return (
    <Autocomplete
      freeSolo
      sx={{ width: 250 }}
      id='autocomplete-free-solo'
      options={top100Films.map(option => option.title)}
      renderInput={params => <TextField {...params} label='Free Solo' />}
    />
  )
}

export default AutocompleteFreeSolo
