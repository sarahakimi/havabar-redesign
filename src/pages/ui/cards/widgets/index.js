// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CardWidgetsVisitsByDay from 'views/ui/cards/widgets/CardWidgetsVisitsByDay'
import CardWidgetsWeeklySales from 'views/ui/cards/widgets/CardWidgetsWeeklySales'
import CardWidgetsPerformance from 'views/ui/cards/widgets/CardWidgetsPerformance'
import CardWidgetsSalesCountry from 'views/ui/cards/widgets/CardWidgetsSalesCountry'
import CardWidgetsMonthlyBudget from 'views/ui/cards/widgets/CardWidgetsMonthlyBudget'
import CardWidgetsExternalLinks from 'views/ui/cards/widgets/CardWidgetsExternalLinks'
import CardWidgetsWeeklyOverview from 'views/ui/cards/widgets/CardWidgetsWeeklyOverview'
import CardWidgetsOrganicSessions from 'views/ui/cards/widgets/CardWidgetsOrganicSessions'
import CardWidgetsProjectTimeline from 'views/ui/cards/widgets/CardWidgetsProjectTimeline'
import CardWidgetsActivityTimeline from 'views/ui/cards/widgets/CardWidgetsActivityTimeline'
import CardWidgetsTotalTransactions from 'views/ui/cards/widgets/CardWidgetsTotalTransactions'
import CardWidgetsPerformanceOverview from 'views/ui/cards/widgets/CardWidgetsPerformanceOverview'

function CardWidgets() {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <CardWidgetsTotalTransactions />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsPerformanceOverview />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsVisitsByDay />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsOrganicSessions />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsWeeklySales />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardWidgetsProjectTimeline />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsMonthlyBudget />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsPerformance />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsExternalLinks />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsSalesCountry />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardWidgetsActivityTimeline />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWidgetsWeeklyOverview />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CardWidgets
