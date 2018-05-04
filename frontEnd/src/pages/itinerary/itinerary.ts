import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Geolocation } from "@ionic-native/geolocation";

/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: "page-itinerary",
  templateUrl: "itinerary.html"
})
export class ItineraryPage {
  itineraryList: string[];
  @ViewChild("map") mapElement: ElementRef;
  map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public geolocation: Geolocation
  ) {
    console.log(storage.keys());
    this.storage.keys().then(data => {
      this.itineraryList = data;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ItineraryPage");
    this.loadMap();
  }

  deleteItem(item: any) {
    this.storage.remove(item);
    this.navCtrl.pop();
    this.navCtrl.push(ItineraryPage);
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(position => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
