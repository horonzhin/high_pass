// import width from './test.js'
// console.log(width);

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.76245235, 37.61629223],
    controls: [],
    zoom: 13,
  });

  const myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.76948022, 37.63891581]
    }
  });

  myPlacemark = new ymaps.Placemark([55.76948022, 37.63891581], {
    hintContent: 'Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82'
  },{
    iconLayout: 'default#image',
    iconImageHref:'../img/placemark.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [0, 0]
  }),
  myPlacemark.events.add('click', function () {
    if (!document.querySelector('.contacts__map-info').classList.contains('visible')) {
      document.querySelector('.contacts__map-info').classList.add('visible');
      gsap.fromTo('.contacts__map-info',{
        x: -800,
        display: "none"
      },{
        x: 0,
        display: "block"
      });
    }
  })

  myMap.geoObjects.add(myPlacemark);                                            /* добавление метки */
  myMap.behaviors.disable([
    'scrollZoom', 'dblClickZoom', 'multiTouch', 'rightMouseButtonMagnifier',    /* полное отключение зума карты */
    'leftMouseButtonMagnifier'
  ]);
  myMap.behaviors.disable('drag');                                              /* полное отключение перетаскивания карты на телефонах */
}