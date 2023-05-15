import Tracking from 'pages/tracking'
import BlankLayout from '../../@core/layouts/BlankLayout'

function Index() {
  return <Tracking />
}
Index.getLayout = page => <BlankLayout>{page}</BlankLayout>
Index.guestGuard = true

export default Index
