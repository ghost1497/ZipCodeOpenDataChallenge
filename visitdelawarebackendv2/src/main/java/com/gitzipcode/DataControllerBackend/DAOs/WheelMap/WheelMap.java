package com.gitzipcode.DataControllerBackend.DAOs.WheelMap;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class WheelMap {
    private Conditions conditions;
    private Meta meta;
    private List<Node> nodes;

    @JsonProperty("conditions")
    public Conditions getConditions() {
        return this.conditions;
    }

    public void setConditions(Conditions conditions) {
        this.conditions = conditions;
    }

    @JsonProperty("meta")
    public Meta getMeta() {
        return this.meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    @JsonProperty("nodes")
    public List<Node> getNodes() {
        return this.nodes;
    }

    public void setNodes(List<Node> nodes) {
        this.nodes = nodes;
    }
}
