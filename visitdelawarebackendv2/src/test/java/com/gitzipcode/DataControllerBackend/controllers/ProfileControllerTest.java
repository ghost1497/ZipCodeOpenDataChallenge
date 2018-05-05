package com.gitzipcode.DataControllerBackend.controllers;

/**
 * @Author:
 * Kieran Thomas
 */

import com.gitzipcode.DataControllerBackend.DAOs.Profile;
import com.gitzipcode.DataControllerBackend.services.OnboardProfileService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebAppConfiguration
@WebMvcTest
@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ProfileController.class)
public class ProfileControllerTest {

    @Autowired
    private ProfileController controller;

    @Autowired
    private OnboardProfileService profileService;

    @Mock
    private MockMvc mock;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mock = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void whenUserIdIsProvidedNameRetrievalSuccess() throws Exception {
        Mockito.when(profileService.getOneProfileByName("frankie"));
        ResponseEntity<?> testName = profileService.getOneProfileByName("poop");
        assertEquals("frankie", testName);
    }

    @Test
    public void getProfilesSuccess() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders
                .get("/profiles")
                .accept(MediaType.APPLICATION_JSON);

        MvcResult result = mock.perform(request)
                .andExpect(status().isOk()).andReturn();
        //        this.mock.perform(get("/profiles").accept((MediaType) status().isOk()));
    }

    @Test
    public void getProfilesFailure() {
        Profile profile = new Profile(1, "Kieran", "supergram@infinity.com", "05/06/1993", 19711, false);

    }

    @Test
    public void checkProfileNameEmptyFailure() throws Exception {
        MockHttpServletRequestBuilder createPerson = post("/profiles").param("name", " ");
        mock.perform(createPerson).andExpect(model().hasErrors());
    }

    @Test
    public void checkProfileRequestByIdSuccess() throws Exception {
        MockHttpServletRequestBuilder createPerson = post("/profiles/{id}").param("name", "Jess").param("id", "1");
        mock.perform(createPerson).andExpect(model().hasNoErrors());
    }

    @Test
    public void verifyDeleteProfile() throws Exception {
        mock.perform(MockMvcRequestBuilders.delete("/profiles/{id}").accept(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.status").value(200))
                .andExpect(jsonPath("$.message").value("Profile has been deleted"));
    }
}
