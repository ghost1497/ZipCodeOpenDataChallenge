package com.gitzipcode.DataControllerBackend.DAOs.WheelMap;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Node {
    private String name;
    private String wheelchair;
    private String wheelchair_description;
    private String wheelchair_toilet;
    private NodeType node_type;
    private double lat;
    private double lon;
    private Object id;
    private Category category;
    private String street;
    private String housenumber;
    private String city;
    private String postcode;
    private String website;
    private String phone;

    @JsonProperty("name")
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("wheelchair")
    public String getWheelchair() {
        return this.wheelchair;
    }

    public void setWheelchair(String wheelchair) {
        this.wheelchair = wheelchair;
    }

    @JsonProperty("wheelchair_description")
    public String getWheelchair_description() {
        return this.wheelchair_description;
    }

    public void setWheelchair_description(String wheelchair_description) {
        this.wheelchair_description = wheelchair_description;
    }

    @JsonProperty("wheelchair_toilet")
    public String getWheelchair_toilet() {
        return this.wheelchair_toilet;
    }

    public void setWheelchair_toilet(String wheelchair_toilet) {
        this.wheelchair_toilet = wheelchair_toilet;
    }

    @JsonProperty("node_type")
    public NodeType getNode_type() {
        return this.node_type;
    }

    public void setNode_type(NodeType node_type) {
        this.node_type = node_type;
    }

    @JsonProperty("lat")
    public double getLat() {
        return this.lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    @JsonProperty("lon")
    public double getLon() {
        return this.lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    @JsonProperty("id")
    public Object getId() {
        return this.id;
    }

    public void setId(Object id) {
        this.id = id;
    }

    @JsonProperty("category")
    public Category getCategory() {
        return this.category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @JsonProperty("street")
    public String getStreet() {
        return this.street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    @JsonProperty("housenumber")
    public String getHousenumber() {
        return this.housenumber;
    }

    public void setHousenumber(String housenumber) {
        this.housenumber = housenumber;
    }

    @JsonProperty("city")
    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @JsonProperty("postcode")
    public String getPostcode() {
        return this.postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    @JsonProperty("website")
    public String getWebsite() {
        return this.website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    @JsonProperty("phone")
    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
