export const displayItems = (setItems) => {
  new Promise((resolve, reject) => {
    const response = fetch("http://localhost:5000/getItems"); //to add proxy
    resolve(response)
  })
    .then((response) => {
      new Promise((resolve, reject) => {
        const jsonData = response.json();
        resolve(jsonData);
      })
        .then((jsonData) => {
          setItems(jsonData);
        })
    })
}

export const getCategories = (setCategories) => {
  new Promise((resolve, reject) => {
    const res = fetch("http://localhost:5000/getCategories");
    resolve(res)
  }).then((res) => {
    new Promise((resolve, reject) => {
      const data = res.json();
      resolve(data);
    }).then((data) => {
      setCategories(data);
    })
  })
}

export const getCharities = (setCharities) => {
  new Promise((resolve, reject) => {
    const res = fetch("http://localhost:5000/getCharities");
    resolve(res)
  }).then((res) => {
    new Promise((resolve, reject) => {
      const data = res.json();
      resolve(data);
    }).then((data) => {
      setCharities(data);
    })
  })
}