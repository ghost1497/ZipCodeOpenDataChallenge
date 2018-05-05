package com.gitzipcode.DataControllerBackend.DAOs.YelpFusion;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.util.List;

@Embeddable
@JsonIgnoreProperties(ignoreUnknown = true)
public class Location {

    @Column(name = "ADDRESS_1")
    @JsonProperty
    private String address1;
    @Column(name = "ADDRESS_2")
    @JsonProperty
    private String address2;
    @Column(name = "ADDRESS_3")
    @JsonProperty
    private String address3;
    @Column(name = "CITY")
    @JsonProperty
    private String city;
    @Column(name = "STATE")
    @JsonProperty
    private String state;
    @Column(name = "ZIPCODE")
    @JsonProperty
    private String zip_code;
    @Column(name = "COUNTRY")
    @JsonProperty
    private String country;
    @Column(name = "CROSS_STREETS")
    @JsonProperty
    private String cross_streets;


    public Location() {
    }

    @JsonGetter("address1")
    public String getAddress1() {
        return this.address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    @JsonGetter("address2")
    public String getAddress2() {
        return this.address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    @JsonGetter("address3")
    public String getAddress3() {
        return this.address3;
    }

    public void setAddress3(String address3) {
        this.address3 = address3;
    }

    @JsonGetter("city")
    public String getCity() {
        return this.city;
    }

    public void
    setCity(String city) {
        this.city = city;
    }

    @JsonGetter("state")
    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @JsonGetter("zip_code")
    public String getZip_code() {
        return this.zip_code;
    }

    public void setZip_code(String zip_code) {
        this.zip_code = zip_code;
    }

    @JsonGetter("country")
    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }


    @JsonGetter("cross_streets")
    public String getCross_streets() {
        return this.cross_streets;
    }

    public void setCross_streets(String cross_streets) {
        this.cross_streets = cross_streets;
    }
}





