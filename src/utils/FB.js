export function getDxESFBayAreaEvents(dxeURL) {
    return fetch(dxeURL)
        .then((resp) => resp.json())
        .then(function(data) {
            return data.data
        })
        .catch(function(error) {
            console.log(JSON.stringify(error));
        });
}


