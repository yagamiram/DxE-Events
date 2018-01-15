export function getDxESFBayAreaEvents (eventId) {
  let dxeURL = `https://graph.facebook.com/v2.5/${eventId}/events?fields=name,start_time,attending_count,category,description,interested_count&limit=999&since=now&access_token=339134753269160|e17be7c7603d79b8cd99a43461fcd825`
  return fetch(dxeURL)
    .then((resp) => resp.json())
    .then(function (data) {
      return data.data
    })
    .catch(function (error) {
      console.log(JSON.stringify(error))
    })
}
