import {ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './Backend/config';
import {store} from './redux/store';

const products = [];
const productNames = new Map();

export const getProduct = id => products[id];
export const getProductID = name => productNames.get(name);

export const addToCart = (name) => {
  store.dispatch({type: 'add', payload: getProductID(name)});
  alert(`Added ${name} to Cart!`);
}

const addProduct = (product) => {
  products.push({name: product.name, price: product.price, uri: product.uri});
}

export const populateMap = () => {
  addProduct({name: 'Air Filter', uri: require('./Image/airfilter_1.png'), price: 100});
  addProduct({name: 'Anti Freeze', uri: require('./Image/airfilter_1.png'), price: 200});
  addProduct({name: 'Battery', uri: require('./Image/battery_1.png'), price: 450});
  addProduct({name: 'Blades', uri: require('./Image/blades_1.png'), price: 300});
  addProduct({name: 'Oil Filter', uri: require('./Image/oil_1.png'), price: 200});
  addProduct({name: 'Tyre (Car)', uri: require('./Image/tire_1.png'), price: 200});
  addProduct({name: 'Allignments', uri: require('./Image/wheels_1.png'), price: 200});
  addProduct({name: 'Brakes', uri: require('./Image/brakes_1.png'), price: 200});

  products.forEach((value, index) => {
    productNames.set(value.name, index);
  });
}

export async function uploadImage(uri, path, fName) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const imageRef = ref(storage, `${path}/${fName}.jpeg`);
  
    const snapshot = await uploadBytes(imageRef, blob, {
      contentType: "image/jpeg",
    });
  
    blob.close();
  
    const url = await getDownloadURL(snapshot.ref);
  
    return { url, fName };
  }

  export {products};