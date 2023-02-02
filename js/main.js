var selector = document.getElementById("phone");

var im = new Inputmask("9999999999");

im.mask(selector);

let validation = new JustValidate('#form',{
  errorLabelStyle: {
          color: '#FF5C00',
        },
})

validation.addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Вы ввели много букв',
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email не Email ',
    },
  ])

  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      rule: 'number',
      errorMessage: 'Вы не ввели телефон',
    },
  ])


const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ':)'
})

ymaps.ready(init);
function init() {
  // Creating the map.
  var myMap = new ymaps.Map("map", {
    // The map center coordinates.
    // Default order: “latitude, longitude”.
    // To not manually determine the map center coordinates,
    // use the Coordinate detection tool.
    center: [32.81790756831776, 34.96150549999995],
    // Zoom level. Acceptable values:
    // from 0 (the entire world) to 19.
    zoom: 14
  });
  // myGeoObject = new ymaps.GeoObject({
  //   geometry: {
  //     type: "Point", // geometry type - point
  //     coordinates: [55.8, 37.8] // координаты точки
  //   }
  // });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/geoObject.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  }),

    // myMap.geoObjects.add(myGeoObject); // Placing a geo object on the map.
    myMap.geoObjects.add(myPlacemark);
}

// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:
tippy('.tippy-img', {
  content: 'Глава 2, страница 176',
  duration: 0,
  arrow: true,
});


Array.prototype.forEach.call(
  document.querySelectorAll('.scroll'),
  el => new SimpleBar()
);

