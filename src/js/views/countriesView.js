// class CountriesView {
//     _parentElement = document.querySelector('.country');
//     _errorMessage = 'We cannot fin any country. Try again!';
//     _data;

//     addHandlerRender(handler) {
//         ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
//     };

//     render(data) {
//         if(!data || (Array.isArray(data) && data.length === 0)) return 'Error';

//         this._data = data;
//         console.log(data);
//         const markup = `
//         <img class="country__img" src=${this._data.flag} />
//         <div class="country__data">
//           <h3 class="country__name">${this._data.name}</h3>
//           <h4 class="country__region">${this._data.region}</h4>
//           <p class="country__row"><span>👫</span>${this._data.population}</p>
//           <p class="country__row"><span>🏙</span>${this._data.capital}</p> 
//         </div>`;

//         this._parentElement.insertAdjacentHTML("afterbegin", markup);
//     }
// }

// export default new CountriesView();