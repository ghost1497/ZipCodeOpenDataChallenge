package com.gitzipcode.DataControllerBackend.DAOs;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "stateparks", schema = "visitdelaware")
@JsonIgnoreProperties(ignoreUnknown = true)
public class StateParkEvents {
    @Id
    @Column(name = "LOCAL_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long localId;
    @Column(name = "CATEGORY")
    @JsonProperty
    private String category;
    @Column(name = "COST")
    @JsonProperty
    private String cost;
    @Column(name = "DESCRIPTION")
    @JsonProperty
    private String description;
    @Column(name = "END_DATE")
    @JsonProperty
    private Date end_date;
    @Column(name = "PARK")
    @JsonProperty
    private String park;
    @Column(name = "PROGRAM_TITLE")
    @JsonProperty
    private String programtitle;
    @Column(name = "REGION")
    @JsonProperty
    private String region;
    @Column(name = "START_DATE")
    @JsonProperty
    private Date start_date;
    @Column(name = "START_TIME")
    @JsonProperty
    private String start_time;

    public StateParkEvents() {
        super();
    }

    public StateParkEvents(String category, String cost, String description, Date end_date, String park, String programtitle, String region, Date start_date, String start_time) {
        this.category = category;
        this.cost = cost;
        this.description = description;
        this.end_date = end_date;
        this.park = park;
        this.programtitle = programtitle;
        this.region = region;
        this.start_date = start_date;
        this.start_time = start_time;
    }

    public Long getLocalId() {
        return localId;
    }

    public void setLocalId(Long localId) {
        this.localId = localId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getPark() {
        return park;
    }

    public void setPark(String park) {
        this.park = park;
    }

    public String getProgramtitle() {
        return programtitle;
    }

    public void setProgramtitle(String programtitle) {
        this.programtitle = programtitle;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }
}
