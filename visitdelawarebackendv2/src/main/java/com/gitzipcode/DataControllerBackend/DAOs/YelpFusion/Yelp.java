package com.gitzipcode.DataControllerBackend.DAOs.YelpFusion;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.util.List;
@JsonIgnoreProperties(ignoreUnknown = true)
public class Yelp {
    @JsonProperty
    private List<Business> businesses;
    @JsonProperty
    private int total;

    @JsonGetter("businesses")
    public List<Business> getBusinesses() {
        return this.businesses;
    }

    public void setBusinesses(List<Business> businesses) {
        this.businesses = businesses;
    }

    @JsonGetter("total")
    public int getTotal() {
        return this.total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

}
