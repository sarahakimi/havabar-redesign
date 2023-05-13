import Grid from '@mui/material/Grid'

function ACLPage() {
  return <Grid container spacing={6} />
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
