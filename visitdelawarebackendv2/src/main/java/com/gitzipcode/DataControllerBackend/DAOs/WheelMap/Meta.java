package com.gitzipcode.DataControllerBackend.DAOs.WheelMap;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Meta {
    private int page;
    private int num_pages;
    private int item_count_total;
    private int item_count;

    @JsonProperty("page")
    public int getPage() {
        return this.page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    @JsonProperty("num_pages")
    public int getNum_pages() {
        return this.num_pages;
    }

    public void setNum_pages(int num_pages) {
        this.num_pages = num_pages;
    }

    @JsonProperty("item_count_total")
    public int getItem_count_total() {
        return this.item_count_total;
    }

    public void setItem_count_total(int item_count_total) {
        this.item_count_total = item_count_total;
    }

    @JsonProperty("item_count")
    public int getItem_count() {
        return this.item_count;
    }

    public void setItem_count(int item_count) {
        this.item_count = item_count;
    }
}
