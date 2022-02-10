const apiEndPoint = "https://nodeapi.pyther.com/api/book"

export const getBooks = async () =>{
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

export const addBook = async (record:any) =>{
return fetch(apiEndPoint, {
method: 'post',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    },
  body:JSON.stringify(record)
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}

export const updateBook = async (record:any) =>{
return fetch(apiEndPoint, {
method: 'put',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    },
  body:JSON.stringify(record)
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}

export const deleteBook = async (id:any) =>{
return fetch(apiEndPoint, {
method: 'delete',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    },
  body:JSON.stringify({id})
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}

export const getBookById = async (id:any) =>{
return fetch(apiEndPoint + "/"+id, {
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
}