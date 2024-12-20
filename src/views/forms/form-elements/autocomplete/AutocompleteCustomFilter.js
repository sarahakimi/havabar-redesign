// ** MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'

// ** Data
import { top100Films } from '@fake-db/autocomplete'

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title
})

function AutocompleteCustomFilter() {
  return (
    <Autocomplete
      options={top100Films}
      filterOptions={filterOptions}
      id='autocomplete-custom-filter'
      getOptionLabel={option => option.title}
      renderInput={params => <TextField {...params} label='Custom filter' />}
    />
  )
}

export default AutocompleteCustomFilter
