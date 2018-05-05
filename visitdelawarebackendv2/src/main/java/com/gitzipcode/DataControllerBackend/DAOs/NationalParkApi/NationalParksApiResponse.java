package com.gitzipcode.DataControllerBackend.DAOs.NationalParkApi;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class NationalParksApiResponse {
    public int total;
    public List<NationalParkDAO> data;
    public int limit;
    public int start;

    public NationalParksApiResponse() {
        super();
    }

    public NationalParksApiResponse(int total, List<NationalParkDAO> data, int limit, int start) {
        this.total = total;
        this.data = data;
        this.limit = limit;
        this.start = start;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public List<NationalParkDAO> getData() {
        return data;
    }

    public void setData(List<NationalParkDAO> data) {
        this.data = data;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }
}
