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

export const displayAllItems = (setItems) => {
  new Promise((resolve, reject) => {
    const response = fetch("http://localhost:5000/getAllItems"); //to add proxy
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


export const displayShopBagItems = (setItems) => {
  new Promise((resolve, reject) => {
    const response = fetch("http://localhost:5000/get-shopbag-items"); //to add proxy
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

export const getCheckedOutItems = (checkedItems, setCheckedOutItems) => {
  new Promise((resolve, reject) => {
    const result = fetch(`http://localhost:5000/checkout/:method?items={${checkedItems}}`);
    resolve(result)
  }).then((result) => {
    new Promise((resolve, reject) => {
      const items = result.json();
      resolve(items)
    }).then((items) => {
      setCheckedOutItems(items)
    })
  }).catch((error) => {
    console.error(error)
  })
}

export const getSubtotal = (checkedItems, setSubtotal) => {
  new Promise((resolve, reject) => {
    const result = fetch(`http://localhost:5000/subtotal?items={${checkedItems}}`);
    resolve(result)
  }).then((result) => {
    new Promise((resolve, reject) => {
      const subtotal = result.json();
      resolve(subtotal)
    }).then((subtotal) => {
      setSubtotal(parseInt(subtotal[0].subtotal))
    })
  }).catch((error) => {
    console.error(error)
  })
}