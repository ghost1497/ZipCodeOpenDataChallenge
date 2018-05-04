import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Geolocation } from "@ionic-native/geolocation";
import { AlertController } from "ionic-angular";

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
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  destination : any;
  lat : string;
  long: string;
  origin : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public geolocation: Geolocation,
    public alertCtrl: AlertController
  ) {
    console.log(storage.keys());
    this.storage.keys().then(data => {
      this.itineraryList = data;
    });
    let alert = this.alertCtrl.create({
      title: 'Travel Advisory Alert',
      subTitle: 'Your travel route contructed for your itinerary contains a travel advisory: \nType: Construction   \nCounty: New Castle County  \nDate:  05/04/2018 9:10 AM \nNotice: 301 SB HAS INTERMITTENT LANE CLOSURES UNTIL AT STRAWBERRY LANE UNTIL 4PM.',
      buttons: ['OK']
    });
    alert.present();

    this.getLocation();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ItineraryPage");
    this.loadMap();

  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = String(resp.coords.latitude);
      this.long = String(resp.coords.longitude);
      console.log(resp.coords.longitude + ' ' + resp.coords.latitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     this.origin = this.lat + ", " + this.long;
     console.log(this.origin);
  }

  deleteItem(item: any) {
    this.storage.remove(item);
    this.navCtrl.pop();
    this.navCtrl.push(ItineraryPage);
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(
      position => {
        let latLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  startNavigating(){

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: this.origin,
        destination: this.destination,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        // if(status == google.maps.DirectionsStatus.OK){
        //     directionsDisplay.setDirections(res);
        // } else {
        //     console.warn(status);
        // }
        directionsDisplay.setDirections(res);

    });

}

setNewDestination(input: string){
  this.getLocation();
  this.destination = input;
  this.startNavigating();
}

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
    });
  }
}
