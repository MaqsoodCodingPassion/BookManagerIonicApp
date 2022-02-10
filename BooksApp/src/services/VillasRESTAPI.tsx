const apiEndPoint = "https://nodeapi.pyther.com/api/long-stay"

export const getVillas = async () =>{
  return fetch(apiEndPoint, {
              method: 'get',
                  headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                    }
              })
            .then(response => response.json())
            .then(response => {
              //console.log(JSON.stringify(response));
              return response;
          }).catch(function(error) {
            console.log(error);
        });
};