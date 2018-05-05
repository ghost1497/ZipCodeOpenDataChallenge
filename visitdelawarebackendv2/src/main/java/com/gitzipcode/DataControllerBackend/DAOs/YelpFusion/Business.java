package com.gitzipcode.DataControllerBackend.DAOs.YelpFusion;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.util.List;
@Entity
@Table(schema = "visitdelaware", name = "yelpbusinesses")
@JsonPropertyOrder({"id", "alias", "name", "image_url", "is_closed", "url", "review_count", "categories", "rating", "coordinates", "transactions",
"price", "location", "phone", "display_phone", "distance"})
@JsonIgnoreProperties(ignoreUnknown = true)
public class Business {
    @Id
    @Column(name = "LOCAL_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long localId;
    @Column(name = "API_ID")
    @JsonProperty
    private String id;
    @Column(name = "ALIAS")
    @JsonProperty
    private String alias;
    @Column(name = "NAME")
    @JsonProperty
    private String name;
    @Column(name = "IMAGE_URL")
    @JsonProperty
    private String image_url;
    @Column(name = "IS_CLOSED")
    @JsonProperty
    private boolean is_closed;
    @Column(name = "URL")
    @JsonProperty
    private String url;
    @Column(name = "REVIEW_COUNT")
    @JsonProperty
    private int review_count;
    @Column(name = "RATING")
    @JsonProperty
    private double rating;
    @Column(name = "COORDINATES")
    @JsonProperty
    @Embedded
    private Coordinates coordinates;
    @Column(name = "PRICE")
    @JsonProperty
    private String price;
    @Column(name = "LOCATION")
    @JsonProperty
    @Embedded
    private Location location;
    @Column(name = "PHONE")
    @JsonProperty
    private String phone;
    @Column(name = "DISPLAY_PHONE")
    @JsonProperty
    private String display_phone;
    @Column(name = "DISTANCE")
    @JsonProperty
    private double distance;

    public Business() {
        super();
    }

    public Business(String id, String alias, String name, String image_url, boolean is_closed, String url, int review_count, double rating, Coordinates coordinates, String price, Location location, String phone, String display_phone, double distance) {
        this.id = id;
        this.alias = alias;
        this.name = name;
        this.image_url = image_url;
        this.is_closed = is_closed;
        this.url = url;
        this.review_count = review_count;
        this.rating = rating;
        this.coordinates = coordinates;
        this.price = price;
        this.location = location;
        this.phone = phone;
        this.display_phone = display_phone;
        this.distance = distance;
    }

    @JsonGetter("id")
    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @JsonGetter("alias")
    public String getAlias() {
        return this.alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    @JsonGetter("name")
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonGetter("image_url")
    public String getImage_url() {
        return this.image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    @JsonGetter("is_closed")
    public boolean getIs_closed() {
        return this.is_closed;
    }

    public void setIs_closed(boolean is_closed) {
        this.is_closed = is_closed;
    }

    @JsonGetter("url")
    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @JsonGetter("review_count")
    public int getReview_count() {
        return this.review_count;
    }

    public void setReview_count(int review_count) {
        this.review_count = review_count;
    }

    @JsonGetter("rating")
    public double getRating() {
        return this.rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    @JsonGetter("coordinates")
    public Coordinates getCoordinates() {
        return this.coordinates;
    }

    public void setCoordinates(Coordinates coordinates) {
        this.coordinates = coordinates;
    }

    @JsonGetter("price")
    public String getPrice() {
        return this.price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @JsonGetter("location")
    public Location getLocation() {
        return this.location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    @JsonGetter("phone")
    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @JsonGetter("display_phone")
    public String getDisplay_phone() {
        return this.display_phone;
    }

    public void setDisplay_phone(String display_phone) {
        this.display_phone = display_phone;
    }

    @JsonGetter("distance")
    public double getDistance() {
        return this.distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }
}
