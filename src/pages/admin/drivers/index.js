import Drivers from "pages/drivers"

function ACLPage() {
  return (<Drivers/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
