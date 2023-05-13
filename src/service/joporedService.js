const APIBASE = 'https://startup-summer-2023-proxy.onrender.com/2.0/'
const SECRETKEY = 'GEU4nvd3rej*jeh.eqp'
const login = 'login=sergei.stralenia@gmail.com',
  password = 'password=paralect123',
  client_id = 'client_id=2356',
  client_secret =
    'client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  hr = 'hr=0',
  xApiAppId =
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'

async function getAuthToken() {
  const response = await fetch(
    `${APIBASE}oauth2/password/?${login}&${password}&${client_id}&${client_secret}&${hr}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': SECRETKEY,
      },
    }
  )
  const data = await response.json()
  return data.access_token
}

export async function getVacancies(numPage = 1) {
  const response = await fetch(
    `${APIBASE}vacancies/?page=${numPage}&count=4&no_agreement=1`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': SECRETKEY,
        Authorization: 'Bearer ' + await getAuthToken(),
        'X-Api-App-Id': xApiAppId,
      },
    }
  )
  const data = await response.json()
  return data.objects
}


