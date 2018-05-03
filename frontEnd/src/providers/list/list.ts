import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {
//apiKey = "AIzaSyAv5Kq24hQJew5gTEGXgpV2x2uxsnm-HkA";
url;
 parks: any[];
  results = [
    {
        "geometry": {
            "location": {
                "lat": 39.7586846,
                "lng": -75.5524157
            },
            "viewport": {
                "northeast": {
                    "lat": 39.75974412989272,
                    "lng": -75.55139102010727
                },
                "southwest": {
                    "lat": 39.75704447010727,
                    "lng": -75.55409067989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
        "id": "5393b3b82927549f9a1c5c2aa631e08272c37f6b",
        "name": "Brandywine Park",
        "photos": [
            {
                "height": 2322,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102048502044324954155/photos\">Annette Matthews</a>"
                ],
                "photo_reference": "CmRaAAAAl7TgD1HhFGfYWoKLcik9Hp0zOp2I6H4osgVV47qMTkASyvErqIrTRy5YjEbgNf3-uIfBIjc9kMZ68wbsc5i5nkCkkrkpo-mFyyEeL6lcdyFwihT7E3F1-B7h4ZVa0stDEhAoWhCYxJ4F76JWcVOPIjEFGhQHYKw533n0h1vdz2i0713FNu3dRw",
                "width": 4128
            }
        ],
        "place_id": "ChIJK67RjRf9xokRpdz7-Et1hfw",
        "rating": 4.5,
        "reference": "CmRbAAAAePtTsjO1Aejd_kIVYA7kaCuDNv8LHgJZVnccSQpF46RNEZr_AkukSGRx_fGtbeckL-LCUsKtlEfn7voHmqMfU2DuWkrT5mO3R8CfTPdimqpD9CoTMNgnDDH6HdS9fefPEhBQL3_K_OXPqC6IgAkZKqheGhRSFKdDGDnFqyICUt--hSDyg9E_2w",
        "scope": "GOOGLE",
        "types": [
            "park",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "1080 N Park Dr, Wilmington"
    },
    {
        "geometry": {
            "location": {
                "lat": 39.7365242,
                "lng": -75.5525193
            },
            "viewport": {
                "northeast": {
                    "lat": 39.73787402989272,
                    "lng": -75.55116947010728
                },
                "southwest": {
                    "lat": 39.73517437010728,
                    "lng": -75.55386912989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
        "id": "b819df5ccaf3709870df20555da83e9de88c9134",
        "name": "Tubman Garrett Riverfront Park",
        "opening_hours": {
            "open_now": true,
          //  "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103813815463662874891/photos\">Mike Snyder</a>"
                ],
                "photo_reference": "CmRaAAAAohQ6s_bDwy66OiDt4WY1GM-OPP7KSed2WJblxPRM1vx0JCrDRiebgMNuJOvFJfx2sZzyFVRTG2TWnfqIXM6k0hE2A6Hn0Mo6l8CWe95HihMiw6PuJPPwOu-nweY89vBSEhBJg4zw0xGDe02yfXO2clmrGhTQOLpEGhJcmUH8sIhq46HJsN0O4Q",
                "width": 5312
            }
        ],
        "place_id": "ChIJXavrwmf9xokR6a5rurexPmM",
        "rating": 4.3,
        "reference": "CmRbAAAAfI7b3-jM17eU7g8Tr0MynGo39_HmDnz5WH9KRtq8Gb3gZXB5hM_EQYyg8tWw4A1SN8vNf4tACeELymZ67mI2nW1BIBHV66YvX36miLH6iH2aKATxMSQmlrNPOEfyfO6bEhAkVXlMcNmGKA73F8LjQQRcGhTH-Fo-luLKYUOH2i9crZAjH6qhdg",
        "scope": "GOOGLE",
        "types": [
            "park",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "815 Justison St, Wilmington"
    }
  ]

  constructor(public http: HttpClient) {
 this.url ="https://visitdelawarebackendv2.herokuapp.com/stateParkEvents";

    /*GooglePlace API Call*/
//     console.log('Hello ListProvider Provider');
//  this.url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
//  "39.7489094,-75.5653067&radius=1500&type=";
  }
    /*GooglePlace API Call*/
//   getItem(type, keyword){
    
//     let headers =  {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'Access-Control-Allow-Origin': '*'
//       })
//     };

//     trying to get back google place api data implement this when the api is ready.
//   return  new Promise (resolve => {this.http.get(this.url +type +"&keyword=" + keyword + "&key=" + this.apiKey, ).subscribe(data => {
//    console.log(data);
//     resolve(data);
//   }, err => {
//     console.log(err);
//   });
// });
// }

getItem(){
// Test data to play round with code
console.log(this.results);
return (this.results);

}
 /*GooglePlace API Call*/
//     console.log('Hello ListProvider Provider');
//  this.url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
//  "39.7489094,-75.5653067&radius=1500&type=";

/*Park Events in greater DE area*/
  getParkEvents(){

    let headers =  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

  return this.http.get(this.url, headers).subscribe(data => {
  
    console.log(data);
  }, err => {
    console.log(err);
  });
}
}

