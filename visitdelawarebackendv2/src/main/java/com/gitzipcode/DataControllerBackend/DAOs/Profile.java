package com.gitzipcode.DataControllerBackend.DAOs;

import javax.persistence.*;

@Entity
@Table(schema = "visitdelaware", name="profile")
public class Profile {
    @Id
    @Column(name = "PROFILE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "NAME_ON_PROFILE")
    private String name;
    @Column(name = "EMAIL_ON_PROFILE")
    private String emailAddress;
    @Column(name = "BIRTHDAY_ON_PROFILE")
    private String birthDate;
    @Column(name = "ZIPCODE")
    private Integer zipcode;
    @Column(name = "MOBILE_HANDICAP_FLAG")
    private boolean handicapFlag;

    public Profile() {
        super();
    }

    public Profile(Integer id, String name, String emailAddress, String birthDate, Integer zipcode, boolean handicapFlag) {
        this.id = id;
        this.name = name;
        this.emailAddress = emailAddress;
        this.birthDate = birthDate;
        this.zipcode = zipcode;
        this.handicapFlag = handicapFlag;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public Integer getZipcode() {
        return zipcode;
    }

    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    public boolean isHandicapFlag() {
        return handicapFlag;
    }

    public void setHandicapFlag(boolean handicapFlag) {
        this.handicapFlag = handicapFlag;
    }
}
