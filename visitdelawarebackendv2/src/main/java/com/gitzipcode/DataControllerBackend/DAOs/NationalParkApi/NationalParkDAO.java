package com.gitzipcode.DataControllerBackend.DAOs.NationalParkApi;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

@Entity
@Table(schema = "visitdelaware", name = "nationalparks")
@JsonPropertyOrder({"states", "latLong", "description", "designation", "parkCode", "id", "directionsInfo", "directionsUrl", "fullName", "url", "weatherInfo", "name"})
@JsonIgnoreProperties(ignoreUnknown = true)
public class NationalParkDAO {
    @Id
    @Column(name = "LOCAL_ID_KEY")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long local_id;
    @Column(name = "STATES")
    @JsonProperty
    private String states;
    @Column(name = "LATLONG")
    @JsonProperty
    private String latLong;
    @Column(name = "DESCRIPTION")
    @JsonProperty
    private String description;
    @Column(name = "DESIGNATION")
    @JsonProperty
    private String designation;
    @Column(name = "PARK_CODE")
    @JsonProperty
    private String parkCode;
    @Column(name = "API_PARK_ID")
    @JsonProperty
    private String id;
    @Column(name = "DIRECTIONS_INFO")
    @JsonProperty
    private String directionsInfo;
    @Column(name = "DIRECTIONS_URL")
    @JsonProperty
    private String directionsUrl;
    @Column(name = "FULL_NAME")
    @JsonProperty
    private String fullName;
    @Column(name = "URL")
    @JsonProperty
    private String url;
    @Column(name = "WEATHER_INFO")
    @JsonProperty
    private String weatherInfo;
    @Column(name = "NAME_OF_PARK")
    @JsonProperty
    private String name;

    public NationalParkDAO() { super(); }

    public NationalParkDAO(String states, String latLong, String description, String designation, String parkCode, String id, String directionsInfo, String directionsUrl, String fullName, String url, String weatherInfo, String name) {
        this.states = states;
        this.latLong = latLong;
        this.description = description;
        this.designation = designation;
        this.parkCode = parkCode;
        this.id = id;
        this.directionsInfo = directionsInfo;
        this.directionsUrl = directionsUrl;
        this.fullName = fullName;
        this.url = url;
        this.weatherInfo = weatherInfo;
        this.name = name;
    }

    public Long getLocal_id() {
        return local_id;
    }

    public void setLocal_id(Long local_id) {
        this.local_id = local_id;
    }

    @JsonGetter("states")
    public String getStates() {
        return states;
    }

    public void setStates(String states) {
        this.states = states;
    }

    @JsonGetter("latLong")
    public String getLatLong() {
        return latLong;
    }

    public void setLatLong(String latLong) {
        this.latLong = latLong;
    }

    @JsonGetter("description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JsonGetter("designation")
    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    @JsonGetter("parkCode")
    public String getParkCode() {
        return parkCode;
    }

    public void setParkCode(String parkCode) {
        this.parkCode = parkCode;
    }

    @JsonGetter("id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @JsonGetter("directionsInfo")
    public String getDirectionsInfo() {
        return directionsInfo;
    }

    public void setDirectionsInfo(String directionsInfo) {
        this.directionsInfo = directionsInfo;
    }

    @JsonGetter("directionsUrl")
    public String getDirectionsUrl() {
        return directionsUrl;
    }

    public void setDirectionsUrl(String directionsUrl) {
        this.directionsUrl = directionsUrl;
    }

    @JsonGetter("fullName")
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @JsonGetter("url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @JsonGetter("weatherInfo")
    public String getWeatherInfo() {
        return weatherInfo;
    }

    public void setWeatherInfo(String weatherInfo) {
        this.weatherInfo = weatherInfo;
    }

    @JsonGetter("name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
