package com.gitzipcode.DataControllerBackend.DAOs.WheelMap;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Conditions {
    private int page;
    private int per_page;
    private String format;

    @JsonProperty("page")
    public int getPage() {
        return this.page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    @JsonProperty("per_page")
    public int getPer_page() {
        return this.per_page;
    }

    public void setPer_page(int per_page) {
        this.per_page = per_page;
    }

    @JsonProperty("format")
    public String getFormat() {
        return this.format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

}
