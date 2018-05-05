package com.gitzipcode.DataControllerBackend.DAOs.DelDotAdvisory;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
@Entity
@Table(schema = "visitdelaware", name = "deldotadvisories")
@JsonPropertyOrder({"timestamp", "timestampMS", "version", "uid", "status", "message", "count",
"advisoryHash", "advisories"})
@JsonIgnoreProperties(ignoreUnknown = true)
public class TravelAdvisory {
    @Id
    @Column(name = "TIMESTAMP")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Date timestamp;
    @Column(name = "TIMESTAMP_MS")
    @JsonProperty
    private String timestampMS;
    @Column(name = "VERSION")
    @JsonProperty
    private String version;
    @Column(name = "UID")
    @JsonProperty
    private String uid;
    @Column(name = "STATUS")
    @JsonProperty
    private String status;
    @Column(name = "MESSAGE")
    @JsonProperty
    private String message;
    @Column(name = "COUNT")
    @JsonProperty
    private int count;
    @Column(name = "ADVISORY_HASH")
    @JsonProperty
    private String advisoryHash;

    @JsonProperty("timestamp")
    public Date getTimestamp() {
        return this.timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    @JsonProperty("timestampMS")
    public String getTimestampMS() {
        return this.timestampMS;
    }

    public void setTimestampMS(String timestampMS) {
        this.timestampMS = timestampMS;
    }

    @JsonProperty("version")
    public String getVersion() {
        return this.version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    @JsonProperty("uid")
    public String getUid() {
        return this.uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    @JsonProperty("status")
    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @JsonProperty("message")
    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @JsonGetter("count")
    public int getCount() {
        return this.count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @JsonProperty("advisoryHash")
    public String getAdvisoryHash() {
        return this.advisoryHash;
    }

    public void setAdvisoryHash(String advisoryHash) {
        this.advisoryHash = advisoryHash;
    }


}
