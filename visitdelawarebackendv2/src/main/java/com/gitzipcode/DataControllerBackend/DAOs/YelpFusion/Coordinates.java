package com.gitzipcode.DataControllerBackend.DAOs.YelpFusion;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Embeddable
@JsonIgnoreProperties(ignoreUnknown = true)
public class Coordinates {
    @Column(name = "LAT")
    @JsonProperty
    private double latitude;
    @Column(name = "LONG")
    @JsonProperty
    private double longitude;

    @JsonGetter("latitude")
    public double getLatitude() {
        return this.latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    @JsonGetter("longitude")
    public double getLongitude() {
        return this.longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}

