package com.gitzipcode.DataControllerBackend.DAOs.WheelMap;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Category {
    private int id;
    private String identifier;

    @JsonProperty("id")
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonProperty("identifier")
    public String getIdentifier() {
        return this.identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }
}
