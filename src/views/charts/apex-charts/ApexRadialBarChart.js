// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Component Import
import ReactApexcharts from '@core/components/react-apexcharts'

const radialBarColors = {
  series1: '#fdd835',
  series2: '#40CDFA',
  series3: '#00d4bd',
  series4: '#7367f0',
  series5: '#FFA1A1'
}

function ApexRadialBarChart() {
  const options = {
    colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series4],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '30%'
        },
        track: {
          margin: 15
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
            fontFamily: 'Montserrat'
          },
          value: {
            fontSize: '1rem',
            fontFamily: 'Montserrat'
          },
          total: {
            show: true,
            label: 'Comments',
            fontSize: '1.125rem',
            formatter(w) {
              const totalValue = w.globals.seriesTotals.reduce((a, b) => a + b, 0) / w.globals.series.length
              if (totalValue % 1 === 0) {
                return `${totalValue}%`
              }

              return `${totalValue.toFixed(2)}%`
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Comments', 'Replies', 'Shares']
  }

  return (
    <Card>
      <CardHeader title='Statistics' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <ReactApexcharts options={options} series={[80, 50, 35]} type='radialBar' height={400} />
      </CardContent>
    </Card>
  )
}

export default ApexRadialBarChart
